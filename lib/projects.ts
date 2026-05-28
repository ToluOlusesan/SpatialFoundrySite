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

    lead:
      "Icon systems went from flat to fancy by accident. We built MeshKit to make the move on purpose — a 120-piece 3D icon library that holds up at 16px in a product UI, scales cleanly to a billboard render, and ships as motion the day it ships as a still.",

    sections: [
      {
        title: "The Brief",
        body:  "3D icons live in an awkward middle. Most are either rendered showpieces too heavy for product use, or thin extrusions of flat icons that lose their detail at the sizes that matter. We wanted a single library that did neither — designed from the start for both product chrome and brand moments, in the same file.",
      },
      {
        title: "The Approach",
        body:  "We treated MeshKit as a system, not a set. Every icon shares the same underlying geometry rules: rounded chamfers, a fixed depth ratio, a single light direction. The library reads as one family because the constraints make it one — not because we hand-applied a style after the fact.",
      },
      {
        title: "The System",
        body:  "Each icon is delivered in three states. A stripped product variant — clean silhouette, neutral material. A marketing variant — full material expression, brand-aligned colour. A motion variant — a 1.5-second loop, exported at 60fps. One source file. Three lives. The same form throughout.",
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

    stats: [
      { value: "120+",            label: "Icons in the library"   },
      { value: "4",               label: "Material variants each" },
      { value: "60fps",           label: "Animation framerate"    },
      { value: "GLB · PNG · MP4", label: "Delivery formats"       },
    ],

    credits: [
      { role: "Creative Direction",    name: "Olusesan Tolu"          },
      { role: "3D Design & Animation", name: "Spatial Foundry"        },
      { role: "Year",                  name: "2025"                   },
      { role: "Status",                name: "In active development"  },
    ],

    gallery: [
      { label: "Icon family — full set overview", aspectRatio: "4/3" },
      { label: "Material study — four variants",  aspectRatio: "4/3" },
      { label: "Motion loop — 60fps preview",     aspectRatio: "4/3" },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
