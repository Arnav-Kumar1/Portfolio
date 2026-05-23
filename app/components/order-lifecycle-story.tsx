"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Step = {
	num: string;
	title: string;
	caption: string;
	image: string;
};

const STEPS: Step[] = [
	{
		num: "01",
		title: "Product",
		caption:
			"Reader lands on the print page. $199, edition of 50, 29 remaining. Every state (preorder, available, fully collected) is its own variant of this same UI.",
		image: "/screenshots/leohydra-print-detail.webp",
	},
	{
		num: "02",
		title: "Cart",
		caption:
			"Single-item review. No upsells, no quantity-of-the-month banners. Trust badges live in the right column. The CTA leads into a real dual-rail checkout.",
		image: "/screenshots/leohydra-cart.webp",
	},
	{
		num: "03",
		title: "Checkout · rail",
		caption:
			"Two real rails: USDT-on-Polygon and international bank wire. Credit-card placeholder is intentionally inert. Shipping address captured first; rail picked second.",
		image: "/screenshots/leohydra-checkout-rail.webp",
	},
	{
		num: "04",
		title: "Pay · USDT",
		caption:
			"Send 199.000001 USDT. The trailing .000001 is the micro offset discriminator: a unique 1 to 999 µUSDT slot reserved at order creation, so two pending orders with identical totals can never collide on chain.",
		image: "/screenshots/leohydra-checkout-usdt.webp",
	},
	{
		num: "05",
		title: "Confirmed",
		caption:
			"Order confirmation. Transactional email is already on its way via Resend; the studio gets a parallel internal alert. Both writes hit the append-only order_email_events audit table.",
		image: "/screenshots/leohydra-order-confirmed.webp",
	},
	{
		num: "06",
		title: "Admin",
		caption:
			"My custom admin: hero amount, lifecycle stepper (Placed → Paid → Fulfilled), email-log audit table with provider IDs, resend buttons, and atomic confirm/cancel actions.",
		image: "/screenshots/leohydra-admin-order.webp",
	},
	{
		num: "07",
		title: "Meta CAPI",
		caption:
			"Every conversion event (PageView, AddToCart, InitiateCheckout, AddPaymentInfo, Purchase) fires twice. Browser pixel plus server Conversions API, with the same event_id. Meta deduplicates server side.",
		image: "/screenshots/leohydra-meta-dedup.webp",
	},
	{
		num: "08",
		title: "On-chain",
		caption:
			"Polygonscan confirms the exact 199.000001 USDT transfer to the studio wallet. Public, immutable, auditable. The discriminator amount is visible right in the trailing decimals.",
		image: "/screenshots/leohydra-polygonscan.webp",
	},
	{
		num: "09",
		title: "Scanner match",
		caption:
			"The Vercel-cron-driven scanner walks USDT Transfer events every ~2 minutes, matches the on-chain amount to a pending order by exact micro-amount, and triggers atomic confirmation plus email side-effects. End of lifecycle.",
		image: "/screenshots/leohydra-vercel-log.webp",
	},
];

const AUTO_MS = 5500;

export default function OrderLifecycleStory() {
	const [active, setActive] = useState(0);
	const [paused, setPaused] = useState(false);
	const [cycleKey, setCycleKey] = useState(0);
	const rootRef = useRef<HTMLDivElement>(null);
	const inView = useInView(rootRef);

	// Single source of truth: when the CSS progress animation ENDS, advance.
	// Pausing is done via animation-play-state, which preserves position.
	const handleProgressEnd = useCallback(() => {
		setActive((a) => (a + 1) % STEPS.length);
		setCycleKey((k) => k + 1);
	}, []);

	const jumpTo = useCallback((i: number) => {
		setActive(i);
		setCycleKey((k) => k + 1);
	}, []);

	const step = STEPS[active];
	// Only auto-play when in view AND not paused. Saves cycles when off-screen.
	const playing = !paused && inView;

	return (
		<div
			ref={rootRef}
			className="not-prose my-14 ml-[calc(50%-50vw)] w-screen"
		>
			<div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
				{/* header */}
				<div className="mb-6 flex items-baseline justify-between gap-4">
					<div className="flex items-baseline gap-3">
						<span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-zinc-500">
							Order lifecycle
						</span>
						<span className="text-[0.7rem] text-zinc-600">
							· {String(active + 1).padStart(2, "0")} of{" "}
							{String(STEPS.length).padStart(2, "0")}
						</span>
					</div>
					<button
						type="button"
						onClick={() => setPaused((p) => !p)}
						className={`flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-wider transition-colors ${
							playing ? "text-emerald-400/80" : "text-zinc-400 hover:text-zinc-200"
						}`}
						aria-label={playing ? "Pause auto-play" : "Resume auto-play"}
					>
						<span
							className={`h-1.5 w-1.5 rounded-full ${
								playing ? "bg-emerald-400 animate-pulse" : "bg-zinc-500"
							}`}
						/>
						{playing ? "Auto-playing" : "Paused"}
					</button>
				</div>

				{/* interactive area, pause boundary lives here */}
				<div
					onPointerEnter={() => setPaused(true)}
					onPointerLeave={() => setPaused(false)}
					className="grid grid-cols-1 gap-6 md:grid-cols-[220px_1fr] md:gap-10"
				>
					{/* LEFT: stepper */}
					<nav className="flex shrink-0 gap-1 overflow-x-auto pb-2 md:flex-col md:gap-0.5 md:overflow-visible md:pb-0">
						{STEPS.map((s, i) => {
							const isActive = active === i;
							const isDone = i < active;
							return (
								<button
									key={s.num}
									type="button"
									onClick={() => jumpTo(i)}
									className="group relative flex shrink-0 items-center gap-3 whitespace-nowrap px-1 py-2 text-left md:py-2.5"
								>
									<span className="relative flex h-1.5 w-1.5 shrink-0 items-center justify-center">
										<span
											className={`absolute inset-0 rounded-full transition-colors ${
												isActive
													? "bg-zinc-100"
													: isDone
													? "bg-zinc-500"
													: "bg-zinc-700 group-hover:bg-zinc-600"
											}`}
										/>
										{isActive && (
											<span className="absolute -inset-1.5 rounded-full bg-zinc-100/20 blur-[2px]" />
										)}
									</span>
									<span
										className={`font-mono text-[0.7rem] transition-colors ${
											isActive
												? "text-zinc-500"
												: "text-zinc-600 group-hover:text-zinc-500"
										}`}
									>
										{s.num}
									</span>
									<span
										className={`text-[0.875rem] font-medium tracking-tight transition-colors ${
											isActive
												? "text-zinc-50"
												: isDone
												? "text-zinc-400"
												: "text-zinc-500 group-hover:text-zinc-300"
										}`}
									>
										{s.title}
									</span>
								</button>
							);
						})}
					</nav>

					{/* RIGHT: image + caption */}
					<div className="min-w-0">
						<div className="relative overflow-hidden rounded-xl border border-zinc-800/70 bg-zinc-100 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]">
							{/* progress bar, pure CSS, the only timer */}
							<div
								key={cycleKey}
								onAnimationEnd={handleProgressEnd}
								className="lh-progress"
								data-paused={!playing}
								style={{ animationDuration: `${AUTO_MS}ms` }}
							/>
							<motion.div
								className="relative aspect-[16/9] w-full touch-pan-y bg-zinc-100 select-none"
								drag="x"
								dragConstraints={{ left: 0, right: 0 }}
								dragElastic={0.18}
								dragMomentum={false}
								onDragEnd={(_, info) => {
									const swipeThreshold = 50;
									const velocityThreshold = 350;
									const distance = info.offset.x;
									const velocity = info.velocity.x;
									const isSwipe =
										Math.abs(distance) > swipeThreshold ||
										Math.abs(velocity) > velocityThreshold;
									if (!isSwipe) return;
									if (distance < 0) {
										// swipe left, next step
										jumpTo((active + 1) % STEPS.length);
									} else {
										// swipe right, previous step
										jumpTo((active - 1 + STEPS.length) % STEPS.length);
									}
								}}
							>
								<AnimatePresence mode="wait">
									<motion.div
										key={step.image}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										transition={{
											duration: 0.4,
											ease: [0.22, 1, 0.36, 1],
										}}
										className="absolute inset-0 pointer-events-none"
									>
										<Image
											src={step.image}
											alt={step.title}
											fill
											unoptimized
											sizes="(min-width: 1280px) 1040px, (min-width: 768px) 80vw, 100vw"
											className="object-contain"
											priority={active === 0}
										/>
									</motion.div>
								</AnimatePresence>
							</motion.div>
						</div>

						{/* caption, separate block */}
						<div className="mt-5 min-h-[80px]">
							<AnimatePresence mode="wait">
								<motion.div
									key={step.num}
									initial={{ opacity: 0, y: 6 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -3 }}
									transition={{ duration: 0.3, ease: "easeOut" }}
								>
									<div className="mb-2 flex items-baseline gap-3">
										<span className="font-mono text-[0.7rem] text-zinc-500">
											{step.num}
										</span>
										<span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-zinc-300">
											{step.title}
										</span>
									</div>
									<p className="max-w-[68ch] text-[0.9375rem] leading-relaxed text-zinc-400">
										{step.caption}
									</p>
								</motion.div>
							</AnimatePresence>
						</div>

						{/* mobile hint + dots */}
						<div className="mt-4 flex flex-col items-center gap-3 md:hidden">
							<p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-zinc-500">
								Swipe to navigate
							</p>
							<div className="flex justify-center gap-1.5">
								{STEPS.map((s, i) => (
									<button
										key={s.num}
										type="button"
										aria-label={`Jump to step ${s.num}`}
										onClick={() => jumpTo(i)}
										className={`h-1.5 rounded-full transition-all ${
											active === i
												? "w-7 bg-zinc-100"
												: "w-1.5 bg-zinc-700 hover:bg-zinc-600"
										}`}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			<style jsx>{`
				.lh-progress {
					position: absolute;
					top: 0;
					left: 0;
					height: 2px;
					width: 0;
					background: rgba(24, 24, 27, 0.7);
					z-index: 10;
					animation-name: lh-progress-fill;
					animation-timing-function: linear;
					animation-fill-mode: forwards;
					animation-iteration-count: 1;
				}
				.lh-progress[data-paused="true"] {
					animation-play-state: paused;
				}
				@keyframes lh-progress-fill {
					from {
						width: 0;
					}
					to {
						width: 100%;
					}
				}
			`}</style>
		</div>
	);
}

// Cheap in-view hook: pause autoplay when component is off-screen.
function useInView(ref: React.RefObject<HTMLElement>) {
	const [inView, setInView] = useState(true);
	useEffect(() => {
		if (!ref.current) return;
		const obs = new IntersectionObserver(
			([entry]) => setInView(entry.isIntersecting),
			{ rootMargin: "0px", threshold: 0.15 },
		);
		obs.observe(ref.current);
		return () => obs.disconnect();
	}, [ref]);
	return inView;
}
