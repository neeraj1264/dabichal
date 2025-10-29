// src/app/outstation-routes/page.js
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import { outstationRoutes } from "@/app/components/data/tours"; // adjust path if needed
import Reveal from "@/app/components/reveal";
import Link from "next/link";

export const metadata = {
  title: "outstation",
  description: "outstation.....",
};

export default function OutstationList() {
  // render the whole array
  return (
    <section className="py-12 bg-white">
      <Reveal className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Outstation Routes
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4 md:px-12">
        {outstationRoutes.map((route) => (
          <Reveal
            key={route.slug}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image */}
            <div className="relative h-48">
              <Image
                src={route.image}
                alt={route.title}
                fill
                className="w-full object-cover"
              />
              {/* Tag Badge */}
              <span className="absolute top-2 right-2 bg-[#f58220] text-white text-xs font-semibold px-3 py-1 rounded">
                Outstation Routes
              </span>
            </div>

            {/* Content */}
            <div className="p-4 text-center">
              <h3 className="text-md font-medium text-gray-800 mb-3">
                {route.title}
              </h3>

              <Link href={`/outstation-routes/${route.slug}`}>
                <button className="group inline-flex items-center gap-2 bg-[#f58220] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-black transition-all duration-300">
                  Book Now
                  <FaChevronRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
