import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Ravinder Sharma",
    feedback:
      "Dabbi Chal, led by Tejinder Singh, offers exceptional service! The vehicle was spotless, and driver Rahul Shukla made the journey smooth with his friendly and professional demeanor. Highly recommended for anyone looking for reliable and comfortable transportation.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jolly",
    feedback:
      "Tejinder Singh’s Dabbi Chal provided a fantastic experience! Our driver Rahul Shukla was not only courteous and punctual but also offered great local insights. The vehicle was clean and well-maintained, making our trip enjoyable. I will definitely choose Dabbi Chal again!",
    rating: 5,
  },
  {
    id: 3,
    name: "Chandan Verma",
    feedback:
    "Dabbi Chal is a game-changer in taxi services. Tejinder Singh ensures that every ride is comfortable and hassle-free. Our driver, Rahul Shukla, was excellent—punctual, friendly, and knowledgeable. Highly recommend Dabbi Chal for anyone looking for reliable travel solutions.",
    rating: 5,
  },
    {
    id: 4,
    name: "Bittu Singh",
    feedback:
      "A big thanks to Tejinder Singh and Dabbi Chal for their impeccable service! The Innova Crysta was in pristine condition, and Rahul Shukla was an amazing driver—professional, accommodating, and friendly. Our trip was made even better with such great service. Will use again!",
    rating: 5,
  },
    {
    id: 5,
    name: "Sunshine Sshines",
    feedback:
    "If you want a reliable, comfortable, and friendly ride, Dabbi Chal is the service to choose! Tejinder Singh has built a fantastic service, with Rahul Shukla providing excellent driving and helpful tips. The vehicle was clean, and we felt safe throughout the journey.",
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
<section className="py-12 bg-custom-gradient">
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
    </section>
  );
}
