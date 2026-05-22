"use client";
import { ArrowLeft, ArrowUpRight, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type Props = {
	project: {
		url?: string;
		title: string;
		description: string;
		repository?: string;
		date?: string;
	};
	eyebrow?: string[];
	tags?: string[];
};

const DEFAULT_TAGS = [
	"Next.js 14",
	"TypeScript",
	"Postgres",
	"Supabase",
	"Resend",
	"Vercel Cron",
	"ethers.js",
	"Meta CAPI",
	"React Flow",
	"Framer Motion",
	"Tailwind CSS",
];

export const Header: React.FC<Props> = ({
	project,
	eyebrow,
	tags = DEFAULT_TAGS,
}) => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);
		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	const year = project.date ? new Date(project.date).getFullYear() : null;
	const computedEyebrow =
		eyebrow ??
		[
			year ? String(year) : null,
			"Commerce platform",
			project.url ? "Live" : null,
		].filter((x): x is string => Boolean(x));

	return (
		<header
			ref={ref}
			className="relative isolate overflow-hidden bg-zinc-950 text-zinc-100"
		>
			{/* ambient gradient + grid */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-10"
				style={{
					backgroundImage:
						"radial-gradient(900px 500px at 10% -10%, rgba(99,102,241,0.18) 0%, transparent 55%), radial-gradient(700px 500px at 95% 110%, rgba(45,212,191,0.10) 0%, transparent 55%), linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
					backgroundSize: "100% 100%, 100% 100%, 56px 56px, 56px 56px",
				}}
			/>

			{/* sticky nav strip */}
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
					isIntersecting
						? "bg-zinc-950/0 border-transparent"
						: "bg-zinc-950/80 border-white/5"
				}`}
			>
				<div className="container mx-auto flex items-center justify-between px-6 py-4">
					<Link
						href="/projects"
						aria-label="Back to projects"
						className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition-colors hover:text-white"
					>
						<ArrowLeft className="h-4 w-4" />
						<span className="hidden sm:inline">Projects</span>
					</Link>
					<div className="flex items-center gap-5">
						<Link
							target="_blank"
							href="https://www.linkedin.com/in/arnav-kumar1/"
							aria-label="LinkedIn"
							className="text-zinc-400 hover:text-white"
						>
							<Linkedin className="h-5 w-5" />
						</Link>
						<Link
							target="_blank"
							href="https://github.com/Arnav-Kumar1"
							aria-label="GitHub"
							className="text-zinc-400 hover:text-white"
						>
							<Github className="h-5 w-5" />
						</Link>
					</div>
				</div>
			</div>

			{/* hero */}
			<div className="container relative mx-auto px-6 pb-20 pt-32 sm:pt-40 lg:px-8 lg:pb-28 lg:pt-44">
				<div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-10">
					{/* LEFT: title + description + CTA */}
					<div className="lg:col-span-9">
						<p
							className="animate-fade-up font-mono text-[0.7rem] uppercase tracking-[0.22em] text-indigo-300/80"
							style={{ animationDelay: "0.05s" }}
						>
							{computedEyebrow.map((piece, i) => (
								<span key={piece}>
									{i > 0 && (
										<span className="mx-2 text-zinc-700">·</span>
									)}
									{piece}
								</span>
							))}
						</p>

						<h1
							className="mt-6 animate-fade-up font-display text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-[7.5rem] xl:text-[8.5rem]"
							style={{ animationDelay: "0.1s" }}
						>
							{project.title}
						</h1>

						<p
							className="mt-8 max-w-3xl animate-fade-up text-base leading-relaxed text-zinc-300 sm:text-lg"
							style={{ animationDelay: "0.2s" }}
						>
							{project.description}
						</p>

						<div
							className="mt-10 flex animate-fade-up flex-wrap items-center gap-4"
							style={{ animationDelay: "0.3s" }}
						>
							{project.url && (
								<Link
									target="_blank"
									href={project.url}
									className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition-all hover:border-white/40 hover:bg-white/[0.1]"
								>
									Visit live site
									<ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
								</Link>
							)}
							{project.repository && (
								<Link
									target="_blank"
									href={`https://github.com/${project.repository}`}
									className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
								>
									<Github className="h-4 w-4" />
									View repository
									<ArrowUpRight className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
								</Link>
							)}
						</div>
					</div>

					{/* RIGHT: facts grid (desktop only) */}
					<div className="hidden lg:col-span-3 lg:block">
						<dl
							className="animate-fade-up grid gap-y-7 border-l border-white/10 pl-6"
							style={{ animationDelay: "0.35s" }}
						>
							<div>
								<dt className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-zinc-500">
									Role
								</dt>
								<dd className="mt-1.5 text-sm text-zinc-200">
									Founder · Engineer · Operator
								</dd>
							</div>
							<div>
								<dt className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-zinc-500">
									Type
								</dt>
								<dd className="mt-1.5 text-sm text-zinc-200">
									E-commerce platform
								</dd>
							</div>
							<div>
								<dt className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-zinc-500">
									Built from
								</dt>
								<dd className="mt-1.5 text-sm text-zinc-200">
									Zero · solo
								</dd>
							</div>
							<div>
								<dt className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-zinc-500">
									Status
								</dt>
								<dd className="mt-1.5 inline-flex items-center gap-2 text-sm text-zinc-200">
									<span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
									Live in production
								</dd>
							</div>
						</dl>
					</div>
				</div>
			</div>

			{/* marquee tag strip */}
			<div
				className="relative animate-fade-up border-y border-white/5 bg-black/30 py-4 backdrop-blur"
				style={{ animationDelay: "0.45s" }}
			>
				<div className="marquee">
					<div className="marquee-track flex items-center gap-10 pr-10">
						{[...tags, ...tags].map((tag, i) => (
							<span
								key={`${tag}-${i}`}
								className="flex shrink-0 items-center gap-10 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-zinc-400"
							>
								{tag}
								<span className="text-zinc-700">·</span>
							</span>
						))}
					</div>
				</div>
			</div>

			<style jsx>{`
				.marquee {
					overflow: hidden;
					mask-image: linear-gradient(
						90deg,
						transparent,
						black 8%,
						black 92%,
						transparent
					);
				}
				.marquee-track {
					width: max-content;
					animation: marquee 38s linear infinite;
				}
				.marquee:hover .marquee-track {
					animation-play-state: paused;
				}
				@keyframes marquee {
					from {
						transform: translateX(0);
					}
					to {
						transform: translateX(-50%);
					}
				}
			`}</style>
		</header>
	);
};
