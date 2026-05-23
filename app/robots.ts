import type { MetadataRoute } from "next";

const SITE = "https://arnavkumar.in";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
				disallow: ["/api/", "/_next/"],
			},
		],
		sitemap: `${SITE}/sitemap.xml`,
		host: SITE,
	};
}
