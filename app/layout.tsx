import type { Metadata } from "next";
import { Outfit, Work_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const outfit = Outfit({
  subsets:  ["latin"],
  variable: "--font-outfit",
  weight:   ["700", "800", "900"],
  display:  "swap",
});

const workSans = Work_Sans({
  subsets:  ["latin"],
  variable: "--font-work-sans",
  weight:   ["300", "400", "500", "600"],
  display:  "swap",
});

export const metadata: Metadata = {
  title:       "Spatial Foundry — 3D Branding Studio",
  description: "Spatial Foundry is a 3D branding studio that builds tangible, spatial identities for international brands. Based in Lagos. Built for the world.",
  openGraph: {
    title:       "Spatial Foundry — 3D Branding Studio",
    description: "We give brands physical weight, spatial presence, and the kind of form that stops a scroll.",
    type:        "website",
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Spatial Foundry — 3D Branding Studio",
    description: "We give brands physical weight, spatial presence, and the kind of form that stops a scroll.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isComingSoon = process.env.NEXT_PUBLIC_COMING_SOON !== "false";

  return (
    <html lang="en" className={`${outfit.variable} ${workSans.variable}`} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0d0d0d" />
      </head>
      <body className="bg-bg text-fg font-body antialiased overflow-x-hidden">
        {!isComingSoon && <Navbar />}
        <main>{children}</main>
        {!isComingSoon && <Footer />}
      </body>
    </html>
  );
}
