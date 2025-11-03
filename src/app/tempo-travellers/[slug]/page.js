"use client";
import Reveal from "@/app/components/reveal";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

// Data for tempo travellers
const tempoData = {
  "12-seater-tempo-traveller": {
    name: "12 Seater Tempo Traveller",
    img: "/tempo/t1.jpg",
    description: ` Planning a group trip or family vacation? Sardar Ji Travels offers premium 12-seater Tempo Traveller rental services in Chandigarh, designed to make your journeys comfortable and hassle-free. Our 12-seater Tempo Traveller is the perfect blend of spacious seating, modern interiors, and advanced features, catering to both local and outstation travel. Whether you're heading to Shimla, Manali, Dharamshala, or exploring the vibrant city of Chandigarh, our vehicles ensure a smooth and enjoyable ride for all passengers. With ample space for luggage and legroom, this is an ideal choice for group travel, weddings, or corporate tours.

At Sardar Ji Travels, we emphasize convenience, affordability, and safety, ensuring every trip is memorable. Our well-maintained 12-seater Tempo Travellers in Chandigarh come with professional drivers who prioritize your comfort and safety on every route. Be it a hill station adventure or a long-distance road trip, our services are tailored to meet your travel needs. With competitive pricing, flexible booking options, and exceptional customer support, Sardar Ji Travels is your trusted partner for all your travel requirements. Book now and experience seamless group travel like never before.
    `
  },
  "17-seater-tempo-traveller": {
    name: "17 Seater Tempo Traveller",
    img: "/tempo/t2.jpg",
    description: ` Planning a group trip and need a reliable travel option? Look no further than Sardar Ji Travels, offering 17-seater Tempo Traveller rental services in Chandigarh at the very lowest cost. Our 17-seater Tempo Travellers are spacious, comfortable, and equipped with modern features like air conditioning, reclining seats, and ample luggage space, making them ideal for family trips, corporate tours, weddings, or pilgrimages. Whether you're exploring the vibrant streets of Chandigarh or heading out to destinations like Shimla, Manali, or Amritsar, our Tempo Travellers are the perfect choice for large groups seeking a hassle-free journey.

At Sardar Ji Travels, we are committed to providing top-notch transportation solutions that combine quality with affordability. Our 17-seater Tempo Travellers in Chandigarh are well-maintained and come with experienced drivers who ensure your journey is safe and enjoyable. With competitive pricing, transparent policies, and round-the-clock customer support, we make group travel convenient and budget-friendly. Book your 17-seater Tempo Traveller today with Sardar Ji Travels and experience comfort, reliability, and the best rates in Chandigarh.
    `
  },
  "12-seater-urbania-traveller": {
    name: "12 Seater Urbania Traveller",
    img: "/tempo/t3.jpg",
    description: ` Looking for a comfortable and budget-friendly travel option for your group? Sardar Ji Travels offers the 12-seater Urbania Traveller rental in Chandigarh at the very lowest cost, tailored for family trips, corporate outings, and leisure travel. The Urbania Traveller stands out for its spacious design, plush seating, and advanced features like air conditioning and ample legroom, ensuring every journey is smooth and enjoyable. Whether you're planning a local Chandigarh city tour or heading to scenic destinations like Shimla, Manali, or Amritsar, this vehicle promises a hassle-free and luxurious travel experience.

At Sardar Ji Travels, we prioritize your comfort and convenience without breaking the bank. Our 12-seater Urbania rental service in Chandigarh is perfect for weddings, group tours, and business events. With reliable drivers, clean and well-maintained vehicles, and competitive pricing, we ensure you get the best value for your money. Trust Sardar Ji Travels for a seamless booking experience and exceptional service. Book the 12-seater Urbania Traveller today and enjoy the perfect blend of affordability and premium travel.
    `
  },
  "17-seater-urbania-traveller": {
    name: "17 Seater Urbania Traveller",
    img: "/tempo/t4.jpg",
    description: ` Planning a group trip and need a reliable travel solution? Sardar Ji Travels brings you the 17-seater Urbania Traveller rental in Chandigarh at the very lowest cost, perfect for family outings, corporate events, or leisure trips. The Urbania Traveller is designed for maximum comfort, offering spacious interiors, reclining seats, and modern amenities like air conditioning and ample luggage space. Whether you're exploring local attractions in Chandigarh or heading to popular destinations like Amritsar, Shimla, or Dalhousie, this vehicle ensures a luxurious and hassle-free journey for your entire group. At Sardar Ji Travels, customer satisfaction and affordability go hand in hand. Our 17-seater Urbania rental service in Chandigarh is tailored to provide seamless group travel experiences at unbeatable rates. With well-maintained vehicles, experienced drivers, and flexible booking options, we make your travel safe, convenient, and budget-friendly. Whether it's a wedding, a corporate retreat, or a holiday trip, trust Sardar Ji Travels to deliver the ultimate comfort and reliability for your journey. Book your 17-seater Urbania Traveller today and travel in style without compromising on quality or cost.
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

🔗 Website: https://sardarjitourandtravels.in/
    `;

    const whatsappUrl =
      "https://wa.me/919518131847?text=" + encodeURIComponent(msg);

    window.open(whatsappUrl, "_blank");
  };

   // prepare related cars (exclude current)
  const related = Object.entries(tempoData)
    .filter(([key]) => key !== slug)
    .map(([key, value]) => ({ slug: key, ...value }));

  return (
    <>
     <div className="relative w-full h-24">
            <Image
              src="/hero/hero2.jpg"
              alt={tempo.name}
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
                {tempo.name}
              </Reveal>
            </div>
          </div>
 <section className="bg-gray-50 md:p-12 py-12">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10">
          {/* LEFT: content with floated image on md+ */}
          <div className="md:col-span-2">
          <Reveal className="text-2xl font-bold mb-4">{tempo.name}</Reveal>
  <div className="mb-6">
                        <Reveal className="sm:block mb-4 sm:float-right sm:ml-6 sm:w-56 sm:h-36 overflow-hidden rounded">
          <Image
            src={tempo.img}
            alt={tempo.name}
           width={448}
           height={288}
           className="object-cover w-full h-full"
          />
          </Reveal>
            {/* Description / text — will wrap around floated image on sm+ */}
              <p className="text-paragraph text-base leading-relaxed whitespace-pre-line">
                {tempo.description || "No description available for this route."}
              </p>

              {/* itinerary or extra details (if any) - keep below description */}
              {tempo.itinerary && (
                <div className="mt-6">
                  <h3 className="font-semibold mb-2">Itinerary</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{tempo.itinerary}</p>
                </div>
              )}

              {/* clear float so following blocks don't wrap */}
              <div className="clear-both" />
            </div>
        </div>

        {/* Booking Form */}
        <aside>
          <div className="sticky top-6">
       <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Book {tempo.name}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full border rounded p-2 bg-border border-none placeholder-paragraph"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full border rounded p-2 bg-border border-none placeholder-paragraph"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full border rounded p-2 bg-border border-none placeholder-paragraph"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <div className="grid grid-cols-2 gap-2">
              <input
                type="date"
                name="startDate"
                className="w-full border rounded p-2 bg-border border-none placeholder-paragraph bg-white"
                value={formData.startDate}
                onChange={handleChange}
              />
              <input
                type="date"
                name="endDate"
                className="w-full border rounded p-2 bg-border border-none placeholder-paragraph bg-white"
                value={formData.endDate}
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              name="pickup"
              placeholder="Pick-Up Location"
              className="w-full border rounded p-2 bg-border border-none placeholder-paragraph"
              value={formData.pickup}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Write Message"
              className="w-full border rounded p-2 bg-border border-none placeholder-paragraph"
              value={formData.message}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-orange text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
            >
              Submit on WhatsApp
            </button>
          </form>
        </div>
        </div>
        </aside>
      </div>

         {/* Related block */}
              <div className="container mx-auto px-6 mt-8">
                <div className="bg-white border-2 border-border rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-6 h-0.5 bg-orange inline-block" />
                    <h3 className="text-2xl font-semibold">Related</h3>
                  </div>
      
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {related.map((r) => (
                      <div
                        key={r.slug}
                        className="flex items-center gap-3 rounded p-3"
                      >
                        <div className="w-32 h-24 relative flex-shrink-0">
                          <Image
                            src={r.img}
                            alt={r.name}
                            fill
                            className="object-cover rounded"
                            sizes="80px"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold font-medium">{r.name}</h4>
                          <Link
                            href={`/tempo-travellers/${r.slug}`}
                            className="text-base font-bold mt-2 inline-block text-orange hover:underline"
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
