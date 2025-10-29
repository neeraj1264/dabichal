import Image from "next/image";
import TourServices from "../components/Home/TourServices";
import { himachalPilgrimTours } from "../components/data/tours";
import Reveal from "../components/reveal";
import Link from "next/link";

export const metadata = {
  title: 'himachal-pilgrim',
  description: 'himachal-pilgrim tours.....',
};

export default function Himachal() {
  const tours = himachalPilgrimTours;
  return (
    <>
      <div className="relative w-full h-24">
            <Image src="/hero/hero2.jpg" alt="himachal-pilgrim Image" fill priority className="object-cover" />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-4">
              <Reveal className="text-white text-lg md:text-2xl font-bold drop-shadow-lg">himachal-pilgrim</Reveal>
            </div>
          </div>

           <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-8">Himachal/Pilgrim</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((t) => (
            <article
              key={t.slug}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 overflow-hidden"
            >
              {/* image area - keep fixed aspect */}
              <Link href={`/himachal-pilgrim/${t.slug}`} className="block relative w-full h-56 md:h-60 lg:h-52">
                <Image
                  src={t.image}
                  alt={t.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
              </Link>

              {/* content */}
              <div className="px-6 py-5 text-center">
                <h3 className="text-base font-medium mb-4 leading-snug text-gray-800">{t.title}</h3>

                <div className="flex justify-center">
                  <Link
                    href={`/himachal-pilgrim/${t.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f58220] text-white text-sm font-medium shadow-sm hover:brightness-95 transition"
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
    </>
  )
}