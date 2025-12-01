import Link from "next/link";
import fs from "fs";
import path from "path";
import { Metadata } from "next";

// SEO Metadata - Server Component
export const metadata: Metadata = {
  title: "Utillect - Free Online Tools | Professional Web Utilities",
  description: "Access 50+ free online tools for developers, designers, and creators. Image compression, PDF merging, code formatting, color pickers, and more. No registration required.",
  keywords: "free online tools, web utilities, image compressor, pdf merger, code formatter, color picker, developer tools, design tools, text utilities, file converter",
  authors: [{ name: "EssentriqLab" }],
  creator: "EssentriqLab",
  publisher: "EssentriqLab",
  openGraph: {
    title: "Free Online Tools - Utillect",
    description: "Professional web utilities for developers and creators. Fast, free, and privacy-focused.",
    url: "https://utillect.dev/tools",
    siteName: "Utillect",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Tools - Utillect",
    description: "Professional web utilities for developers and creators.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://utillect.dev/tools",
  },
};

// Tool categories for SEO
const toolCategories = {
  image: ["Image Compressor", "Image Converter", "Image Resizer"],
  document: ["PDF Merger", "PDF Splitter", "Word Counter"],
  developer: ["Code Formatter", "JSON Validator", "Base64 Encoder"],
  design: ["Color Picker", "Gradient Generator", "Font Pairer"],
  text: ["Text Fonts", "Case Converter", "Text Reverser"],
  audio: ["Vocal Remover", "Audio Converter", "MP3 Cutter"],
};

export default function ToolsPage() {
  const toolsDir = path.join(process.cwd(), "app", "tools_data");

  const tools = fs
    .readdirSync(toolsDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  const currentYear = new Date().getFullYear();

  const formatToolName = (tool: string) => {
    return tool
      .split(/[_-]/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Free Online Tools - Utillect",
            "description": "Collection of professional web utilities for developers and creators",
            "url": "https://utillect.dev/tools",
            "publisher": {
              "@type": "Organization",
              "name": "EssentriqLab",
              "email": "essentriqlab@gmail.com"
            },
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": tools.map((tool, index) => ({
                "@type": "SoftwareApplication",
                "position": index + 1,
                "name": formatToolName(tool),
                "applicationCategory": "WebApplication",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD"
                }
              }))
            }
          })
        }}
      />

      <main className="min-h-screen bg-black text-white">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-zinc-800">
          <nav 
            className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between"
            role="navigation"
            aria-label="Main navigation"
          >
            <div className="text-xs text-zinc-400 tracking-wider hidden sm:block">
              FROM ESSENTRIQLAB
            </div>

            <Link 
              href="/" 
              className="text-xl font-light tracking-[0.3em]"
              aria-label="Utillect Home"
            >
              UTILLECT
            </Link>

            <Link
              href="/"
              className="px-6 py-2 text-sm border border-zinc-800 hover:bg-zinc-900 transition-all"
              aria-label="Back to home"
            >
              ← Back
            </Link>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight">
              Professional Tools
              <br />
              <span className="text-zinc-400">For Every Task</span>
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto font-light">
              {tools.length}+ free utilities for developers, designers, and creators. 
              No registration, no limits, no tracking.
            </p>
          </div>
        </section>

        {/* Quick Access Horizontal Scroll */}
        <section 
          className="max-w-7xl mx-auto px-6 lg:px-8 mb-20"
          aria-label="Quick access tools"
        >
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
            
            <div className="flex gap-3 overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-800 pb-4">
              {tools.slice(0, 10).map((tool) => (
                <Link
                  key={tool}
                  href={`/tools/${tool}`}
                  className="flex-shrink-0 px-6 py-3 text-sm border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 hover:border-zinc-700 transition-all whitespace-nowrap"
                  aria-label={`Open ${formatToolName(tool)} tool`}
                >
                  {formatToolName(tool)}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* All Tools Grid */}
        <section 
          className="max-w-7xl mx-auto px-6 lg:px-8 py-20 border-t border-zinc-800"
          aria-label="All available tools"
        >
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-tight">
              All Tools
            </h2>
            <p className="text-zinc-400 font-light">
              Browse our complete collection of utilities
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-zinc-800/20">
            {tools.map((tool) => (
              <article
                key={tool}
                className="group bg-zinc-900/50 p-6 hover:bg-zinc-900 transition-all duration-300"
              >
                <Link
                  href={`/tools/${tool}`}
                  className="block space-y-4"
                  aria-label={`Open ${formatToolName(tool)} tool`}
                >
                  <div className="w-10 h-10 border border-zinc-800 flex items-center justify-center group-hover:border-zinc-700 transition-colors">
                    <div className="w-2 h-2 bg-white"></div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-light tracking-tight mb-2 group-hover:text-white transition-colors">
                      {formatToolName(tool)}
                    </h3>
                    <p className="text-sm text-zinc-500 font-light">
                      Free online tool
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
                    <span>Open Tool</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Tool Categories Section for SEO */}
        <section 
          className="max-w-7xl mx-auto px-6 lg:px-8 py-20 border-t border-zinc-800"
          aria-label="Tool categories"
        >
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-tight">
              Browse by Category
            </h2>
            <p className="text-zinc-400 font-light">
              Find the right tool for your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(toolCategories).map(([category, toolList]) => (
              <div key={category} className="space-y-3">
                <h3 className="text-xl font-light tracking-tight capitalize border-b border-zinc-800 pb-2">
                  {category} Tools
                </h3>
                <ul className="space-y-2">
                  {toolList.map((tool) => (
                    <li key={tool}>
                      <span className="text-sm text-zinc-400 font-light hover:text-zinc-300 transition-colors cursor-pointer">
                        {tool}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 border-t border-zinc-800">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-3">
              <div className="w-12 h-12 border border-zinc-800 flex items-center justify-center">
                <div className="w-2 h-2 bg-white"></div>
              </div>
              <h3 className="text-xl font-light">Instant Access</h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                All tools load instantly with zero setup. Start working immediately without creating an account.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 border border-zinc-800 flex items-center justify-center">
                <div className="w-2 h-2 bg-white"></div>
              </div>
              <h3 className="text-xl font-light">Privacy First</h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                Most tools process data directly in your browser. Your files never leave your device.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 border border-zinc-800 flex items-center justify-center">
                <div className="w-2 h-2 bg-white"></div>
              </div>
              <h3 className="text-xl font-light">Always Free</h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                Every tool remains free forever. Supported by minimal ads that don't interfere with usage.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-32 border-t border-zinc-800 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">
              Need a Specific Tool?
            </h2>
            <p className="text-zinc-400 font-light max-w-xl mx-auto">
              We're constantly adding new utilities based on user requests. 
              Let us know what you need.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-4 bg-white text-black hover:opacity-90 transition-all text-sm tracking-wider"
            >
              SUGGEST A TOOL
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-800 py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-12 mb-16">
              <div className="space-y-4">
                <h3 className="text-sm tracking-widest">ESSENTRIQLAB</h3>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                  The studio behind Utillect. Building simple, powerful tools for everyone.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm tracking-widest">TOOLS</h4>
                <ul className="space-y-2 text-sm text-zinc-400 font-light">
                  <li><Link href="/tools" className="hover:text-white transition-colors">All Tools</Link></li>
                  <li><Link href="/tools/text" className="hover:text-white transition-colors">Text Utilities</Link></li>
                  <li><Link href="/tools/dev" className="hover:text-white transition-colors">Developer Tools</Link></li>
                  <li><Link href="/tools/convert" className="hover:text-white transition-colors">Converters</Link></li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm tracking-widest">COMPANY</h4>
                <ul className="space-y-2 text-sm text-zinc-400 font-light">
                  <li><Link href="/#about" className="hover:text-white transition-colors">About</Link></li>
                  <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
                  <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm tracking-widest">CONTACT</h4>
                <p className="text-zinc-400 text-sm font-light">
                  essentriqlab@gmail.com
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-zinc-800 text-center">
              <p className="text-zinc-400 text-sm font-light tracking-wider">
                © {currentYear} ESSENTRIQLAB. ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}