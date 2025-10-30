// /app/ladakh/page.jsx
import Image from "next/image";
import Link from "next/link";
import { ladakhKashmirTours } from "../components/data/tours";
import { FaGreaterThan } from "react-icons/fa6";
import Reveal from "../components/reveal";

export const metadata = {
  title: "Ladakh / Kashmir",
};

export default function LadakhIndex() {
  return (
    <>
      {/* hero */}
      <div className="relative w-full h-24 mb-12">
        <Image src="/hero/hero2.jpg" alt="Ladakh/Kashmir" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Reveal className="text-white text-xl md:text-2xl font-bold">Ladakh/Kashmir</Reveal>
        </div>
      </div>

      <main className="container mx-auto px-6 pb-20">
        <Reveal className="text-2xl font-semibold text-center mb-12">Ladakh / Kashmir</Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {ladakhKashmirTours.map((cat) => (
            <article key={cat.slug} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Link href={`/ladakh-kashmir/${cat.slug}`} className="block relative w-full h-56">
                <Image src={cat.image} alt={cat.title} fill className="object-cover" />
              </Link>

              <div className="p-6 text-center">
                <h3 className="text-base font-semibold mb-3">{cat.title}</h3>
                <Link
                  href={`/ladakh-kashmir/${cat.slug}`}
                  className="inline-flex items-center bg-orange font-bold text-white px-5 py-2 rounded-full hover:brightness-95 transition"
                >
                  Book Now &nbsp; <FaGreaterThan className="text-xs"/>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
