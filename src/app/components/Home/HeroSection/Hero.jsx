"use client";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: "./hero/hero1.jpg",
    title: "Welcome to Dabbi Chal Cab Service",
    subtitle:
      "Top-rated one-way taxi and travel solutions for safe, budget-friendly journeys.",
    button: "Explore now",
    navigate: "/about-us"
  },
  {
    id: 2,
    image: "./hero/hero2.jpg",
    title: "Taxi/One Way",
    subtitle: "Dependable one-way taxi services ensuring smooth and relaxing travel!",
    button: "Explore now",
    navigate: "/taxi-ride"
  },
  {
    id: 3,
    image: "./hero/hero3.jpg",
    title: "Tour & Travels Services",
    subtitle: "Expert travel and tour services for memorable and enjoyable experiences!",
    button: "Explore more",
    navigate: "/himachal-pilgrim"
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const router = useRouter();
  
  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // ✅ Auto play every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="relative w-full h-[35vh] sm:h-[90vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
            {/* Animate content */}
            <div
              className={`transform transition-all duration-1000 ease-out ${
                index === current
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h4 className="text-base sm:text-lg font-bold">
                {slide.title}
              </h4>
              <h1 className="text-base sm:text-7xl mb-4 max-w-5xl">
                {slide.subtitle}
              </h1>
             <Link className="group bg-orange px-6 py-2 rounded-full font-medium text-white inline-flex items-center gap-2 transition-all ease-in-out duration-500 hover:bg-white hover:text-black"
            //  onClick={() => router.push(slide.navigate)}
             href={slide.navigate}
             >
      {slide.button}
      <span className="transform transition-transform duration-500 group-hover:translate-x-2">
        <FaChevronRight />
      </span>
    </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 bg-orange p-3 rounded-sm text-white ease-in-out duration-500 hover:bg-white hover:text-black z-20"
      >
        <FaChevronLeft />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 bg-orange p-3 rounded-sm text-white ease-in-out duration-500 hover:bg-white hover:text-black z-20"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
