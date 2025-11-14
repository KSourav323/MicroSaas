import Link from "next/link";
import fs from "fs";
import path from "path";
import AdBlock from "../components/AdBlock";
import ToolSearch from "../components/ToolSearch";

export default function Tools() {
  const toolsDir = path.join(process.cwd(), "app", "tools_data");

  const tools = fs
    .readdirSync(toolsDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  return (
    <main
      className="
        min-h-screen flex flex-col 
        text-gray-100 relative overflow-hidden

        bg-black 
        bg-[linear-gradient(90deg,transparent_0,transparent_40%,rgba(30,70,180,0.45)_47.5%,rgba(53,102,236,0.45)_49.5%,rgba(130,195,251,1)_50%,rgba(53,102,236,0.45)_50.5%,rgba(30,70,180,0.45)_52.5%,transparent_60%,transparent_100%)]
      "
    >
      {/* ============================================================================================
          HEADER WITH GO BACK BUTTON
      ============================================================================================= */}
      <header className="w-full py-5 px-8 flex justify-between items-center backdrop-blur-xl bg-white/5 border-b border-white/10 fixed top-0 left-0 z-50">
        {/* Empty space to balance layout */}
        <div className="w-[70px]"><p className="text-xs">From EssentriqLab</p></div>
        

        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-purple-300 via-white to-cyan-200 bg-clip-text text-transparent">
            UTILLECT
          </h1>
        </Link>

        
        {/* Back Button */}
        <Link
          href="/"
          className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-200 
            hover:bg-white/10 hover:scale-105 transition-all"
        >
          ← Back
        </Link>
      </header>

      {/* Page content wrapper (pushes footer down) */}
      <div className="flex-1 pt-32 pb-20">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-gradient-to-r from-[#7040ff30] to-[#00e1ff30] blur-[220px] opacity-40 -z-10" />

        {/* Futuristic tech grid */}
        <div className="absolute inset-0 bg-[url('https://svgshare.com/i/13rC.svg')] bg-repeat opacity-[0.05] -z-10" />

        {/* Title */}
        <h1 className="text-center text-5xl sm:text-6xl font-extrabold mb-8">
          <span className="bg-gradient-to-r from-purple-300 via-white to-cyan-200 bg-clip-text text-transparent">
            UTILLECT Tools
          </span>
          <span className="block text-xl sm:text-2xl mt-4 text-gray-300 tracking-widest">
            Explore All Free Micro SaaS Utilities
          </span>
        </h1>

        {/* Tools Row (Horizontal Scroll) */}
        <section
          className="max-w-4xl mx-auto mt-10 mb-18 px-4 sm:px-0 relative"
          style={{ 
            WebkitMaskImage: "linear-gradient(to right, transparent, white 10%, white 90%, transparent)", 
            maskImage: "linear-gradient(to right, transparent, white 10%, white 90%, transparent)", }}
          >

  {/* ===== Static Tools Label Left Side ===== */}
  <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
    <div
      className="
        bg-black/60 
        px-4 py-3
        rounded-tr-2xl rounded-br-2xl
        flex items-center gap-2
        text-gray-100 font-semibold

        shadow-[inset_0_0_15px_rgba(255,255,255,0.08),0_8px_20px_rgba(0,0,0,0.25)]
      "

    >
      <span>Tools</span>
      <span className="opacity-70">→</span>
    </div>
  </div>

  {/* ===== Scrollable Tool Row ===== */}
      <div
        className="
          flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-white/20
          pl-28       /* push right so label doesn’t overlap */
        "
        style={{
          whiteSpace: "nowrap",
        }}
      >
        {tools.map((tool) => (
          <Link
            key={tool}
            href={`/tools/${tool}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              min-w-[140px] max-w-[140px] h-[40px]
              flex items-center justify-center text-center
              rounded-xl
              border border-white/10 
              bg-gradient-to-br from-white/5 to-white/10
              backdrop-blur-xl

              shadow-[0_0_15px_rgba(255,255,255,0.06)]
              hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]
              hover:border-cyan-400/40
              hover:bg-white/10

              transition-all duration-200 cursor-pointer
            "
          >
            <h2 className="text-xl mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent pt-[7px]">
              {tool.split(/[_-]/)[0].charAt(0).toUpperCase() +
                tool.split(/[_-]/)[0].slice(1)}
            </h2>
          </Link>
        ))}
      </div>
    </section>



       <ToolSearch/>


        {/* ==================== MIDDLE AD ==================== */}
        <div className="flex justify-center my-20">
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl p-3 w-[320px] h-[270px] flex justify-center items-center">
            <AdBlock adKey="your_middle_ad_key" width={300} height={250} />
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Link
            href={`/`}
            className="inline-block px-8 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md 
              hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            ← Back to Home
          </Link>
        </div>

        {/* ==================== BOTTOM AD ==================== */}
        <div className="flex justify-center mt-20">
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl p-3 w-[320px] h-[270px] flex justify-center items-center">
            <AdBlock adKey="your_bottom_ad_key" width={300} height={250} />
          </div>
        </div>
      </div>

      {/* ============================================================================================
          FOOTER FIXED AT BOTTOM
      ============================================================================================= */}
      <footer className="py-16 px-10 bg-black/40 border-t border-white/10 backdrop-blur-xl text-gray-400">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">EssentriqLab</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              The studio behind Utillect — building simple, useful, anonymous tools.
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
              <li>About</li>
              <li className="opacity-50 cursor-not-allowed">Blog (coming soon)</li>
              <li className="opacity-50 cursor-not-allowed">Careers (not hiring)</li>
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
