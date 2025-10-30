import { ladakhKashmirTours } from "@/app/components/data/tours";
import Reveal from "@/app/components/reveal";
import Image from "next/image";
import Link from "next/link";
import { FaGreaterThan } from "react-icons/fa6";

export default function CategoryPage({ params }) {
  const { slug } = params;
  const cat = ladakhKashmirTours.find((c) => c.slug === slug);

  if (!cat) {
    return <div className="p-10 text-center">Category not found.</div>;
  }

  return (
    <>
      {/* hero */}
      <div className="relative w-full h-24 mb-12">
        <Image src="/hero/hero2.jpg" alt={cat.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Reveal className="text-white text-xl md:text-2xl font-bold">{cat.title}</Reveal>
        </div>
      </div>

      <main className="container mx-auto px-6 pb-20">
        <Reveal className="text-2xl font-semibold text-center mb-12">{cat.title}</Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cat.tours.map((t) => (
            <article key={t.slug} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Link href={`/ladakh-kashmir/${cat.slug}/${t.slug}`} className="block relative w-full h-56">
                <Image src={t.image} alt={t.title} fill className="object-cover" />
              </Link>

              <div className="p-6 text-center">
                <h3 className="text-base font-semibold mb-3">{t.title}</h3>
                <Link
                  href={`/ladakh-kashmir/${cat.slug}/${t.slug}`}
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
