import Link from "next/link";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ tool: string; service: string }>;
}) {
  const { tool, service } = await params;

  let ServiceComponent: any = null;

  try {
    // Try to load the actual service file
    const mod = await import(`@/app/tools_data/${tool}/${service}.tsx`);
    ServiceComponent = mod.default;
  } catch (err) {
    // ❌ Component does NOT exist → leave ServiceComponent null
    ServiceComponent = null;
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0f] to-black text-gray-100 px-6 py-20 relative overflow-hidden font-mono">

      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-gradient-to-r from-purple-600/20 to-cyan-500/20 blur-[180px] opacity-50 -z-10" />

      {/* Grid BG */}
      <div className="absolute inset-0 bg-[url('https://svgshare.com/i/13rC.svg')] bg-repeat opacity-10 -z-10" />

      {/* Page Title */}
      <h1 className="text-center text-4xl sm:text-5xl font-extrabold mb-10 tracking-tight">
        <span className="bg-gradient-to-r from-purple-300 via-white to-cyan-200 bg-clip-text text-transparent capitalize">
          {tool.replace(/-/g, " ")}
        </span>
        <span className="block mt-3 text-2xl text-gray-300 capitalize">
          {service.replace(/-/g, " ")} Service
        </span>
      </h1>

      {/* MAIN CONTAINER */}
      <div
        className="max-w-4xl mx-auto mt-12 p-8 rounded-3xl bg-white/5 border border-white/10 
       backdrop-blur-xl shadow-[0_0_40px_rgba(255,255,255,0.08)]
       hover:shadow-[0_0_60px_rgba(255,255,255,0.12)] transition-all duration-500"
      >
        {ServiceComponent ? (
          <ServiceComponent />
        ) : (
          <div className="text-center py-20">
            <h2 className="text-3xl font-bold text-white mb-4">
              🚧 Under Construction
            </h2>
            <p className="text-gray-300 text-lg">
              The service <span className="text-cyan-300">{service}</span> does not exist yet.
            </p>

            <p className="text-gray-500 text-sm mt-4">
              Coming soon! In the meantime, explore other tools available on Utillect.
            </p>
          </div>
        )}
      </div>

      {/* Back Button */}
      <div className="text-center mt-16">
        <Link
          href={`/tools/${tool}`}
          className="inline-block px-8 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md 
            hover:bg-white/10 hover:border-white/20 transition-all duration-300"
        >
          ← Back to {tool.replace(/-/g, " ")}
        </Link>
      </div>

      {/* Futuristic Lines */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-400/50 to-transparent blur-sm"></div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-cyan-500/40 to-purple-400/40 blur-sm"></div>

    </main>
  );
}
