import React from "react";
import { Navigation } from "../components/nav";

const experiences = [
	{
		id: 1,
		company: "Leo Hydra Studio",
		role: "Freelance Engineer + Operator",
		location: "Remote (Mumbai ↔ Dubai)",
		type: "Freelance",
		duration: "Oct 2025 – Present",
		achievements: [
			"Sole operating team for a one-principal art business based in Dubai — artist makes the work; I do everything else from Mumbai.",
			"Built and run the production e-commerce platform at leohydra.com: Next.js 14, Supabase Postgres, USDT-on-Polygon checkout with on-chain payment verification, bank transfer with admin manual confirm, ~12 tables, ~30 migrations, ~22 API routes, ~50 React components.",
			"Server-side Meta Pixel + Conversions API across every conversion surface (checkout / forms / newsletter / product pages / PageView), dedup-aware via shared eventID. Transactional email pipeline (Resend, 6 lifecycle kinds, audit-logged with admin resend UI).",
			"Three documented security audit rounds + 5 new migrations (027–031): DB-backed rate limiter, admin brute-force lockout, CSRF Origin checks, PII redaction, HMAC-secret isolation, CSP + security headers.",
			"AI-native engineering workflow — Claude Code as sparring partner for threat modeling, adversarial review, and code generation. AI handles the typing; design, threat model, rollout sequencing are mine.",
			"Operations: run Meta ad campaigns, manage limited-edition print production with printing houses, coordinate Dubai-warehouse fulfillment, hire and direct video editors, sound design + multi-platform posting.",
		],
	},
	{
		id: 2,
		company: "Recro",
		role: "Data Operations Analyst",
		location: "Bengaluru, India",
		type: "Contract",
		duration: "Nov 2024 – Jan 2025",
		achievements: [
			"Built automated SQL + Python pipelines for ~3,000 daily/monthly financial transactions for a SaaS portfolio system, ensuring 100% reconciliation.",
			"Automated data validation and error-fixing in Python; raised report accuracy ~15%.",
			"Resolved portfolio discrepancies during corporate-action events with 100% accuracy.",
			"Partnered with business teams on transactions-per-user, retention anomalies, and portfolio-performance KPIs.",
			"Role concluded due to contract ramp-down.",
		],
	},
	{
		id: 3,
		company: "Cointab",
		role: "Data Analyst",
		location: "Mumbai, India",
		type: "Full-time",
		duration: "May 2024 – Aug 2024",
		achievements: [
			"Built automated multi-stage financial-reconciliation workflows for client Gameskraft's fraud-detection pipeline; saved ~100 analyst-hours/month.",
			"Configured in-house tooling using Python and SQL to automate reconciliation logic for financial audits.",
			"Analyzed customer transaction flows to detect anomalies, improving fraud-detection accuracy.",
			"Designed BI reports on churn cohorts and transaction-volume trends with marketing and sales.",
			"Role ended in a company-wide layoff (Aug 2024).",
		],
	},
	{
		id: 4,
		company: "Happymonk AI Labs",
		role: "Data Science Intern",
		location: "Remote, India",
		type: "Internship",
		duration: "May 2023 – Mar 2024",
		achievements: [
			"Built CNN-based object-detection models (YOLO, Faster R-CNN) reaching 98% inference accuracy by aggregating multi-source data.",
			"Led large-scale image annotation (100,000+ images) with rigorous QA pipelines.",
			"Deployed real-time detection systems on 50+ concurrent video streams achieving <200 ms latency with 95%+ inference accuracy.",
			"The data-science department was shut down before conversion to full-time.",
		],
	},
	{
		id: 5,
		company: "Healthcare Technology Innovation Center",
		role: "Research Intern",
		location: "Remote, India",
		type: "Internship",
		duration: "Jun 2023 – Sep 2023",
		achievements: [
			"Contributed to ML/AI techniques for vascular health assessment using ARTSENS (image-free ultrasound system).",
			"Developed Python scripts to automate ultrasound data screening and generate motion-mode images.",
			"Designed and evaluated ML models for carotid-artery wall dynamics.",
			"Four-month internship, completed on schedule.",
		],
	},
];

const skillGroups = [
	{
		title: "Languages",
		items: ["TypeScript", "JavaScript", "Python", "SQL", "HTML / CSS"],
	},
	{
		title: "Frameworks",
		items: [
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
			"XGBoost",
		],
	},
	{
		title: "Tools & Infra",
		items: [
			"Vercel",
			"Supabase (Postgres + RLS)",
			"Docker",
			"GitHub Actions",
			"Polygon RPC",
			"ethers.js",
			"Power BI",
			"Tableau",
			"Git",
		],
	},
	{
		title: "ML / AI",
		items: [
			"RAG / LangChain-style pipelines",
			"LLM-native workflow design",
			"CNN (YOLO, Faster R-CNN)",
			"Object detection",
			"Random Forest",
			"XGBoost",
		],
	},
	{
		title: "Specializations",
		items: [
			"Founding-engineer scope (full-stack + growth + ops)",
			"Meta Pixel + CAPI (server-side, dedup-aware)",
			"Meta ad campaign operations",
			"Web3 payments (USDT on Polygon)",
			"Production e-commerce engineering",
			"Adversarial review with AI as sparring partner",
			"Vendor & supply-chain management",
		],
	},
];

const education = [
	{
		id: 1,
		degree: "Diploma in Data Science (BS Foundation, IIT Madras Online Degree)",
		institution: "Indian Institute of Technology (IIT), Madras",
		duration: "2021 – 2022",
		cgpa: "8.2",
	},
	{
		id: 2,
		degree: "B.E. in Electronics & Telecommunication",
		institution: "Smt. Kashibai Navale College of Engineering, Pune",
		duration: "2016 – 2020",
		cgpa: "7.0",
	},
];

export default function AboutPage() {
	return (
		<div className="relative pb-16 bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
			<Navigation />
			<div className="px-6 pt-20 mx-auto space-y-12 max-w-4xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				{/* About */}
				<section>
					<div className="max-w-2xl mx-auto lg:mx-0">
						<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
							About
						</h2>
						<p className="mt-4 text-zinc-400">
							Engineer + growth + ops, all routed through one person.
						</p>
					</div>
					<div className="w-full h-px bg-zinc-800 mt-8" />
					<div className="mt-8 space-y-6 text-zinc-300 leading-relaxed">
						<p>
							I run the operating layer of a one-principal art business based in
							Dubai from Mumbai — code the site, run the ads, manage vendors,
							move inventory, ship the right thing on the right day. Comfortable
							wearing every hat a seed-to-Series-A startup needs from its first
							or second non-founder hire.
						</p>
						<p>
							I&apos;m a generalist by training and by accident. IIT Madras BS
							Degree in Data Science, B.E. in Electronics &amp; Telecommunication
							from SKNCOE Pune. Four data roles between 2023 and 2025 — two
							ended in layoffs (Recro and Cointab, both during the 2024–25
							sector downturn), one was an internship that closed on schedule,
							one was a department shutdown before conversion. In late 2025 I
							joined Leo Hydra Studio as the full operating team and have been
							running it since.
						</p>
						<p>
							AI tools — Claude Code, LLM agents — used as a force multiplier,
							not a substitute for thinking. Three documented security audit
							rounds on the LeoHydra codebase ran through this workflow: AI as
							sparring partner for threat modeling and adversarial review;
							design choices, threat model, and rollout sequencing are mine.
						</p>
						<p>
							Not the deepest specialist in any one lane. Probably the best
							generalist you&apos;ll meet for a seed-to-Series-A startup looking
							for the first or second non-founder hire.
						</p>
					</div>
				</section>

				{/* Experience */}
				<section>
					<div className="max-w-2xl mx-auto lg:mx-0">
						<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
							Experience
						</h2>
						<p className="mt-4 text-zinc-400">
							Five roles between 2023 and now.
						</p>
					</div>
					<div className="w-full h-px bg-zinc-800 mt-8" />
					<div className="mt-8 space-y-12">
						{experiences.map((exp) => (
							<article
								key={exp.id}
								className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-12 pb-12 border-b border-zinc-800 last:border-b-0 last:pb-0"
							>
								<div className="text-sm text-zinc-500 space-y-1">
									<p>{exp.duration}</p>
									<p>{exp.location}</p>
									<p className="text-xs uppercase tracking-wider text-zinc-600">
										{exp.type}
									</p>
								</div>
								<div>
									<h3 className="text-xl font-bold text-zinc-100 tracking-tight">
										{exp.role}
									</h3>
									<p className="text-base text-zinc-400 mb-5">{exp.company}</p>
									<ul className="space-y-2.5">
										{exp.achievements.map((a, i) => (
											<li
												key={i}
												className="flex items-start gap-3 text-sm md:text-base text-zinc-400 leading-relaxed"
											>
												<span className="flex-shrink-0 text-zinc-600 mt-1.5">
													·
												</span>
												<span>{a}</span>
											</li>
										))}
									</ul>
								</div>
							</article>
						))}
					</div>
				</section>

				{/* Skills */}
				<section>
					<div className="max-w-2xl mx-auto lg:mx-0">
						<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
							Skills
						</h2>
					</div>
					<div className="w-full h-px bg-zinc-800 mt-8" />
					<div className="mt-8 space-y-8">
						{skillGroups.map((group) => (
							<div
								key={group.title}
								className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-3 md:gap-12"
							>
								<p className="text-sm font-semibold text-zinc-200 md:pt-0.5">
									{group.title}
								</p>
								<div className="flex flex-wrap gap-2">
									{group.items.map((item) => (
										<span
											key={item}
											className="px-2.5 py-1 bg-zinc-900 text-zinc-300 text-sm font-medium border border-zinc-800 rounded"
										>
											{item}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Education */}
				<section>
					<div className="max-w-2xl mx-auto lg:mx-0">
						<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
							Education
						</h2>
					</div>
					<div className="w-full h-px bg-zinc-800 mt-8" />
					<div className="mt-8 space-y-8">
						{education.map((edu) => (
							<div
								key={edu.id}
								className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-3 md:gap-12 pb-8 border-b border-zinc-800 last:border-b-0 last:pb-0"
							>
								<div className="text-sm text-zinc-500 space-y-1">
									<p>{edu.duration}</p>
									<p>CGPA: {edu.cgpa}</p>
								</div>
								<div>
									<h3 className="text-xl font-bold text-zinc-100 tracking-tight mb-1">
										{edu.degree}
									</h3>
									<p className="text-base text-zinc-400">{edu.institution}</p>
								</div>
							</div>
						))}
					</div>
				</section>
			</div>
		</div>
	);
}
