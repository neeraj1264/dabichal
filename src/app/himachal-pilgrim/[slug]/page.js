import Image from "next/image";
import React from "react";

// ✅ All tours data here (can later move to DB / JSON)
const tours = {
  "amritsar-with-dharamshala": {
    title: "Chandigarh With DharamShala",
    description:
      "Explore Chandigarh with a visit to Dharamshala. Includes local sightseeing and comfortable transport.",
    image: "/routes/routes1.jpg",
  },
  "amritsar-dalhousie-dharamshala-tour": {
    title: "Chandigarh Dalhousie DharamShala Tour",
    description:
      "A complete Himachal experience covering Dalhousie, Dharamshala, and surrounding attractions.",
    image: "/routes/routes1.jpg",
  },
  "amritsar-dalhousie-dharamshala-manali-chandigarh": {
    title: "Chandigarh Dalhousie DharamShala Manali Chandigarh",
    description:
      "A 7-day journey covering Dalhousie, Dharamshala, Manali, and Chandigarh with comfortable stay.",
    image: "/routes/routes1.jpg",
  },
  "amritsar-shimla-manali-chandigarh": {
    title: "Chandigarh Shimla Manali Chandigarh",
    description:
      "Shimla + Manali trip from Chandigarh with all major tourist attractions.",
    image: "/routes/routes1.jpg",
  },
  "chandigarh-kasol-manali-chandigarh": {
    title: "Chandigarh Kasol Manali Chandigarh",
    description:
      "Kasol & Manali adventure package with trekking, riverside camping, and cozy stays.",
    image: "/routes/routes1.jpg",
  },
  pilgrim: {
    title: "Pilgrim Tours",
    description:
      "Special religious tours including temples, monasteries, and sacred destinations.",
    image: "/routes/routes1.jpg",
  },
};

export default function TourPage({ params }) {
  const { slug } = params;
  const tour = tours[slug];

  if (!tour) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold text-red-600">Tour Not Found</h1>
        <p className="mt-4">Please check the link or go back to Himachal/Pilgrim.</p>
      </div>
    );
  }

  return (
    <section className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{tour.title}</h1>
      <Image
        src={tour.image}
        alt={tour.title}
        className="rounded-lg shadow-lg mb-6"
        width={400}
        height={300}
      />
      <p className="text-lg text-gray-700">{tour.description}</p>
    </section>
  );
}
