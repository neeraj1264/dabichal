"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Menu, X, ChevronDown } from "lucide-react";
import { Dropdown } from "./Dropdown";
import { TopBar } from "./TopBar";

const NAV = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Taxi Ride",
    items: [
      { label: "Innova Hycross", href: "/taxi/hycross" },
      { label: "Honda Amaze", href: "/taxi/amaze" },
      { label: "Toyota Etios", href: "/taxi/etios" },
      { label: "Innova Crysta", href: "/taxi/crysta" },
      { label: "Maruti Dzire", href: "/taxi/dzire" },
      { label: "Maruti Ertiga", href: "/taxi/ertiga" },
      { label: "Kia Carens", href: "/taxi/carens" },
    ],
  },
  { 
    label: "Force Travellers",
    items: [
      { label: "12 Seater Tempo Traveller", href: "/taxi/airport" },
      { label: "17 Seater Tempo Traveller", href: "/taxi/airport" },
      { label: "12 Seater Urbania Traveller", href: "/taxi/airport" },
      { label: "12 Seater Urbania Traveller", href: "/taxi/airport" },
    ],

  },
  {
    label: "Himachal/Pilgrim",
    items: [
      { label: "Chandigarh With DharamShala", href: "/himachal/shimla" },
      { label: "Chandigarh Dalhousie DharamShala Tour", href: "/himachal/manali" },
      { label: "Chandigarh Dalhousie DharamShala Manali Chandigarh", href: "/himachal/pilgrim" },
      { label: "Chandigarh Shimla Manali Chandigarh", href: "/himachal/pilgrim" },
      { label: "Chandigarh Kasol Manali Chandigarh", href: "/himachal/pilgrim" },
      { label: "Pilgrim Tours", href: "/himachal/pilgrim" },

    ],
  },
  {
    label: "Ladakh/Kashmir",
    items: [
      { label: "Kashmir", href: "/ladakh" },
      { label: "Ladakh & Spiti", href: "/kashmir/srinagar" },
    ],
  },
  {
    label: "Outstation Routes",
    items: [
      { label: "Chandigarh To Shimla ", href: "/routes/delhi-chandigarh" },
      { label: "Chandigarh To Manali ", href: "/routes/delhi-chandigarh" },
      { label: "Chandigarh To Kasol", href: "/routes/delhi-chandigarh" },
      { label: "Chandigarh To Rishikesh ", href: "/routes/delhi-chandigarh" },
      { label: "Chandigarh To Dehradun ", href: "/routes/delhi-chandigarh" },
      { label: "Chandigarh To Ghaziabad ", href: "/routes/delhi-chandigarh" },
      { label: "Chandigarh To Jalandhar ", href: "/routes/delhi-chandigarh" },
      { label: "Chandigarh To Jammu ", href: "/routes/delhi-chandigarh" },
      { label: "Chandigarh To Katra ", href: "/routes/delhi-chandigarh" },
      { label: "Chandigarh To Srinagar ", href: "/routes/delhi-chandigarh" },
      { label: "Chandigarh To Dharamshala ", href: "/routes/delhi-chandigarh" },
      { label: "Chandigarh To Palampur ", href: "/routes/delhi-chandigarh" },
      { label: "Delhi To Chandigarh ", href: "/routes/delhi-chandigarh" },
      { label: "Delhi To Manali ", href: "/routes/delhi-chandigarh" },
      { label: "Delhi To Shimla ", href: "/routes/delhi-chandigarh" },
      { label: "Delhi To Jalandhar ", href: "/routes/delhi-chandigarh" },
      { label: "Delhi To Amritsar ", href: "/routes/delhi-chandigarh" },
      { label: "Delhi To Ludhiana ", href: "/routes/delhi-chandigarh" },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full">
       <TopBar />
      {/* top bars */}

      {/* main nav */}
      <nav className="bg-white border-b shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-14">
          <div className="flex h-20 items-center justify-between">
            {/* logo */}
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-3">
                <div className="h-28 w-32 relative overflow-hidden">
                  {/* put /logo.png in public/ */}
                  <Image src="/logo.png" alt="Dabbi Chal" fill sizes="48px" className="object-contain" />
                </div>
              </Link>
            </div>

            {/* center links */}
            <div className="hidden lg:flex lg:items-center font-bold text-base">
              {NAV.map((entry) =>
                entry.items ? (
                  <Dropdown key={entry.label} title={entry.label} items={entry.items} />
                ) : (
                  <Link key={entry.label} href={entry.href} className="py-3 px-2 text-base font-bold text-gray-800 hover:text-orange">
                    {entry.label}
                  </Link>
                )
              )}
            </div>

            {/* right CTA + mobile button */}
            <div className="flex items-center gap-3">
              <Link href="/contact" className="hidden md:inline-flex items-center rounded-full bg-[#f58220] px-5 py-2 text-white font-medium hover:opacity-95">
                Contact Us
              </Link>

              <button
                className="inline-flex items-center rounded-md p-2 lg:hidden"
                onClick={() => setMobileOpen((s) => !s)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t">
            <div className="px-4 py-4 space-y-2">
              {NAV.map((entry) => (
                <div key={entry.label}>
                  {entry.items ? (
                    <details className="group">
                      <summary className="flex items-center justify-between cursor-pointer py-2">
                        <span className="font-medium">{entry.label}</span>
                        <ChevronDown size={16} className="group-open:rotate-180 transition" />
                      </summary>
                      <div className="pl-4 pt-2">
                        {entry.items.map((it) => (
                          <Link key={it.href} href={it.href} className="block py-2 text-sm">
                            {it.label}
                          </Link>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <Link href={entry.href} className="block py-2 font-medium">
                      {entry.label}
                    </Link>
                  )}
                </div>
              ))}

              <Link href="/contact" className="block rounded-md bg-[#f58220] px-4 py-2 text-white text-center font-medium">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

