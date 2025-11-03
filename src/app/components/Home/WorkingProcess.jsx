"use client";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Reveal from "../reveal";

export default function WorkingProcess() {
  const steps = [
    { id: "01", text: "Complete Form" },
    { id: "02", text: "Select Taxi/Cab" },
    { id: "03", text: "Select Destination" },
    { id: "04", text: "Enjoy Ride" },
  ];

  return (
    <section
      className="relative text-white py-16 mt-16"
      style={{
        background:
          "radial-gradient(circle at left, #00132fff, #111111 60%), radial-gradient(circle at right, #00132fff, #111111 60%)",
        backgroundBlendMode: "screen",
      }}
    >
      <Reveal className="container mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-12">
          Our Working Process
        </h2>

        {/* Steps */}
        <Reveal className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 justify-items-center">
          {steps.map((step, index) => (
            <Reveal key={step.id} className="relative w-48 h-48 flex items-center justify-center">
              {/* Rotating Border */}
              <Reveal
                className="absolute inset-0 rounded-full border-2 border-dotted border-orange animate-spin-slow"
                style={{ animationDelay: `${index * 0.5}s` }}
              ></Reveal>

              {/* Step Number */}
              <Reveal className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange text-white w-10 h-10 flex items-center justify-center rounded-full font-bold">
                {step.id}
              </Reveal>

              {/* Step Text */}
              <p className="text-lg font-medium px-4 relative z-10">{step.text}</p>
            </Reveal>
          ))}
        </Reveal>

        {/* Button */}
        <div className="mt-12">
          <Link className="group inline-flex items-center gap-2 bg-orange px-8 py-3 rounded-xl text-white font-semibold transition-all duration-300 hover:bg-white hover:text-orange border-2 border-orange"
          href={"/taxi-ride"}
          >
            Book Taxi
            <FaChevronRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
