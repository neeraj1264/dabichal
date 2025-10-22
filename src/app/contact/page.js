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

🔗 Website: https://dabichal.vercel.app/
    `;

    const whatsappUrl =
      "https://wa.me/919518131347?text=" + encodeURIComponent(msg);

    window.open(whatsappUrl, "_blank");
  };

  return (
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
                <FaMapMarkerAlt className="text-[#f58220] mt-1" />
                <p className="text-paragraph leading-relaxed">
                  {" "}
                  <span className="text-black text-xl font-bold">Location</span>
                  <br />
                  80/2, Village Burail, Sector 45,
                  <br />
                  Chandigarh 160047
                </p>
              </div>
              <div className="flex items-start gap-3 mt-6">
                <FaPhoneAlt className="text-[#f58220] mt-1" />
                <div>
                  <p className="text-paragraph leading-relaxed">
                    {" "}
                    <span className="text-black text-xl font-bold">Phone</span>
                    <br />
                    +91 8054481466 <br />
                    +91 8427821466
                  </p>
                </div>
              </div>

            <div className="flex items-start gap-3 mt-6">
              <FaEnvelope className="text-[#f58220]" />
              <p className="text-paragraph leading-relaxed mt-[-3px]">
                {" "}
                <span className="text-black text-xl font-bold">Mail</span>
                <br />
                <a
                  href="mailto:dabbichalcab@gmail.com"
                  className="hover:underline"
                >
                  dabbichalcab@gmail.com
                </a>
              </p>
            </div>
            <div className="flex items-start gap-3 mt-6">
              <FaShareAlt className="text-[#f58220]" />
              <div className="flex gap-4">
                <div className="text-paragraph leading-relaxed mt-[-3px]">
                  <span className="text-black text-xl font-bold">Social</span>
                  <br />
                  <a
                    href="https://www.facebook.com/neeraj.manchanda.3910"
                    className="text-gray-600 hover:text-[#f58220] inline-block mr-3"
                  >
                    <FaFacebook size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/neeraj_1264/?igsh=NDJweXlyc2syYnZr#"
                    className="text-gray-600 hover:text-[#f58220] inline-block"
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
                className="w-full border-b bg-light border-paragraph focus:border-[#f58220] outline-none py-2"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full border-b bg-light border-paragraph focus:border-[#f58220] outline-none py-2"
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
                className="w-full border-b bg-light border-paragraph focus:border-[#f58220] outline-none py-2"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full border-b bg-light border-paragraph focus:border-[#f58220] outline-none py-2"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="message"
              placeholder="Write Your Message Here"
              className="w-full border-b bg-light border-paragraph focus:border-[#f58220] outline-none py-2 h-24 resize-none"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button
              type="submit"
              className="bg-[#f58220] text-white px-6 py-2 rounded-full hover:bg-orange-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
