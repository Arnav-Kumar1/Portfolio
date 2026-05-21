import Link from "next/link";
import React from "react";
import { allPosts } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

export const dynamic = "force-dynamic";

export default async function WritingPage() {
	const posts = allPosts
		.filter((p) => p.published)
		.sort(
			(a, b) =>
				new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
				new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
		);

	return (
		<div className="relative pb-16">
			<Navigation />
			<div className="px-6 pt-20 mx-auto space-y-8 max-w-4xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						Writing
					</h2>
					<p className="mt-4 text-zinc-400">
						Long-form notes on engineering decisions, race conditions, and the
						AI-native workflow I use to ship.
					</p>
				</div>
				<div className="w-full h-px bg-zinc-800" />

				<div className="space-y-8">
					{posts.length === 0 ? (
						<p className="text-zinc-500 italic">No posts yet — more soon.</p>
					) : (
						posts.map((post) => (
							<Card key={post.slug}>
								<Link
									href={`/writing/${post.slug}`}
									className="block p-6 md:p-8 group"
								>
									<div className="flex items-center gap-2 text-xs text-zinc-500 mb-3">
										{post.date && (
											<time dateTime={new Date(post.date).toISOString()}>
												{Intl.DateTimeFormat(undefined, {
													dateStyle: "medium",
												}).format(new Date(post.date))}
											</time>
										)}
									</div>
									<h3 className="text-2xl md:text-3xl font-bold text-zinc-100 group-hover:text-white tracking-tight font-display">
										{post.title}
									</h3>
									<p className="mt-4 leading-7 text-zinc-400 group-hover:text-zinc-300">
										{post.description}
									</p>
									<p className="mt-6 text-sm text-zinc-200 group-hover:text-white">
										Read post <span aria-hidden="true">&rarr;</span>
									</p>
								</Link>
							</Card>
						))
					)}
				</div>
			</div>
		</div>
	);
}
