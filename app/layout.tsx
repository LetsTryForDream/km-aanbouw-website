import React from "react"
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://kmaanbouw.nl"),
  title: {
    default: "KM Aanbouw | Prefab & maatwerk aanbouw in Randstad & omgeving",
    template: "%s | KM Aanbouw",
  },
  description:
    "KM Aanbouw realiseert prefab aanbouwen, uitbouwen, opbouwen en dakkapellen met een strakke planning en minimale overlast. Bereken kosten online en vraag gratis een offerte aan.",
  keywords: [
    "aanbouw",
    "prefab aanbouw",
    "uitbouw",
    "opbouw",
    "dakkapel",
    "Randstad",
    "Den Haag",
    "Rotterdam",
    "Leiden",
    "Delft",
  ],
  authors: [{ name: "KM Aanbouw" }],
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://kmaanbouw.nl",
    siteName: "KM Aanbouw",
    title: "KM Aanbouw | Prefab & maatwerk aanbouw",
    description:
      "Prefab aanbouwen, uitbouwen, opbouwen en dakkapellen met minimale overlast.",
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
