"use client";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function WorkingProcess() {
  const steps = [
    { id: "01", text: "Complete Form" },
    { id: "02", text: "Select Taxi/Cab" },
    { id: "03", text: "Select Destination" },
    { id: "04", text: "Enjoy Ride" },
  ];

  return (
    <section
      className="relative text-white py-16"
      style={{
        background:
          "radial-gradient(circle at left, #00132fff, #111111 60%), radial-gradient(circle at right, #00132fff, #111111 60%)",
        backgroundBlendMode: "screen",
      }}
    >
      <div className="container mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-12">
          Our Working Process
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 justify-items-center">
          {steps.map((step, index) => (
            <div key={step.id} className="relative w-48 h-48 flex items-center justify-center">
              {/* Rotating Border */}
              <div
                className="absolute inset-0 rounded-full border-2 border-dotted border-[#f58220] animate-spin-slow"
                style={{ animationDelay: `${index * 0.5}s` }}
              ></div>

              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#f58220] text-white w-10 h-10 flex items-center justify-center rounded-full font-bold">
                {step.id}
              </div>

              {/* Step Text */}
              <p className="text-lg font-medium px-4 relative z-10">{step.text}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12">
          <Link className="group inline-flex items-center gap-2 bg-[#f58220] px-8 py-3 rounded-xl text-black font-semibold transition-all duration-300 hover:bg-white hover:text-[#f58220] border-2 border-[#f58220]"
          href={"/taxi-ride"}
          >
            Book Taxi
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
