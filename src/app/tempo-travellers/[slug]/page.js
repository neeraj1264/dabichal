"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";

// Data for tempo travellers
const tempoData = {
  "12-seater-tempo-traveller": {
    name: "12 Seater Tempo Traveller",
    img: "/tempo/t1.jpg",
    description: `
Comfortable and spacious, the 12-seater Tempo Traveller is ideal for small groups, family outings, and short trips. 
Enjoy ample legroom, luggage space, and AC comfort for a hassle-free journey.
    `
  },
  "17-seater-tempo-traveller": {
    name: "17 Seater Tempo Traveller",
    img: "/tempo/t2.jpg",
    description: `
Perfect for larger groups, the 17-seater Tempo Traveller offers spacious interiors, modern features, and reliable performance. 
A great choice for corporate travel, picnics, or religious tours.
    `
  },
  "12-seater-urbania-traveller": {
    name: "12 Seater Urbania Traveller",
    img: "/tempo/t3.jpg",
    description: `
The premium 12-seater Urbania Traveller combines luxury and performance. 
Designed for comfort, it’s perfect for executive travel and family trips with a touch of elegance.
    `
  },
  "17-seater-urbania-traveller": {
    name: "17 Seater Urbania Traveller",
    img: "/tempo/t4.jpg",
    description: `
Travel in style with the 17-seater Urbania Traveller. 
It offers plush seating, advanced safety features, and modern interiors for a first-class travel experience.
    `
  }
};

export default function TempoDetailPage() {
  const { slug } = useParams();
  const tempo = tempoData[slug];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    startDate: "",
    endDate: "",
    pickup: "",
    message: ""
  });

  if (!tempo) {
    return <div className="p-10 text-center text-red-600">Tempo Traveller not found.</div>;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const msg = `
*New Tempo Traveller Booking Enquiry*
---------------------------------
🚌 Vehicle: ${tempo.name}
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
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10">
        {/* Vehicle Info */}
        <div>
          <Image
            src={tempo.img}
            alt={tempo.name}
            width={600}
            height={400}
            className="rounded-xl shadow-md mb-6"
          />
          <h1 className="text-3xl font-bold mb-4">{tempo.name}</h1>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {tempo.description}
          </p>
        </div>

        {/* Booking Form */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Book {tempo.name}
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
                className="w-full border rounded p-2 bg-white"
                value={formData.startDate}
                onChange={handleChange}
              />
              <input
                type="date"
                name="endDate"
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
            />
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
  );
}
