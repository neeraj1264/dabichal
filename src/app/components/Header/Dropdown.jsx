"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export function Dropdown({ title, items }) {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const handleMouseEnter = () => {
    if (closing) {
      clearTimeout(closing);
      setClosing(false);
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    const timer = setTimeout(() => {
      setOpen(false);
    }, 200);
    setClosing(timer);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* parent link */}
      <button className="flex items-center gap-1 px-3 py-2 text-gray-800 hover:text-orange font-bold">
        {title}
        <ChevronDown size={16} className={`transition ${open ? "rotate-180" : ""}`} />
      </button>

      {/* dropdown menu with transition */}
      <div 
        className={`absolute left-0 mt-[1.3rem] w-60 bg-white shadow-dropdown border rounded-md z-50 transition-all duration-300 ease-out overflow-hidden ${
          open 
            ? "opacity-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div>
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="block px-4 py-2 text-gray-700 hover:bg-orange hover:text-white transition-colors duration-150 text-sm border-b leading-loose" 
            >
              {it.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}