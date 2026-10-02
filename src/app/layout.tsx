import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import { Analytics } from "@vercel/analytics/next";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drewityphotos.ca"),
  title: {
    default: "Kitchener Photographer | Drewity Photography",
    template: "%s | Drewity Photography",
  },
  description:
    "Drewity Photography offers portrait, headshot, and event photography in Kitchener, Waterloo, Cambridge, and across Waterloo Region, Ontario.",
  applicationName: "Drewity Photography",
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Drewity Photography",
    title: "Kitchener Photographer | Drewity Photography",
    description:
      "Portrait, headshot, and event photography in Kitchener, Waterloo, Cambridge, and across Waterloo Region.",
    images: ["/images/Portraits/2.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kitchener Photographer | Drewity Photography",
    description:
      "Portrait, headshot, and event photography in Kitchener, Waterloo, Cambridge, and across Waterloo Region.",
    images: ["/images/Portraits/2.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": "Photographer",
    name: "Drewity Photography",
    url: "https://drewityphotos.ca",
    image: "https://drewityphotos.ca/images/Portraits/2.jpg",
    description:
      "Portrait, headshot, and event photography in Kitchener, Waterloo, Cambridge, and across Waterloo Region, Ontario.",
    email: "hello@drewityphotos.ca",
    sameAs: ["https://www.instagram.com/drewity_photos/"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kitchener",
      addressRegion: "Ontario",
      addressCountry: "CA",
    },
    areaServed: ["Kitchener", "Waterloo", "Cambridge", "Waterloo Region"],
    knowsAbout: ["Portrait photography", "Headshot photography", "Event photography"],
  };

  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
