"use client";

import { motion } from "framer-motion";

type Props = {
	quote: string;
	author: string;
	role?: string;
	location?: string;
	link?: string;
	linkLabel?: string;
};

export default function Testimonial({
	quote,
	author,
	role,
	location,
	link,
	linkLabel,
}: Props) {
	return (
		<motion.figure
			initial={{ opacity: 0, y: 18 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
			className="not-prose my-14 ml-[calc(50%-50vw)] w-screen"
		>
			<div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
				<div className="relative rounded-2xl border border-zinc-800/70 bg-zinc-950/50 px-6 py-10 backdrop-blur sm:px-12 sm:py-14">
					<svg
						aria-hidden
						className="absolute left-6 top-6 h-10 w-10 text-indigo-400/30 sm:left-10 sm:top-8 sm:h-14 sm:w-14"
						viewBox="0 0 24 24"
						fill="currentColor"
					>
						<path d="M9.6 7.2c-3.2 1.6-4.8 4.16-4.8 7.68v2.88h4.8v-4.32H7.68c0.32-2.4 1.92-3.84 4.8-4.32V7.2H9.6zm9.6 0c-3.2 1.6-4.8 4.16-4.8 7.68v2.88h4.8v-4.32h-1.92c0.32-2.4 1.92-3.84 4.8-4.32V7.2H19.2z" />
					</svg>
					<blockquote className="relative">
						<p className="font-display text-2xl leading-snug tracking-tight text-zinc-100 sm:text-3xl">
							&ldquo;{quote}&rdquo;
						</p>
					</blockquote>
					<figcaption className="mt-8 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm">
						<span className="font-semibold text-zinc-100">{author}</span>
						{role && <span className="text-zinc-500">·</span>}
						{role && <span className="text-zinc-400">{role}</span>}
						{location && <span className="text-zinc-500">·</span>}
						{location && (
							<span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-zinc-500">
								{location}
							</span>
						)}
						{link && (
							<>
								<span className="text-zinc-500">·</span>
								<a
									href={link}
									target="_blank"
									rel="noopener noreferrer"
									className="text-indigo-300 underline-offset-4 hover:underline"
								>
									{linkLabel || "verify"}
								</a>
							</>
						)}
					</figcaption>
				</div>
			</div>
		</motion.figure>
	);
}
