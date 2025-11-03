import { pilgrimTours } from "@/app/components/data/tours";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Pilgrim Tours",
  description: "Pilgrim and religious tours from Chandigarh",
};

export default function PilgrimList() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-8">Pilgrim Tours</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pilgrimTours.map((t) => (
            <article
              key={t.slug}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 overflow-hidden"
            >
              <Link href={`/pilgrim/${t.slug}`} className="block relative w-full h-56">
                <Image
                  src={t.image}
                  alt={t.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
              </Link>

              <div className="px-6 py-5 text-center">
                <h3 className="text-base font-medium mb-4 leading-snug text-gray-800">{t.title}</h3>

                <div className="flex justify-center">
                  <Link
                    href={`/himachal-pilgrim/pilgrim-tours/${t.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange text-white text-sm font-medium shadow-sm hover:brightness-95 transition"
                    aria-label={`Book ${t.title}`}
                  >
                    <span>Book Now</span>
                    <span className="inline-block transform translate-x-0.5">›</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
