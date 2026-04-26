import type { Metadata } from "next";
import { Outfit, Work_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const outfit = Outfit({
  subsets:  ["latin"],
  variable: "--font-outfit",
  weight:   ["500", "600", "700", "800"],
  display:  "swap",
});

const workSans = Work_Sans({
  subsets:  ["latin"],
  variable: "--font-work-sans",
  weight:   ["400", "500"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${workSans.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/32x32/favicon-orange.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/16x16/favicon-orange.png" />
      </head>
      <body className="bg-bg text-fg font-body antialiased overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
