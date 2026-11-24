import type { Metadata } from "next";
import { BROCHURE_PROJECTS } from "@/data/projectData";
import { ProjectPageClient } from "@/components/ProjectPageClient";

const project = BROCHURE_PROJECTS["royal-heritage"];

export const metadata: Metadata = {
  title: `${project.title} | ${project.subtitle} — Shriniwasa Developers`,
  description: `${project.title} (${project.subtitle}) at ${project.location}. ${project.developerCredit}, ${project.promoterCredit}. Explore 1st to 7th floor 2 & 3 BHK layouts, Terrace Sky Deck, Rooftop Gym & Yoga Room.`,
};

export default function RoyalHeritagePage() {
  return <ProjectPageClient project={project} />;
}
