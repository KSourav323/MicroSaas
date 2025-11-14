// components/AdBlock.tsx
"use client";

import Script from "next/script";

export default function AdBlock({
  slotId = "utillect-ad-slot",
  height = 250,
  width = 300,
  network = "adsterra",
  adKey = "",
}) {
  return (
    <div className="my-12 w-full flex justify-center">
      <div
        style={{ width, height }}
        className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl p-4 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.06)]"
      >
        <div id={slotId} className="text-gray-500 text-xs">
          Loading ad…
        </div>
      </div>

      {/* Ad Script */}
      {network === "adsterra" && (
        <Script id={`ad-script-${slotId}`} strategy="afterInteractive">
          {`
            atOptions = {
              'key' : '${adKey}',
              'format' : 'iframe',
              'height' : ${height},
              'width' : ${width},
              'params' : {}
            };
            document.getElementById("${slotId}").innerHTML =
              '<scr' + 'ipt type="text/javascript" src="http://www.highperformanceformat.com/' +
              atOptions.key + '/invoke.js"></scr' + 'ipt>';
          `}
        </Script>
      )}
    </div>
  );
}
