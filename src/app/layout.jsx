import { IoLogoWhatsapp } from "react-icons/io";
import Footer from "./components/Home/Footer";
import InstallPrompt from "./InstallPrompt";
import "./globals.css";
import { FaPhone } from "react-icons/fa";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Home/Header/Navbar";

export const metadata = {
  title:
    "Sardar Ji Travels",
  description:
    "Sardar Ji Travels..........",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="font-heading">
      <head>
        <link
          rel="icon"
          href="/logo_square2.jpg"
          sizes="192x192"
          type="image/png"
        />
      </head>
      <body className="font-heading">
        <Navbar />
        <InstallPrompt />
        <main>
          {" "}
          {/* page content */}
          {children}
        </main>
        {/* Floating WhatsApp & Phone Buttons */}
        <div className="fixed bottom-6 left-6 flex flex-col gap-4 z-50">
          {/* WhatsApp with sonar effect */}
          <a
            href="https://wa.me/919518131347"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full text-green-500 bg-white shadow-lg hover:scale-110 transition-transform duration-300 animate-float"
          >
            <IoLogoWhatsapp size={42} />
          </a>

          {/* Phone with sonar effect */}
          <a href="tel:+919518131347" className="btn-sonar phone bg-orange">
            <FaPhone size={22} />
          </a>
        </div>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
