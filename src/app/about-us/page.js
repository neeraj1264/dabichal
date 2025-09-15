import WelcomeSection from "../components/Home/WelcomeSection/WelcomeSection";
import Reveal from "../components/reveal";

export const metadata = {
  title: "About Us",
  description: "About Us.....",
};

export default function Aboutus() {
  return (
    <>
      <WelcomeSection />

      <Reveal className="text-paragraph mb-4 sm:mx-24 mx-4">
        pickups and drops. Whether you're arriving in or departing from
        Chandigarh, we are committed to delivering a smooth and punctual
        experience.
      </Reveal>

      <Reveal className="text-2xl sm:text-2xl font-bold mb-4 sm:mx-24 mx-4 ">
        Customized Tours Across North India
      </Reveal>

      <Reveal className="text-paragraph mb-4 sm:mx-24 mx-4">
        Explore the wonders of North India with our specialized tour packages.
        Whether you wish to visit the serene landscapes of Himachal, sacred
        gurudwaras, embark on a devi darshan tour, or discover the breathtaking
        regions of Kashmir and Ladakh, Dabbi Chal offers expertly guided tours.
        Our experienced drivers and personalized travel solutions ensure that
        every moment of your journey is memorable and enjoyable.
      </Reveal>

      <Reveal className="text-2xl sm:text-2xl font-bold mb-4 sm:mx-24 mx-4 ">
        Book Your Ride Easily
      </Reveal>

      <Reveal className="text-paragraph mb-4 sm:mx-24 mx-4">
        Booking your taxi is simple and convenient with Dabbi Chal. You can
        reserve your ride through our website or contact us directly at +91
        8054481466 or +91 8427821466. Our dedicated team is always ready to
        assist you with your itinerary and travel needs.
      </Reveal>

      <Reveal className="text-2xl sm:text-2xl font-bold mb-4 sm:mx-24 mx-4 ">
        Why Choose Dabbi Chal?
      </Reveal>

      <Reveal className="text-paragraph mb-4 sm:mx-24 mx-4">
        With thousands of satisfied clients and years of experience in the
        industry, Dabbi Chal is one of the most trusted names in North India’s
        travel and tourism sector. We are committed to providing high-quality,
        safe, and budget-friendly travel solutions tailored to your needs. Our
        team of experts ensures that every service we offer is rigorously tested
        to meet the highest standards of customer satisfaction.
      </Reveal>
      <Reveal className="text-paragraph mb-16 sm:mx-24 mx-4">
        Choose Dabbi Chal for your next journey and experience the best in taxi
        rental services, whether you need a one-way ride, round-trip travel, or
        a customized tour. Let us make your travel experience seamless and
        memorable!
      </Reveal>
    </>
  );
}
