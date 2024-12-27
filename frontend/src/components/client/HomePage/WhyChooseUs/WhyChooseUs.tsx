import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  const data = [
    {
      id: 0,
      imageLink:
        "https://assets.pharmeasy.in/apothecary/images/family.svg?dim=256x0",
      imageAlt: "users",
      title: "46 Million+",
      subtitle: "Registered users as of Oct 31, 2024",
    },
    {
      id: 1,
      imageLink:
        "https://assets.pharmeasy.in/apothecary/images/deliveryBoy.svg?dim=256x0",
      imageAlt: "users",
      title: "66 Million+",
      subtitle: "Orders on PharmEasy till date",
    },
    {
      id: 2,
      imageLink:
        "https://assets.pharmeasy.in/apothecary/images/pincodeServed.svg?dim=256x0",
      imageAlt: "users",
      title: "66 Million+",
      subtitle: "Unique items sold last 6 months",
    },
    {
      id: 3,
      imageLink:
        "https://assets.pharmeasy.in/apothecary/images/locationMarker.svg?dim=256x0",
      imageAlt: "Users",
      title: "19000+",
      subtitle: "Pin codes serviced last 3 months",
    },
  ];

  return (
    <div className="bg-[#F8F9FF] p-5 md:p-10">
      <h6 className="font-bold text-[#333333] text-2xl">Why Choose Us?</h6>
      <div className="container flex justify-between">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 py-12">
          {data.map((data, idx) => {
            return (
              <div className="flex items-start gap-2" key={idx}>
                <div>
                  <Image
                    src={data?.imageLink}
                    alt={data?.imageAlt}
                    width={100}
                    height={50}
                    loading="lazy"
                    objectFit="cover"
                  />
                </div>
                <div>
                  <h6 className="text-2xl font-semibold text-[#333333]">
                    {data?.title}
                  </h6>
                  <p className="text-base font-normal mt-2 text-[#333333]">
                    {data?.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
