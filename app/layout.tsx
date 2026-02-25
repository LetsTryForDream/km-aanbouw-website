import React from "react"
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { Toaster } from "@/components/ui/toaster";
import { site } from "@/src/content/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(site.brand.url),
  title: {
    default: "KM Aanbouw | Prefab & Traditionele Aanbouwen | Snel en Hoogwaardig",
    template: "%s | KM Aanbouw",
  },
  description:
    "KM Aanbouw realiseert prefab en traditioneel gebouwde aanbouwen met snelle levertijd, hoge kwaliteit en duidelijke budgetten. Vraag vrijblijvend advies aan.",
  generator: site.brand.name,
  icons: {
    icon: [{ url: "/logo.jpg" }],
    apple: [{ url: "/logo.jpg" }],
  },
  keywords: [
    "aanbouw",
    "prefab aanbouw",
    "uitbouw",
    "opbouw",
    "dakkapel",
    "heel Nederland",
    "Den Haag",
    "Rotterdam",
    "Leiden",
    "Delft",
    "Amsterdam",
    "Utrecht",
    "Eindhoven",
  ],
  authors: [{ name: "KM Aanbouw" }],
  openGraph: {
    title: "KM Aanbouw | Prefab & Traditionele Aanbouwen | Snel en Hoogwaardig",
    description:
      "KM Aanbouw realiseert prefab en traditioneel gebouwde aanbouwen met snelle levertijd, hoge kwaliteit en duidelijke budgetten. Vraag vrijblijvend advies aan.",
    images: ["/og-image-v2.jpg"],
    type: "website",
    locale: "nl_NL",
    url: site.brand.url,
    siteName: site.brand.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "KM Aanbouw | Prefab & Traditionele Aanbouwen | Snel en Hoogwaardig",
    description:
      "KM Aanbouw realiseert prefab en traditioneel gebouwde aanbouwen met snelle levertijd, hoge kwaliteit en duidelijke budgetten. Vraag vrijblijvend advies aan.",
    images: ["/og-image-v2.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#1e40af",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={inter.variable}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md"
        >
          Ga naar inhoud
        </a>
        <JsonLd />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
