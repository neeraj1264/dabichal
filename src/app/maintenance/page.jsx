// app/maintenance/page.jsx
"use client";

import { Wrench, Sparkles } from "lucide-react";

export default function MaintenancePage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-black to-yellow-700 opacity-80 animate-pulse" />

      {/* Glass Card */}
      <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-10 max-w-lg text-center">

        {/* Animated Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-yellow-500/20 shadow-lg animate-pulse">
            <Wrench className="text-yellow-400" size={40} />
            <Sparkles
              className="absolute -top-2 -right-2 text-yellow-300 animate-bounce"
              size={18}
            />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold tracking-wide">
          Website Under Maintenance
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-gray-300 text-lg">
          We're upgrading your experience 🚀  
          Please check back shortly.
        </p>

        {/* Divider Glow */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent my-6" />

        {/* Contact Section */}
        <div className="space-y-2 text-sm text-gray-200">
          <p>
            📧{" "}
            <a
              href="mailto:neerajm1264@gmail.com"
              className="text-yellow-400 hover:text-yellow-300 transition"
            >
              neerajm1264@gmail.com
            </a>
          </p>

          <p>
            📞{" "}
            <a
              href="tel:+917015823645"
              className="text-yellow-400 hover:text-yellow-300 transition"
            >
              +91 7015823645
            </a>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 text-xs text-gray-400">
        © {new Date().getFullYear()} Sardar Ji Travels
      </footer>
    </main>
  );
}
