import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/programs", "/membership", "/schedule", "/contact"].map((p) => ({ url: `${siteConfig.url}${p}` }));
}
