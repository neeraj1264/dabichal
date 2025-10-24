"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Menu, X, ChevronDown, Grid } from "lucide-react";
import { Dropdown } from "./Dropdown";
import { TopBar } from "./TopBar";
import { BsGridFill } from "react-icons/bs";

const NAV = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Taxi Ride",
    href:"/taxi-ride",
    items: [
      { label: "Innova Hycross", href: "/taxi-ride/innova-hycross" },
      { label: "Honda Amaze",    href: "/taxi-ride/honda-amaze" },
      { label: "Toyota Etios",   href: "/taxi-ride/toyota-etios" },
      { label: "Innova Crysta",  href: "/taxi-ride/innova-crysta" },
      { label: "Maruti Dzire",   href: "/taxi-ride/maruti-dzire" },
      { label: "Maruti Ertiga",  href: "/taxi-ride/maruti-ertiga" },
      { label: "Kia Carens",     href: "/taxi-ride/kia-carens" },
    ],
  },
  { 
    label: "Force Travellers",
    href: "/tempo-travellers",
    items: [
      { label: "12 Seater Tempo Traveller",   href: "/tempo-travellers/12-seater-tempo-traveller" },
      { label: "17 Seater Tempo Traveller",   href: "/tempo-travellers/17-seater-tempo-traveller" },
      { label: "12 Seater Urbania Traveller", href: "/tempo-travellers/12-seater-urbania-traveller" },
      { label: "17 Seater Urbania Traveller", href: "/tempo-travellers/17-seater-urbania-traveller" },
    ],

  },
  {
    label: "Himachal/Pilgrim",
    href: "/himachal-pilgrim",
    items: [
      { label: "Chandigarh With DharamShala", href: "/himachal-pilgrim/amritsar-with-dharamshala" },
      { label: "Chandigarh Dalhousie DharamShala Tour", href: "/himachal-pilgrim/amritsar-dalhousie-dharamshala-tour" },
      { label: "Chandigarh Dalhousie DharamShala Manali Chandigarh", href: "/himachal-pilgrim/amritsar-dalhousie-dharamshala-manali-chandigarh" },
      { label: "Chandigarh Shimla Manali Chandigarh", href: "/himachal-pilgrim/amritsar-shimla-manali-chandigarh" },
      { label: "Chandigarh Kasol Manali Chandigarh", href: "/himachal-pilgrim/chandigarh-kasol-manali-chandigarh" },
      { label: "Pilgrim Tours", href: "/himachal-pilgrim/pilgrim" },

    ],
  },
  {
    label: "Ladakh/Kashmir",
    href: "/ladakh-kashmir",
    items: [
      { label: "Kashmir", href: "/ladakh-kashmir/kashmir" },
      { label: "Ladakh & Spiti", href: "/ladakh-kashmir/ladakh-spiti" },
    ],
  },
  {
    label: "Outstation Routes",
    href: "/outstation-routes",
    items: [
      { label: "Chandigarh To Shimla ",     href: "/outstation-routes/chandigarh-to-shimla" },
      { label: "Chandigarh To Manali ",     href: "/outstation-routes/chandigarh-to-manali" },
      { label: "Chandigarh To Kasol",       href: "/outstation-routes/chandigarh-to-kasol" },
      { label: "Chandigarh To Rishikesh ",  href: "/outstation-routes/chandigarh-to-rishikesh" },
      { label: "Chandigarh To Dehradun ",   href: "/outstation-routes/chandigarh-to-dehradun" },
      { label: "Chandigarh To Ghaziabad ",  href: "/outstation-routes/chandigarh-to-ghaziabad" },
      { label: "Chandigarh To Jalandhar ",  href: "/outstation-routes/chandigarh-to-jalandhar" },
      { label: "Chandigarh To Jammu ",      href: "/outstation-routes/chandigarh-to-jammu" },
      { label: "Chandigarh To Katra ",      href: "/outstation-routes/chandigarh-to-katra" },
      { label: "Chandigarh To Srinagar ",   href: "/outstation-routes/chandigarh-to-srinagar" },
      { label: "Chandigarh To Dharamshala ",href: "/outstation-routes/chandigarh-to-dharamshala" },
      { label: "Chandigarh To Palampur ",   href: "/outstation-routes/chandigarh-to-palampur" },
      { label: "Delhi To Chandigarh ",      href: "/outstation-routes/delhi-to-chandigarh" },
      { label: "Delhi To Manali ",          href: "/outstation-routes/delhi-to-manali" },
      { label: "Delhi To Shimla ",          href: "/outstation-routes/delhi-to-shimla" },
      { label: "Delhi To Jalandhar ",       href: "/outstation-routes/delhi-to-jalandhar" },
      { label: "Delhi To Amritsar ",        href: "/outstation-routes/delhi-to-amritsar" },
      { label: "Delhi To Ludhiana ",        href: "/outstation-routes/delhi-to-ludhiana" },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full">
       <TopBar />
      {/* top bars */}

      {/* main nav */}
      <nav className={`w-full z-50 transition-all duration-300 ${
        isFixed
          ? "fixed top-0 left-0 bg-white shadow-lg"
          : "bg-white border-b shadow-sm"
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-14">
          <div className="flex h-20 items-center justify-between">
            {/* logo */}
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-3">
                <div className="h-28 w-32 relative overflow-hidden">
                  {/* put /logo.png in public/ */}
                  <Image src="/logo.png"  alt="Sardar Ji Travels" fill sizes="48px" className="object-contain" />
                </div>
              </Link>
            </div>

            {/* center links */}
            <div className="hidden lg:flex lg:items-center font-bold text-base">
              {NAV.map((entry) =>
                entry.items ? (
                  <Dropdown key={entry.label} title={entry.label} items={entry.items} />
                ) : (
                  <Link key={entry.label} href={entry.href} className="py-3 px-2 text-base font-bold text-black hover:text-orange">
                    {entry.label}
                  </Link>
                )
              )}
            </div>

            {/* right CTA + mobile button */}
            <div className="flex items-center gap-3">
              <Link href="/contact" className="hidden md:inline-flex items-center rounded-full bg-[#f58220] px-5 py-2 text-white font-medium hover:opacity-95 hover:bg-light hover:text-orange">
                Contact Us
              </Link>

              <button
                className="inline-flex items-center rounded-md p-2 lg:hidden text-black"
                onClick={() => setMobileOpen((s) => !s)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <BsGridFill size={20} color="#E20935"/>}
              </button>
            </div>
          </div>
        </div>

     {/* mobile menu (animated sidebar) */}
<div
  className={`fixed top-0 right-0 h-full w-3/4 bg-white shadow-xl z-[9999] transform transition-transform duration-300 ease-in-out ${
    mobileOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
  {/* header row with logo + close button */}
  <div className="flex items-center justify-between px-4 py-4">
    <div className="relative w-28 h-14">
      <Image src="/logo.png" alt="Sardar Ji Travels" sizes="48px" fill className="object-contain" />
    </div>
    <button onClick={() => setMobileOpen(false)} className="text-white bg-[#f58220] rounded-full p-2">
      <X size={20} />
    </button>
  </div>

  {/* menu items */}
  <div className="px-4 py-4 space-y-2 overflow-y-auto h-[calc(100%-5rem)] text-black">
    {NAV.map((entry) => (
      <div key={entry.label}>
        {entry.items ? (
          <details className="group border-b border-gray py-2 font-semibold">
            <summary className="flex items-center justify-between cursor-pointer list-none font-medium">
             <Link
      href={entry.href}
      className="flex-1"
      onClick={() => setMobileOpen(false)}
    >
      {entry.label}
    </Link>
                {/* Chevron stays only for toggle */}
    <ChevronDown
      size={16}
      className="transition group-open:rotate-180 ml-2"
      onClick={(e) => {
        e.preventDefault(); // stop Link navigation
        const parent = e.currentTarget.closest("details");
        parent?.toggleAttribute("open");
      }}
    />
            </summary>
            <div className="pl-4 pt-2 space-y-1">
              {entry.items.map((it) => (
                <Link
                  key={it.href}
                  href={it.href}
                  className="block py-2 text-sm hover:text-orange"
                  onClick={() => setMobileOpen(false)}
                >
                  {it.label}
                </Link>
              ))}
            </div>
          </details>
        ) : (
          <Link
            href={entry.href}
            className="block py-2 border-b border-gray font-semibold"
            onClick={() => setMobileOpen(false)}
          >
            {entry.label}
          </Link>
        )}
      </div>
    ))}

    <Link
      href="/contact"
      className="block mt-4 rounded-md bg-[#f58220] px-4 py-2 text-white text-center font-medium"
      onClick={() => setMobileOpen(false)}
    >
      Contact Us
    </Link>
  </div>
</div>

      </nav>
    </header>
  );
}
