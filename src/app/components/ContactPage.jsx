"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HeroSection from "../components/HeroSection";

export default function ContactPage() {
  const pathname = usePathname();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    return (
      formData.name && formData.email && formData.phone && formData.message
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xzzdowbe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {pathname === "/contact" && <HeroSection />}

      <ToastContainer />
      <section className="bg-gray-50 py-16 md:py-32 px-4 sm:px-6 lg:px-16">
        <div className="">
          {/* Title & Description */}
          <h2 className="text-4xl font-bold text-black mb-4">
            Do you have a question?
          </h2>
          <p className="text-paragraph mb-10">
            At Treasured Care For You, we understand that every journey is
            unique, and sometimes <br /> you might need a bit of guidance along
            the way. Whether you have questions about our <br /> services, need
            assistance with your NDIS plan, or simply want to learn more about
            how we <br /> can support you or your loved ones, our friendly team
            is here to help.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {" "}
            {/* Name */}
            <div>
              <label className="block font-bold text-paragraph mb-1 text-lg">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-2 border-pink rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink"
                required
              />
            </div>
            {/* Email */}
            <div>
              <label className="block font-bold text-paragraph mb-1 text-lg">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-2 border-pink rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink"
                required
              />
            </div>
            {/* Phone */}
            <div>
              <label className="block font-bold text-paragraph mb-1 text-lg">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-2 border-pink rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink"
                required
              />
            </div>
            {/* Message */}
            <div>
              <label className="block font-bold text-paragraph mb-1 text-lg">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                rows="6"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border-2 border-pink rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink text-black"
                required
              ></textarea>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-pink text-white py-3 px-6 rounded shadow hover:bg-[#be3b88]/90 transition duration-300"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </section>

      <section className="bg-gray-50 pt-8 pb-32 px-4 sm:px-6 lg:px-16">
        <div className="">
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl font-bold text-pink mb-6">
            How to Reach Us
          </h2>

          {/* Address */}
          {/* <p className="text-paragraph leading-relaxed">
            Ground Floor, Suite 16 / 18
            <br />
            Synnot Street, Werribee
            <br />
            Victoria, Australia
          </p> */}

          {/* Email */}
          <p className="mt-4 text-pink font-medium">
            <a href="mailto:Enquiries@treasuredcareforyou.com">
              enquiries@treasuredcareforyou.com
            </a>
          </p>

          {/* Phone */}
          <p className="text-pink font-medium mt-1">
            <a href="tel:+610392679030">03 9267 9030 </a>
          </p>

          {/* Admin Hours */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900">Admin Hours</h3>
            <p className="text-paragraph">Service Hours: 24/7</p>
          </div>
        </div>
      </section>

      <section className="bg-pink text-white py-32 px-6 sm:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center">
          {/* Text Content */}
          <div className="max-w-[42rem]">
            <h3 className="text-4xl md:text-5xl text-center md:text-left font-bold mb-4">
              Your Thoughts Matter
            </h3>
            <p className="text-base leading-relaxed text-center md:text-left">
              Your feedback and questions are valuable to us. They help us to
              continually improve our services and understand how we can better
              support you. Don&apos;t hesitate to reach out, we&apos;re here to
              listen and assist in any way we can.
            </p>
          </div>

          {/* Button */}
          <a
            href="/contact"
            className="bg-white text-[#333] font-semibold py-3 px-8 mx-auto mt-8 md:mt-0 w-[100%] md:w-fit text-center rounded-full shadow-md hover:scale-105 transition-transform duration-200"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
