"use client";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Reveal from "../reveal";

export default function TaxiCabRide() {
  const cars = [
    { name: "Innova Hycross",img:  "./cab/cab1.jpg", to:"/taxi-ride/innova-hycross"},
    { name: "Toyota Etios",  img:  "./cab/cab2.jpg", to:"/taxi-ride/toyota-etios"},
    { name: "Innova Crysta", img:  "./cab/cab3.jpg", to:"/taxi-ride/innova-crysta"},
    { name: "Maruti Dzire",  img:  "./cab/cab4.jpg", to:"/taxi-ride/maruti-dzire"},
    { name: "Maruti Ertiga", img:  "./cab/cab5.jpg", to:"/taxi-ride/maruti-ertiga"},
    { name: "Kia Carens",    img:  "./cab/cab6.jpg", to:"/taxi-ride/kia-carens"},
  ];

  return (
    <section className="bg-[#eee] py-16">
      <div className="container mx-auto px-6">
        {/* Title */}
        <Reveal className="text-2xl sm:text-3xl font-bold text-center mb-12">
          Taxi/Cab Ride
        </Reveal>

        {/* Car Grid */}
        <Reveal className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
          {cars.map((car, index) => (
            <Reveal
              key={index}
  className="bg-white rounded-xl shadow-md hover:shadow-xl hover:bg-black hover:text-white 
             transition-all duration-500 ease-in-out overflow-hidden p-2 
             transform hover:-translate-y-3">
              {/* Image */}
              <img
                src={car.img}
                alt={car.name}
                className="w-[100%] h-28 sm:h-48 object-cover rounded-xl"
              />
              {/* Info */}
              <Reveal className="pt-2 sm:p-4 text-center">
                <h3 className="text-lg font-semibold mb-4">{car.name}</h3>
                <Link className="text-xs sm:text-lg group inline-flex items-center gap-2 bg-[#f58220] text-white px-5 py-2 rounded-full font-medium transition-all duration-300 hover:bg-white hover:text-[#f58220] border-2 border-[#f58220]"
                href={car.to}
                >
                  Book Now
                  <FaChevronRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </Reveal>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
