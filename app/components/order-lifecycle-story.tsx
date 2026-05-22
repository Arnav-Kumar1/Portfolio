"use client";

import { useEffect, useRef, useState } from "react";
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
      "Reader lands on the print page. $199, edition of 50, 29 remaining. Every state (preorder / available / fully collected) is its own variant of this same UI.",
    image: "/screenshots/leohydra-print-detail.png",
  },
  {
    num: "02",
    title: "Cart",
    caption:
      "Single-item review. No upsells, no quantity-of-the-month banners. Trust badges live in the right column. The CTA below leads into a real dual-rail checkout.",
    image: "/screenshots/leohydra-cart.png",
  },
  {
    num: "03",
    title: "Checkout · rail",
    caption:
      "Two real rails: USDT-on-Polygon and international bank wire. Credit-card placeholder is intentionally inert. Shipping address captured first; rail picked second.",
    image: "/screenshots/leohydra-checkout-rail.png",
  },
  {
    num: "04",
    title: "Pay · USDT",
    caption:
      "Send 199.000001 USDT. The trailing .000001 is the micro-offset discriminator — a unique 1–999 µUSDT slot reserved at order creation so two pending orders with identical totals can never collide on-chain.",
    image: "/screenshots/leohydra-checkout-usdt.png",
  },
  {
    num: "05",
    title: "Confirmed",
    caption:
      "Order confirmation. Transactional email is already on its way via Resend; the studio gets a parallel internal alert. Both writes hit the append-only order_email_events audit table.",
    image: "/screenshots/leohydra-order-confirmed.png",
  },
  {
    num: "06",
    title: "Admin",
    caption:
      "My custom admin: hero amount, lifecycle stepper (Placed → Paid → Fulfilled), email-log audit table with provider IDs, resend buttons, and the order’s atomic confirm/cancel actions.",
    image: "/screenshots/leohydra-admin-order.png",
  },
  {
    num: "07",
    title: "Meta CAPI",
    caption:
      "Every conversion event (PageView, AddToCart, InitiateCheckout, AddPaymentInfo, Purchase) fires twice — browser pixel + server Conversions API — with the same event_id. Meta deduplicates server-side.",
    image: "/screenshots/leohydra-meta-dedup.png",
  },
  {
    num: "08",
    title: "On-chain",
    caption:
      "Polygonscan confirms the exact 199.000001 USDT transfer to the studio wallet. Public, immutable, auditable — the discriminator amount is visible in the trailing decimals.",
    image: "/screenshots/leohydra-polygonscan.png",
  },
  {
    num: "09",
    title: "Scanner match",
    caption:
      "The Vercel-cron-driven scanner walks USDT Transfer events every ~2 minutes, matches the on-chain amount to a pending order by exact micro-amount, and triggers atomic confirmation + email side-effects. End of lifecycle.",
    image: "/screenshots/leohydra-vercel-log.png",
  },
];

const AUTO_MS = 5000;

export default function OrderLifecycleStory() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [interacted, setInteracted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-advance while not paused. Stops auto-advance after manual click.
  useEffect(() => {
    if (paused || interacted) return;
    const t = setTimeout(
      () => setActive((a) => (a + 1) % STEPS.length),
      AUTO_MS,
    );
    return () => clearTimeout(t);
  }, [active, paused, interacted]);

  const step = STEPS[active];

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="not-prose my-12 ml-[calc(50%-50vw)] w-screen"
    >
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6">
        <div className="mb-5 flex items-baseline justify-between">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-indigo-300/80">
            One order · end to end
          </p>
          <p className="font-mono text-[0.65rem] tracking-wider text-zinc-500">
            {paused || interacted ? "paused" : "auto · hover to pause"}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-[260px_1fr] md:gap-6">
          {/* LEFT: stepper */}
          <div className="flex shrink-0 gap-2 overflow-x-auto pb-2 md:flex-col md:overflow-visible md:pb-0">
            {STEPS.map((s, i) => {
              const isActive = active === i;
              const isDone = i < active;
              return (
                <button
                  key={s.num}
                  type="button"
                  onClick={() => {
                    setActive(i);
                    setInteracted(true);
                  }}
                  className={`group relative shrink-0 overflow-hidden rounded-lg border px-3.5 py-2.5 text-left transition-colors ${
                    isActive
                      ? "border-indigo-400/30 bg-indigo-400/[0.06]"
                      : "border-zinc-800/80 bg-zinc-950/40 hover:border-zinc-700/80"
                  }`}
                >
                  <div className="flex items-baseline gap-3 whitespace-nowrap">
                    <span
                      className={`font-mono text-[0.7rem] ${
                        isActive
                          ? "text-indigo-300"
                          : isDone
                          ? "text-zinc-500"
                          : "text-zinc-600"
                      }`}
                    >
                      {s.num}
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        isActive
                          ? "text-zinc-100"
                          : isDone
                          ? "text-zinc-400"
                          : "text-zinc-500"
                      }`}
                    >
                      {s.title}
                    </span>
                  </div>
                  {isActive && !paused && !interacted && (
                    <motion.div
                      key={`bar-${active}`}
                      className="absolute bottom-0 left-0 h-[1.5px] bg-gradient-to-r from-indigo-400 to-indigo-300/30"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: AUTO_MS / 1000, ease: "linear" }}
                    />
                  )}
                  {isActive && (paused || interacted) && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-indigo-400/40" />
                  )}
                </button>
              );
            })}
          </div>

          {/* RIGHT: image viewport */}
          <div className="relative">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-950 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step.image}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.985 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(min-width: 1024px) 1040px, 100vw"
                    className="object-contain"
                    priority={active === 0}
                  />
                </motion.div>
              </AnimatePresence>

              {/* caption overlay */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950 via-zinc-950/85 to-transparent px-5 pb-5 pt-12 sm:px-7 sm:pb-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-[0.7rem] text-indigo-300/80">
                        {step.num} / {String(STEPS.length).padStart(2, "0")}
                      </span>
                      <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-zinc-400">
                        {step.title}
                      </span>
                    </div>
                    <p className="mt-2 max-w-[68ch] text-[0.875rem] leading-relaxed text-zinc-200 sm:text-[0.9375rem]">
                      {step.caption}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* progress dots (mobile-only convenience) */}
            <div className="mt-3 flex justify-center gap-1.5 md:hidden">
              {STEPS.map((s, i) => (
                <button
                  key={s.num}
                  type="button"
                  aria-label={`Jump to step ${s.num}`}
                  onClick={() => {
                    setActive(i);
                    setInteracted(true);
                  }}
                  className={`h-1 rounded-full transition-all ${
                    active === i
                      ? "w-6 bg-indigo-400"
                      : "w-1.5 bg-zinc-700 hover:bg-zinc-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
