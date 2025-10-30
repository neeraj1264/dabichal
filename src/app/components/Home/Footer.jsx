import React from "react";
import Reveal from "../reveal";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-20 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Description */}
        <div className="text-center">
          <Image
            src="/logo.png"
            alt="Sardar Ji Travels"
            sizes="192x192"
            className="mx-auto mb-4 rounded-lg w-56"
             width={600} // must give width
             height={400}
          />
          <p className="text-base leading-relaxed text-paragraph text-left">
            Enjoy effortless Taxi booking in Chandigarh/ Mohali/ Zirakpur/
            Panchkula and tours in Chandigarh with our reliable, hassle-free
            one-way cab services.
          </p>
        </div>

        {/* Quick Links */}
        <Reveal className="text-left">
          <h3 className="text-white font-semibold mb-4 text-xl">Quick Links</h3>
          <ul className="space-y-2 text-base text-paragraph">
            <li>About Us</li>
            <li>Taxi Ride</li>
            <li>Force Travellers</li>
            <li>Himachal/Pilgrim</li>
            <li>Ladakh/Kashmir</li>
            <li>Outstation Routes</li>
            <li>Contact Us</li>
            <li>Sitemap</li>
          </ul>
        </Reveal>

        {/* Taxi Services */}
        <Reveal className="text-left">
          <h3 className="text-white font-semibold mb-4 text-xl">Taxi Services</h3>
          <ul className="space-y-2 text-base text-paragraph">
            <li>Innova Hycross</li>
            <li>Honda Amaze</li>
            <li>Toyota Etios</li>
            <li>Innova Crysta</li>
            <li>Maruti Dzire</li>
            <li>Maruti Ertiga</li>
            <li>Kia Carens</li>
          </ul>
        </Reveal>

        {/* Contact + Location */}
        <Reveal className="text-left">
          <h3 className="text-white font-semibold mb-2 text-xl">Locations:</h3>
          <p className="text-base mb-4 text-paragraph">
            Shop No 5, New Defence Colony, Near Sbi Bank, Zirakpur
          </p>
          <h3 className="text-white font-semibold mb-2">Contact</h3>
           <a href="mailto:mmankarnsingh12@gmail.com">
          <p className="text-base text-paragraph">mmankarnsingh12@gmail.com</p>
          </a>
          <a href="tel:+919518131847">
          <p className="text-base text-paragraph">+91 9518131847</p>
          </a>
            <a href="tel:+919034653455">
          <p className="text-base text-paragraph">+91 9034653455</p>
          </a>
            <a href="tel:+917494851984">
          <p className="text-base text-paragraph">+91 7494851984</p>
          </a>
           <a href="tel:+918284816856">
          <p className="text-base text-paragraph">+91 8284816856</p>
          </a>
        </Reveal>
      </div>

      {/* Bottom bar */}
      <Reveal className="bg-neutral-950 text-center py-4 text-base text-gray-400 relative">
        <p>Copyright © 2025 Sardar Ji Travels. All Rights Reserved.</p>
        <p className="mt-1">Designed by: Neeraj Manchanda</p>

      </Reveal>
    </footer>
  );
}
