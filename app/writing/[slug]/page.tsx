import { notFound } from "next/navigation";
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

export default async function PostPage({ params }: Props) {
	const slug = params?.slug;
	const post = allPosts.find((p) => p.slug === slug);

	if (!post) {
		notFound();
	}

	return (
		<div className="bg-zinc-50 min-h-screen">
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
