// Content for Arnav Kumar's Portfolio
// Positioning: Generalist Founding Operator
// Last revised: 2026-05-21

export const personalInfo = {
  name: "Arnav Kumar",
  title: "Generalist Founding Operator",
  location: "Mumbai, India",
  email: "arnav9637@gmail.com",
  phone: "+91 7038606744",
  github: "https://github.com/Arnav-Kumar1",
  linkedin: "https://www.linkedin.com/in/arnav-kumar1/",
  bio: "I run the operating layer of a one-principal art business based in Dubai from Mumbai — code the site, run the ads, manage vendors, move inventory, ship the right thing on the right day. Comfortable wearing every hat a seed-to-Series-A startup needs from its first or second non-founder hire.",
  tagline: "Engineer + growth + ops, all routed through one person.",
  availability: "Open to founding engineer / first-non-founder operator roles at Series A–B startups. Mumbai-based, open to remote and relocation."
};

export const experiences = [
  {
    id: 1,
    company: "Leo Hydra Studio",
    role: "Freelance Engineer + Operator",
    location: "Remote (Mumbai ↔ Dubai)",
    type: "Freelance",
    duration: "Oct 2025 – Present",
    logo: "LH",
    achievements: [
      "Solo operating team for a one-principal art business based in Dubai — artist makes the work; I do everything else from Mumbai.",
      "Built the production e-commerce site (Next.js 14 · Supabase · USDT-on-Polygon checkout · bank-transfer flow · admin panel · chatbot).",
      "Drove three security audit rounds and five new migrations (027–031): DB-backed rate limiter, admin brute-force lockout, atomic payment confirmation with row-lock race fix, CSP + security headers, CSRF Origin checks.",
      "Server-side Meta Conversions API with browser-pixel deduplication via shared eventID (Purchase, Lead, Subscribe, AddPaymentInfo, InitiateCheckout, ViewContent, AddToCart, PageView). PII hashed per Meta spec.",
      "Run Meta ad campaigns, manage limited-edition print production with printing houses, coordinate fulfillment to the Dubai warehouse, hire and direct video editors for Reels, sound design, and multi-platform posting (Behance / Tumblr / Instagram).",
      "Use Claude Code as a creative production tool to scale Reels generation."
    ]
  },
  {
    id: 2,
    company: "Recro",
    role: "Data Operations Analyst",
    location: "Bengaluru, India",
    type: "Contract Role",
    duration: "Nov 2024 – Jan 2025",
    logo: "R",
    achievements: [
      "Built automated SQL + Python pipelines for ~3,000 daily / monthly financial transactions for a SaaS portfolio system, ensuring 100% reconciliation.",
      "Automated data validation and error-fixing using Python, improving report accuracy by ~15%.",
      "Resolved portfolio discrepancies during corporate-action events with 100% accuracy.",
      "Partnered with business teams to track transactions per user, retention anomalies, and portfolio-performance KPIs.",
      "Role concluded due to contract ramp-down."
    ]
  },
  {
    id: 3,
    company: "Cointab",
    role: "Data Analyst",
    location: "Mumbai, India",
    type: "Full-time",
    duration: "May 2024 – Aug 2024",
    logo: "C",
    achievements: [
      "Built automated multi-stage financial-reconciliation workflows for client Gameskraft's fraud-detection pipeline, saving ~100 analyst-hours/month.",
      "Configured in-house tooling using Python and SQL to automate reconciliation logic for financial audits.",
      "Analyzed customer transaction flows to detect anomalies, improving fraud-detection accuracy and reducing manual investigation time.",
      "Designed BI reports with marketing and sales on churn cohorts and transaction-volume trends.",
      "Role ended in a company-wide layoff (Aug 2024)."
    ]
  },
  {
    id: 4,
    company: "Happymonk AI Labs",
    role: "Data Science Intern",
    location: "Remote, India",
    type: "Internship",
    duration: "May 2023 – Mar 2024",
    logo: "H",
    achievements: [
      "Built CNN-based object-detection models (YOLO, Faster R-CNN) reaching 98% inference accuracy by aggregating multi-source data.",
      "Led large-scale image annotation (100,000+ images) with rigorous QA pipelines to optimize model accuracy.",
      "Deployed real-time detection systems on 50+ concurrent video streams achieving <200 ms latency with 95%+ inference accuracy.",
      "The data-science department was shut down before conversion to full-time."
    ]
  },
  {
    id: 5,
    company: "Healthcare Technology Innovation Center",
    role: "Research Intern",
    location: "Remote, India",
    type: "Internship",
    duration: "Jun 2023 – Sep 2023",
    logo: "HTIC",
    achievements: [
      "Contributed to ML/AI-based techniques for vascular health assessment using ARTSENS, an image-free ultrasound system.",
      "Developed Python scripts to automate ultrasound data screening and generate motion-mode images.",
      "Designed and evaluated ML models for carotid-artery wall dynamics.",
      "Four-month internship, completed on schedule."
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Leo Hydra Studio — Production e-commerce platform for a one-principal art business",
    description: "Built and run the full operating layer for a one-principal art business — artist in Dubai, me in Mumbai. A full-fledged Next.js 14 e-commerce platform spanning ~12 Postgres tables, ~30 forward-only migrations, ~22 API routes, ~26 frontend pages, ~50 React components, three security audit rounds, and a published audit log. Surface area: dual-rail checkout (USDT-on-Polygon + bank), transactional email pipeline (Resend, 6 order-lifecycle kinds, audit-logged), full admin panel (orders / payments / email-events audit / manual resend), inquiry + project-request + contact + newsletter conversion flows with Meta dedup, rule-based studio chatbot with page-aware prompts, internationalized phone input + location-validation API, cookie-consent system, responsive image pipeline, nightly pg_dump backup via GitHub Actions. End-to-end ownership: code, payments, growth, ops, content production.",
    duration: "Oct 2025 – Present",
    tags: ["Next.js 14 App Router", "TypeScript", "Supabase (Postgres + RLS)", "ethers.js", "Polygon USDT", "Meta Pixel + CAPI", "Resend", "Vercel", "GitHub Actions"],
    liveUrl: "https://leohydra.com",
    image: "https://images.unsplash.com/photo-1545987796-200677ee1011?w=800&q=80",
    featured: true,
    achievements: [
      "Dual-rail checkout architecture: USDT-on-Polygon (verified on-chain via ethers + a Vercel Cron scanner walking USDT Transfer events on the receiving wallet every ~2 minutes) and bank transfer (admin manual confirm, UTR uniqueness enforced at the DB via partial unique index). Block-timestamp — not wall-clock — is the sole deadline authority, with a named 60-second buffer for Polygon block-time variance and clock drift, shared across the verify path, cron, and the status-route auto-expire.",
      "Micro-offset payment discriminator: each crypto order gets a unique 1–999 µUSDT offset added to its expected amount, enforced by a partial unique index on payments(expected_amount_micro) WHERE status='initiated'. Two pending orders with identical cart totals can never collide on-chain. Reserved and released by status-change triggers; on-chain verification matches the modified amount, not the cart subtotal.",
      "Race-locked payment confirmation: confirm_payment_atomic does SELECT … FOR UPDATE on the order row at the very top, then status-guarded UPDATEs to serialize against admin-cancel, auto-expire, and cron-expire (mig 031). Three triggers on orders cascade payment-row expiry, stock release, and micro-offset release in lockstep. DB-backed scan throttle (claim_order_scan_slot RPC, mig 024) prevents redundant rescans across Vercel function instances.",
      "Database engineering: ~12 Postgres tables (orders, order_items, payments, bank_transfer_payments, crypto_payments, products, leads, newsletter, order_email_events, payment_micro_reserved, order_scan_throttle, rate_limit_buckets), ~30 forward-only numbered migrations applied via the Supabase SQL editor (with verified live-DB drift checks against nightly pg_dump backups). Server access is service-role-only with deny-by-default RLS; internal RPCs (confirm_payment_atomic, reserve_payment_micro, decrement_stock, expire_orders_and_payments, etc.) REVOKEd from anon/authenticated (mig 028). Preorder-hybrid stock model (mig 018): products with stock_quantity=0 fall back to edition_total enforced cumulatively under a row lock.",
      "Transactional email pipeline: Resend-backed sends across six order-lifecycle email kinds (order confirmation, bank instructions, bank reference submitted, bank confirmed, order recovery, studio notifications). Every send writes a row to an append-only order_email_events audit table (sent / failed / skipped). Admin 'Resend' UI maps current order state to applicable email kinds — the same mapping powers both the UI and the API route so what's offered and what's sent stay in sync. Recorder is best-effort and never throws — a failed audit insert can't break an email send. Recovery flow uses HMAC-tokenized order links (ORDER_LINK_SECRET) with identical responses in all cases so the endpoint can't be used as an existence oracle.",
      "Meta Pixel + Conversions API across every conversion surface: checkout (InitiateCheckout debounced for phone-EMQ enrichment, AddPaymentInfo on order creation in both crypto and bank branches, Purchase fire-and-forget after confirm), inquiry-about-artwork + contact + project-request forms (Lead), newsletter footer (Subscribe), product detail pages (ViewContent + AddToCart), site-wide PageView. All share an eventID with the browser pixel for deduplication; PII (em / fn / ln / ph / ct / st / zp / country) hashed SHA-256 server-side per Meta spec. Browser PageView uses navigator.sendBeacon with a keepalive fetch fallback; SDK auto-events suppressed via fbq('set','autoConfig','false') and Meta pushState PageViews disabled to keep Events Manager clean and iOS AEM slots free.",
      "Admin panel: order/payments dashboard with manual bank-payment confirm, status-guarded cancel with bank-row cascade, per-order resend-email panel (always-visible with confirm-before-duplicate-send), order email events history. Edge-runtime middleware (Web Crypto) protects all /[ADMIN_SLUG]/* routes; Node-runtime API routes share session signing logic via admin-session-constants.ts. Bulk-confirm endpoint with per-order success reporting.",
      "Production security hardening — three audit rounds + five migrations (027–031): Postgres-backed distributed rate limiter (029, atomic check_rate_limit RPC replacing per-instance in-memory Map); admin brute-force lockout (030) — 5 wrong-password attempts/hour per IP + 30/15min global, global counter intentionally never cleared on success so distributed attacks stay bounded; three isolated HMAC secrets (ORDER_LINK_SECRET / ADMIN_SESSION_SECRET / CRON_SECRET) so one leak can't cascade across signing domains; enumeration-safe order lookup; CSRF Origin checks on admin POSTs (csrf-origin.ts); PII redaction on /orders/[id] for everyone including admin sessions (admin bypass intentionally removed); customer-input length caps + control-char stripping (customer-input-validation.ts); explicit CSP + X-Frame-Options + nosniff + Referrer-Policy + Permissions-Policy headers in next.config.js.",
      "Supporting subsystems: rule-based studio chatbot with page-aware quick prompts and ~20 topic-keyword buckets (no LLM, no network, sub-millisecond match); internationalized phone input (E.164 storage, country-code picker, 200+ countries) + location-validation API (countries / cities / validate-city); cookie-consent system with live on/off toggle via custom event (MetaPixel listens and turns on/off without reload, GDPR-aware); pre-build responsive image pipeline (400/800/1400w WebP variants for landing-ultrawide and landing-mobile and prints grid) + automated app-icon regeneration from the dark-bg logo master; layered cron strategy (Vercel Cron every ~2 min calls /api/payments/scan, pg_cron every minute runs expire_orders_and_payments) for redundant deadline enforcement; nightly pg_dump backup via GitHub Actions (cron 0 2 * * * UTC, keeps 3 newest, fails the workflow if the dump is empty or contains pg_dump errors).",
      "Growth + operations (the non-code half): run Meta ad campaigns end-to-end, manage limited-edition print production with printing houses, coordinate fulfillment from the Dubai warehouse, hire and direct video editors for Reels, sound design and posting across Behance / Tumblr / Instagram, use Claude Code as a creative production tool to scale Reels generation."
    ]
  },
  {
    id: 2,
    title: "SmartDoc AI — Document Intelligence Platform",
    description: "End-to-end RAG platform for document summarization and Q&A. Secure FastAPI backend with JWT auth for user / document / API-key management. User + admin dashboards via Streamlit with real-time usage analytics. Containerized with Docker Compose.",
    duration: "Mar 2025 – May 2025",
    tags: ["Python", "FastAPI", "RAG", "LangChain", "Streamlit", "Docker", "JWT"],
    liveUrl: "https://smartdoc-ai-user.streamlit.app/",
    githubUrl: "https://github.com/Arnav-Kumar1",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
    featured: true,
    achievements: [
      "Engineered secure FastAPI backend with JWT authentication for robust user, document, and API-key management.",
      "Delivered intuitive user and admin dashboards with real-time analytics via Streamlit.",
      "Containerized the full application with Docker Compose for scalable deployment."
    ]
  },
  {
    id: 3,
    title: "AI for Malaria Forecasting — Omdena × Liberia",
    description: "Open-source ML collaboration with Omdena's international chapter, modeling malaria incidence forecasting for Liberia, West Africa. Built and tuned XGBoost models; deployed via Streamlit; containerized with Docker. International collaboration experience + work outside the for-profit lane.",
    duration: "Jan 2024 – Apr 2024",
    tags: ["Python", "XGBoost", "Streamlit", "Docker", "ML"],
    liveUrl: "https://malaria-prediction.streamlit.app/",
    githubUrl: "https://github.com/Arnav-Kumar1",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    featured: true,
    achievements: [
      "Collaborated internationally as ML Engineer with Omdena's Liberia chapter.",
      "Built and tuned XGBoost models for malaria-incidence prediction.",
      "Deployed via Streamlit, containerized with Docker for scalable distribution."
    ]
  }
];

export const skills = {
  languages: ["TypeScript", "JavaScript", "Python", "SQL", "HTML / CSS"],
  frameworks: [
    "Next.js 14 (App Router)",
    "React",
    "Tailwind CSS",
    "FastAPI",
    "Node.js",
    "Pandas",
    "NumPy",
    "scikit-learn",
    "PyTorch",
    "TensorFlow",
    "XGBoost"
  ],
  tools: [
    "Vercel",
    "Supabase (Postgres + RLS + service-role)",
    "Docker",
    "GitHub Actions",
    "Polygon RPC",
    "ethers.js",
    "Power BI",
    "Tableau",
    "Git"
  ],
  ml: [
    "RAG / LangChain-style pipelines",
    "LLM-native workflow design",
    "CNN architectures (YOLO, Faster R-CNN)",
    "Object detection & annotation",
    "Random Forest",
    "XGBoost"
  ],
  specializations: [
    "Founding-engineer scope (full-stack + growth + ops)",
    "Meta Pixel + Conversions API (server-side, dedup-aware)",
    "Meta ad campaign operations",
    "Web3 payments (USDT on Polygon, on-chain verification)",
    "Production e-commerce engineering",
    "Adversarial review with AI as sparring partner (Claude Code)",
    "Vendor & supply-chain management"
  ]
};

export const education = [
  {
    id: 1,
    degree: "Diploma in Data Science (BS Foundation, IIT Madras Online Degree)",
    institution: "Indian Institute of Technology (IIT), Madras",
    duration: "2021 – 2022",
    cgpa: "8.2",
    logo: "IIT"
  },
  {
    id: 2,
    degree: "B.E. in Electronics & Telecommunication",
    institution: "Smt. Kashibai Navale College of Engineering, Pune",
    duration: "2016 – 2020",
    cgpa: "7.0",
    logo: "SKNCOE"
  }
];

export const achievements = [
  "Solo operator of a one-principal art business: Mumbai-side engineering + growth + ops, Dubai-side artist + warehouse.",
  "Built a production e-commerce site with crypto + bank checkout, on-chain payment verification, and admin panel.",
  "Drove three security audit rounds + five new migrations hardening the LeoHydra payment infrastructure.",
  "Shipped server-side Meta Conversions API with browser-pixel deduplication via shared eventID.",
  "Reduced manual analyst effort by 100+ hours/month at Cointab via Python + SQL reconciliation workflows.",
  "98% inference accuracy on real-time object detection across 50+ concurrent video streams at Happymonk."
];
