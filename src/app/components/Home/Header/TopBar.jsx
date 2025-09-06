"use client";
import React, { useState } from "react";
import { Mail, Phone, Menu, X, ChevronDown } from "lucide-react";
import {  FaFacebookF, FaInstagram } from "react-icons/fa";

// TopBar row with angled divider (no custom CSS needed)
export function TopBar() {
  return (
    <div className="flex w-full h-10">
      {/* LEFT: Orange block with angled wedge */}
      <div className="hidden md:flex relative w-1/3 bg-orange text-white flex items-center justify-center px-4 sm:px-6 overflow-visible">
        <span className="text-lg font-medium">Dabbi Chal Cab Service</span>

        {/* the wedge (same orange) overlapping into the black area */}
        <span
          aria-hidden
          className="pointer-events-none absolute top-0 -right-5 h-full w-12 bg-orange skew-x-[22deg] origin-left z-10"
        />
      </div>

      {/* RIGHT: Black block */}
      <div className="flex-1 bg-black text-white text-sm flex items-center justify-center px-1 md:px-4 sm:px-6">
        <div className="flex items-center gap-6">
          <a href="mailto:neerajm1264@gmail.com" className="inline-flex items-center gap-2 hover:opacity-80 hidden sm:inline">
            <Mail size={14} aria-hidden className=" sm:inline"/>
            <span className="hidden sm:inline mx-2">neerajm1264@gmail.com</span>
          </a>
          <a href="tel:+917015823645" className="inline-flex items-center gap-2 hover:opacity-80">
            <Phone size={14} aria-hidden />
            <span className=" sm:inline">+91 7015823645</span>
          </a>
          <a href="tel:+917015516336" className="inline-flex items-center gap-2 hover:opacity-80">
            <Phone size={14} aria-hidden className="hidden sm:inline"/>
            <span className="sm:inline">+91 7015516336</span>
          </a>
          <a href="https://www.facebook.com/neeraj.manchanda.3910" className="text-xl">
             <FaFacebookF  className="hover:text-blue-600" />
          </a>
          <a href="https://www.instagram.com/neeraj_1264/?igsh=NDJweXlyc2syYnZr#" className="text-xl">
          <FaInstagram className="hover:text-pink-500" />
          </a>
        </div>
      </div>
    </div>
  );
}

