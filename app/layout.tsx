import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const outfit = localFont({
  src: "../public/fonts/Outfit-VariableFont_wght.ttf",
  variable: "--font-outfit",
  weight: "100 900",
  display: "swap",
});

const inter = localFont({
  src: [
    { path: "../public/fonts/Inter-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Inter-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/Inter-SemiBold.ttf", weight: "600", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://spatialfoundry.com"),
  title: "Spatial Foundry — Creative Technology Studio",
  description:
    "Spatial Foundry is an independent creative technology studio making tools, identities and experiences at the meeting point of design and technology.",
  openGraph: {
    title: "Spatial Foundry — Creative Technology Studio",
    description:
      "We make tools, identities and experiences at the meeting point of design and technology.",
    type: "website",
    images: ["/images/meshkit/portfolio/0022.webp"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/meshkit/portfolio/0022.webp"],
    title: "Spatial Foundry — Creative Technology Studio",
    description:
      "We make tools, identities and experiences at the meeting point of design and technology.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable + " " + inter.variable}>
      <head>
        <meta name="theme-color" content="#f6f4ef" />
      </head>
      <body className="min-h-screen bg-bg text-fg font-body antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
