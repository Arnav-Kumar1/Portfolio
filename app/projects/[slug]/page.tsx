import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";

export const dynamic = "force-dynamic";

type Props = {
	params: {
		slug: string;
	};
};

export async function generateStaticParams() {
	return allProjects
		.filter((p) => p.published)
		.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const project = allProjects.find((p) => p.slug === params.slug);
	if (!project) return {};
	const url = `https://arnavkumar.in/projects/${project.slug}`;
	return {
		title: `${project.title} — Arnav Kumar`,
		description: project.description,
		alternates: { canonical: url },
		openGraph: {
			title: `${project.title} — Arnav Kumar`,
			description: project.description,
			url,
			type: "article",
			publishedTime: project.date ?? undefined,
			authors: ["Arnav Kumar"],
		},
		twitter: {
			card: "summary_large_image",
			title: `${project.title} — Arnav Kumar`,
			description: project.description,
		},
	};
}

export default async function PostPage({ params }: Props) {
	const slug = params?.slug;
	const project = allProjects.find((project) => project.slug === slug);

	if (!project) {
		notFound();
	}

	// JSON-LD CreativeWork per project — helps Google associate the project
	// with the Arnav Kumar Person entity above.
	const projectJsonLd = {
		"@context": "https://schema.org",
		"@type": "CreativeWork",
		name: project.title,
		description: project.description,
		datePublished: project.date,
		url: `https://arnavkumar.in/projects/${project.slug}`,
		author: { "@type": "Person", name: "Arnav Kumar", url: "https://arnavkumar.in" },
		...(project.url && { sameAs: [project.url] }),
	};

	return (
		<div className="min-h-screen overflow-x-clip bg-zinc-950 text-zinc-100">
			<script
				type="application/ld+json"
				// eslint-disable-next-line react/no-danger
				dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
			/>
			<Header project={project} />

			<article className="prose prose-invert prose-zinc prose-quoteless mx-auto max-w-3xl px-6 py-20 prose-headings:font-display prose-headings:tracking-tight prose-h2:text-4xl prose-h2:mt-20 prose-h2:mb-6 prose-h2:font-semibold prose-h2:text-white prose-h3:text-2xl prose-h3:mt-12 prose-p:text-zinc-300 prose-p:leading-relaxed prose-strong:text-white prose-strong:font-semibold prose-li:text-zinc-300 prose-li:marker:text-indigo-400/60 prose-a:text-indigo-300 prose-a:no-underline hover:prose-a:text-indigo-200 prose-code:text-indigo-200 prose-code:bg-zinc-800/60 prose-code:rounded prose-code:px-1.5 prose-code:py-0.5 prose-code:text-[0.85em] prose-code:before:content-none prose-code:after:content-none prose-img:rounded-xl prose-img:border prose-img:border-zinc-800 lg:max-w-4xl">
				<Mdx code={project.body.code} />
			</article>

			{/* footer CTA */}
			{project.url && (
				<div className="border-t border-zinc-800/70 bg-zinc-950">
					<div className="mx-auto max-w-3xl px-6 py-16 text-center lg:max-w-4xl">
						<p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-zinc-500">
							See it live
						</p>
						<a
							href={project.url}
							target="_blank"
							rel="noopener noreferrer"
							className="mt-4 inline-block font-display text-4xl tracking-tight text-white underline decoration-zinc-700 underline-offset-8 transition-colors hover:decoration-indigo-400 sm:text-5xl"
						>
							{project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")} →
						</a>
					</div>
				</div>
			)}
		</div>
	);
}
