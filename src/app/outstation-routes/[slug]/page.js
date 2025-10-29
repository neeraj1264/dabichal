"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/app/components/reveal";
import { outstationRoutes } from "@/app/components/data/tours"; // adjust path if needed

export default function OutstationDetailPage() {
  const { slug } = useParams();
  const route = outstationRoutes.find((r) => r.slug === slug);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    startDate: "",
    endDate: "",
    pickup: "",
    message: "",
  });

  if (!route) {
    return <div className="p-10 text-center">Tour not found.</div>;
  }

  function handleChange(e) {
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const msg = `
*New Outstation Booking Enquiry*
-------------------------------
🚖 Route: ${route.title}
👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
📅 Start: ${formData.startDate}
📅 End: ${formData.endDate}
📍 Pickup: ${formData.pickup}
📝 Message: ${formData.message}

🔗 Website: https://your-site.example/`;
    const url = "https://wa.me/919518131347?text=" + encodeURIComponent(msg);
    window.open(url, "_blank");
  }

  const related = outstationRoutes.filter((r) => r.slug !== slug);

  return (
    <>
      {/* Hero */}
      <div className="relative w-full h-24">
        <Image src="/hero/hero2.jpg" alt={route.title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-4">
          <Reveal className="text-white text-lg md:text-2xl font-bold drop-shadow-lg">
            {route.title}
          </Reveal>
        </div>
      </div>

      {/* Main */}
      <section className="bg-gray-50 md:p-12 py-12">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10">
          {/* Left: route info */}
          <div>
            <Reveal className="text-2xl font-bold mb-4">{route.title}</Reveal>

            <Image
              src={route.image}
              alt={route.title}
              width={900}
              height={500}
              className="rounded-xl shadow-md mb-6 object-cover"
            />

            <p className="text-paragraph text-sm leading-relaxed whitespace-pre-line">
              {route.description || "No description available for this route."}
            </p>
          </div>

          {/* Right: booking form (sticky) */}
          <div className="md:col-span-1">
            <div className="sticky top-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Book {route.title}</h2>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full border rounded p-2 text-sm"
                    required
                  />
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full border rounded p-2 text-sm"
                  />
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full border rounded p-2 text-sm"
                    required
                  />
                  <input
                    name="from"
                    value={formData.from}
                    onChange={handleChange}
                    placeholder="You Are From?"
                    className="w-full border rounded p-2 text-sm"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      className="w-full border rounded p-2 text-sm bg-white"
                    />
                    <input
                      type="date"
                      name="endDate"
                      value={formData.endDate}
                      onChange={handleChange}
                      className="w-full border rounded p-2 text-sm bg-white"
                    />
                  </div>
                  <input
                    name="pickup"
                    value={formData.pickup}
                    onChange={handleChange}
                    placeholder="Pick-Up Location"
                    className="w-full border rounded p-2 text-sm"
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write Message"
                    className="w-full border rounded p-2 text-sm h-20 resize-none"
                  />

                  <button className="w-full bg-[#f58220] text-white py-2 rounded hover:brightness-95 transition" type="submit">
                    Submit on WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Related block */}
        <div className="container mx-auto px-6 mt-8">
          <div className="bg-white border-2 border-border rounded-lg p-4">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-0.5 bg-[#f58220] inline-block" />
              <h3 className="text-2xl font-semibold">Related</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {related.map((r) => (
                <div key={r.slug} className="flex items-center gap-3 rounded p-3">
                  <div className="w-32 h-24 relative flex-shrink-0">
                    <Link href={`/outstation-routes/${r.slug}`}>
                      <Image src={r.image} alt={r.title} fill className="object-cover rounded" sizes="80px" />
                    </Link>
                  </div>

                  <div className="flex-1">
                    <h4 className="text-lg font-bold">{r.title}</h4>
                    <Link
                      href={`/outstation-routes/${r.slug}`}
                      className="text-base font-bold mt-2 inline-block text-[#f58220] hover:underline"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
