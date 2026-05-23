import type { MetadataRoute } from "next";
import { allProjects, allPosts } from "contentlayer/generated";

const SITE = "https://arnavkumar.in";

export default function sitemap(): MetadataRoute.Sitemap {
	const now = new Date();

	const staticRoutes: MetadataRoute.Sitemap = [
		{
			url: `${SITE}/`,
			lastModified: now,
			changeFrequency: "monthly",
			priority: 1.0,
		},
		{
			url: `${SITE}/projects`,
			lastModified: now,
			changeFrequency: "monthly",
			priority: 0.9,
		},
		{
			url: `${SITE}/writing`,
			lastModified: now,
			changeFrequency: "weekly",
			priority: 0.9,
		},
		{
			url: `${SITE}/about`,
			lastModified: now,
			changeFrequency: "monthly",
			priority: 0.9,
		},
		{
			url: `${SITE}/contact`,
			lastModified: now,
			changeFrequency: "yearly",
			priority: 0.5,
		},
	];

	const projects: MetadataRoute.Sitemap = allProjects
		.filter((p) => p.published)
		.map((p) => ({
			url: `${SITE}/projects/${p.slug}`,
			lastModified: p.date ? new Date(p.date) : now,
			changeFrequency: "monthly" as const,
			priority: 0.8,
		}));

	const posts: MetadataRoute.Sitemap = allPosts
		.filter((p) => p.published)
		.map((p) => ({
			url: `${SITE}/writing/${p.slug}`,
			lastModified: p.date ? new Date(p.date) : now,
			changeFrequency: "monthly" as const,
			priority: 0.7,
		}));

	return [...staticRoutes, ...projects, ...posts];
}
