"use client";
import Link from "next/link";
import React from "react";
import { FaStar, FaChevronRight } from "react-icons/fa";
import Reveal from "../../reveal";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function WelcomeSection() {
  const pathname = usePathname();
  return (
    <section className="pt-16 sm:px-12 px-4 bg-white">
      <div className="container mx-auto sm:px-4 sm:grid md:grid-cols-2 gap-10">
        {/* Left Images */}
        <Reveal className="relative">
          {/* Experience Badge */}
          <div className=" absolute -top-0 left-0 sm:left-[61px] bg-[#f58220] text-white px-6 py-6 w-[270px] z-20">
            <h3 className="text-3xl font-bold">25+</h3>
            <p className="text-sm">Years Of Experience</p>
            <div className="flex gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-white text-sm" />
              ))}
            </div>

            {/* Rating Box */}
            <div className="hidden sm:block absolute top-0 right-0 bg-white text-[#f58220] border-2 border-[#f58220] px-3 py-1 font-semibold flex items-center">
              4.9 <FaStar className="ml-1 text-[#f58220]" />
            </div>
          </div>

          {/* Main Image */}

          <Image
            width={600} // must give width
            height={400}
            src="/welcome/welcome3.png"
            alt="Taxi Service"
            className="hidden sm:flex rounded-md shadow-lg absolute w-[77%] bottom-[18%]"
          />

          <Image
            width={600} // must give width
            height={400}
            src="/welcome/welcome1.jpg"
            alt="Taxi Service"
            className="rounded-md shadow-lg w-full sm:w-[75%] sm:absolute top-0 right-[12%] height-[80vh]"
          />

          {/* Small Image */}
          <Image
            width={600} // must give width
            height={400}
            src="/welcome/welcome2.jpg"
            alt="Taxi App"
            className=" absolute top-0 right-[-97px] sm:right-[-20%] transform -translate-x-1/2 w-[192px] sm:w-[250px] border-4 border-white shadow-lg"
          />
        </Reveal>

        {/* Right Text Content */}
        <div className="text-black py-4 sm:py-0">
          <Reveal className="text-orange font-semibold uppercase tracking-wider mb-2">
            Welcome to Sardar Ji Travels
          </Reveal>
          <Reveal className="text-2xl sm:text-2xl font-bold mb-4 ">
            Your Trusted Travel Partner In Chandigarh
          </Reveal>
          <Reveal className="text-paragraph mb-4">
            Sardar Ji Travels is a premier name in providing exceptional taxi services
            in Chandigarh. We specialize in offering seamless and hassle-free
            taxi rental services for both business and leisure travel, including
            local and outstation trips. Whether you’re planning a business trip,
            family vacation, or a special event, our goal is to make your travel
            experience as smooth and comfortable as possible.
          </Reveal>

          <Reveal className="text-xl font-semibold mb-2">
            Reliable And Flexible Taxi Services In Chandigarh
          </Reveal>
          <Reveal className="text-paragraph mb-4">
            At Sardar Ji Travels, we are proud to offer a wide range of taxi services
            designed to meet all your travel requirements. Our flexible rental
            options include one-way rentals, round trips, airport transfers, and
            guided tours, ensuring that your journey is efficient, timely, and
            convenient.
          </Reveal>

          <Reveal className="text-xl font-semibold mb-2">
            One-Way And Round-Trip Rentals
          </Reveal>
          <Reveal className="text-paragraph mb-4">
            We understand that travel needs vary, and that’s why we offer both
            one-way and round-trip rentals to cater to your specific
            requirements. Whether you’re looking for a one-way ride from
            Chandigarh to your destination or need a round-trip service, Dabbi
            Chal is here to provide tailored solutions that suit your
            preferences.
          </Reveal>

          <Reveal className="text-2xl sm:text-2xl font-bold mb-4 ">
            Airport Transfers Across North India
          </Reveal>
          <Reveal className="text-paragraph mb-4">
            Your flight schedule is important, and we make sure you never miss a
            flight. We provide dependable airport transfers to and from all
            airports across North India, ensuring timely
          </Reveal>
          {/* ✅ Show button only on home page */}
          {pathname === "/" && (
            <Link
              className="group inline-flex items-center gap-2 bg-[#f58220] text-white px-6 py-3 rounded-full font-medium transition-all duration-300 ease-in-out hover:bg-white hover:text-[#f58220] border-2 border-[#f58220]"
              href={"/about-us"}
            >
              Learn More Us
              <FaChevronRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
