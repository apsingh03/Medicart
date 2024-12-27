"use client";
import React from "react";
import Image from "next/image";
import "./ShopByCategory.css";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
const ShopByCategory = () => {
  const categories = [
    {
      id: 0,
      imageLink:
        "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/0689de18413f37ed943f91db3745908d.png?f=png?dim=360x0",
      title: "Personal care",
      alt: "Personal care",
    },
    {
      id: 1,
      imageLink:
        "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9cc9a28ea4513009966cae794114eefd.png?f=png?dim=360x0",
      title: "Healthcare device",
      alt: "Healthcare device",
    },
    {
      id: 2,
      imageLink:
        "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/6c4351e2d61d364dbeb5167023a0bc3a.png?f=png?dim=360x0",
      title: "Health food and drinks",
      alt: "Health food and drinks ",
    },
    {
      id: 3,
      imageLink:
        "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/81fa3c44e0503863b3778895d5ed0bec.png?f=png?dim=360x0",
      title: "Skin care",
      alt: "Skin care",
    },
    {
      id: 4,
      imageLink:
        "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/eecea6d6d8d73267a175b77346c05dc2.png?f=png?dim=360x0",
      title: "Mother and baby care",
      alt: "Mother and baby care",
    },
    {
      id: 5,
      imageLink:
        "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/4405b7900b0b34fcb5c8572aae9d4b2e.png?f=png?dim=360x0",
      title: "Accessories & Wearables",
      alt: "Accessories & Wearables",
    },
    {
      id: 6,
      imageLink:
        "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/c480fc4eaf3b30c9a44b4dd2c376747b.png?f=png?dim=360x0",
      title: "Vitamins & Supplements",
      alt: "Vitamins & Supplements",
    },
    {
      id: 7,
      imageLink:
        "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/4405b7900b0b34fcb5c8572aae9d4b2e.png?f=png?dim=360x0",
      title: "Accessories & Wearables",
      alt: "Accessories & Wearables",
    },
    {
      id: 8,
      imageLink:
        "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/c480fc4eaf3b30c9a44b4dd2c376747b.png?f=png?dim=360x0",
      title: "Vitamins & Supplements",
      alt: "Vitamins & Supplements",
    },
    {
      id: 9,
      imageLink:
        "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/4405b7900b0b34fcb5c8572aae9d4b2e.png?f=png?dim=360x0",
      title: "Accessories & Wearables",
      alt: "Accessories & Wearables",
    },
    {
      id: 10,
      imageLink:
        "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/c480fc4eaf3b30c9a44b4dd2c376747b.png?f=png?dim=360x0",
      title: "Vitamins & Supplements",
      alt: "Vitamins & Supplements",
    },
  ];

  return (
    <div className="categoryShop relative">
      <h1 className="text-2xl  font-semibold"> Shop by Categories </h1>

      <div className="categoryShop__container flex flex-row items-center justify-between">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={3} // Show 1 slide at a time
          navigation={{
            nextEl: ".custom-next", // Selector for the custom next button
            prevEl: ".custom-prev", // Selector for the custom prev button
          }}
          // pagination={{ clickable: false }} // Enable pagination
          // scrollbar={{ draggable: false }} // Enable scrollbar
          breakpoints={{
            // Small screens (640px and up)
            // 640: {
            //   slidesPerView: 3,
            //   spaceBetween: 10,
            // },
            // Medium screens (768px and up)
            768: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            // Large screens (1024px and up)
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            // Extra-large screens (1280px and up)
            1280: {
              slidesPerView: 5,
              spaceBetween: 25,
            },
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="swiper service-post-thumb-slider"
        >
          {categories.map((data, idx) => {
            return (
              <SwiperSlide className="swiper-slide" key={idx}>
                <div className="productsContainer__box__card" key={idx}>
                  <div className="productsContainer__box__card__imageBox  ">
                    <Image
                      src="https://m.media-amazon.com/images/I/61pNX5gNxrL._SX679_.jpg"
                      // src={data?.imageLink}
                      // Use the image URL from your JSON data
                      width={150}
                      height={100}
                      objectFit="cover" // Ensures the image maintains its aspect ratio and covers the container
                      alt={data?.alt}
                    />
                  </div>

                  <div className="productsContainer__box__card__names">
                    <p className="productsContainer__box__card__names__name text-center limit-to-two-lines text-sm font-normal">
                      {data?.id} {data?.title}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="custom-prev text-white bg-[#30363C] p-2 rounded-full cursor-pointer">
          <FaAngleLeft size={20} color="#fff" />
        </div>
        <div className="custom-next text-white bg-[#30363C] p-2 rounded-full cursor-pointer">
          <FaAngleRight size={20} color="#fff" />
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
