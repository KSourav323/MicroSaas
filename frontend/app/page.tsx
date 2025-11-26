'use client';
import { useState, useEffect } from 'react';

export default function Landing() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [isDark, setIsDark] = useState(true);
  const [particles, setParticles] = useState<Array<{id: number; left: number; top: number; duration: number; delay: number}>>([]);
  const [mounted, setMounted] = useState(false);
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
    setYear(new Date().getFullYear());
    setParticles(
      [...Array(20)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 10 + Math.random() * 20,
        delay: Math.random() * 5
      }))
    );
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[id]');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const bgClass = isDark ? 'bg-black text-white' : 'bg-white text-black';
  const textClass = isDark ? 'text-white' : 'text-black';
  const textSecondaryClass = isDark ? 'text-gray-400' : 'text-gray-600';
  const borderClass = isDark ? 'border-white/10' : 'border-black/10';
  const bgCardClass = isDark ? 'bg-white/5' : 'bg-black/5';
  const hoverBgClass = isDark ? 'hover:bg-white/10' : 'hover:bg-black/10';

  return (
    <main className={`min-h-screen ${bgClass} overflow-hidden relative transition-colors duration-500`}>
      {/* Animated Grid Background */}
      <div className="fixed inset-0 z-0">
        <div 
          className={`absolute inset-0 ${isDark ? 'bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]' : 'bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)]'} bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]`}
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {mounted && particles.map((particle) => (
          <div
            key={particle.id}
            className={`absolute w-1 h-1 ${isDark ? 'bg-white' : 'bg-black'} rounded-full opacity-20`}
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animation: `float ${particle.duration}s linear infinite`,
              animationDelay: `${particle.delay}s`
            }}
          ></div>
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-30px) translateX(20px); }
          50% { transform: translateY(-60px) translateX(-20px); }
          75% { transform: translateY(-30px) translateX(30px); }
        }
        @keyframes glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-slideIn { animation: slideIn 0.8s ease-out forwards; }
        .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }
        .animate-scaleIn { animation: scaleIn 0.6s ease-out forwards; }
      `}</style>

      {/* HEADER */}
      <header className={`w-full py-4 md:py-6 px-4 md:px-10 flex justify-between items-center backdrop-blur-2xl ${isDark ? 'bg-black/40' : 'bg-white/40'} ${borderClass} border-b fixed top-0 left-0 z-50 transition-all duration-300`}>
        <a href="/">
          <h1 className="text-xl md:text-2xl font-black tracking-[0.3em] relative group cursor-pointer">
            <span className={`relative z-10 bg-gradient-to-r ${isDark ? 'from-white via-gray-300 to-white' : 'from-black via-gray-700 to-black'} bg-clip-text text-transparent`}>
              UTILLECT
            </span>
            <div className={`absolute inset-0 ${isDark ? 'bg-white/5' : 'bg-black/5'} blur-xl scale-0 group-hover:scale-100 transition-transform duration-500`}></div>
          </h1>
        </a>

        <nav className={`hidden md:flex gap-6 lg:gap-10 ${textSecondaryClass} text-xs lg:text-sm tracking-[0.2em] uppercase font-light`}>
          {['Latest', 'Features', 'About', 'Request', 'Contact'].map((item) => (
            <a
              key={item}
              href={
                item === 'Latest' ? '#latest' :
                item === 'Request' ? '#suggest' :
                `#${item.toLowerCase()}`
              }
              className={`relative group transition-colors duration-300 ${isDark ? 'hover:text-white' : 'hover:text-black'}`}
            >
              {item}
              <span className={`absolute -bottom-1 left-0 w-0 h-[1px] ${isDark ? 'bg-white' : 'bg-black'} transition-all duration-300 group-hover:w-full`}></span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-full ${borderClass} border ${bgCardClass} backdrop-blur-xl ${isDark ? 'hover:bg-white/10' : 'hover:bg-black/10'} transition-all duration-300`}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          <a
            href="/tools"
            className={`px-4 md:px-6 py-2 text-xs md:text-sm rounded-full ${borderClass} border ${bgCardClass} backdrop-blur-xl ${textClass} ${isDark ? 'hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white'} transition-all duration-300 transform hover:scale-105 tracking-wider uppercase font-light`}
          >
            All Tools →
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative z-10 flex flex-col justify-center items-center text-center pt-32 md:pt-40 lg:pt-48 pb-20 md:pb-32 px-4 md:px-6 min-h-screen">
        {/* Animated Glow Orbs */}
        <div 
          className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] ${isDark ? 'bg-white/5' : 'bg-black/5'} blur-[120px] rounded-full`}
          style={{ animation: 'glow 8s ease-in-out infinite' }}
        ></div>
        
        <div 
          className={`absolute top-1/3 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] ${isDark ? 'bg-white/3' : 'bg-black/3'} blur-[100px] rounded-full`}
          style={{ animation: 'glow 6s ease-in-out infinite', animationDelay: '1s' }}
        ></div>

        <div className="relative z-10 animate-fadeIn">
          <div className="mb-6 md:mb-8 inline-block">
            <div className={`w-16 h-16 md:w-20 md:h-20 mx-auto ${borderClass} border rounded-full flex items-center justify-center backdrop-blur-xl ${bgCardClass} animate-scaleIn`}>
              <div className={`w-8 h-8 md:w-10 md:h-10 border-2 ${isDark ? 'border-white/40 border-t-white' : 'border-black/40 border-t-black'} rounded-full animate-spin`}></div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-[0.05em] leading-[1.1] mb-6 md:mb-8 animate-slideIn px-4">
            <span className={`block bg-gradient-to-r ${isDark ? 'from-white via-gray-200 to-white' : 'from-black via-gray-700 to-black'} bg-clip-text text-transparent ${isDark ? 'drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]' : 'drop-shadow-[0_0_30px_rgba(0,0,0,0.3)]'}`}>
              USEFUL TOOLS,
            </span>
            <span className={`block mt-2 bg-gradient-to-r ${isDark ? 'from-gray-300 via-white to-gray-300' : 'from-gray-600 via-black to-gray-600'} bg-clip-text text-transparent ${isDark ? 'drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]' : 'drop-shadow-[0_0_30px_rgba(0,0,0,0.3)]'}`}>
              THOUGHTFULLY MADE.
            </span>
          </h1>

          <p className={`max-w-2xl lg:max-w-3xl mx-auto mt-6 md:mt-8 text-sm md:text-base lg:text-lg ${textSecondaryClass} leading-relaxed px-6 md:px-8 py-4 md:py-6 rounded-2xl ${borderClass} border ${bgCardClass} backdrop-blur-2xl animate-slideIn`} style={{ animationDelay: '0.2s' }}>
            A set of simple, useful tools for developers and creators — free to use, easy to access, and never behind a login.
          </p>

          <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4 animate-slideIn" style={{ animationDelay: '0.4s' }}>
            <a
              href="/tools"
              className={`group relative px-8 md:px-12 py-4 md:py-5 rounded-full ${borderClass} border backdrop-blur-xl overflow-hidden transition-all duration-300 hover:scale-105`}
            >
              <div className={`absolute inset-0 ${bgCardClass} transition-all duration-300 ${hoverBgClass}`}></div>
              <div className={`absolute inset-0 bg-gradient-to-r from-transparent ${isDark ? 'via-white/10' : 'via-black/10'} to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000`}></div>
              <span className={`relative z-10 text-sm md:text-base tracking-[0.2em] uppercase font-light ${textClass}`}>
                Explore Tools →
              </span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className={`w-6 h-10 border-2 ${borderClass} rounded-full flex justify-center pt-2`}>
            <div className={`w-1 h-2 ${isDark ? 'bg-white/40' : 'bg-black/40'} rounded-full`}></div>
          </div>
        </div>
      </section>

      {/* WHAT'S NEW SECTION */}
      <section id="latest" className="relative z-10 py-20 md:py-32 px-4 md:px-10 max-w-7xl mx-auto">
        <div className={`text-center mb-12 md:mb-20 ${isVisible.latest ? 'animate-fadeIn' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-[0.1em] mb-4 md:mb-6 uppercase">
            <span className={`bg-gradient-to-r ${isDark ? 'from-gray-400 via-white to-gray-400' : 'from-gray-600 via-black to-gray-600'} bg-clip-text text-transparent`}>
              See What's New
            </span>
          </h2>
          <div className={`w-20 md:w-24 h-[2px] bg-gradient-to-r from-transparent ${isDark ? 'via-white' : 'via-black'} to-transparent mx-auto mb-6 md:mb-8`}></div>
          <p className={`${textSecondaryClass} max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-light tracking-wide px-4`}>
            Explore our latest tools, freshly added to make your workflow even smoother. Check them out and let us know what you think.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {[
            { 
              name: "Image Compressor", 
              icon: (
                <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              ), 
              category: "Image", 
              desc: "Compress images without losing quality. Optimize for web instantly." 
            },
            { 
              name: "PDF Merger", 
              icon: (
                <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              ), 
              category: "PDF", 
              desc: "Combine multiple PDFs into one seamless document effortlessly." 
            },
            { 
              name: "Text Fonts", 
              icon: (
                <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948-.684l1.498-4.493a1 1 0 011.502-.684l1.498 4.493a1 1 0 00.948.684H19a2 2 0 012 2v1a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                </svg>
              ), 
              category: "Text", 
              desc: "Generate stylish text in different fonts and Unicode characters." 
            },
            { 
              name: "Audio Vocal Remover", 
              icon: (
                <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
                </svg>
              ), 
              category: "Audio", 
              desc: "Extract vocals from songs or create karaoke versions instantly." 
            },
            { 
              name: "Color Picker", 
              icon: (
                <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.21 15H3.48c-.98 0-1.705.745-1.705 1.72V19.5c0 .975.725 1.72 1.705 1.72h3.73m0-4.5h13.06c.98 0 1.705.745 1.705 1.72V19.5c0 .975-.725 1.72-1.705 1.72H7.21m0-4.5V9c0-.975.725-1.72 1.705-1.72h2.313m0-3.28h2.313c.98 0 1.705-.745 1.705-1.72V1.22c0-.975-.725-1.72-1.705-1.72h-2.313m0 16.72h7.29m-7.29 0v2.5" />
                </svg>
              ), 
              category: "Color", 
              desc: "Pick, convert, and generate color palettes with ease." 
            },
            { 
              name: "Code Formatter", 
              icon: (
                <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              ), 
              category: "Code", 
              desc: "Format and beautify your code in multiple programming languages." 
            }
          ].map((tool, i) => (
            <div
              key={i}
              className={`group relative p-6 md:p-8 rounded-2xl ${borderClass} border ${bgCardClass} backdrop-blur-2xl transition-all duration-500 ${isDark ? 'hover:border-white/30' : 'hover:border-black/30'} ${hoverBgClass} hover:scale-105 overflow-hidden ${isVisible.latest ? 'animate-scaleIn' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${isDark ? 'bg-white/5' : 'bg-black/5'} rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-500 group-hover:scale-150`}></div>
              
              <div className="relative z-10">
                <div className={`mb-4 ${isDark ? 'text-white/70' : 'text-black/70'} group-hover:${isDark ? 'text-white' : 'text-black'} transition-colors duration-300`}>{tool.icon}</div>
                
                <div className="flex items-start justify-between mb-3 md:mb-4">
                  <h3 className={`text-lg md:text-xl font-bold tracking-wide uppercase flex-1 ${textClass}`}>
                    {tool.name}
                  </h3>
                </div>
                
                <div className="mb-3 md:mb-4">
                  <span className={`inline-block px-3 py-1 text-xs rounded-full ${isDark ? 'bg-white/10' : 'bg-black/10'} ${textSecondaryClass} font-light tracking-wider`}>
                    {tool.category}
                  </span>
                </div>
                
                <p className={`text-xs md:text-sm ${textSecondaryClass} leading-relaxed font-light mb-4 md:mb-6`}>
                  {tool.desc}
                </p>
                
                <a
                  href="/tools"
                  className={`inline-flex items-center gap-2 text-xs md:text-sm ${isDark ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'} transition-colors duration-300 tracking-wider uppercase font-light group-hover:gap-3`}
                >
                  Try Now
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="features" className="relative z-10 py-20 md:py-32 px-4 md:px-10 max-w-7xl mx-auto">
        <div className={`text-center mb-12 md:mb-20 ${isVisible.features ? 'animate-fadeIn' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-[0.1em] mb-4 md:mb-6 uppercase">
            <span className={`bg-gradient-to-r ${isDark ? 'from-gray-400 via-white to-gray-400' : 'from-gray-600 via-black to-gray-600'} bg-clip-text text-transparent`}>
              Why Utillect Stands Out
            </span>
          </h2>
          <div className={`w-20 md:w-24 h-[2px] bg-gradient-to-r from-transparent ${isDark ? 'via-white' : 'via-black'} to-transparent mx-auto mb-6 md:mb-8`}></div>
          <p className={`${textSecondaryClass} max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-light tracking-wide px-4`}>
            Utillect focuses on building small, dependable tools that open instantly, respect your privacy, and stay free for everyone.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {[
            { title: "Fast, Lightweight Tools", desc: "Each tool loads quickly with minimal overhead, letting you complete tasks without waiting or navigating extra pages." },
            { title: "Free for Everyone", desc: "All tools remain free to use, supported through small, unobtrusive ads that never interfere with your workflow." },
            { title: "No Accounts Required", desc: "Utillect doesn't ask for sign-ups or personal details. You can use everything anonymously, without leaving anything behind." },
            { title: "Privacy-First Approach", desc: "Whenever possible, tools run directly in your browser, keeping your data local and reducing the need for external processing." },
            { title: "Steadily Growing Library", desc: "New tools are added over time, focusing on practical tasks that people need to complete quickly, without unnecessary complexity." },
            { title: "Clean, Uncluttered Design", desc: "A simple interface keeps your focus on the task. No clutter, no confusing navigation — just the tool you came for." }
          ].map((feature, i) => (
            <div
              key={i}
              className={`group p-6 md:p-8 rounded-2xl ${borderClass} border ${bgCardClass} backdrop-blur-2xl transition-all duration-500 ${isDark ? 'hover:border-white/30' : 'hover:border-black/30'} ${hoverBgClass} hover:scale-105 ${isVisible.features ? 'animate-scaleIn' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`w-10 h-10 md:w-12 md:h-12 mb-4 md:mb-6 rounded-full ${borderClass} border flex items-center justify-center ${bgCardClass} ${hoverBgClass} transition-all duration-300`}>
                <div className={`w-4 h-4 md:w-5 md:h-5 ${isDark ? 'border-white/40' : 'border-black/40'} border rotate-45`}></div>
              </div>
              <h3 className={`text-lg md:text-xl font-bold mb-3 md:mb-4 tracking-wide uppercase ${textClass}`}>
                {feature.title}
              </h3>
              <p className={`text-xs md:text-sm ${textSecondaryClass} leading-relaxed font-light`}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="relative z-10 py-20 md:py-32 px-4 md:px-10 max-w-5xl mx-auto">
        <div className={`${isVisible.about ? 'animate-fadeIn' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-[0.1em] mb-8 md:mb-12 text-center uppercase">
            <span className={`bg-gradient-to-r ${isDark ? 'from-gray-400 via-white to-gray-400' : 'from-gray-600 via-black to-gray-600'} bg-clip-text text-transparent`}>
              About Us
            </span>
          </h2>
          <div className={`w-20 md:w-24 h-[2px] bg-gradient-to-r from-transparent ${isDark ? 'via-white' : 'via-black'} to-transparent mx-auto mb-8 md:mb-12`}></div>
          
          <div className={`space-y-6 md:space-y-8 ${textSecondaryClass} text-sm md:text-base leading-relaxed font-light tracking-wide ${borderClass} border rounded-2xl p-6 md:p-10 ${bgCardClass} backdrop-blur-2xl`}>
            <p>
              Utillect was created to provide simple, reliable tools that anyone can use within seconds. Many everyday tasks require small utilities, yet most platforms surround them with logins, paywalls, or complicated interfaces. Utillect keeps things straightforward by offering clean, lightweight tools that open instantly and stay free to use.
            </p>
            <p>
              The platform is built on a few clear principles: keep the experience simple, respect user privacy, and avoid getting in the way. Every tool works without requiring an account, and nothing on the site asks for personal information. Users can stay completely anonymous while still accessing the full set of utilities.
            </p>
            <p>
              Utillect continues to grow gradually, adding tools that are practical, focused, and genuinely helpful for developers, creators, students, and anyone handling quick digital tasks. Each addition aims to reduce friction and save time, offering a quiet, efficient alternative to cluttered tool websites.
            </p>
            <p>
              To keep everything freely accessible, Utillect is supported through small, non-intrusive advertisements. This allows the platform to remain independent, open, and committed to providing useful tools without adding barriers or unnecessary complexity.
            </p>
          </div>
        </div>
      </section>

      {/* SUGGEST SECTION */}
      <section id="suggest" className="relative z-10 py-20 md:py-24 px-4 md:px-10 text-center max-w-4xl mx-auto">
        <div className={`${isVisible.suggest ? 'animate-fadeIn' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-black tracking-[0.1em] mb-4 md:mb-6 uppercase">
            <span className={`bg-gradient-to-r ${isDark ? 'from-gray-400 via-white to-gray-400' : 'from-gray-600 via-black to-gray-600'} bg-clip-text text-transparent`}>
              Suggest A Tool
            </span>
          </h2>
          <p className={`${textSecondaryClass} max-w-xl mx-auto mb-8 md:mb-10 text-sm md:text-base font-light px-4`}>
            If there's a tool you think would be helpful but isn't here yet, feel free to suggest it. We'd love to build things that genuinely make your work easier.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 px-4">
            <input
              placeholder="Enter your suggestion..."
              className={`flex-1 px-4 md:px-6 py-3 md:py-4 rounded-full ${bgCardClass} ${borderClass} border ${textClass} ${isDark ? 'placeholder:text-gray-500' : 'placeholder:text-gray-400'} backdrop-blur-2xl focus:outline-none ${isDark ? 'focus:border-white/40' : 'focus:border-black/40'} transition-all duration-300 text-sm md:text-base`}
            />
            <a href="#suggest" className={`px-6 md:px-8 py-3 md:py-4 rounded-full ${borderClass} border ${bgCardClass} backdrop-blur-xl ${textClass} ${isDark ? 'hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white'} transition-all duration-300 transform hover:scale-105 tracking-wider uppercase text-sm md:text-base font-light`}>
              Request →
            </a>
          </div>
        </div>
      </section>

      {/* AD PLACEHOLDER */}
      <div className="relative z-10 my-12 md:my-16 w-full flex justify-center px-4">
        <div className={`${bgCardClass} ${borderClass} border backdrop-blur-2xl rounded-2xl p-6 md:p-8 w-full max-w-sm md:w-[300px] h-[200px] md:h-[250px] flex items-center justify-center`}>
          <span className={`${textSecondaryClass} text-xs md:text-sm font-light tracking-wider uppercase`}>Advertisement Space</span>
        </div>
      </div>

      {/* FOOTER */}
      <footer id="contact" className={`relative z-10 py-12 md:py-16 px-4 md:px-10 ${borderClass} border-t backdrop-blur-2xl ${isDark ? 'bg-black/40' : 'bg-white/40'}`}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          <div>
            <h3 className="text-lg md:text-xl font-black tracking-[0.2em] mb-3 md:mb-4 uppercase">EssentriqLab</h3>
            <p className={`${textSecondaryClass} text-xs md:text-sm leading-relaxed font-light`}>
              The studio behind Utillect: A collection of simple, anonymous, free-to-use tools designed to make everyday tasks easier.
            </p>
          </div>

          <div>
            <h4 className={`font-bold text-sm md:text-base mb-3 md:mb-4 tracking-wider uppercase ${textClass}`}>Tools</h4>
            <ul className={`space-y-2 text-xs md:text-sm ${textSecondaryClass} font-light`}>
              <li className={`${isDark ? 'hover:text-white' : 'hover:text-black'} transition-colors cursor-pointer`}>Text Utilities</li>
              <li className={`${isDark ? 'hover:text-white' : 'hover:text-black'} transition-colors cursor-pointer`}>Developer Tools</li>
              <li className={`${isDark ? 'hover:text-white' : 'hover:text-black'} transition-colors cursor-pointer`}>Converters</li>
            </ul>
          </div>

          <div>
            <h4 className={`font-bold text-sm md:text-base mb-3 md:mb-4 tracking-wider uppercase ${textClass}`}>Company</h4>
            <ul className={`space-y-2 text-xs md:text-sm ${textSecondaryClass} font-light`}>
              <li><a href="#about" className={`${isDark ? 'hover:text-white' : 'hover:text-black'} transition-colors`}>About</a></li>
              <li className="opacity-50 cursor-not-allowed">Blog (coming soon)</li>
              <li className="opacity-50 cursor-not-allowed">Careers (not hiring)</li>
            </ul>
          </div>

          <div>
            <h4 className={`font-bold text-sm md:text-base mb-3 md:mb-4 tracking-wider uppercase ${textClass}`}>Contact</h4>
            <p className={`text-xs md:text-sm ${textSecondaryClass} mb-2 font-light`}>essentriqlab@gmail.com</p>
            <p className={`text-xs md:text-sm ${textSecondaryClass} font-light`}>
              We welcome tool suggestions and improvements.
            </p>
          </div>
        </div>

        <div className={`text-center mt-10 md:mt-12 pt-8 ${borderClass} border-t`}>
          <p className={`${textSecondaryClass} text-xs md:text-sm font-light tracking-wider`}>
            © {year} EssentriqLab. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}