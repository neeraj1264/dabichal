import {
  himachalPilgrimTours,
  ladakhKashmirTours,
  outstationRoutes,
} from "@/app/components/data/tours";
import Image from "next/image";
import React from "react";

const categories = {
  "himachal-pilgrim": himachalPilgrimTours,
  "ladakh-kashmir": ladakhKashmirTours,
  "outstation-routes": outstationRoutes,
};

export default function TourPage({ params }) {
  const { category, slug } = params;
  const tour = categories[category]?.[slug];

  if (!tour) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold text-red-600">Tour Not Found</h1>
        <p className="mt-4">Please check the link or go back to menu.</p>
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

export async function generateStaticParams() {
  return Object.entries(categories).flatMap(([category, tours]) =>
    Object.keys(tours).map((slug) => ({ category, slug }))
  );
}
