"use client";

import React from "react";
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

const tables: Array<{ id: string; position: { x: number; y: number }; data: TableData }> = [
	{
		id: "orders",
		position: { x: 1000, y: 200 },
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
		id: "order_items",
		position: { x: 500, y: 0 },
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
		id: "products",
		position: { x: 850, y: -40 },
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
		id: "payments",
		position: { x: 530, y: 360 },
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
		id: "crypto_payments",
		position: { x: 250, y: 540 },
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
		id: "bank_transfer_payments",
		position: { x: 700, y: 720 },
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
		position: { x: 170, y: 760 },
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
		position: { x: 1000, y: 720 },
		data: {
			name: "order_scan_throttle",
			columns: [
				{ name: "order_id", type: "uuid", pk: true, fk: true },
				{ name: "last_scanned_at", type: "timestamptz" },
			],
		},
	},
	{
		id: "leads",
		position: { x: 200, y: 200 },
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
		position: { x: -100, y: 280 },
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
		position: { x: -100, y: -20 },
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
		position: { x: -100, y: 480 },
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

// ============================================================================
// Schema diagram component.
// ============================================================================

const initialNodes: Node[] = tables.map((t) => ({
	id: t.id,
	type: "table",
	position: t.position,
	data: t.data,
}));

export default function LeoHydraSchema() {
	const [nodes, , onNodesChange] = useNodesState(initialNodes);
	const [edgesState, , onEdgesChange] = useEdgesState(edges);

	return (
		<div className="my-10 w-full h-[600px] border border-zinc-800 rounded-md bg-zinc-950 overflow-hidden not-prose">
			<ReactFlow
				nodes={nodes}
				edges={edgesState}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
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
					pannable
					zoomable
				/>
			</ReactFlow>
			<p className="px-4 py-2 text-xs text-zinc-500 bg-zinc-900 border-t border-zinc-800">
				Interactive: drag tables to rearrange · scroll or pinch to zoom · drag canvas to pan · ◆ primary key · ◇ foreign key
			</p>
		</div>
	);
}
