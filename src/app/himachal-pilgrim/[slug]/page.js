"use client";
import { himachalPilgrimTours } from "@/app/components/data/tours";
import Reveal from "@/app/components/reveal";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function TourPage({ params }) {
  const { slug } = params;
  const tour = himachalPilgrimTours.find((t) => t.slug === slug);


  const related = himachalPilgrimTours.filter((t) => t.slug !== slug);
  // booking form state
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
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const msg = `
*New Tour Booking Enquiry*
Tour: ${tour.title}
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
From: ${form.from}
Start: ${form.startDate}
End: ${form.endDate}
Pickup: ${form.pickup}
Message: ${form.message}
    `;
    const url = "https://wa.me/919518131847?text=" + encodeURIComponent(msg);
    window.open(url, "_blank");
  }

  if (!tour) return <div className="p-10 text-center">Tour not found.</div>;

  if (tour.slug === "pilgrim-tours") {
  // show all other tours as cards (you can change the filter to pick specific pilgrim items)
  const cards = himachalPilgrimTours.filter((t) => t.slug !== "pilgrim-tours");

  return (
    <>
      <div className="py-12 container mx-auto px-6">
        <h1 className="text-2xl font-semibold text-center mb-8">{tour.title}</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cards.map((c) => (
            <div key={c.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Link href={`/routes/${c.slug}`} className="block relative w-full h-48">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </Link>

              <div className="p-4 text-center">
                <div className="text-sm font-medium mb-3">{c.title}</div>
                <Link
                  href={`/routes/${c.slug}`}
                  className="inline-block bg-[#f58220] text-white px-4 py-2 rounded-full hover:brightness-95 transition"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

  return (
    <>
      {/* hero */}
       <div className="relative w-full h-24">
             <Image
               src="/hero/hero2.jpg"
               alt={tour.title}
               fill
               priority
               className="object-cover"
             />
     
             {/* full dark overlay */}
             <div className="absolute inset-0 bg-black/50" />
     
             {/* bottom gradient fade */}
             <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent" />
     
             {/* centered title */}
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               <Reveal className="text-white text-xl md:text-xl lg:text-1xl font-bold drop-shadow-lg">
                 {tour.title}
               </Reveal>
             </div>
           </div>

      {/* main layout */}
      <section className="bg-gray-50 py-10 md:p-12">
        <div className="container mx-auto px-6 grid gap-8 md:grid-cols-3">
          {/* left: itinerary & details (span 2 cols on md) */}
          <div className="md:col-span-2 space-y-4">
            {/* Title + small meta row */}
            <div>
              <h1 className="text-xl font-bold">{tour.title}</h1>
              <div className="text-base font-semibold text-paragraph border-gray border p-2">
                {" "}
                <span className="text-orange text-base "> &gt; </span>
                {tour.daynight}
                <span className="text-orange text-base"> &gt; </span>{" "}
                {tour.days}
              </div>
            </div>

{/* itinerary boxes - float image so text wraps (image always visible) */}
<div className="space-y-6">
  {(() => {
    const dayKeys = Object.keys(tour)
      .filter((k) => /^day\d+$/.test(k) && tour[k])
      .sort((a, b) => Number(a.replace("day", "")) - Number(b.replace("day", "")));

    if (dayKeys.length === 0) {
      return <div className="text-sm text-paragraph">No itinerary available.</div>;
    }

    return dayKeys.map((dayKey) => {
      const idx = dayKey.replace("day", "");
      const title = tour[dayKey];
      const desc = tour[`desk${idx}`];
      const dayImg = tour[`img${idx}`];

      return (
        <article
          key={dayKey}
          className="bg-white border border-gray rounded-lg shadow-sm overflow-hidden"
        >
          <div className="p-6">
            {/* Image: full-width on xs, float-right on sm+ so text wraps around it */}
            {dayImg && (
              <div className="mb-4 sm:ml-6 sm:mb-0 sm:float-right sm:w-40 sm:h-28 w-full h-44 overflow-hidden rounded-sm">
                {/* using width/height props instead of fill for predictable sizing */}
                <Image
                  src={dayImg}
                  alt={tour.days || title}
                  width={320}   /* for xs full-width, browser will size down */
                  height={220}
                  className="object-cover w-full h-full"
                />
              </div>
            )}

            {/* Title + description - text will wrap around floating image */}
            {title && <h3 className="text-lg font-semibold mb-3">{title}</h3>}
            {desc && (
              <p className="text-sm text-paragraph leading-relaxed">
                {desc}
              </p>
            )}

            {/* clear float so next card doesn't wrap under previous image */}
            <div className="clear-both" />
          </div>
        </article>
      );
    });
  })()}
</div>
         
          </div>

          {/* right: booking form (sticky) */}
          <aside className="md:col-span-1">
            <div className="sticky top-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-3">
                  Book {tour.title}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full rounded p-2 text-sm bg-border border-none placeholder-paragraph"
                    required
                  />
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full rounded p-2 bg-border border-none placeholder-paragraph text-sm"
                  />
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full rounded p-2 bg-border border-none placeholder-paragraph text-sm"
                    required
                  />
                  <input
                    name="from"
                    value={form.from}
                    onChange={handleChange}
                    placeholder="You Are From?"
                    className="w-full rounded p-2 bg-border border-none placeholder-paragraph text-sm"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="date"
                      name="startDate"
                      value={form.startDate}
                      onChange={handleChange}
                      className="w-full rounded p-2 bg-border border-none placeholder-paragraph text-sm bg-white"
                    />
                    <input
                      type="date"
                      name="endDate"
                      value={form.endDate}
                      onChange={handleChange}
                      className="w-full rounded p-2 bg-border border-none placeholder-paragraph text-sm bg-white"
                    />
                  </div>
                  <input
                    name="pickup"
                    value={form.pickup}
                    onChange={handleChange}
                    placeholder="Pick-Up Location"
                    className="w-full rounded p-2 bg-border border-none placeholder-paragraph text-sm"
                  />
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write Message"
                    className="w-full rounded p-2 bg-border border-none placeholder-paragraph text-sm h-20 resize-none"
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

        {/* Related block */}
        <div className="container mx-auto px-6 mt-10">
          <div className="bg-white border border-gray rounded-lg p-6 pb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-0.5 bg-[#f58220] inline-block" />
              <h3 className="text-lg font-semibold">Related</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-8 ">
              {related.map((r) => (
                <div key={r.slug} className="flex items-center gap-3">
                  <div className="w-36 h-24 relative flex-shrink-0">
                    <Link href={`/routes/${r.slug}`}>
                      <Image
                        src={r.image}
                        alt={r.title}
                        fill
                        className="object-cover rounded"
                        sizes="144px"
                      />
                    </Link>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{r.title}</div>
                    <Link
                      href={`/routes/${r.slug}`}
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
