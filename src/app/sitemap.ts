import type { MetadataRoute } from "next";
import { cases } from "@/data/cases";
import { publishedNotes } from "@/data/notes";

const base = "https://mukai.works";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/cases", "/samples", "/notes", "/engineer", "/works"].map((p) => ({
    url: `${base}${p}`,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.7,
  }));
  return [
    ...pages,
    ...cases.map((c) => ({ url: `${base}/cases/${c.slug}`, changeFrequency: "yearly" as const, priority: 0.6 })),
    ...publishedNotes().map((n) => ({ url: `${base}/notes/${n.slug}`, lastModified: n.date, changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
}
