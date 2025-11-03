import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import Reveal from "../components/reveal";

export const metadata = {
  title: 'About Us',
  description: 'About Us.....',
};

export default function TempoTravellerPage() {
  const cars = [
    { name: "12 Seater Tempo Traveller",img:  "/tempo/t1.jpg", to:"/tempo-travellers/12-seater-tempo-traveller/"},
    { name: "17 Seater Tempo Traveller",  img:  "/tempo/t2.jpg", to:"/tempo-travellers/17-seater-tempo-traveller/"},
    { name: "12 Seater Urbania Traveller", img:  "/tempo/t3.jpg", to:"/tempo-travellers/12-seater-urbania-traveller/"},
    { name: "17 Seater Urbania Traveller",  img:  "/tempo/t4.jpg", to:"/tempo-travellers/17-seater-urbania-traveller/"},
  ];

  return (
    <section className="bg-[#eee] py-16">
      <div className="container mx-auto px-6">
        {/* Title */}
        <Reveal className="text-2xl sm:text-3xl font-bold text-center mb-12">
          Force Travellers
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
              <Image
               width={600} // must give width
               height={400}
                src={car.img}
                alt={car.name}
                className="w-[100%] h-28 sm:h-48 object-cover rounded-xl"
              />
              {/* Info */}
              <Reveal className="pt-2 sm:p-4 text-center">
                <h3 className="text-lg font-semibold mb-4">{car.name}</h3>
                <Link className="text-xs sm:text-lg group inline-flex items-center gap-2 bg-orange text-white px-5 py-2 rounded-full font-medium transition-all duration-300 hover:bg-white hover:text-orange border-2 border-orange"
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