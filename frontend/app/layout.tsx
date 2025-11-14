import type { Metadata } from "next";
import "./globals.css";
import { Oxanium } from "next/font/google";

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800"],
  variable: "--font-oxanium",
});
export const metadata: Metadata = { 
  title: "Utillect",
  description: "MicroSaasTools",
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
