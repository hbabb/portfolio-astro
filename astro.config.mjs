import markdoc from "@astrojs/markdoc";
import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [
		react(),
		markdoc(),
		mdx(),
		sitemap(),
		icon({
			include: {
				"fa7-brands": ["*"],
			},
		}),
	],
	adapter: netlify(),
});
