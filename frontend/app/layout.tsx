import type { Metadata } from "next";
import "./globals.css";
import { Oxanium } from "next/font/google";

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800"],
  variable: "--font-oxanium",
});
export const metadata: Metadata = { 
  metadataBase: new URL("https://utillect.dev"),

  title: {
    default: "Utillect - Free Online Tools",
    template: "%s | Utillect",
  },

  description:
    "Utillect is a collection of free, privacy-first online tools for text, development, and productivity. No login required.",

  keywords: [
    "free online tools",
    "online tools",
    "web utilities",
    "developer tools",
    "dev tools",
    "productivity tools",
    "text tools",
    "text utilities",
    "string tools",
    "string utilities",
    "formatting tools",
    "format code",
    "code formatter",
    "code beautifier",
    "code tools",
    "converters",
    "file converters",
    "image converter",
    "image tools",
    "image compressor",
    "image optimizer",
    "image optimization",
    "jpeg compressor",
    "png optimizer",
    "pdf tools",
    "pdf merger",
    "merge pdf",
    "split pdf",
    "pdf converter",
    "audio tools",
    "audio editor",
    "vocal remover",
    "karaoke maker",
    "color tools",
    "color picker",
    "palette generator",
    "font tools",
    "text fonts",
    "font generator",
    "typography tools",
    "developer utilities",
    "cli utilities",
    "no login tools",
    "privacy-first",
    "anonymous tools",
    "free to use",
    "open tools",
    "lightweight tools",
    "fast tools",
    "small utilities",
    "online utilities",
    "browser tools",
    "frontend tools",
    "ux tools",
    "design tools",
    "seo tools",
    "image optimization tools",
    "convert image to jpg",
    "convert image to png",
    "compress pdf",
    "merge documents",
    "text case converter",
    "uppercase lowercase converter",
    "remove line breaks",
    "string case tools",
    "base64 encoder",
    "base64 decoder",
    "hash generator",
    "regex tester",
    "json formatter",
    "json validator",
    "utility belt",
    "quick tools",
    "tools for creators",
    "tools for developers",
  ],

  icons: {
    icon: "/ulogo.ico",
  },

  verification: {
    google: "waP7l0v2kiIe8DeM8CfYqR4hqxTXC98ji4KdoG8JFbU",
  },

  openGraph: {
    type: "website",
    siteName: "Utillect",
    url: "https://utillect.dev",
    images: "/og-image.png",
  },

  twitter: {
    card: "summary_large_image",
    creator: "@utillect",
    images: "/og-image.png",
  },

  robots: {
    index: true,
    follow: true,
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { 
  return (
    <html lang="en" className={`${oxanium.className} ${oxanium.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
} 
