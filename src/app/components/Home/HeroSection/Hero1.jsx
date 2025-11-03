import Image from "next/image";

export default function HeroTop() {
  return (
    <section className="relative w-full h-[120vh] overflow-hidden z-60">
      {/* Background image */}
      <Image
        src="/bg_1.jpg"
        alt="car background"
        fill
        priority
        className="object-cover object-top" // <- ensures image starts from top
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      {/* Text content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="w-full text-center">
            <h1 className="text-2xl md:text-6xl font-extrabold text-white leading-tight">
              Sardar Ji Tour &amp; Travels
            </h1>
            <p className="mt-4 text-white/90 text-base md:text-lg max-w-2xl mx-auto">
              Safe, comfortable, and reliable travel — wherever you go. We
              promise peace of mind with every mile.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4 mx-auto">
              <a
                href={`https://wa.me/919518131847?text=${encodeURIComponent(
                  "Hello Sardar Ji Travels 👋,\n\nI’d like to book a cab. Please share available car options, fares, and trip details.\n\nThank you!"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange hover:bg-white hover:text-orange text-white px-6 py-3 rounded-full shadow-md transition font-bold"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
