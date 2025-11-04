import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import Reveal from "../reveal";

const testimonials = [
  {
    id: 1,
    name: "Rohit Sharma",
    feedback:
      "Sardar Ji Tour & Travels, managed by Mankaran Singh, truly delivers top-class taxi service. Our trip from Chandigarh to Shimla was smooth, and the driver was polite and well-trained. The vehicle was spotless and comfortable — definitely using them again for future trips!",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Mehta",
    feedback:
      "I had a great experience with Sardar Ji Tour & Travels! Mr. Mankaran Singh was extremely responsive and ensured everything went perfectly. The car arrived on time, the ride was safe, and the fare was fair. Highly recommended for airport transfers and city rides.",
    rating: 5,
  },
  {
    id: 3,
    name: "Chandan Verma",
    feedback:
      "Sardar Ji Tour & Travels exceeded my expectations. Mankaran Singh personally checked in to confirm our journey details, and the driver was friendly and punctual. It’s rare to find such honesty and professionalism in travel services these days. Five stars all the way!",
    rating: 5,
  },
  {
    id: 4,
    name: "Bittu Singh",
    feedback:
      "Had a wonderful family trip from Chandigarh to Manali with Sardar Ji Tour & Travels. The cab was neat, the driver cooperative, and Mankaran Singh handled the booking very efficiently. Truly trustworthy service — we’ll definitely book again for our next vacation.",
    rating: 5,
  },
  {
    id: 5,
    name: "Sunita Chauhan",
    feedback:
      "I frequently travel for work and always book with Sardar Ji Tour & Travels. Mankaran Singh and his team never disappoint — clean cars, professional drivers, and on-time pickups every time. I can always rely on their service for outstation and business trips.",
    rating: 5,
  },
  {
    id: 6,
    name: "Harpreet Kaur",
    feedback:
      "We booked a cab for our Chandigarh to Amritsar trip through Sardar Ji Tour & Travels. The whole experience was fantastic! Mankaran Singh ensured a smooth booking process, and our driver was polite and well-mannered. Excellent service and value for money.",
    rating: 5,
  },
];

export default function CustomerFeedbacks() {
  const settings = {
    dots: true,           // ✅ pagination dots
    arrows: false,        // hide arrows (optional)
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
    autoplay: true,        // ✅ auto play enabled
    autoplaySpeed: 3000,   // ⏱️ 3 seconds per slide
    pauseOnHover: true,
  };

  return (
<Reveal className="py-12 bg-custom-gradient">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">
        Customer Feedbacks
      </h2>

      <div className="max-w-5xl mx-auto py-8">
        <Slider {...settings}>
          {testimonials.map((t) => (
            <div key={t.id} className="px-3">
              <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col justify-between">
                {/* Rating */}
                <div className="flex mb-3 text-orange">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* Feedback Text */}
                <p className="text-paragraph text-sm md:text-base mb-4">
                  {t.feedback}
                </p>

                {/* Name */}
                <h4 className="font-bold text-gray-900">{t.name}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Reveal>
  );
}
