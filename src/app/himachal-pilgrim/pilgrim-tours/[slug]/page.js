// src/app/pilgrim/[slug]/page.jsx
"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/app/components/reveal";
import { pilgrimTours } from "@/app/components/data/tours";

export default function PilgrimDetail() {
  const { slug } = useParams();
  const tour = pilgrimTours.find((t) => t.slug === slug);

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

  if (!tour) return <div className="p-10 text-center">Tour not found.</div>;

  const related = pilgrimTours.filter((t) => t.slug !== slug);

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const msg = `
*New Tour Booking Enquiry*
Tour: ${tour.title}
Name: ${form.name}
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

  // collect dayN keys and deskN keys sorted
  const dayKeys = Object.keys(tour)
    .filter((k) => /^day\d+$/.test(k) && tour[k])
    .sort((a, b) => Number(a.replace("day", "")) - Number(b.replace("day", "")));

  // fallback desk keys (desk1..deskN)
  const deskKeys = Object.keys(tour)
    .filter((k) => /^desk\d+$/.test(k))
    .sort((a, b) => Number(a.replace("desk", "")) - Number(b.replace("desk", "")));

  return (
    <>
      {/* hero */}
      <div className="relative w-full h-24">
        <Image src="/hero/hero2.jpg" alt={tour.title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-4">
          <Reveal className="text-white text-lg md:text-2xl font-bold drop-shadow-lg">
            {tour.title}
          </Reveal>
        </div>
      </div>

      {/* main */}
      <section className="bg-gray-50 md:p-12 py-12">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10">
          {/* LEFT: main content (span 2 cols) */}
          <div className="md:col-span-2 space-y-4">
            <Reveal className="text-2xl font-bold mb-3">{tour.title}</Reveal>

            {/* day/night meta (boxed) */}
            {(tour.daynight || tour.days) && (
              <div className="mb-6 border border-gray rounded-lg bg-white p-3">
                <div className="flex items-center gap-3">
                  {tour.daynight && <div className="text-base font-semibold text-paragraph border-gray">
                    <span className="text-orange text-base "> &gt; </span>
                    {tour.daynight}<span className="text-orange text-base "> &gt; </span>
                    </div>}
                </div>
                {tour.days && <div className="text-sm text-gray-600 mt-2">{tour.days}</div>}
              </div>
            )}

            {/* If we have day-wise itinerary, render boxed cards (like screenshot) */}
            {dayKeys.length > 0 ? (
              <div className="space-y-6">
                {dayKeys.map((dayKey) => {
                  const idx = dayKey.replace("day", "");
                  const title = tour[dayKey];
                  const desc = tour[`desk${idx}`] || "";
                  const img = tour[`img${idx}`];

                  return (
                    <article
                      key={dayKey}
          className="bg-white border border-gray rounded-lg shadow-sm overflow-hidden"
                    >
                         <div className="p-6">
                               {/* Image: full-width on xs, float-right on sm+ so text wraps around it */}
                               {img && (
                                 <div className="mb-4 sm:ml-6 sm:mb-0 sm:float-right sm:w-40 sm:h-28 w-full h-44 overflow-hidden rounded-sm">
                                   {/* using width/height props instead of fill for predictable sizing */}
                                   <Image
                                     src={img}
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
                })}
              </div>
            ) : (
              // --- UPDATED FALLBACK LAYOUT: float image to the right on sm+ and let text occupy remaining width ---
              <div className="space-y-4">
                {/* Floated right image (appears on sm+ as in your second screenshot) */}
                {!tour.daynight && tour.image && (
                  <div className="sm:float-right sm:ml-6 sm:w-44 sm:h-32 w-full mb-4 sm:mb-0 overflow-hidden rounded">
                    <Image src={tour.image} alt={tour.title} width={352} height={256} className="object-cover w-full h-full" />
                  </div>
                )}

                {/* Primary description (will use full remaining width next to floated image) */}
                {tour.description && (
                  <p className="text-paragraph text-base leading-relaxed">
                    {tour.description}
                  </p>
                )}

                {/* If there are deskN blocks, render them (small thumbnail left + text) */}
                {deskKeys.length > 0 &&
                  deskKeys.map((deskKey) => {
                    const idx = deskKey.replace("desk", "");
                    const dayTitle = tour[`day${idx}`];
                    const dayImg = tour[`img${idx}`];
                    return (
                      <div key={deskKey} className="mt-6 clear-both">
                        {dayTitle && <h3 className="font-semibold mb-2">{dayTitle}</h3>}
                        <div className="flex gap-4 items-start">
                          {dayImg && (
                            <div className="w-28 h-20 overflow-hidden rounded hidden sm:block">
                              <Image src={dayImg} alt={dayTitle || tour.title} width={200} height={140} className="object-cover rounded" />
                            </div>
                          )}
                          <p className="text-sm text-gray-700 leading-relaxed">{tour[deskKey]}</p>
                        </div>
                      </div>
                    );
                  })}
                {/* clear the float so next sections/layout won't wrap incorrectly */}
                <div className="clear-both" />
              </div>
            )}
          </div>

          {/* RIGHT: booking form */}
          <aside className="md:col-span-1">
            <div className="sticky top-20">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Book {tour.title}</h3>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" className="w-full bg-border text-paragraph rounded p-2 text-sm" required />
                  <input name="email" value={form.email} onChange={handleChange} placeholder="Email Address" className="w-full bg-border text-paragraph rounded p-2 text-sm" />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" className="w-full bg-border text-paragraph rounded p-2 text-sm" required />
                  <input name="from" value={form.from} onChange={handleChange} placeholder="You Are From ?" className="w-full bg-border text-paragraph rounded p-2 text-sm" />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <input type="date" name="startDate" value={form.startDate} onChange={handleChange} className="w-full bg-border text-paragraph rounded p-2 text-sm bg-white" />
                  <input type="date" name="endDate" value={form.endDate} onChange={handleChange} className="w-full bg-border text-paragraph rounded p-2 text-sm bg-white" />
                </div>

                <input name="pickup" value={form.pickup} onChange={handleChange} placeholder="Pick-Up Location" className="w-full bg-border text-paragraph rounded p-2 text-sm" />
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Write Message" className="w-full bg-border text-paragraph rounded p-2 text-sm h-24 resize-none" />

                <button type="submit" className="w-full bg-orange text-white py-2 rounded hover:brightness-95 transition">Submit</button>
              </form>
            </div>
            </div>
          </aside>
        </div>

        {/* Related */}
        <div className="container mx-auto px-6 mt-8">
          <div className="bg-white border border-gray rounded-lg p-4">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-0.5 bg-orange inline-block" />
              <h3 className="text-lg font-semibold">Related</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link key={r.slug} href={`/himachal-pilgrim/pilgrim-tours/${r.slug}`} className="flex items-center gap-3">
                  <div className="w-28 h-20 relative flex-shrink-0">
                    <Image src={r.image} alt={r.title} fill className="object-cover rounded" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">{r.title}</div>
                    <div className="text-sm text-orange mt-1">Book Now</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
