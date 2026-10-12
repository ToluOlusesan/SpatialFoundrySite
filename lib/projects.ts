export interface ProjectSection {
  title: string;
  body: string;
}

export interface ProjectPillar {
  number: string;
  title: string;
  body: string;
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
  title: string;
  aspectRatio: string;
  image?: string;
  featured?: boolean;
}

export interface ProjectIcon {
  name: string;
  image: string;
}

export interface ProjectLink {
  url: string;
  label: string;
}

export interface ProjectFilm {
  src: string;
  poster?: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  description: string;
  scope: string[];
  tools?: string[];
  year: string;
  heroImage?: string;
  launchFilm?: ProjectFilm;
  website?: ProjectLink;
  lead?: string;
  sections?: ProjectSection[];
  pillars?: ProjectPillar[];
  stats?: ProjectStat[];
  credits?: ProjectCredit[];
  gallery?: ProjectGalleryItem[];
  icons?: ProjectIcon[];
}

const meshkitImages = "/images/meshkit/portfolio";

export const projects: Project[] = [
  {
    slug: "meshkit",
    title: "MeshKit",
    subtitle: "3D icons that match your brand every time",
    tags: ["Identity", "Icon design", "Motion"],
    description:
      "Most 3D icon packs leave little room to adapt color, orientation, or style to a brand. MeshKit is an app designed to make that customization possible.\n\nSpatial Foundry worked on the icon models, the 3D side of the identity, and the launch film.",
    scope: ["3D Identity System", "Icon Design", "3D Animation"],
    tools: ["Blender", "After Effects", "Figma", "Cycles"],
    year: "2026",
    launchFilm: {
      src: "/videos/Meshkit-web.mp4",
      poster: "/images/meshkit/film-poster.jpg",
    },
    website: { url: "https://meshkit.design", label: "meshkit.design" },
    lead:
      "A flexible 3D icon library, with more room to make each icon feel like yours.",
    sections: [
      {
        title: "The idea",
        body:
          "The project began with a simple gap: existing 3D icon packs offered limited control over color, orientation, and styling. MeshKit brings those choices into an app, so the icons can be tailored to the brand using them.",
      },
    ],
    gallery: [
      {
        title: "MeshKit customizer",
        aspectRatio: "16/9",
        image: "/images/meshkit/0197.png",
        featured: true,
      },
      {
        title: "Icon library",
        aspectRatio: "16/9",
        image: "/images/meshkit/0055.png",
      },
      {
        title: "Microphone study",
        aspectRatio: "16/9",
        image: "/images/meshkit/0018.png",
      },
      {
        title: "Customizer interface",
        aspectRatio: "4/3",
        image: `${meshkitImages}/0108.png`,
      },
      {
        title: "Icon library interface",
        aspectRatio: "4/3",
        image: `${meshkitImages}/Home%20page.png`,
      },
      {
        title: "Icon library study",
        aspectRatio: "4/3",
        image: `${meshkitImages}/0046.png`,
      },
      {
        title: "Identity close-up",
        aspectRatio: "4/3",
        image: `${meshkitImages}/0017.png`,
      },
    ],
    icons: [
      { name: "Bank", image: `${meshkitImages}/Bank.png` },
      { name: "Pie chart", image: `${meshkitImages}/PieChart.png` },
      { name: "Profile", image: `${meshkitImages}/profile.png` },
      { name: "Bar chart", image: `${meshkitImages}/Bar%20Chart.png` },
      { name: "Lock", image: `${meshkitImages}/Lock.png` },
      { name: "Folder", image: `${meshkitImages}/Folder.png` },
      { name: "Eye", image: "/images/meshkit/icons/Eye_Open.png" },
      { name: "Face ID", image: "/images/meshkit/icons/FaceId.png" },
      { name: "Fingerprint", image: "/images/meshkit/icons/Fingerprint.png" },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}




