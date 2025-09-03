'use client'

export default function PersonalisedSupportSection() {
  return (
    <section className="bg-[#F9F9F9] py-32 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Left: Image */}
        <div className="w-full lg:w-2/5">
          <img
            src="/personalise.jpg" // replace with your actual image path
            alt="People Hugging"
            className="rounded-xl  object-cover"
          />
        </div>

        {/* Right: Text */}
        <div className="w-full lg:w-3/5">
          <h2 className="text-3xl font-bold text-black mb-4">
            Personalised Support
          </h2>
          <p className="text-paragraph text-lg leading-relaxed">
            At Treasured Care For You, we understand that independence doesn&apos;t look
            the same for everyone. That&apos;s why our services are designed to adapt to your
            individual needs and aspirations. Our dedicated team is here to provide the
            support you need in the way that works best for you.
          </p>
        </div>
      </div>
    </section>
  )
}
