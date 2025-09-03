"use client";

import React from 'react';
import { usePathname } from "next/navigation";
import HeroSection from '../components/HeroSection';
import Image from "next/image";

export default function ServicesPage() {

      const pathname = usePathname();
    
 const offerings = [
  {
    title: "Personal Care",
    image: "/services/s1.jpg",
    color: "text-pink",
    description:
      "Offering respectful assistance with personal activities to maintain comfort and hygiene.",
    points: [
      "Personalised support plans that respect your privacy and preferences.",
      "Assistance includes bathing, dressing, grooming, and mobility support.",
      "Promotes personal independence while ensuring dignity and respect.",
    ],
  },
  {
    title: "Travel and Transport",
    image: "/services/s2.jpg",
    color: "text-pink",
    description:
      "Facilitating access to the community, work, and educational settings through supportive travel arrangements.",
    points: [
      "Safe and reliable transportation to support independence in daily activities.",
      "Customised travel solutions for appointments, social events, and work.",
      "Encourages greater social inclusion and community participation.",
    ],
  },
  {
    title: "Accessing Employment",
    image: "/services/s3.jpg",
    color: "text-pink",
    description:
      "Providing support to find and maintain employment, including job-seeking assistance and workplace adaptation.",
    points: [
      "Personalised employment planning and job-seeking support.",
      "Assistance with CV writing, interview preparation, and workplace adjustments.",
      "Supports sustainable employment through ongoing workplace support and advocacy.",
    ],
  },
  {
    title: "Life Stage Transitions",
    image: "/services/s4.jpg",
    color: "text-pink",
    description:
      "Offering guidance and support through various life transitions, including school to work, moving to new living arrangements, and ageing.",
    points: [
      "Personalised support during significant life changes to ensure a smooth transition.",
      "Planning and assistance with moving to new living arrangements.",
      "Support for school leavers transitioning to work or further education.",
    ],
  },{
    title: "Shared Living and Daily Tasks",
    image: "/services/s5.jpg",
    color: "text-pink",
    description:
      "Supporting participants in shared living environments with daily tasks and promoting independence in home life. ",
    points: [
      "Assistance with organising and maintaining shared living spaces.",
      "Support with daily tasks to foster a cooperative and supportive living environment.",
      "Promotes independence and social skills in a shared living setting.",
    ],
  },{
    title: "Community Participation",
    image: "/services/s6.jpg",
    color: "text-pink",
    description:
      "Encouraging and facilitating involvement in social, community, and civic activities to enhance social interactions and community engagement.",
    points: [
      "Facilitates connections with local groups and activities aligned to interests.",
      "Support in developing and maintaining friendships and social networks.",
      "Encourages active participation in community events and civic activities.",
    ],
  },{
    title: "Group Based Activities",
    image: "/services/s7.jpg",
    color: "text-pink",
    description:
      "Providing opportunities for participants to engage in group activities and programs within centre-based settings for skill development and social interaction.",
    points: [
      "A variety of group activities designed to suit diverse interests and abilities.",
      "Opportunities to learn new skills and hobbies in a supportive group setting.",
      "Promotes socialisation and community involvement through structured programs.",
    ],
  },{
    title: "Household Tasks",
    image: "/services/s8.jpg",
    color: "text-pink",
    description:
      "Assistance with household tasks to maintain a safe and clean living environment, including waste management and meal preparation.",
    points: [
      "Support with daily and weekly household chores to maintain a healthy living environment.",
      "Assistance with meal planning and preparation, aligned to dietary needs and preferences.",
      "Encourages the development of domestic skills and independence in household management. ",
    ],
  },{
    title: "Medication Management",
    image: "/services/s9.jpg",
    color: "text-pink",
    description:
      "Supporting participants with the management of medication under the supervision and advice of healthcare professionals.",
    points: [
      "Ensures safe and accurate medication management as per healthcare professional's advice.",
      "Assistance with organising and reminding about medication schedules.",
      "Supports participants in understanding their medication and health needs. ",
    ],
  },
];

  return (
    <>
        {pathname === "/services" && <HeroSection />}

     <section className="bg-light py-16 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="font-bold text-paragraph mb-2 text-lg">
          Treasured Care For You </h2>
          <h2 className="text-black font-bold text-5xl mb-12">What We Offer</h2>

        {/* Card Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {offerings.map((item, index) => (
            <div
              key={index}
              className="bg-light rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-56 object-cover"
              />
              <div className="py-6">
                <h6 className={`${item.color} font-semibold text-xl mb-2`}>
                  {item.title}
                </h6>
                <p className="text-paragraph text-lg mb-3">{item.description}</p>
                <ul className="list-disc text-lg text-paragraph pl-5 space-y-1">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

     <section className="bg-[#C4559C] text-white py-32 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center">
        {/* Text Content */}
        <div className="max-w-[42rem]">
          <h3 className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left">Get Started Today</h3>
          <p className="text-lg leading-relaxed">
          At Treasured Care For You, we believe in empowering individuals to lead fulfilling lives with the support and care personalised just for them. Discover how &quot;Treasured Care For You&quot; can support your journey to greater independence and community participation.
          </p>
        </div>

        {/* Button */}
        <a
          href="/contact"
          className="bg-white text-[#333] font-semibold py-3 px-8 mt-8 md:mt-0 mx-auto w-[100%] md:w-fit text-center rounded-full shadow-md hover:scale-105 transition-transform duration-200"
        >
          Contact Us
        </a>
      </div>
    </section>
      </>
    );
  }
  