"use client";  
import Hero from "./components/Home/HeroSection/Hero";
import WelcomeSection from "./components/Home/WelcomeSection/WelcomeSection";
import WorkingProcess from "./components/Home/WorkingProcess";
import TaxiCabRide from "./components/Home/TaxiCabRide";
import TravelServices from "./components/Home/routes/TravelServices";
import TourServices from "./components/Home/TourServices";
import CustomerFeedbacks from "./components/Home/CustomerFeedbacks";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import HeroTop from "./components/Home/HeroSection/Hero1";

export default function HomePage() {
  return (
    <>
    <HeroTop/>
    
    <WelcomeSection/>
    <Hero/>
    <WorkingProcess/>
    <TaxiCabRide/>
    <TravelServices/>
    <TourServices/>
    <CustomerFeedbacks/>
      {/* You could also include a brief About preview, etc. */}
    </>
  );
}
