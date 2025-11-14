"use client";

import { useState } from "react";
import { ServiceItem, servicesList } from "../services";
import Link from "next/link";

// ================= RELEVANCE SCORING FUNCTION =================
function relevanceScore(service: ServiceItem, term: string) {
  const t = term.toLowerCase();

  let score = 0;

  // Strong match: label includes search
  if (service.label.toLowerCase().includes(t)) score += 50;

  // Medium match: tool group contains search
  if (service.tool.toLowerCase().includes(t)) score += 30;

  // Weak match: name contains search
  if (service.name.toLowerCase().includes(t)) score += 20;

  // Bonus: shared characters for fuzzy-feel matching
  const uniqueSearchChars = [...new Set(t)];
  uniqueSearchChars.forEach((char) => {
    if (service.label.toLowerCase().includes(char)) {
      score += 1;
    }
  });

  return score;
}

export default function ToolSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState(servicesList); // show ALL by default

  // ===================== SEARCH HANDLER =====================
  const handleSearch = () => {
    const term = searchTerm.trim().toLowerCase();

    // Empty search → show ALL tools
    if (term === "") {
      setFiltered(servicesList);
      return;
    }

    // Rank all tools based on relevance score
    const ranked = [...servicesList]
      .map((service) => ({
        ...service,
        score: relevanceScore(service, term),
      }))
      .sort((a, b) => b.score - a.score); // Highest score first

    setFiltered(ranked);
  };

  return (
    <div>

      {/* ==================== SEARCH BAR SECTION ==================== */}
      <div className="max-w-3xl mx-auto mt-20 mb-2 px-6">
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl px-5 py-4 shadow-[0_0_20px_rgba(255,255,255,0.05)]">

          {/* Input */}
          <input
            type="text"
            placeholder="Search tools…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()} 
            className="w-full bg-transparent focus:outline-none text-gray-100 placeholder-gray-400"
          />

          {/* Button */}
          <button
            onClick={handleSearch}
            className="p-2 rounded-xl bg-gradient-to-r from-purple-600/70 to-cyan-500/70 
                       hover:scale-105 transition shadow-[0_0_15px_rgba(120,200,255,0.4)]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
          </button>

        </div>
      </div>

      {/* ==================== RESULTS GRID ==================== */}
      <section className="max-w-5xl mx-auto mt-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"> 

          {filtered.map((service) => (
            <Link
              key={`${service.tool}-${service.name}`}
              href={`/tools/${service.tool}/${service.name}`}
              target="_blank"
              className="
                group p-3 rounded-xl bg-white/5 border border-white/10 
                backdrop-blur-lg hover:bg-white/10 hover:border-white/20 
                shadow-[0_0_15px_rgba(255,255,255,0.04)] transition
              "
            >
              <h3 className="text-l font-semibold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                {service.label}
              </h3>

              <div className="mt-1 text-sm text-cyan-300 opacity-70 group-hover:opacity-100 transition flex items-center gap-2">
                <span>Open</span>
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </Link>
          ))}

          {filtered.length === 0 && (
            <p className="text-gray-400 col-span-full text-center text-sm">
              No tools found.
            </p>
          )}

        </div>
      </section>
    </div>
  );
}
