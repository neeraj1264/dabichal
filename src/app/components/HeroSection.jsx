"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";

export default function HeroSection() {
  const pathname = usePathname();

  const routeConfig = {
    "/": {
      heading: "Welcome to Treasured Care for you",
      para: "We ensure every individual is a valued member of our community, and every support plan is as unique as you are. With over two decades of experience in support work and a deep, personal connection to the NDIS, we're here to empower you and your loved ones to live life to its fullest potential.",
      image: "/welcome.jpeg",
    },
    "/services": {
       heading: "Our Services",
       para: "At Treasured Care For You, we pride ourselves on offering a broad spectrum of NDIS support services personalised to meet the unique needs and aspirations of our participants. Our approach is grounded in respect, compassion, and a deep commitment to fostering independence and community engagement.",
       image: "/services.jpg" 
    },
    "/resources": {
      heading: "Understanding the NDIS",
      para: "The NDIS is a revolutionary approach to providing support for Australians with disability, their families, and carers. It recognises that everyone's needs and goals are different and provides customisable support packages to help individuals achieve their personal aspirations and participate actively in the community.",
      image: "/resources.jpg",
    },
    "/about": {
      heading: "About Us",
      para: "",
      image: "/about.jpg"
    },
    "/contact": {
      heading: "We're Here to Support Your Journey",
      para: "At Treasured Care For You, we understand that every journey is unique, and sometimes you might need a bit of guidance along the way. Whether you have questions about our services, need assistance with your NDIS plan, or simply want to learn more about how we can support you or your loved ones, our friendly team is here to help. ",
      image: "/contact.jpg",
    },
  };

  const { heading, para, image } = routeConfig[pathname] || routeConfig["/"];

  return (
    <section
      className={`
        relative w-full 
        h-[100vh] 
        position-bottom
        sm:h-[100vh]
        md:h-screen 
        bg-cover bg-no-repeat bg-center
        flex items-center
        before:content-[''] before:absolute before:inset-0 before:bg-black/40
      `}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="relative max-w-3xl md:ml-16  px-4 text-white">
        <h1 className="text-5xl md:text-6xl font-bold font-heading">
          {heading}
        </h1>
        <p className="mt-8 text-base sm:text-lg md:text-xl font-heading">
          {para}
        </p>

<div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
  {pathname === "/resources" ? (
    // Show only Learn More
    <Link
      href="https://www.ndis.gov.au/"
      className="
        bg-pink
        text-white
        font-semibold
        py-4 px-8
        rounded-full
        shadow
        transform
        transition
        duration-300
        ease-in-out
        hover:-translate-y-1
        hover:bg-[#bb3f8d]
        flex items-center justify-center gap-2
      "
    >
      Learn More <FaArrowRight />
    </Link>
  ) : pathname === "/contact" ? (
    // Show only About Us
    <Link
      href="/about"
      className="
        bg-pink
        text-white
        font-semibold
        py-4 px-8
        rounded-full
        shadow
        transform
        transition
        duration-300
        ease-in-out
        hover:-translate-y-1
        hover:bg-[#bb3f8d]
        flex items-center justify-center gap-2
      "
    >
      About Us <FaArrowRight />
    </Link>
  ) : (
    // Default: show both Contact and About
    <>
      <Link
        href="/contact"
        className="
          bg-pink
          text-white
          font-semibold
          py-4 px-8
          rounded-full
          shadow
          transform
          transition
          duration-300
          ease-in-out
          hover:-translate-y-1
          hover:bg-[#bb3f8d]
          flex items-center justify-center gap-2
        "
      >
        Contact Us <FaArrowRight />
      </Link>

      <Link
        href="/about"
        className="
          md:ml-6
          bg-lightpink
          text-pink
          font-semibold
          py-4 px-8
          rounded-full
          shadow
          transform
          transition
          duration-300
          ease-in-out
          hover:-translate-y-1
          hover:bg-[#e8b9d7]
          text-center
        "
      >
        About Us
      </Link>
    </>
  )}
</div>


      </div>
    </section>
  );
}
