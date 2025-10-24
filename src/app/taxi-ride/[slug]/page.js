"use client";
import Reveal from "@/app/components/reveal";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";

const carsData = {
  "innova-hycross": {
    name: "Innova Hycross",
    img: "/cab/cab1.jpg",
    description: ` Elevate your travel experience with our Innova Hycross taxi booking service, 
perfect for family outings, corporate travel, and outstation trips. 
This premium hybrid SUV combines luxury, fuel efficiency, and advanced features 
to ensure a smooth and eco-friendly ride.
    `
  },
    "honda-amaze": {
    name: "Honda Amaze",
    img: "/cab/cab7.jpg",
    description: ` our Honda Amaze fleet is perfect for all your travel needs. Known for its spacious interiors, excellent mileage, and smooth performance, the Honda Amaze ensures a hassle-free ride every time.
    `
  },
  "toyota-etios": {
    name: "Toyota Etios",
    img: "/cab/cab2.jpg",
    description: ` The Toyota Etios is known for reliability, comfort, and affordability. 
Ideal for city travel or outstation trips with family and friends.
    `
  },
  "innova-crysta": {
    name: "Innova Crysta",
    img: "/cab/cab3.jpg",
    description: ` Spacious interiors and powerful performance make the Innova Crysta 
perfect for group travel and long journeys.
    `
  },
  "maruti-dzire": {
    name: "Maruti Dzire",
    img: "/cab/cab4.jpg",
    description: ` Compact and fuel-efficient, the Maruti Dzire is an excellent choice 
for local travel and business rides.
    `
  },
  "maruti-ertiga": {
    name: "Maruti Ertiga",
    img: "/cab/cab5.jpg",
    description: ` The Maruti Ertiga is a 7-seater MPV with comfort and affordability, 
perfect for family trips and local sightseeing.
    `
  },
  "kia-carens": {
    name: "Kia Carens",
    img: "/cab/cab6.jpg",
    description: ` A stylish and feature-packed MPV, the Kia Carens offers premium interiors 
and smooth performance for your journey.
    `
  }
};

export default function CarDetailPage() {
  const { slug } = useParams();
  const car = carsData[slug];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    startDate: "",
    endDate: "",
    pickup: "",
    message: ""
  });

  if (!car) {
    return <div className="p-10 text-center text-red-600">Car not found.</div>;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const msg = `
*New Taxi Booking Enquiry*
---------------------------------
🚖 Car: ${car.name}
👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
📅 Start Date: ${formData.startDate}
📅 End Date: ${formData.endDate}
📍 Pickup: ${formData.pickup}
📝 Message: ${formData.message}

🔗 Website: https://dabichal.vercel.app/
    `;

    const whatsappUrl =
      "https://wa.me/919518131347?text=" + encodeURIComponent(msg);

    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
     <div className="relative w-full h-56 md:h-72 lg:h-24">
        <Image
          src="/hero/hero2.jpg"
          alt={car.name}
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
            {car.name}
          </Reveal>
        </div>
      </div>
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10">
        {/* Car Info */}
        <div>
          <Image
            src={car.img}
            alt={car.name}
            width={600}
            height={400}
            className="rounded-xl shadow-md mb-6"
          />
          <Reveal className="text-3xl font-bold ">{car.name}</Reveal>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {car.description}
          </p>
        </div>

        {/* Booking Form */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Book {car.name}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full border rounded p-2"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full border rounded p-2"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full border rounded p-2"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <div className="grid grid-cols-2 gap-2">
              <input
                type="date"
                name="startDate"
                placeholder="Start Date"
                className="w-full border rounded p-2 bg-white"
                value={formData.startDate}
                onChange={handleChange}
              />
              <input
                type="date"
                name="endDate"
                placeholder="End Date"
                className="w-full border rounded p-2 bg-white"
                value={formData.endDate}
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              name="pickup"
              placeholder="Pick-Up Location"
              className="w-full border rounded p-2"
              value={formData.pickup}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Write Message"
              className="w-full border rounded p-2"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="bg-[#f58220] text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
            >
              Submit on WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
    </>
  );
}
