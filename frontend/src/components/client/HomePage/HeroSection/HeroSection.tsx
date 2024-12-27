import React from "react";
import "./HeroSection.css";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
// import styles from "./HeroSection.module.css";

const HeroSection = () => {
  const offersJson = [
    {
      id: 0,
      imageLink: "/assets/images/medicine.webp",
      title: "Medicine",
      subTitle: "Save 22% Off",
    },
    {
      id: 1,
      imageLink: "/assets/images/labtest_ff.webp",
      title: "Lab Tests",
      subTitle: "Save 22% Off",
    },
    {
      id: 2,
      imageLink: "/assets/images/healthcare_ff.webp",
      title: "Healthcare",
      subTitle: "Save 22% Off",
    },
    {
      id: 3,
      imageLink: "/assets/images/health_blogs_ff.webp",
      title: "Health Blogs",
      subTitle: "Save 22% Off",
    },
    {
      id: 4,
      imageLink: "/assets/images/plus_ff.webp",
      title: "PLUS",
      subTitle: "Save 22% Off",
    },
    {
      id: 5,
      imageLink: "/assets/images/offers_ff.webp",
      title: "Offers",
      subTitle: "Save 22% Off",
    },
    {
      id: 6,
      imageLink: "/assets/images/value_store.png",
      title: "Value Store",
      subTitle: "Save 22% Off",
    },
  ];

  return (
    <div className="heroSection">
      <div className="heroSection__one px-0 md:px-24 lg:px-36 py-14">
        <p className="heroSection__one__title text-[#2c2c2c] text-2xl font-semibold  ">
          What are you looking for ?
        </p>
        <div className="heroSection__one__searchinput mt-4">
          <div className="heroSection__one__search__icon">
            <IoIosSearch />
          </div>
          <input
            type="text"
            className="heroSection__one__inputfield "
            placeholder="Search..."
          />
          <button className="heroSection__one__submitbtn">Search</button>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="heroSection__two flex flex-row items-center justify-between ">
          {offersJson.map((data, idx) => (
            <div className="heroSection__two__card" key={idx}>
              <div>
                <Image
                  src={data?.imageLink} // Use the image URL from your JSON data
                  width={150}
                  height={150}
                  // layout="fill" // Makes the image take up 100% of its parent container
                  objectFit="contain" // Ensures the image maintains its aspect ratio and covers the container
                  alt={data.title || "Offer Image"}
                  loading="lazy"
                />
              </div>

              <div className="heroSection__two__card__titles">
                <h6 className="heroSection__two__card__titles__title">
                  {data.title || "Medicine"}
                </h6>
                <p className="heroSection__two__card__titles__discount">
                  {data.subTitle || "SAVE 22% OFF"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
