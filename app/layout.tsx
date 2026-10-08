import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Game Portfolio | Flandy Rockyliano Mamun",
  description:
    "Portofolio browser game dan interactive experience karya Flandy Rockyliano Mamun, dari timing game hingga eksperimen Three.js dan WebGL.",
  keywords: [
    "Game Developer Indonesia",
    "Browser Game",
    "JavaScript Game",
    "Three.js",
    "WebGL",
    "Interactive Experience",
    "Brand Activation",
  ],
  authors: [{ name: "Flandy Rockyliano Mamun" }],
  creator: "Flandy Rockyliano Mamun",
  openGraph: {
    title: "Game Portfolio | Flandy Rockyliano Mamun",
    description: "Browser games dan interactive experiences untuk event, exhibition, dan brand activation.",
    type: "website",
    locale: "id_ID",
    siteName: "Flandy Game Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Game Portfolio | Flandy Rockyliano Mamun",
    description: "Browser games dan interactive experiences untuk event, exhibition, dan brand activation.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
