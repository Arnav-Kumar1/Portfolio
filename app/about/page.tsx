import React from "react";
import { Navigation } from "../components/nav";

const experiences = [
	{
		id: 1,
		company: "Leo Hydra Studio",
		role: "Freelance Engineer + Operator",
		location: "Remote (Mumbai / Dubai)",
		type: "Freelance",
		duration: "Oct 2025 to Present",
		achievements: [
			"Sole operating team for a one-principal art business based in Dubai. Hand-coded the platform from scratch and run everything else from Mumbai. No template, no inherited codebase.",
			"Current scale: 20 to 30 orders per day. Every limited-edition print drop sells out within 7 days of going live. Repeat-buyer rate among collectors who own at least one print.",
			"Architected and wrote the production e-commerce platform at leohydra.com from scratch. Stack: Next.js 14, Supabase Postgres, USDT-on-Polygon checkout with on-chain payment verification, bank transfer with admin manual confirm, ~12 tables, ~30 migrations, ~22 API routes, ~50 React components.",
			"Server-side Meta Pixel + Conversions API across every conversion surface (checkout / forms / newsletter / product pages / PageView), dedup-aware via shared eventID. Transactional email pipeline (Resend, 6 lifecycle kinds, audit-logged with admin resend UI).",
			"Three documented security audit rounds + 5 new migrations (027 to 031): DB-backed rate limiter, admin brute-force lockout, CSRF Origin checks, PII redaction, HMAC-secret isolation, CSP + security headers.",
			"Operations: run Meta ad campaigns, manage limited-edition print production with printing houses, coordinate Dubai-warehouse fulfillment, hire and direct video editors, sound design + multi-platform posting.",
		],
	},
	{
		id: 2,
		company: "Canopy",
		role: "Data Operations Analyst",
		location: "Singapore (remote, via Recro)",
		type: "Full-time contractor",
		duration: "Nov 2024 to Jan 2025",
		achievements: [
			"Full-time on Canopy's data ops team (private-wealth SaaS, Singapore), staffed through Recro India as the legal employer.",
			"Built automated SQL + Python pipelines for ~3,000 daily/monthly financial transactions across the portfolio system, ensuring 100% reconciliation.",
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
		duration: "May 2024 to Aug 2024",
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
		duration: "May 2023 to Mar 2024",
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
		duration: "Jun 2023 to Sep 2023",
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
			"Production e-commerce engineering",
			"Meta Pixel + CAPI (server-side, dedup-aware)",
			"Meta ad campaign operations",
			"Web3 payments (USDT on Polygon)",
			"Security hardening (rate limiting, brute-force lockout, CSRF, CSP, HMAC isolation)",
			"Solo engineering ownership end-to-end",
			"Vendor & supply-chain management",
		],
	},
];

const education = [
	{
		id: 1,
		degree: "Diploma in Data Science (Foundational + Diploma levels of the IIT Madras Online Degree program)",
		institution: "Indian Institute of Technology (IIT), Madras",
		duration: "2021 to 2022",
		cgpa: "8.2",
	},
	{
		id: 2,
		degree: "B.E. in Electronics & Telecommunication",
		institution: "Smt. Kashibai Navale College of Engineering, Pune",
		duration: "2016 to 2020",
		cgpa: "7.0",
	},
];

export default function AboutPage() {
	return (
		<div className="relative pb-16 bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
			<Navigation />
			<div className="px-6 pt-20 mx-auto space-y-12 max-w-4xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				{/* About */}
				<section className="animate-fade-up">
					<div className="max-w-2xl mx-auto lg:mx-0">
						<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
							About
						</h2>
						<p className="mt-4 text-zinc-400">
							Full-stack engineer. Ships and runs production systems alone.
						</p>
					</div>
					<div className="w-full h-px bg-zinc-800 mt-8" />
					<div className="mt-8 space-y-6 text-zinc-300 leading-relaxed">
						<p>
							I ship full-stack production systems end-to-end. The current one
							is{" "}
							<a
								href="https://leohydra.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-zinc-100 underline underline-offset-4 decoration-zinc-600 hover:decoration-zinc-300"
							>
								leohydra.com
							</a>
							{" "}— a Dubai art studio I run from Mumbai. 20 to 30 orders per
							day. Every limited-edition print drop sells out within 7 days of
							going live. The entire codebase is mine: the e-commerce stack,
							the on-chain payment verifier, the admin panel, the transactional
							email pipeline, the Meta Pixel + CAPI dedup, and the
							security-audit migrations. I also run the ads, manage the
							printers, and ship the parcels.
						</p>
						<p>
							B.E. in Electronics &amp; Telecommunication from Smt. Kashibai
							Navale College of Engineering, Pune (full-time campus degree,
							2016 to 2020). IIT Madras Online Diploma in Data Science (2021 to
							2022). Five roles between 2023 and now: a Canopy (Singapore) data
							ops contract via Recro, a Cointab data-analyst role, two
							internships, and the current Leo Hydra Studio engagement.
							Engineering and ops on the LeoHydra stack since late 2025.
						</p>
						<p>
							Strongest at: production e-commerce engineering, growth
							instrumentation (server-side Pixel + CAPI, dedup-aware), security
							hardening, and running operations solo. Comfortable being the
							second or third engineer at a startup with no infrastructure
							team.
						</p>
					</div>
				</section>

				{/* Experience */}
				<section className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
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
						{experiences.map((exp, i) => (
							<article
								key={exp.id}
								className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-12 pb-12 border-b border-zinc-800 last:border-b-0 last:pb-0 animate-fade-up"
								style={{ animationDelay: `${0.15 + i * 0.06}s` }}
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
				<section className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
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
				<section className="animate-fade-up" style={{ animationDelay: "0.25s" }}>
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
