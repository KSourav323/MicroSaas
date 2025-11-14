import Link from "next/link";
import fs from "fs";
import path from "path";

export default async function ToolPage({ params }: { params: Promise<{ tool: string }> }) {
  const { tool } = await params;

  const toolPath = path.join(process.cwd(), "app", "tools_data", tool);

  const services = fs
    .readdirSync(toolPath)
    .filter((file) => file.endsWith(".tsx"))
    .map((file) => file.replace(".tsx", ""));

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0f] to-black text-gray-100 px-6 py-20 relative overflow-hidden font-mono">

      {/* Holographic Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-gradient-to-r from-purple-600/20 to-cyan-500/20 blur-[180px] opacity-50 -z-10" />

      {/* Tech Grid Background */}
      <div className="absolute inset-0 bg-[url('https://svgshare.com/i/13rC.svg')] bg-repeat opacity-10 -z-10" />

      {/* Page Title */}
      <h1 className="text-center text-4xl sm:text-5xl font-extrabold mb-8 tracking-tight">
        <span className="bg-gradient-to-r from-purple-300 via-white to-cyan-200 bg-clip-text text-transparent">
          {tool.replace(/-/g, " ")}
        </span>
        <span className="block text-xl sm:text-2xl mt-3 text-gray-300 tracking-widest">
          Available Services
        </span>
      </h1>

      {/* Service Cards */}
      {services.length === 0 ? (
        <p className="text-center text-gray-400 text-lg mt-10">
          No services found for this tool.
        </p>
      ) : (
        <section className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16">
          {services.map((service) => (
            <Link
              key={service}
              href={`/tools/${tool}/${service}`}
              className="group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)]
                hover:bg-white/10 hover:border-white/20 hover:scale-[1.05] transition-all duration-300 cursor-pointer"
            >
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2 capitalize">
                {service.replace(/-/g, " ")}
              </h2>

              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-all">
                Open this service to use its features instantly, without login or setup.
              </p>

              <div className="mt-5 text-cyan-300 opacity-70 group-hover:opacity-100 transition-all flex items-center gap-2">
                <span>Open Service</span>
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </section>
      )}

      {/* Back Button */}
      <div className="text-center mt-16">
        <Link
          href="/tools"
          className="inline-block px-8 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md 
           hover:bg-white/10 hover:border-white/20 transition-all duration-300"
        >
          ← Back to Tools
        </Link>
      </div>

      {/* Futuristic bottom neon lines */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-400/50 to-transparent blur-sm"></div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-cyan-500/40 to-purple-400/40 blur-sm"></div>

    </main>
  );
}
