"use client";
import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaShareAlt,
} from "react-icons/fa";
import Reveal from "../components/reveal";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const msg = `
*New Contact Form Enquiry*
---------------------------------
👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
📌 Subject: ${formData.subject}
📝 Message: ${formData.message}

🔗 Website: https://sardarjitourandtravels.in/
    `;

    const whatsappUrl =
      "https://wa.me/919518131847?text=" + encodeURIComponent(msg);

    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
  {/* Hero */}
      <div className="relative w-full h-24">
        <Image src="/hero/hero2.jpg" alt="Contact Us" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-4">
          <Reveal className="text-white text-lg md:text-2xl font-bold drop-shadow-lg">
            Contact Us
          </Reveal>
        </div>
      </div>
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
        {/* Left Section */}
        <div className="py-8 ">
          <h2 className="text-orange font-bold text-2xl uppercase mb-2">
            Get in Touch
          </h2>
          <h1 className="text-2xl font-semibold mb-6">Contact Us</h1>

          <div className="space-y-6 text-gray-700">
            <div className="grid md:grid-cols-2 mt-6 gap-4">
              <div className="flex items-start gap-3 mt-6">
                <FaMapMarkerAlt className="text-orange mt-1" />
                <p className="text-paragraph leading-relaxed">
                  {" "}
                  <span className="text-black text-xl font-bold">Location</span>
                  <br />
                  Shop No 5, New Defence Colony,
                  <br />
                  Near Sbi Bank, Zirakpur
                </p>
              </div>
              <div className="flex items-start gap-3 mt-6">
                <FaPhoneAlt className="text-orange mt-1" />
                <div>
                  <p className="text-paragraph leading-relaxed">
                    {" "}
                    <span className="text-black text-xl font-bold">Phone</span>
                    <br />
                    +91 9518131847 <br />
                    +91 9034653455 <br />
                    +91 7494851984 <br/>
                    +91 8284816856
                  </p>
                </div>
              </div>

            <div className="flex items-start gap-3 mt-6">
              <FaEnvelope className="text-orange" />
              <p className="text-paragraph leading-relaxed mt-[-3px]">
                {" "}
                <span className="text-black text-xl font-bold">Mail</span>
                <br />
                <a
                  href="mailto:mmankarnsingh12@gmail.com"
                  className="hover:underline"
                >
                  mmankarnsingh12@gmail.com
                </a>
              </p>
            </div>
            <div className="flex items-start gap-3 mt-6">
              <FaShareAlt className="text-orange" />
              <div className="flex gap-4">
                <div className="text-paragraph leading-relaxed mt-[-3px]">
                  <span className="text-black text-xl font-bold">Social</span>
                  <br />
                  <a
                    href="https://www.facebook.com/share/1D3iRqVtDg/"
                    className="text-gray-600 hover:text-orange inline-block mr-3"
                  >
                    <FaFacebook size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/mankarn_chattha?igsh=MXVhbjVjejBsbjFvdQ=="
                    className="text-gray-600 hover:text-orange inline-block"
                  >
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-light rounded-md p-8">
          <h2 className="text-2xl font-semibold mb-6">Fill Up The Form</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full border-b bg-light border-paragraph focus:border-orange outline-none py-2"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full border-b bg-light border-paragraph focus:border-orange outline-none py-2"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full border-b bg-light border-paragraph focus:border-orange outline-none py-2"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full border-b bg-light border-paragraph focus:border-orange outline-none py-2"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="message"
              placeholder="Write Your Message Here"
              className="w-full border-b bg-light border-paragraph focus:border-orange outline-none py-2 h-24 resize-none"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button
              type="submit"
              className="bg-orange text-white px-6 py-2 rounded-full hover:bg-orange-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
    </>
  );
}
