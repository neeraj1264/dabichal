"use client";

import { FaPencilAlt } from "react-icons/fa";
import { LiaHandPeaceSolid } from "react-icons/lia";
import { MdGroups2 } from "react-icons/md";

export default function ExperienceSection() {
  const items = [
    {
      icon: <LiaHandPeaceSolid className="text-white w-10 h-10" />,
      title: "Two Decades of Experience",
      description:
        "Over 22 years of dedication to supporting individuals, backed by genuine understanding and expertise.",
    },
    {
      icon: <FaPencilAlt className="text-white w-10 h-10" />,
      title: "Personalised Care Plans",
      description:
        "Personalised support that respects your individuality and promotes your independence.",
    },
    {
      icon: <MdGroups2 className="text-white w-10 h-10" />,
      title: "Empowering Community Involvement",
      description:
        "A strong focus on fostering community connections and meaningful participation.",
    },
  ];

  return (
    <section className="relative bg-[url('/contact.jpg')] bg-cover bg-center bg-no-repeat py-16 px-4 sm:px-8 lg:px-20">
      {/* Overlay */}
      <div className="absolute inset-0 bg-pink opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 py-16">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-light rounded-lg shadow-lg p-10 flex flex-col "
          >
            <div className="bg-pink p-4 rounded-full w-[80px] h-[80px] flex items-center justify-center mb-4">
              {item.icon}{" "}
            </div>
            <div className="text-lg font-semibold text-gray-900 mb-2 font-heading">
              {item.title}
            </div>
            <div className="text-paragraph font-heading font-normal text-lg">{item.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
