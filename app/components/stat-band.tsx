"use client";

import { motion } from "framer-motion";

type Stat = {
	value: string;
	label: string;
	hint?: string;
};

const variants = {
	hidden: { opacity: 0, y: 14 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
	}),
};

export default function StatBand({ stats }: { stats: Stat[] }) {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.3 }}
			className="not-prose my-14 ml-[calc(50%-50vw)] w-screen border-y border-zinc-800/70 bg-zinc-950/40 py-12 backdrop-blur"
		>
			<div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-2 gap-y-10 sm:grid-cols-4 sm:gap-x-8">
					{stats.map((s, i) => (
						<motion.div
							key={s.label}
							custom={i}
							variants={variants}
							className="relative"
						>
							<div className="absolute left-0 top-0 h-8 w-px bg-gradient-to-b from-indigo-400/60 to-transparent" />
							<div className="pl-4">
								<div className="font-display text-5xl leading-none tracking-tight text-zinc-100 sm:text-6xl">
									{s.value}
								</div>
								<div className="mt-3 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-zinc-500">
									{s.label}
								</div>
								{s.hint && (
									<div className="mt-1.5 text-xs text-zinc-600">{s.hint}</div>
								)}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</motion.div>
	);
}
