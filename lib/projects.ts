export interface Project {
  slug:        string;
  title:       string;
  subtitle:    string;
  tags:        string[];
  description: string;
  scope:       string[];
  year:        string;
}

export const projects: Project[] = [
  {
    slug:        "meshkit",
    title:       "MeshKit",
    subtitle:    "3D Icon Library & Identity",
    tags:        ["Icon System", "Identity", "Motion"],
    description: "A curated library of minimal 3D icons designed for product UI, marketing, and motion use. MeshKit bridges the gap between flat icon systems and the spatial design direction modern product brands are moving toward.",
    scope:       ["3D Modelling", "Icon System Design", "Launch Motion Film", "Web Illustrations"],
    year:        "2025",
  },
  {
    slug:        "therapysuite",
    title:       "TherapySuite",
    subtitle:    "Brand Worldbuilding for Group Therapy",
    tags:        ["3D Branding", "Identity System", "Environments", "Motion"],
    description: "A full spatial brand system for Group Therapy — a Pan-African rave and event brand. Built around two hero brand objects (the Monolith and the Frequency Object), a 40-piece icon system, and a set of immersive 3D environments designed to carry the brand across digital and physical touchpoints.",
    scope:       ["Brand Objects", "Icon System", "3D Environments", "Posters", "Motion Film", "Showcase Site"],
    year:        "2025",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
