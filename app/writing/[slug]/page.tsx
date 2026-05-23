import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { allPosts } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Navigation } from "@/app/components/nav";
import "@/app/projects/[slug]/mdx.css";

export const dynamic = "force-dynamic";

type Props = {
	params: {
		slug: string;
	};
};

export async function generateStaticParams() {
	return allPosts
		.filter((p) => p.published)
		.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const post = allPosts.find((p) => p.slug === params.slug);
	if (!post) return {};
	const url = `https://arnavkumar.in/writing/${post.slug}`;
	return {
		title: `${post.title} — Arnav Kumar`,
		description: post.description,
		alternates: { canonical: url },
		openGraph: {
			title: `${post.title} — Arnav Kumar`,
			description: post.description,
			url,
			type: "article",
			publishedTime: post.date ?? undefined,
			authors: ["Arnav Kumar"],
		},
		twitter: {
			card: "summary_large_image",
			title: `${post.title} — Arnav Kumar`,
			description: post.description,
		},
	};
}

export default async function PostPage({ params }: Props) {
	const slug = params?.slug;
	const post = allPosts.find((p) => p.slug === slug);

	if (!post) {
		notFound();
	}

	// JSON-LD Article — surfaces title + author + date to Google's
	// understanding of the post. Combined with Person JSON-LD on the homepage,
	// every post is linkable to the Arnav Kumar entity.
	const articleJsonLd = {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: post.title,
		description: post.description,
		datePublished: post.date,
		url: `https://arnavkumar.in/writing/${post.slug}`,
		author: { "@type": "Person", name: "Arnav Kumar", url: "https://arnavkumar.in" },
	};

	return (
		<div className="bg-zinc-50 min-h-screen">
			<script
				type="application/ld+json"
				// eslint-disable-next-line react/no-danger
				dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
			/>
			<Navigation />
			<header className="relative isolate overflow-hidden bg-gradient-to-tl from-black via-zinc-900 to-black pt-24 pb-16 md:pt-32 md:pb-24">
				<div className="container mx-auto px-6 lg:px-8">
					<div className="mx-auto max-w-3xl animate-fade-up">
						{post.date && (
							<time
								dateTime={new Date(post.date).toISOString()}
								className="text-sm text-zinc-400 uppercase tracking-wider"
							>
								{Intl.DateTimeFormat(undefined, {
									dateStyle: "long",
								}).format(new Date(post.date))}
							</time>
						)}
						<h1 className="mt-4 text-3xl md:text-5xl font-bold text-white tracking-tight font-display">
							{post.title}
						</h1>
						<p className="mt-6 text-base md:text-lg leading-8 text-zinc-300">
							{post.description}
						</p>
					</div>
				</div>
			</header>

			<article
				className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless animate-fade-up"
				style={{ animationDelay: "0.15s" }}
			>
				<Mdx code={post.body.code} />
			</article>
		</div>
	);
}
