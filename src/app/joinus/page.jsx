'use client'

export default function JoinUsSection() {
  return (
    <section className="bg-[#C4559C] text-white py-20 md:py-32 px-6 sm:px-10 lg:px-20 rounded-tl-[4rem]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center">
        {/* Text Content */}
        <div className="max-w-[42rem]">
          <h3 className="text-5xl font-bold mb-4 text-center md:text-left">Join Us</h3>
          <p className="text-lg leading-relaxed text-center md:text-left">
            Starting your NDIS journey with Treasured Care For You means joining a
            community that sees your potential and respects your individuality. Let&apos;s
            work together to create a care plan that celebrates your uniqueness and
            supports your independence.
          </p>
        </div>

        {/* Button */}
        <a
          href="/contact"
          className="bg-white text-[#333] font-semibold py-3 px-8 mx-auto mt-8 md:mt-0 w-[100%] md:w-fit text-center rounded-full shadow-md hover:scale-105 transition-transform duration-200"
        >
          Contact Us
        </a>
      </div>
    </section>
  )
}
