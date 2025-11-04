import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Reveal from "../reveal";
import Image from "next/image";
import Link from "next/link";

const tours = [
  {
    id: 1,
    title: "Srinagar Tour 6 Days",
    image:
      "/services/s1.jpg",
    tag: "5 NIGHTS / 6 DAYS",
    to: "/ladakh-kashmir/kashmir/srinagar-tour-6-days"
  },
  {
    id: 2,
    title: "Jammu Srinagar Gulmarg Sonmarg Pahalgam Tour 8 Days",
    image:
      "/services/s2.jpg",
    tag: "8 NIGHTS / 9 DAYS",
    to: "/ladakh-kashmir/kashmir/jammu-srinagar-gulmarg-pahalgam-9-days"
  },
  {
    id: 3,
    title: "Chandigarh Amritsar Jammu Srinagar 8 Days",
    image:
      "/services/s3.jpg",
    tag: "7 NIGHTS / 8 DAYS",
    to:"/ladakh-kashmir/kashmir/Chandigarh-Amritsar-jammu-Srinagar-8-days"
  },
  {
    id: 4,
    title: "9 Days Spiti Valley Tour",
    image:
      "/services/s4.jpg",
    tag: "8 NIGHTS / 9 DAYS",
    to: "/ladakh-kashmir/ladakh-spiti/9-Days-Spiti-Valley-Tour"
  },
   {
    id: 5,
    title: "Leh Ladakh Tour From Chandigarh",
    image:
      "/ladakh/l1.jpg",
    tag: "12 NIGHTS / 13 DAYS",
    to: "/ladakh-kashmir/ladakh-spiti/Leh-Ladakh-Tour-From-Chandigarh"
  },
  {
    id: 6,
    title: "Chandigarh to Spiti Valley Tour",
    image:
      "/ladakh/l4.jpg",
    tag: "9 NIGHTS / 10 DAYS",
    to: "/ladakh-kashmir/ladakh-spiti/Chandigarh-to-Spiti-Valley-Tour"
  },
];

export default function TourServices() {
  return (
    <section className="py-12 bg-white">
      <Reveal className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Tour And Travels Services
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4 md:px-12">
        {tours.map((tour) => (
          <Reveal
            key={tour.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image */}
            <Reveal className="relative">
              <Image
                width={600} // must give width
                height={400}
                src={tour.image}
                alt={tour.title}
                className="w-full object-cover"
              />
              {/* Tag Badge */}
              <span className="absolute top-2 right-2 bg-orange text-white text-xs font-semibold px-3 py-1 rounded">
                {tour.tag}
              </span>
            </Reveal>

            {/* Content */}
            <Reveal className="p-4 text-center">
              <h3 className="text-md font-medium text-gray-800 mb-3">
                {tour.title}
              </h3>
              <Link href={tour.to} className="group inline-flex items-center gap-2 bg-orange text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-black transition-all duration-300">
                Explore More
                <FaChevronRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Reveal>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
