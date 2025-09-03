"use client";

import React from "react";
import { usePathname } from "next/navigation";
import HeroSection from "../components/HeroSection";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function ResourcesPage() {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/resources" && <HeroSection />}

      <section className="bg-[#f8f8f9] py-24 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left Image */}
          <div className="md:w-1/2">
            <Image
              src="/resources/r1.jpg"
              alt="How to Apply for NDIS"
              width={600}
              height={400}
              className="rounded-2xl shadow-md"
            />
          </div>

          {/* Right Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#be3b88] mb-6 leading-snug font-heading">
              How do I apply for the <br />
              <span className="text-[#be3b88]">NDIS?</span>
            </h2>
            <ul className="text-paragraph text-lg leading-relaxed space-y-2">
              <li>• Start by checking your eligibility on the NDIS website.</li>
              <li>
                • Gather required documents that demonstrate your disability and
                how it impacts your life.
              </li>
              <li>
                • Submit your application to the National Disability Insurance
                Agency (NDIA). You can do this online, over the phone, or in
                person at an NDIS office.
              </li>
              <li>
                • An NDIA planner will contact you to discuss your application
                and help develop your personalised plan.
              </li>
            </ul>

            <div className="mt-8">
              <Link
                href="https://www.ndis.gov.au/applying-access-ndis/how-apply"
                className="
    inline-block
    bg-pink
    text-white
    font-semibold
    py-3
    px-6
    rounded-full
    shadow
    transition
    duration-300
    ease-in-out
    transform
    hover:-translate-y-1
    hover:bg-[#bb3f8d]
    flex items-center justify-center gap-2
    w-[100%]
    md:w-fit
  "
              >
                Learn More <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f8f9] py-24 px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          {/* Text - Second on mobile, first on large screens */}
          <div className="order-2 lg:order-1 w-full lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#be3b88] mb-6 leading-snug font-heading">
              Who is eligible for the <br />
              <span className="text-[#be3b88]">NDIS?</span>
            </h2>
            <ul className="text-paragraph text-lg leading-relaxed space-y-2">
              <li>• You must be under 65 years of age when you apply.</li>
              <li>
                • Be an Australian citizen, a permanent resident, or hold a
                Protected Special Category Visa.
              </li>
              <li>
                • Have a permanent and significant disability that affects your
                ability to take part in everyday activities.
              </li>
            </ul>

            <div className="mt-8">
              <Link
                href="https://www.ndis.gov.au/applying-access-ndis/am-i-eligible"
                className="
            inline-block
            bg-pink
            text-white
            font-semibold
            py-3
            px-6
            rounded-full
            shadow
            transition
            duration-300
            ease-in-out
            transform
            hover:-translate-y-1
            hover:bg-[#bb3f8d]
            flex items-center justify-center gap-2
            w-[100%]
            md:w-fit
          "
              >
                Learn More <FaArrowRight />
              </Link>
            </div>
          </div>

          {/* Image - First on mobile, second on large screens */}
          <div className="order-1 lg:order-2 w-full lg:w-1/2">
            <Image
              src="/resources/r2.jpg"
              alt="How to Apply for NDIS"
              width={600}
              height={400}
              className="rounded-2xl shadow-md w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f8f8f9] py-24 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left Image */}
          <div className="md:w-1/2">
            <Image
              src="/resources/r3.jpg"
              alt="How to Apply for NDIS"
              width={600}
              height={400}
              className="rounded-2xl shadow-md"
            />
          </div>

          {/* Right Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#be3b88] mb-6 leading-snug font-heading">
              How is Funding <br />
              <span className="text-[#be3b88]">Determined?</span>
            </h2>
            <ul className="text-paragraph text-lg leading-relaxed space-y-2">
              <li>
                • Your NDIS funding is based on what is reasonable and necessary
                for your needs, taking into account any support you are
                receiving from family, friends, and other community and
                government services.
              </li>
              <li>
                • it covers a range of supports and services, including
                education, employment, social participation, independence,
                living arrangements, and health and wellbeing.
              </li>
              <li>
                • It&apos;s important to regularly review your plan to ensure it
                continues to meet your needs.
              </li>
            </ul>

            <div className="mt-8">
              <Link
                href="https://www.ndis.gov.au/participants/creating-your-plan/plan-budget-and-rules#:~:text=Your%20funding%20is%20based%20on,funded%20in%20your%20NDIS%20plan"
                className="
    inline-block
    bg-pink
    text-white
    font-semibold
    py-3
    px-6
    rounded-full
    shadow
    transition
    duration-300
    ease-in-out
    transform
    hover:-translate-y-1
    hover:bg-[#bb3f8d]
    flex items-center justify-center gap-2
    w-[100%]
    md:w-fit
  "
              >
                Learn More <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-pink text-white py-24 px-8 text-center">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
      How Can Treasured <br className="hidden sm:block" /> Care For You Help?
    </h2>
    <p className="text-lg sm:text-xl leading-relaxed font-medium">
      At Treasured Care For You, we understand the importance of having the right
      information and support when navigating the NDIS. Our team is here to assist
      you with understanding your plan, ensuring you get the most out of your
      funding, and connecting you with the services that best suit your needs.
    </p>
  </div>
</section>

    </>
  );
}
