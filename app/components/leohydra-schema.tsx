"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import {
	ReactFlow,
	Background,
	Controls,
	MiniMap,
	Handle,
	Position,
	useNodesState,
	useEdgesState,
	type Node,
	type Edge,
	type ReactFlowInstance,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

// ============================================================================
// Schema definition: 12 tables + their columns + FK relationships.
// ============================================================================

type Column = {
	name: string;
	type: string;
	pk?: boolean;
	fk?: boolean;
};

type TableData = {
	name: string;
	columns: Column[];
};

// ----------------------------------------------------------------------------
// Layout strategy:
//
// Order subsystem (LEFT + CENTER): `orders` is the hub — 5 FKs converge into
// it. Tables that point into orders are arranged in radial bands around it
// so the FK edges fan visibly. Two-step dependencies (products via
// order_items, crypto_payments via payments) sit one tier further out.
//
// Standalone cluster (RIGHT, separated by visible gap): leads, newsletter,
// rate_limit_buckets, payment_micro_reserved — no FKs into the order graph.
// Visual separation makes "these are independent subsystems" readable at a
// glance.
// ----------------------------------------------------------------------------

const tables: Array<{ id: string; position: { x: number; y: number }; data: TableData }> = [
	// --- Order subsystem, organized around the orders hub ---
	// Positions chosen so the bounding box is ~2400 × 1000, aspect ratio ~2.4:1
	// to match the container's wide aspect on a desktop monitor (1920 × 800).
	{
		id: "products",
		position: { x: 0, y: 0 },
		data: {
			name: "products",
			columns: [
				{ name: "id", type: "uuid", pk: true },
				{ name: "slug", type: "text" },
				{ name: "title", type: "text" },
				{ name: "price_usd", type: "numeric" },
				{ name: "price_micro", type: "int8" },
				{ name: "active", type: "bool" },
				{ name: "created_at", type: "timestamptz" },
				{ name: "stock_quantity", type: "int4" },
				{ name: "edition_total", type: "int4" },
				{ name: "allow_preorder", type: "bool" },
			],
		},
	},
	{
		id: "order_items",
		position: { x: 580, y: 80 },
		data: {
			name: "order_items",
			columns: [
				{ name: "id", type: "uuid", pk: true },
				{ name: "order_id", type: "uuid", fk: true },
				{ name: "product_id", type: "uuid", fk: true },
				{ name: "quantity", type: "int4" },
				{ name: "unit_price_micro", type: "int8" },
				{ name: "line_total_micro", type: "int8" },
			],
		},
	},
	{
		id: "orders",
		position: { x: 1200, y: 0 },
		data: {
			name: "orders",
			columns: [
				{ name: "id", type: "uuid", pk: true },
				{ name: "email", type: "text" },
				{ name: "status", type: "order_status" },
				{ name: "total_micro", type: "int8" },
				{ name: "created_at", type: "timestamptz" },
				{ name: "expires_at", type: "timestamptz" },
				{ name: "paid_at", type: "timestamptz" },
				{ name: "payer_wallet", type: "text" },
				{ name: "shipping_address_line1", type: "text" },
				{ name: "shipping_address_line2", type: "text" },
				{ name: "shipping_city", type: "text" },
				{ name: "shipping_postal_code", type: "text" },
				{ name: "shipping_country", type: "text" },
				{ name: "shipping_state", type: "text" },
				{ name: "payment_method", type: "text" },
				{ name: "stock_reserved", type: "bool" },
				{ name: "first_name", type: "text" },
				{ name: "last_name", type: "text" },
				{ name: "phone", type: "text" },
			],
		},
	},
	{
		id: "crypto_payments",
		position: { x: 0, y: 480 },
		data: {
			name: "crypto_payments",
			columns: [
				{ name: "payment_id", type: "uuid", pk: true, fk: true },
				{ name: "tx_hash", type: "text" },
				{ name: "sender_address", type: "text" },
				{ name: "received_amount_micro", type: "int8" },
				{ name: "block_number", type: "int8" },
				{ name: "block_timestamp", type: "timestamptz" },
				{ name: "raw_event_json", type: "jsonb" },
				{ name: "created_at", type: "timestamptz" },
			],
		},
	},
	{
		id: "payments",
		position: { x: 580, y: 460 },
		data: {
			name: "payments",
			columns: [
				{ name: "id", type: "uuid", pk: true },
				{ name: "order_id", type: "uuid", fk: true },
				{ name: "provider", type: "text" },
				{ name: "expected_amount_micro", type: "int8" },
				{ name: "receiving_wallet", type: "text" },
				{ name: "status", type: "payment_status" },
				{ name: "created_at", type: "timestamptz" },
				{ name: "confirmed_at", type: "timestamptz" },
				{ name: "updated_at", type: "timestamptz" },
			],
		},
	},
	{
		id: "bank_transfer_payments",
		position: { x: 1200, y: 620 },
		data: {
			name: "bank_transfer_payments",
			columns: [
				{ name: "id", type: "uuid", pk: true },
				{ name: "order_id", type: "uuid", fk: true },
				{ name: "status", type: "text" },
				{ name: "unique_transaction_reference", type: "text" },
				{ name: "confirmed_at", type: "timestamptz" },
				{ name: "created_at", type: "timestamptz" },
			],
		},
	},
	{
		id: "order_email_events",
		position: { x: 0, y: 880 },
		data: {
			name: "order_email_events",
			columns: [
				{ name: "id", type: "uuid", pk: true },
				{ name: "order_id", type: "uuid", fk: true },
				{ name: "kind", type: "text" },
				{ name: "recipient", type: "text" },
				{ name: "status", type: "text" },
				{ name: "provider_message", type: "text" },
				{ name: "provider_id", type: "text" },
				{ name: "created_at", type: "timestamptz" },
			],
		},
	},
	{
		id: "order_scan_throttle",
		position: { x: 580, y: 900 },
		data: {
			name: "order_scan_throttle",
			columns: [
				{ name: "order_id", type: "uuid", pk: true, fk: true },
				{ name: "last_scanned_at", type: "timestamptz" },
			],
		},
	},

	// --- Standalone cluster (no FK into order graph) ---
	// Placed far right with a deliberate ~900px gap from the order subsystem
	// (orders ends near x=1420; leads starts at x=2200). The gap is the
	// strongest visual cue that these tables are independent.
	{
		id: "leads",
		position: { x: 2200, y: 0 },
		data: {
			name: "leads",
			columns: [
				{ name: "id", type: "uuid", pk: true },
				{ name: "created_at", type: "timestamptz" },
				{ name: "email", type: "text" },
				{ name: "country", type: "text" },
				{ name: "message", type: "text" },
				{ name: "intent", type: "text" },
				{ name: "artwork_title", type: "text" },
				{ name: "email_sent", type: "bool" },
				{ name: "first_name", type: "text" },
				{ name: "last_name", type: "text" },
				{ name: "phone", type: "text" },
			],
		},
	},
	{
		id: "newsletter_subscribers",
		position: { x: 2200, y: 500 },
		data: {
			name: "newsletter_subscribers",
			columns: [
				{ name: "id", type: "uuid", pk: true },
				{ name: "email", type: "text" },
				{ name: "created_at", type: "timestamptz" },
				{ name: "source", type: "text" },
			],
		},
	},
	{
		id: "rate_limit_buckets",
		position: { x: 2200, y: 720 },
		data: {
			name: "rate_limit_buckets",
			columns: [
				{ name: "key", type: "text", pk: true },
				{ name: "count", type: "int4" },
				{ name: "reset_at", type: "timestamptz" },
			],
		},
	},
	{
		id: "payment_micro_reserved",
		position: { x: 2200, y: 880 },
		data: {
			name: "payment_micro_reserved",
			columns: [
				{ name: "total_micro", type: "int8", pk: true },
				{ name: "micro", type: "int4" },
			],
		},
	},
];

const edges: Edge[] = [
	{ id: "e-order_items-orders", source: "order_items", target: "orders", animated: true, style: { stroke: "#71717a" } },
	{ id: "e-order_items-products", source: "order_items", target: "products", animated: true, style: { stroke: "#71717a" } },
	{ id: "e-payments-orders", source: "payments", target: "orders", animated: true, style: { stroke: "#71717a" } },
	{ id: "e-crypto-payments", source: "crypto_payments", target: "payments", animated: true, style: { stroke: "#71717a" } },
	{ id: "e-bank-orders", source: "bank_transfer_payments", target: "orders", animated: true, style: { stroke: "#71717a" } },
	{ id: "e-email-orders", source: "order_email_events", target: "orders", animated: true, style: { stroke: "#71717a" } },
	{ id: "e-scan-orders", source: "order_scan_throttle", target: "orders", animated: true, style: { stroke: "#71717a" } },
];

// ============================================================================
// Custom node: a table rendered like a Supabase schema viz row.
// ============================================================================

function TableNode({ data }: { data: TableData }) {
	return (
		<div className="bg-zinc-900 border border-zinc-700 rounded-md min-w-[220px] shadow-2xl shadow-black/40 overflow-hidden">
			<div className="px-3 py-2 border-b border-zinc-700 bg-zinc-800/60">
				<span className="font-display text-sm font-semibold text-zinc-100">{data.name}</span>
			</div>
			<ul className="divide-y divide-zinc-800/70">
				{data.columns.map((col) => (
					<li
						key={col.name}
						className="px-3 py-1 flex items-center justify-between gap-3 text-[11px]"
					>
						<span className="flex items-center gap-1.5 min-w-0">
							{col.pk && (
								<span title="primary key" className="text-amber-400 leading-none">◆</span>
							)}
							{col.fk && (
								<span title="foreign key" className="text-blue-400 leading-none">◇</span>
							)}
							<span
								className={
									col.pk
										? "text-zinc-100 font-medium truncate"
										: col.fk
											? "text-zinc-200 truncate"
											: "text-zinc-300 truncate"
								}
							>
								{col.name}
							</span>
						</span>
						<span className="text-zinc-500 font-mono text-[10px] tabular-nums whitespace-nowrap">
							{col.type}
						</span>
					</li>
				))}
			</ul>
			<Handle type="target" position={Position.Top} className="!opacity-0" />
			<Handle type="source" position={Position.Bottom} className="!opacity-0" />
			<Handle type="target" position={Position.Left} className="!opacity-0" id="left" />
			<Handle type="source" position={Position.Right} className="!opacity-0" id="right" />
		</div>
	);
}

const nodeTypes = { table: TableNode };

const initialNodes: Node[] = tables.map((t) => ({
	id: t.id,
	type: "table",
	position: t.position,
	data: t.data,
}));

// ============================================================================
// Schema diagram component.
// ============================================================================

export default function LeoHydraSchema() {
	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edgesState, setEdges, onEdgesChange] = useEdgesState(edges);
	const containerRef = useRef<HTMLDivElement>(null);
	const rfInstanceRef = useRef<ReactFlowInstance | null>(null);
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [justReset, setJustReset] = useState(false);

	const toggleFullscreen = useCallback(() => {
		if (!containerRef.current) return;
		if (!document.fullscreenElement) {
			containerRef.current.requestFullscreen?.().catch(() => {
				// Some browsers (e.g. iOS Safari) reject; ignore silently.
			});
		} else {
			document.exitFullscreen?.().catch(() => {});
		}
	}, []);

	const handleReset = useCallback(() => {
		// Clone so React detects a fresh array reference and re-renders nodes,
		// otherwise dragging the same node twice after reset can stale-cache.
		setNodes(initialNodes.map((n) => ({ ...n, position: { ...n.position } })));
		setEdges(edges.map((e) => ({ ...e })));
		// After nodes are in place, recenter the viewport.
		setTimeout(() => {
			rfInstanceRef.current?.fitView({ padding: 0.15, duration: 600 });
		}, 30);
		setJustReset(true);
		setTimeout(() => setJustReset(false), 1200);
	}, [setNodes, setEdges]);

	useEffect(() => {
		const handler = () => setIsFullscreen(!!document.fullscreenElement);
		document.addEventListener("fullscreenchange", handler);
		return () => document.removeEventListener("fullscreenchange", handler);
	}, []);

	return (
		<div
			ref={containerRef}
			className={
				"not-prose relative border border-zinc-800 rounded-md bg-zinc-950 overflow-hidden " +
				(isFullscreen
					? "fixed inset-0 z-50 w-screen h-screen rounded-none border-0 my-0"
					: "my-10 w-screen h-[800px]")
			}
			style={
				isFullscreen
					? undefined
					: {
							// Break out of the .prose container's max-w-prose constraint
							// to use the full viewport width on wide monitors.
							marginLeft: "calc(50% - 50vw)",
							marginRight: "calc(50% - 50vw)",
						}
			}
		>
			<div className="absolute top-4 right-4 z-20 flex items-center gap-2">
				<button
					type="button"
					onClick={handleReset}
					className={`backdrop-blur border rounded-md px-3 py-1.5 text-xs flex items-center gap-1.5 transition-colors shadow-lg ${
						justReset
							? "bg-emerald-900/80 border-emerald-700 text-emerald-200"
							: "bg-zinc-900/90 border-zinc-700 hover:bg-zinc-800 hover:border-zinc-500 text-zinc-300 hover:text-zinc-100"
					}`}
					aria-label="Reset table positions"
					title="Reset table positions and zoom"
				>
					<svg
						width="12"
						height="12"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						aria-hidden
						className={justReset ? "" : "transition-transform"}
						style={justReset ? { transform: "rotate(-360deg)", transition: "transform 0.6s ease-out" } : undefined}
					>
						<path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
						<path d="M3 3v5h5" />
					</svg>
					{justReset ? "Reset" : "Reset layout"}
				</button>
				<button
					type="button"
					onClick={toggleFullscreen}
					className="bg-zinc-900/90 backdrop-blur border border-zinc-700 hover:bg-zinc-800 hover:border-zinc-500 text-zinc-300 hover:text-zinc-100 rounded-md px-3 py-1.5 text-xs flex items-center gap-1.5 transition-colors shadow-lg"
					aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
				>
				{isFullscreen ? (
					<>
						<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
							<path d="M8 3v4a1 1 0 0 1-1 1H3" />
							<path d="M21 8h-4a1 1 0 0 1-1-1V3" />
							<path d="M3 16h4a1 1 0 0 1 1 1v4" />
							<path d="M16 21v-4a1 1 0 0 1 1-1h4" />
						</svg>
						Exit fullscreen
					</>
				) : (
					<>
						<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
							<path d="M3 7V3h4" />
							<path d="M21 7V3h-4" />
							<path d="M3 17v4h4" />
							<path d="M21 17v4h-4" />
						</svg>
						Fullscreen
					</>
				)}
				</button>
			</div>

			<ReactFlow
				nodes={nodes}
				edges={edgesState}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onInit={(instance) => {
					rfInstanceRef.current = instance;
				}}
				nodeTypes={nodeTypes}
				fitView
				fitViewOptions={{ padding: 0.15 }}
				minZoom={0.2}
				maxZoom={2}
				proOptions={{ hideAttribution: true }}
				defaultEdgeOptions={{
					type: "smoothstep",
				}}
			>
				<Background color="#27272a" gap={24} />
				<Controls className="!bg-zinc-900 !border-zinc-700 !shadow-lg [&>button]:!bg-zinc-900 [&>button]:!border-zinc-700 [&>button]:!text-zinc-300 hover:[&>button]:!bg-zinc-800" />
				<MiniMap
					className="!bg-zinc-900 !border !border-zinc-800"
					nodeColor="#3f3f46"
					nodeStrokeColor="#52525b"
					maskColor="rgba(0, 0, 0, 0.7)"
					style={{ width: 110, height: 70 }}
					pannable
					zoomable
				/>
			</ReactFlow>
		</div>
	);
}
