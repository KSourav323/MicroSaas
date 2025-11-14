import Link from "next/link";
import AdBlock from "./components/AdBlock";
import { siteMetadata } from "./metadataconfig";

export const metadata = {
  ...siteMetadata,
  metadataBase: new URL("https://utillect.com"),
};

export default function Landing() {
  return (
  <main className="min-h-screen text-gray-100 bg-black bg-[linear-gradient(90deg,transparent_0,transparent_40%,rgba(30,70,180,0.45)_47.5%,rgba(53,102,236,0.45)_49.5%,rgba(130,195,251,1)_50%,rgba(53,102,236,0.45)_50.5%,rgba(30,70,180,0.45)_52.5%,transparent_60%,transparent_100%)]"

> 
      {/* ============================================================================================
         HEADER
      ============================================================================================= */}
      <header className="w-full py-6 px-10 flex justify-between items-center backdrop-blur-xl bg-white/5 border-b border-white/10 fixed top-0 left-0 z-50">

        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-purple-300 via-white to-cyan-200 bg-clip-text text-transparent">
            UTILLECT
          </h1>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-10 text-gray-300 text-sm tracking-wider">
          <Link href="/tools" className="hover:text-white transition">Tools</Link>
          <Link href="#features" className="hover:text-white transition">Features</Link>
          <Link href="#about" className="hover:text-white transition">About</Link>
          <Link href="#suggest" className="hover:text-white transition">Request</Link>
          <Link href="#contact" className="hover:text-white transition">Contact</Link>
        </nav>

        {/* CTA Button */}
        <Link 
          href="/tools"
          className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 shadow-[0_0_20px_rgba(100,0,200,0.5)] text-white hover:scale-105 transition"
        >
          Launch Tools →
        </Link>
      </header>

      {/* ============================================================================================
         HERO SECTION
      ============================================================================================= */}
      <section className="flex flex-col justify-center items-center text-center pt-[180px] pb-32 px-6 relative">

        {/* Floating Orb */} 
        <div className="absolute top-[150px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-gradient-to-r from-cyan-500/20 to-purple-600/20 blur-[150px] rounded-full opacity-40 -z-10"></div>

          <h1 className="mt-20 text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold tracking-[0.02em] leading-tight bg-gradient-to-r from-purple-300 via-white to-cyan-200 bg-clip-text text-transparent uppercase">
          Useful Tools, Thoughtfully Made.
        </h1>





        <p className="max-w-3xl mt-8 text-lg text-gray-300 backdrop-blur-md bg-white/5 border border-white/10 px-6 py-4 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.05)]">
          A set of simple, useful tools for developers and creators — free to use, easy to access, and never behind a login.
        </p>

        <div className="mt-10 flex gap-6">
          <Link
            href="/tools"
            className="px-10 py-4 rounded-full bg-gradient-to-r from-purple-600/60 to-cyan-500/60 border border-white/10 backdrop-blur-xl 
              shadow-[0_0_30px_rgba(85,0,255,0.4)]
              hover:shadow-[0_0_30px_rgba(0,120,255,0.8)]
               hover:scale-105 transition-all duration-300"
          >
            See What’s Inside →
          </Link>

        </div>
      </section>

      {/* ============================================================================================
         FEATURES SECTION (PLACEHOLDER)
      ============================================================================================= */}
      <section id="features" className="py-32 px-10 max-w-6xl mx-auto text-center">
  <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">
    Why Utillect Stands Out
  </h2>

  <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-sm sm:text-base leading-relaxed">
    Utillect focuses on building small, dependable tools that open instantly,
    respect your privacy, and stay free for everyone. No accounts, no friction —
    just simple utilities designed to save time.
  </p>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

    {/* 1 */}
    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_18px_rgba(255,255,255,0.04)] hover:bg-white/10 transition">
      <h3 className="text-xl text-white mb-2">Fast, Lightweight Tools</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        Each tool loads quickly with minimal overhead, letting you complete tasks
        without waiting or navigating extra pages.
      </p>
    </div>

    {/* 2 */}
    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_18px_rgba(255,255,255,0.04)] hover:bg-white/10 transition">
      <h3 className="text-xl text-white mb-2">Free for Everyone</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        All tools remain free to use, supported through small, unobtrusive ads
        that never interfere with your workflow.
      </p>
    </div>

    {/* 3 */}
    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_18px_rgba(255,255,255,0.04)] hover:bg-white/10 transition">
      <h3 className="text-xl text-white mb-2">No Accounts Required</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        Utillect doesn’t ask for sign-ups or personal details. You can use
        everything anonymously, without leaving anything behind.
      </p>
    </div>

    {/* 4 */}
    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_18px_rgba(255,255,255,0.04)] hover:bg-white/10 transition">
      <h3 className="text-xl text-white mb-2">Privacy-First Approach</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        Whenever possible, tools run directly in your browser, keeping your data
        local and reducing the need for external processing.
      </p>
    </div>

    {/* 5 */}
    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_18px_rgba(255,255,255,0.04)] hover:bg-white/10 transition">
      <h3 className="text-xl text-white mb-2">Steadily Growing Library</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        New tools are added over time, focusing on practical tasks that people
        need to complete quickly, without unnecessary complexity.
      </p>
    </div>

    {/* 6 */}
    <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_18px_rgba(255,255,255,0.04)] hover:bg-white/10 transition">
      <h3 className="text-xl text-white mb-2">Clean, Uncluttered Design</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        A simple interface keeps your focus on the task. No clutter, no confusing
        navigation — just the tool you came for.
      </p>
    </div>

  </div>
      </section>


      {/* ============================================================================================
         ABOUT PLACEHOLDER
      ============================================================================================= */}
      <section id="about" className="py-32 px-10 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">About Us</h2>
        <p className="text-gray-400 mb-12 leading-relaxed text-justify tracking-wide">
          Utillect was created to provide simple, reliable tools that anyone can use
          within seconds. Many everyday tasks require small utilities, yet most platforms
          surround them with logins, paywalls, or complicated interfaces. Utillect keeps
          things straightforward by offering clean, lightweight tools that open instantly
          and stay free to use.  
          <br /><br />
          The platform is built on a few clear principles: keep the experience simple,
          respect user privacy, and avoid getting in the way. Every tool works without
          requiring an account, and nothing on the site asks for personal information.
          Users can stay completely anonymous while still accessing the full set of
          utilities.  
          <br /><br />
          Utillect continues to grow gradually, adding tools that are practical, focused,
          and genuinely helpful for developers, creators, students, and anyone handling
          quick digital tasks. Each addition aims to reduce friction and save time,
          offering a quiet, efficient alternative to cluttered tool websites.  
          <br /><br />
          To keep everything freely accessible, Utillect is supported through small,
          non-intrusive advertisements. This allows the platform to remain independent,
          open, and committed to providing useful tools without adding barriers or
          unnecessary complexity.
        </p>


      </section>

      {/* ============================================================================================
         SUGGEST
      ============================================================================================= */}
      <section id="suggest" className="py-24 px-10 text-center">
        <h2 className="text-3xl font-bold mb-6">Suggest A Tool</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          If there’s a tool you think would be helpful but isn’t here yet, feel free to suggest it. We’d love to build things that genuinely make your work easier.
        </p> 
  
        <div className="flex justify-center gap-4">
          <input
            placeholder="Enter your suggestion..."
            className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-gray-200 w-100 backdrop-blur-lg"
          />
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 shadow-[0_0_20px_rgba(75,0,200,0.5)]">
            Request →
          </button>
        </div>
      </section>

      {/* ============================================================================================
         ADS
      ============================================================================================= */}

      <div className="my-10 w-full flex justify-center">
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl p-4 w-[300px] h-[250px] flex items-center justify-center">
          <AdBlock
            adKey="your_adsterra_key_here"
            width={300}
            height={250}
          />
          {/* <AdBlock slotId="ad-1" adKey="key1" />
          <AdBlock slotId="ad-2" adKey="key2" /> */}

        </div>
      </div>


      {/* ============================================================================================
         FOOTER
      ============================================================================================= */}
      <footer id="contact" className="py-16 px-10 bg-black/40 border-t border-white/10 backdrop-blur-xl text-gray-400">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">EssentriqLab</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            The studio behind Utillect: A collection of simple, anonymous, 
            free-to-use tools designed to make everyday tasks easier.
          </p>
        </div>

        {/* Tools */}
        <div>
          <h4 className="font-semibold text-white mb-2">Tools</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Text Utilities</li>
            <li>Developer Tools</li>
            <li>Converters</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-white mb-2">Company</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a className="opacity-50 cursor-not-allowed">Blog (coming soon)</a></li>
            <li><a className="opacity-50 cursor-not-allowed">Careers (not hiring)</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-white mb-2">Contact</h4>
          <p className="text-sm text-gray-300">essentriqlab@gmail.com</p>
          <p className="text-sm text-gray-400 mt-2">
            We welcome tool suggestions and improvements.
          </p>
        </div>

      </div>

      <div className="text-center mt-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} EssentriqLab. All rights reserved.
      </div>
    </footer>


    </main>
  );
}
