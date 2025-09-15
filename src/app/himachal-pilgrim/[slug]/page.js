import React from "react";

// ✅ All tours data here (can later move to DB / JSON)
const tours = {
  "amritsar-with-dharamshala": {
    title: "Chandigarh With DharamShala",
    description:
      "Explore Chandigarh with a visit to Dharamshala. Includes local sightseeing and comfortable transport.",
    image: "/himachal/amritsar-dharamshala.jpg",
  },
  "amritsar-dalhousie-dharamshala-tour": {
    title: "Chandigarh Dalhousie DharamShala Tour",
    description:
      "A complete Himachal experience covering Dalhousie, Dharamshala, and surrounding attractions.",
    image: "/himachal/dalhousie-dharamshala.jpg",
  },
  "amritsar-dalhousie-dharamshala-manali-chandigarh": {
    title: "Chandigarh Dalhousie DharamShala Manali Chandigarh",
    description:
      "A 7-day journey covering Dalhousie, Dharamshala, Manali, and Chandigarh with comfortable stay.",
    image: "/himachal/dalhousie-manali.jpg",
  },
  "amritsar-shimla-manali-chandigarh": {
    title: "Chandigarh Shimla Manali Chandigarh",
    description:
      "Shimla + Manali trip from Chandigarh with all major tourist attractions.",
    image: "/himachal/shimla-manali.jpg",
  },
  "chandigarh-kasol-manali-chandigarh": {
    title: "Chandigarh Kasol Manali Chandigarh",
    description:
      "Kasol & Manali adventure package with trekking, riverside camping, and cozy stays.",
    image: "/himachal/kasol-manali.jpg",
  },
  pilgrim: {
    title: "Pilgrim Tours",
    description:
      "Special religious tours including temples, monasteries, and sacred destinations.",
    image: "/himachal/pilgrim.jpg",
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
      <img
        src={tour.image}
        alt={tour.title}
        className="rounded-lg shadow-lg mb-6"
      />
      <p className="text-lg text-gray-700">{tour.description}</p>
    </section>
  );
}
