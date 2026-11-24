import type { Metadata } from "next";
import { BROCHURE_PROJECTS } from "@/data/projectData";
import { ProjectPageClient } from "@/components/ProjectPageClient";

const project = BROCHURE_PROJECTS["royal-dream-city-2"];

export const metadata: Metadata = {
  title: `${project.title} | ${project.subtitle} — Shriniwasa Builders & Developers LLP`,
  description: `${project.title} (${project.subtitle}) at ${project.location}. MahaRERA Reg. No. ${project.reraNumber}. Explore Wing A & Wing B 2 & 3 BHK floor plans, covered swimming pool, Lord Ganesha Temple, and technical specifications.`,
};

export default function RoyalDreamCity2Page() {
  return <ProjectPageClient project={project} />;
}
