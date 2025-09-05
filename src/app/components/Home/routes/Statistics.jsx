import React from "react";

export const Statistics = () => {
  const stats = [
    { value: "12+", label: "Years of Experience" },
    { value: "300+", label: "Completed Tours" },
    { value: "100+", label: "One Way Travels" },
    { value: "1000+", label: "Satisfied Clients" },
  ];

  return (
    <div className="bg-orange py-12 w-[90%] m-auto my-[-7rem] absolute left-[5%]">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-center text-white">
            <div className="text-4xl font-bold mb-2">{stat.value}</div>
            <div className="text-lg">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};