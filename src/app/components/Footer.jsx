import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white text-[#333] px-6 sm:px-10 lg:px-20 pt-28 pb-8">
      <div className="flex flex-col lg:flex-row lg:justify-between">
        {/* Left Column */}
        <div className="flex-1 max-w-xl mb-10 lg:mb-0">
          <h2 className="text-[2rem] font-bold text-pink mb-4">
            Treasured Care For You
          </h2>
          <p className="text-lg mb-6 text-paragraph">
            We ensure every individual is a valued member of our community, and
            every support plan is as unique as you are. With over two decades of
            experience in support work and a deep, personal connection to the
            NDIS, we&apos;re here to empower you and your loved ones to live
            life to its fullest potential.
          </p>
          <Image
            src="/ilovendis.png"
            alt="I love NDIS"
            width={100}
            height={100}
          />
        </div>

        {/* Middle + Right in same row on mobile */}
        <div className="flex flex-row gap-10">
          {/* Middle Column - Pages */}
          <div className="w-[12rem]">
            <h3 className="text-pink font-semibold text-lg mb-4">Pages</h3>
            <ul className="space-y-2 text-paragraph">
              <a href="/">
                {" "}
                <li className="font-semibold">Home</li>{" "}
              </a>
              <a href="/about">
                {" "}
                <li className="font-semibold">About Us</li>{" "}
              </a>
              <a href="/services">
                {" "}
                <li className="font-semibold">Services</li>{" "}
              </a>
              <a href="/resources">
                {" "}
                <li className="font-semibold">Resources</li>{" "}
              </a>
              <a href="/contact">
                {" "}
                <li className="font-semibold">Contact Us</li>{" "}
              </a>
              <a href="/ourservices">
                {" "}
                <li className="font-semibold">Our Services</li>{" "}
              </a>{" "}
              <a href="/experience">
                {" "}
                <li className="font-semibold">Experience</li>{" "}
              </a>{" "}
              <a href="/support">
                {" "}
                <li className="font-semibold">Support</li>{" "}
              </a>{" "}
              <a href="/joinus">
                {" "}
                <li className="font-semibold">Join Us</li>{" "}
              </a>
            </ul>
          </div>

          {/* Right Column - Contact */}
          <div>
            <h3 className="text-pink font-semibold text-lg mb-4">Contact</h3>
            {/* <p className="text-paragraph">
              Ground Floor, Suite 16 / 18
              <br />
              Synnot Street, Werribee
              <br />
              Victoria, Australia
            </p> */}
            <p>
              <a
                href="mailto:Enquiries@treasuredcareforyou.com"
                className="mt-4 text-pink text-xs md:text-base"
              >
                enquiries@treasuredcareforyou.com
              </a>
            </p>
            <p className="mt-2">
              <a href="tel:+610392679030" className="text-pink">
                03 9267 9030
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* Divider and Bottom Line */}
      <hr className="border-t border-pink mt-16 mb-4" />
      {/* <a
        href="https://my-portfolio-nine-ochre-91.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="text-pink text-sm text-center md:text-left"> 
          Website Design By Neeraj Manchanda © 2025
        </p>
      </a> */} 
    </footer>
  );
}
