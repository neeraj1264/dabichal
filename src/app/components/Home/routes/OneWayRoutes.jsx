import { FaChevronRight } from "react-icons/fa";
import Reveal from "../../reveal";
import Image from "next/image";

export const OneWayRoutes = () => {
  const routes = [
    { title: "Chandigarh To Shimla",     img: "/routes/routes1.jpg"     ,to: "/outstation-routes/chandigarh-to-shimla"},
    { title: "Chandigarh To Manali",     img: "/routes/routes2.jpg"      ,to: "/outstation-routes/chandigarh-to-manali"},
    { title: "Chandigarh To Kasol",      img: "/routes/routes3.jpg"      ,to: "/outstation-routes/chandigarh-to-kasol"},
    { title: "Chandigarh To Rishikesh",  img: "/routes/routes4.jpg"  ,to: "/outstation-routes/chandigarh-to-rishikesh"},
    { title: "Chandigarh To Dehradhun",  img: "/routes/routes5.jpg"  ,to: "/outstation-routes/chandigarh-to-dehradhun"},
    { title: "Chandigarh To Ghajiabad",  img: "/routes/routes6.jpg"   ,to: "/outstation-routes/chandigarh-to-ghajiabad"},
    { title: "Chandigarh To Jalandhar",  img: "/routes/routes7.jpg"   ,to: "/outstation-routes/chandigarh-to-jalandhar"},
    { title: "Chandigarh To Jammu",      img: "/routes/routes8.jpg"      ,to: "/outstation-routes/chandigarh-to-jammu"},
    { title: "Chandigarh To Katra",      img: "/routes/routes9.jpg"       ,to: "/outstation-routes/chandigarh-to-katra"},
    { title: "Chandigarh To Dharamshala",img: "/routes/routes10.jpg",to: "/outstation-routes/chandigarh-to-dharamshala"},
  ];

  return (
    <div className="bg-[#1c1e22] pt-24 pb-8">
      <h2 className="pt-32 sm:p-0 text-center text-white text-2xl sm:text-3xl font-bold mb-8">
        One-Way Routes
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {routes.map((route, idx) => (
          <div key={idx}>
          <Reveal
            className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 pb-32"
          >
            {/* Image */}
            <Image
              width={600} // must give width
              height={400}
              src={route.img}
              alt={route.title}
              className="h-full w-full object-cover rounded-lg"
            />

                      {/* Orange Floating Box */}
            <Reveal className="absolute bottom-14 left-1/2 transform -translate-x-1/2 bg-[#f58220] w-[85%] rounded-b-xl pb-4 pt-2 px-2 flex flex-col items-center text-white shadow-lg">
              <h3 className="text-base font-semibold mb-1 text-center">
                {route.title}
              </h3>
              <button className="group inline-flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full font-medium transition-all duration-300 hover:bg-white hover:text-black">
                Explore More
                <FaChevronRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Reveal>
          </Reveal>
          </div>
        ))}
      </div>

      {/* Bottom Explore More */}
      <div className="flex justify-center mt-12">
        <button className="bg-[#f58220] text-white px-6 py-2 rounded hover:bg-black hover:text-white transition duration-300 flex items-center gap-2">
          Explore More
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

