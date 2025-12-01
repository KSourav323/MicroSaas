import {ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function Landing() {
  const theme = {
    bg: 'bg-black',
    text: 'text-white',
    textMuted: 'text-zinc-400',
    border: 'border-zinc-800',
    borderHover: 'hover:border-zinc-700',
    card: 'bg-zinc-900/50',
    cardHover: 'hover:bg-zinc-900',
    accent: 'bg-white',
    accentText: 'text-black',
  };

  const tools = [
    { 
      name: "Image Compressor", 
      category: "Image Processing",
      desc: "Reduce image file sizes while maintaining visual quality for optimal web performance.",
      url: "/tools/image-compressor"
    },
    { 
      name: "PDF Merger", 
      category: "Document Tools",
      desc: "Combine multiple PDF documents into a single file with preserved formatting.",
      url: "/tools/pdf-merger"
    },
    { 
      name: "Text Fonts Generator", 
      category: "Typography",
      desc: "Create stylized text with Unicode characters and decorative font styles.",
      url: "/tools/text-fonts"
    },
    { 
      name: "Audio Vocal Remover", 
      category: "Audio Processing",
      desc: "Isolate or remove vocals from audio tracks for remixing and karaoke.",
      url: "/tools/vocal-remover"
    },
    { 
      name: "Color Picker & Palette", 
      category: "Design Tools",
      desc: "Extract colors, generate palettes, and convert between color formats.",
      url: "/tools/color-picker"
    },
    { 
      name: "Code Formatter", 
      category: "Developer Tools",
      desc: "Format and beautify code across multiple programming languages.",
      url: "/tools/code-formatter"
    }
  ];

  const features = [
    { 
      title: "Zero Loading Time", 
      desc: "Tools load instantly with optimized code splitting and minimal dependencies." 
    },
    { 
      title: "Completely Free", 
      desc: "Full access to all tools without paywalls or premium tiers." 
    },
    { 
      title: "No Registration", 
      desc: "Use every tool anonymously without creating an account." 
    },
    { 
      title: "Privacy Protected", 
      desc: "Client-side processing ensures your data never leaves your device." 
    },
    { 
      title: "Regular Updates", 
      desc: "New tools added monthly based on user needs and requests." 
    },
    { 
      title: "Minimal Interface", 
      desc: "Distraction-free design that focuses solely on functionality." 
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <div className={`${theme.bg} ${theme.text}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 ${theme.bg}/80 backdrop-blur-xl border-b ${theme.border}`}>
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between" role="navigation" aria-label="Main navigation">
          <a href="/" className="text-xl font-light tracking-[0.3em]" aria-label="Utillect Home">
            UTILLECT
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#latest" className={`text-sm ${theme.textMuted} hover:${theme.text} transition-colors`}>Tools</a>
            <a href="#features" className={`text-sm ${theme.textMuted} hover:${theme.text} transition-colors`}>Features</a>
            <a href="#about" className={`text-sm ${theme.textMuted} hover:${theme.text} transition-colors`}>About</a>
            <a href="#contact" className={`text-sm ${theme.textMuted} hover:${theme.text} transition-colors`}>Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="/tools" 
              className={`px-6 py-2 text-sm border ${theme.border} ${theme.cardHover} transition-all hover:scale-105`}
            >
              Browse Tools
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-6 lg:px-8 pt-16 py-32 relative text-center">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.1]">
              Professional Tools
              <br />
              <span className={theme.textMuted}>Built for Speed</span>
            </h1>
          </div>

          <p className={`text-lg md:text-xl ${theme.textMuted} max-w-2xl mx-auto font-light leading-relaxed`}>
            Access essential utilities instantly. No accounts, no tracking, no complexity.
            Just powerful tools that work.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link 
              href="/tools" 
              className={`px-8 py-4 ${theme.accent} ${theme.accentText} text-sm tracking-wider hover:opacity-90 transition-all inline-flex items-center justify-center gap-2`}
            >
              EXPLORE TOOLS
            </Link>
            <a 
              href="#features" 
              className={`px-8 py-4 border ${theme.border} text-sm tracking-wider ${theme.cardHover} transition-all inline-flex items-center justify-center gap-2`}
            >
              LEARN MORE
            </a>
          </div>
        </div>

        <a href="#latest" className={`absolute bottom-12 ${theme.textMuted} animate-bounce`} aria-label="Scroll to content">
          <div className="w-6 h-10 border-2 border-zinc-700 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/40 rounded-full"></div>
          </div>
        </a>
      </section>

      {/* Latest Tools Section */}
      <section id="latest" className={`py-32 px-6 lg:px-8 border-t ${theme.border}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-tight">
              Latest Tools
            </h2>
            <p className={`${theme.textMuted} text-lg font-light`}>
              Recently added to our collection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800/20">
            {tools.map((tool, i) => (
              <article 
                key={i}
                className={`group ${theme.card} p-8 ${theme.cardHover} transition-all duration-300 hover:scale-[1.02] hover:z-10`}
              >
                <div className="space-y-4">
                  <div className={`text-xs ${theme.textMuted} tracking-widest uppercase`}>
                    {tool.category}
                  </div>
                  <h3 className="text-2xl font-light tracking-tight">
                    {tool.name}
                  </h3>
                  <p className={`${theme.textMuted} text-sm leading-relaxed font-light`}>
                    {tool.desc}
                  </p>
                  <a 
                    href={tool.url}
                    className={`inline-flex items-center gap-2 text-sm ${theme.textMuted} group-hover:${theme.text} transition-colors pt-4`}
                  >
                    Use Tool
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={`py-32 px-6 lg:px-8 border-t ${theme.border}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-tight">
              Why Choose Utillect
            </h2>
            <p className={`${theme.textMuted} text-lg font-light max-w-2xl mx-auto`}>
              Built on principles of simplicity, privacy, and performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {features.map((feature, i) => (
              <div key={i} className="space-y-3">
                <div className={`w-12 h-12 border ${theme.border} flex items-center justify-center`}>
                  <div className={`w-2 h-2 ${theme.accent}`}></div>
                </div>
                <h3 className="text-xl font-light tracking-tight">
                  {feature.title}
                </h3>
                <p className={`${theme.textMuted} text-sm leading-relaxed font-light`}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-32 px-6 lg:px-8 border-t ${theme.border}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-16 tracking-tight">
            About Utillect
          </h2>
          
          <div className={`space-y-8 text-lg ${theme.textMuted} font-light leading-relaxed`}>
            <p>
              Utillect provides essential digital tools without the friction of modern web applications. 
              Every tool is designed to load instantly, work offline when possible, and require no personal 
              information to use.
            </p>
            <p>
              Built by developers who understand the frustration of bloated software, Utillect maintains 
              a strict philosophy: tools should be fast, focused, and freely accessible. No premium tiers, 
              no feature gates, no compromise on quality.
            </p>
            <p>
              The platform runs on a sustainable model using minimal, non-intrusive advertising. This allows 
              us to keep every tool free while maintaining the infrastructure needed to serve users globally.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-32 px-6 lg:px-8 border-t ${theme.border}`}>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">
            Suggest a Tool
          </h2>
          <p className={`${theme.textMuted} text-lg font-light`}>
            Have an idea for a tool? We build based on user needs.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto pt-4">
            <input 
              type="text"
              name="suggestion"
              placeholder="Describe your tool idea..."
              className={`flex-1 px-6 py-4 border ${theme.border} ${theme.card} focus:outline-none focus:${theme.borderHover} transition-colors`}
              aria-label="Tool suggestion"
            />
            <button 
              type="submit"
              className={`px-8 py-4 ${theme.accent} ${theme.accentText} hover:opacity-90 transition-all whitespace-nowrap`}
            >
              Submit Idea
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className={`py-16 px-6 lg:px-8 border-t ${theme.border}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-4">
              <h3 className="text-sm tracking-widest">ESSENTRIQLAB</h3>
              <p className={`${theme.textMuted} text-sm font-light leading-relaxed`}>
                The studio behind Utillect. Building simple, powerful tools for everyone.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm tracking-widest">TOOLS</h4>
              <ul className={`space-y-2 text-sm ${theme.textMuted} font-light`}>
                <li><a href="/tools/text" className={`hover:${theme.text} transition-colors`}>Text Utilities</a></li>
                <li><a href="/tools/dev" className={`hover:${theme.text} transition-colors`}>Developer Tools</a></li>
                <li><a href="/tools/convert" className={`hover:${theme.text} transition-colors`}>Converters</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm tracking-widest">COMPANY</h4>
              <ul className={`space-y-2 text-sm ${theme.textMuted} font-light`}>
                <li><a href="#about" className={`hover:${theme.text} transition-colors`}>About</a></li>
                <li><a href="/privacy" className={`hover:${theme.text} transition-colors`}>Privacy</a></li>
                <li><a href="/terms" className={`hover:${theme.text} transition-colors`}>Terms</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm tracking-widest">CONTACT</h4>
              <p className={`${theme.textMuted} text-sm font-light`}>
                essentriqlab@gmail.com
              </p>
            </div>
          </div>

          <div className={`pt-8 border-t ${theme.border} text-center`}>
            <p className={`${theme.textMuted} text-sm font-light tracking-wider`}>
              © {currentYear} ESSENTRIQLAB. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}