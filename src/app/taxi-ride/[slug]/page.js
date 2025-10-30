"use client";
import Reveal from "@/app/components/reveal";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

const carsData = {
  "innova-hycross": {
    name: "Innova Hycross",
    img: "/cab/cab1.jpg",
    description: ` Elevate your travel experience with Sardar Ji Travels Innova Hycross taxi booking service in Chandigarh, perfect for family outings, corporate travel, and outstation trips. The Innova Hycross, a premium hybrid SUV, combines luxury, fuel efficiency, and advanced features, ensuring a smooth and eco-friendly ride. Whether you're planning a visit to Chandigarh's famous attractions like Rock Garden and Sukhna Lake or embarking on a long journey to destinations like Shimla, Manali, or Amritsar, our Innova Hycross offers ample space, plush seating, and advanced safety features to keep your journey comfortable and secure.

At Sardar Ji Travels, we pride ourselves on delivering top-notch Innova Hycross taxi services in Chandigarh, tailored to meet your travel needs. Our well-maintained fleet, experienced chauffeurs, and affordable pricing make us the preferred choice for both local and outstation travel. With spacious interiors, cutting-edge technology, and a commitment to punctuality, the Innova Hycross is ideal for group trips, family vacations, or business travel. Book your ride today with Sardar Ji Travels and experience a blend of comfort, reliability, and convenience like never before.
    `,
  },
  "honda-amaze": {
    name: "Honda Amaze",
    img: "/cab/cab7.jpg",
    description: ` Experience the comfort and reliability of Sardar Ji Travels Honda Amaze taxi booking service in Chandigarh, designed to make your journeys effortless and enjoyable. Whether you're planning a quick airport transfer, a corporate trip, or a leisurely tour of the city, our Honda Amaze fleet is perfect for all your travel needs. Known for its spacious interiors, excellent mileage, and smooth performance, the Honda Amaze ensures a hassle-free ride every time. With Sardar Ji Travels, you can book your taxi online or by phone, ensuring convenience at your fingertips.

Our taxi services cater to a wide range of destinations, including local sightseeing, intercity travel, and long-distance journeys from Chandigarh. Sardar Ji Travels takes pride in offering professionally trained drivers, well-maintained vehicles, and affordable rates that suit every budget. Whether you're traveling solo or with family, the Honda Amaze is your ideal travel companion. Choose Sardar Ji Travels's taxi booking service today and enjoy a safe, comfortable, and premium travel experience in`,
  },
  "toyota-etios": {
    name: "Toyota Etios",
    img: "/cab/cab2.jpg",
    description: ` Looking for a reliable and comfortable travel option? Sardar Ji Travels offers Toyota Etios taxi booking services in Chandigarh, ensuring a smooth and stress-free ride for all your travel needs. Known for its spacious seating, superior fuel efficiency, and dependable performance, the Toyota Etios is the perfect choice for city tours, airport transfers, or outstation trips. Whether you were traveling with family, friends, or on a business trip, our taxi service provides the right blend of affordability and luxury. With Sardar Ji Travels, you can book your Toyota Etios taxi effortlessly through our user-friendly platform and enjoy the convenience of a timely pickup and drop-off.

At Sardar Ji Travels, we prioritize customer satisfaction by offering well-maintained vehicles, professional drivers, and transparent pricing. The Toyota Etios is ideal for long journeys, offering a comfortable cabin and smooth performance that makes every mile enjoyable. From exploring Chandigarh's famous attractions to traveling to nearby cities, our taxi service ensures safety and reliability throughout your trip. Choose Sardar Ji Travels Toyota Etios taxi service in Chandigarh for a seamless and budget-friendly travel experience tailored to your needs.
    `,
  },
  "innova-crysta": {
    name: "Innova Crysta",
    img: "/cab/cab3.jpg",
    description: ` Experience luxury and comfort with Sardar Ji Travels Innova Crysta taxi booking service in Chandigarh, tailored for families, groups, and business travelers alike. The Innova Crysta is renowned for its spacious interiors, premium features, and unmatched reliability, making it the perfect choice for long journeys and local sightseeing tours. Whether you're heading to popular destinations in Chandigarh, planning an outstation trip, or need a reliable airport transfer, our Innova Crysta taxi ensures a smooth and comfortable ride. With seating for up to seven passengers, ample luggage space, and a powerful engine, this premium MPV is designed to make your journey truly enjoyable.

At Sardar Ji Travels, we are committed to providing well-maintained vehicles, experienced drivers, and hassle-free booking services. Our Innova Crysta taxi service in Chandigarh is ideal for corporate events, family vacations, and group tours, offering a blend of style, safety, and convenience. Book your ride today to explore Chandigarh attractions or travel to nearby cities like Shimla, Manali, and Amritsar with ease. With competitive rates, punctuality, and round-the-clock service, Sardar Ji Travels ensures that every trip in our Innova Crysta is a memorable one.
    `,
  },
  "maruti-dzire": {
    name: "Maruti Dzire",
    img: "/cab/cab4.jpg",
    description: ` Discover comfort and reliability with Sardar Ji Travels Maruti Dzire taxi booking service in Chandigarh, the perfect choice for both local and outstation travel. Renowned for its excellent fuel efficiency, spacious interiors, and smooth ride quality, the Maruti Dzire ensures a delightful journey every time. Whether you need a taxi for city sightseeing, corporate travel, airport transfers, or long-distance trips to destinations like Shimla, Manali, or Amritsar, our Maruti Dzire is ready to cater to all your travel needs.

At Sardar Ji Travels, we prioritize customer satisfaction by offering clean, well-maintained vehicles and professional drivers who ensure safety and punctuality. Our Maruti Dzire car rental services in Chandigarh come with competitive pricing, easy booking options, and personalized travel solutions. Whether you're traveling solo or with family, the Maruti Dzire compact yet comfortable design makes it ideal for every occasion. Book your ride with Sardar Ji Travels today and enjoy a seamless travel experience with unmatched convenience and affordability.
    `,
  },
  "maruti-ertiga": {
    name: "Maruti Ertiga",
    img: "/cab/cab5.jpg",
    description: ` Experience spacious comfort and versatility with Sardar Ji Travels Maruti Ertiga taxi booking service in Chandigarh, the ideal choice for group travel and family outings. The Maruti Ertiga is a perfect blend of style, performance, and ample space, making it an excellent option for local sightseeing, airport transfers, or outstation trips to destinations like Shimla, Dharamshala, and Jaipur. Whether you're planning a weekend getaway or a long-distance journey, the Maruti Ertiga provides a smooth ride with plenty of legroom for every passenger.

At Sardar Ji Travels, we are committed to offering reliable and affordable Maruti Ertiga car rental services in Chandigarh, ensuring a hassle-free experience for our customers. With professional drivers, well-maintained vehicles, and flexible booking options, we make your travel plans stress-free and enjoyable. Our Maruti Ertiga taxis are perfect for weddings, business trips, and family vacations, providing ample luggage space without compromising on comfort. Choose Sardar Ji Travels for your next journey and enjoy a seamless travel experience with quality service at competitive rates.
    `,
  },
  "kia-carens": {
    name: "Kia Carens",
    img: "/cab/cab6.jpg",
    description: ` Experience unparalleled comfort and style with Sardar Ji Travels Kia Carens car rentals and taxi booking service in Chandigarh. Designed to cater to families, small groups, and corporate travelers, the Kia Carens offers exceptional space, luxurious interiors, and advanced safety features. Whether you're exploring Chandigarh's iconic spots like the Rose Garden and Sector 17 or heading to scenic destinations like Shimla, Manali, or Jaipur, our Kia Carens ensures a smooth and comfortable journey. Its modern design, fuel efficiency, and ample luggage space make it the ideal choice for both local and outstation travel.

At Sardar Ji Travels, we are committed to providing the best Kia Carens car rental services in Chandigarh for a hassle-free travel experience. Our well-maintained fleet and professional drivers ensure a safe, reliable, and enjoyable ride every time. With competitive pricing, easy booking options, and tailored travel solutions, the Kia Carens is perfect for all your travel needs, from short city trips to long vacations. Book your Kia Carens with Sardar Ji Travels today and elevate your journey with a seamless blend of affordability, style, and convenience.
    `,
  },
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
    message: "",
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

🔗 Website: https://sardarjitourandtravels.in/
    `;

    const whatsappUrl =
      "https://wa.me/919518131847?text=" + encodeURIComponent(msg);

    window.open(whatsappUrl, "_blank");
  };

  // prepare related cars (exclude current)
  const related = Object.entries(carsData)
    .filter(([key]) => key !== slug)
    .map(([key, value]) => ({ slug: key, ...value }));

  return (
    <>
      <div className="relative w-full h-24">
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
      <section className="bg-gray-50 md:p-12 py-12">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10">
          {/* Car Info */}
          <div className="md:col-span-2">
            <Reveal className="text-2xl font-bold ">{car.name}</Reveal>
            <div className="mb-6">
              <Reveal className="sm:block mb-4 sm:float-right sm:ml-6 sm:w-56 sm:h-36 overflow-hidden rounded">
                <Image
                  src={car.img}
                  alt={car.name}
                  width={448}
                  height={288}
                  className="rounded-xl shadow-md mb-6"
                />
              </Reveal>
              <p className="text-paragraph text-base leading-relaxed whitespace-pre-line">
                {car.description}
              </p>
              {/* itinerary or extra details (if any) - keep below description */}
              {car.itinerary && (
                <div className="mt-6">
                  <h3 className="font-semibold mb-2">Itinerary</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {car.itinerary}
                  </p>
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
                <h2 className="text-2xl font-semibold mb-4">Book {car.name}</h2>
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
                      placeholder="Start Date"
                      className="w-full border rounded p-2 bg-border border-none placeholder-paragraph bg-white"
                      value={formData.startDate}
                      onChange={handleChange}
                    />
                    <input
                      type="date"
                      name="endDate"
                      placeholder="End Date"
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
          </aside>
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
                      href={`/taxi-ride/${r.slug}`}
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
