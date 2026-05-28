export interface ProjectSection {
  title: string;
  body:  string;
}

export interface ProjectPillar {
  number: string;
  title:  string;
  body:   string;
}

export interface ProjectStat {
  value: string;
  label: string;
}

export interface ProjectCredit {
  role: string;
  name: string;
}

export interface ProjectGalleryItem {
  label:       string;
  aspectRatio: string;
  image?:      string;
}

export interface ProjectLink {
  url:   string;
  label: string;
}

export interface Project {
  slug:        string;
  title:       string;
  subtitle:    string;
  tags:        string[];
  description: string;
  scope:       string[];
  year:        string;

  /* Case-study fields — optional; page falls back gracefully when absent */
  heroImage?:  string;
  website?:    ProjectLink;
  lead?:       string;
  sections?:   ProjectSection[];
  pillars?:    ProjectPillar[];
  stats?:      ProjectStat[];
  credits?:    ProjectCredit[];
  gallery?:    ProjectGalleryItem[];
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
    heroImage:   "/images/meshkit.png",
    website:     { url: "https://meshkit.design", label: "meshkit.design" },

    lead:
      "Most 3D icon libraries are either too precious to ship or too flat to matter. MeshKit needed to be both production-ready and brand-flexible, live in the browser, at any scale. We built the geometry system, designed the identity through a 3D lens, developed the renderer that runs it all, and made a launch film worthy of the work.",

    sections: [
      {
        title: "The Brief",
        body:  "Most 3D icon packs ship in one fixed style — wrong colors, wrong material, wrong brand. MeshKit needed live, material-level color control across an entire library, in the browser, without sacrificing render quality. That meant building the geometry system, the renderer, and the customization logic from scratch. Alongside it: a visual identity developed through a 3D lens, where the brand language and the icons are the same thing, and a launch film that made the whole system feel alive before anyone had signed up.",
      },
    ],

    pillars: [
      {
        number: "01",
        title:  "Geometry",
        body:   "Rounded chamfers, fixed depth ratio, consistent radius across the set. No icon breaks the geometric grammar to make a point — the grammar is the point.",
      },
      {
        number: "02",
        title:  "Material",
        body:   "Custom shader library: brushed metal, frosted glass, soft plastic, painted ceramic. Every icon ships with all four variants pre-built, so designers don't fight files to swap textures.",
      },
      {
        number: "03",
        title:  "Light",
        body:   "One key direction at 35° from upper-left, one fill, one rim. Lock the light and the family snaps into place even when icons sit hundreds of pixels apart.",
      },
      {
        number: "04",
        title:  "Motion",
        body:   "Every icon loops at 1.5s on a fixed easing curve. Short enough for a hover state, long enough for a marketing hero. Same source file either way.",
      },
    ],

    credits: [
      { role: "Creative Direction",    name: "Olusesan Tolu"          },
      { role: "3D Design & Animation", name: "Spatial Foundry"        },
      { role: "Year",                  name: "2025"                   },
      { role: "Status",                name: "In active development"  },
    ],

    gallery: [
      { label: "Icon render — study frame 038", aspectRatio: "4/3", image: "/images/meshkit/0038.png" },
      { label: "Icon render — study frame 188", aspectRatio: "4/3", image: "/images/meshkit/0188.png" },
      { label: "Launch announcement template",  aspectRatio: "4/3", image: "/images/meshkit/Announcement Template.png" },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
