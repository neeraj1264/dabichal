"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ladakhKashmirTours } from "@/app/components/data/tours";

export default function TourDetail({ params }) {
  const { slug, tour } = params;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    from: "",
    startDate: "",
    endDate: "",
    pickup: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // build message
    const msg = `
*New Tour Booking Enquiry*
Tour: ${t.title}
Category: ${cat.title}
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
From: ${form.from}
Start: ${form.startDate}
End: ${form.endDate}
Pickup: ${form.pickup}
Message: ${form.message}
    `;
    const phoneNumber = "919518131847"; // replace with your number (country code + number)
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  }

    const cat = ladakhKashmirTours.find((c) => c.slug === slug);
  if (!cat) return <div className="p-10 text-center">Category not found.</div>;

  const t = cat.tours.find((x) => x.slug === tour);
  if (!t) return <div className="p-10 text-center">Tour not found.</div>;

  const related = cat.tours.filter((x) => x.slug !== t.slug);
  
  // helper to get day keys sorted
  const dayKeys = Object.keys(t)
    .filter((k) => /^day\d+$/.test(k) && t[k])
    .sort((a, b) => Number(a.replace("day", "")) - Number(b.replace("day", "")));

  return (
    <>
      {/* hero */}
      <div className="relative w-full h-24 mb-12">
        <Image src="/hero/hero2.jpg" alt={t.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1 className="text-white text-lg md:text-2xl font-bold">{t.title}</h1>
        </div>
      </div>

      <section className="bg-gray-50 py-10 md:p-12">
        <div className="container mx-auto px-6 grid gap-8 md:grid-cols-3">
          {/* left: itinerary (span 2) */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-xl font-bold">{t.title}</h2>
              <div className="text-base font-semibold text-paragraph border p-2 mt-3">
                <span className="text-orange"> &gt; </span>
                {t.daynight}
              </div>
            </div>

            {/* itinerary cards with floating image so text wraps */}
            <div className="space-y-6">
              {dayKeys.length === 0 && (
                <div className="text-sm text-paragraph">No itinerary available.</div>
              )}

              {dayKeys.map((dayKey) => {
                const idx = dayKey.replace("day", "");
                const title = t[dayKey];
                const desc = t[`desk${idx}`];
                // allow per-day image (img1 etc) or fallback to t.image
                const dayImg = t[`img${idx}`] || t.image;

                return (
                  <article key={dayKey} className="bg-white border border-paragraph rounded-lg overflow-hidden">
                    <div className="p-6">
                      {/* image always visible, floats on sm+ so text wraps */}
                      {dayImg && (
                        <div className="mb-4 sm:ml-6 sm:mb-0 sm:float-right sm:w-40 sm:h-28 w-full h-44 overflow-hidden rounded-sm border">
                          <Image src={dayImg} alt={title} width={320} height={220} className="object-cover w-full h-full" />
                        </div>
                      )}

                      {title && <h3 className="text-lg font-semibold mb-3">{title}</h3>}
                      {desc && <p className="text-sm text-paragraph leading-relaxed">{desc}</p>}

                      <div className="clear-both" />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* right: booking form */}
          <aside className="md:col-span-1">
            <div className="sticky top-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Book {t.title}</h3>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full border rounded p-2 text-sm"
                    required
                  />
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full border rounded p-2 text-sm"
                  />
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full border rounded p-2 text-sm"
                    required
                  />
                  <input
                    name="from"
                    value={form.from}
                    onChange={handleChange}
                    placeholder="You Are From?"
                    className="w-full border rounded p-2 text-sm"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="date"
                      name="startDate"
                      value={form.startDate}
                      onChange={handleChange}
                      className="w-full border rounded p-2 text-sm bg-white"
                    />
                    <input
                      type="date"
                      name="endDate"
                      value={form.endDate}
                      onChange={handleChange}
                      className="w-full border rounded p-2 text-sm bg-white"
                    />
                  </div>
                  <input
                    name="pickup"
                    value={form.pickup}
                    onChange={handleChange}
                    placeholder="Pick-Up Location"
                    className="w-full border rounded p-2 text-sm"
                  />
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write Message"
                    className="w-full border rounded p-2 text-sm h-28 resize-none"
                  />
                  <button
                    className="w-full bg-[#f58220] text-white py-2 rounded hover:brightness-95 transition"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </aside>
        </div>

        {/* Related block (simple) */}
        <div className="container mx-auto px-6 mt-10">
          <div className="bg-white border border-paragraph rounded-lg p-6 pb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-0.5 bg-[#f58220] inline-block" />
              <h3 className="text-lg font-semibold">Related</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 ">
              {related.map((r) => (
                <div key={r.slug} className="flex items-center gap-3">
                  <div className="w-36 h-24 relative flex-shrink-0">
                    <Link href={`/ladakh-kashmir/${cat.slug}/${r.slug}`}>
                      <Image src={r.image} alt={r.title} fill className="object-cover rounded" />
                    </Link>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{r.title}</div>
                    <Link
                      href={`/ladakh-kashmir/${cat.slug}/${r.slug}`}
                      className="text-xs mt-1 inline-block text-[#f58220] hover:underline"
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
