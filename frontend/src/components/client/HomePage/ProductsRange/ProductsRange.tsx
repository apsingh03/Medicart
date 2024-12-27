"use client";
import React, { useMemo } from "react";
import Image from "next/image";
import "./ProductsRange.css";
import Link from "next/link";
import Product from "./Product/Product";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const {
  calculateProductDiscount,
} = require("../../../../utils/productDiscountCalculate.js");

// Define props type
interface ProductsRangeProps {
  title: string;
  subTitle: string;
}

const ProductsRange: React.FC<ProductsRangeProps> = ({ title, subTitle }) => {
  const products = [
    {
      id: 0,
      imageLink:
        "https://cdn01.pharmeasy.in/dam/products_otc/Z98485/baidyanath-nagpur-rheumartho-gold-plus-for-chronic-joint-pain-muscle-pain-relief-30-capsules-2-1708428940.jpg?dim=1440x0",
      alt: "Ibro Pen",
      name: "Baidyanath Nagpur Rheumartho Gold Plus For Chronic Joint Pain Muscle Pain Relief 30 Capsules",
      mrp: 7402,
      discount: 15,
    },
    {
      id: 1,
      imageLink:
        "https://cdn01.pharmeasy.in/dam/products_otc/X35807/pharmeasy-womens-diabetic-orthopedic-slippers-blue-size-uk-6-6.01-1732279021.jpg?dim=1440x0",
      alt: "Ibro Pen",
      name: "Baidyanath Nagpur Rheumartho Gold Plus For Chronic Joint Pain Muscle Pain Relief 30 Capsules",
      mrp: 753,
      discount: 15,
    },
    {
      id: 2,
      imageLink:
        "https://cdn01.pharmeasy.in/dam/products_otc/H93792/himalaya-koflet-cough-syrup-100ml-6-koflet-lozenges-free-for-wet-dry-cough-6.01-1725362874.jpg?dim=1440x0",
      alt: "Ibro Pen",
      name: "Baidyanath Nagpur Rheumartho Gold Plus For Chronic Joint Pain Muscle Pain Relief 30 Capsules",
      mrp: 564,
      discount: 8,
    },
    {
      id: 3,
      imageLink:
        "https://cdn01.pharmeasy.in/dam/products_otc/F91358/golite-active-powerful-depigmenting-cream-tube-of-15g-2-1682071498.jpg?dim=1440x0",
      alt: "Ibro Pen",
      name: "Baidyanath Nagpur Rheumartho Gold Plus For Chronic Joint Pain Muscle Pain Relief 30 Capsules",
      mrp: 740,
      discount: 6,
    },
    {
      id: 4,
      imageLink:
        "https://cdn01.pharmeasy.in/dam/products_otc/A26069/contour-plus-glucometer-test-strips-box-of-50-with-free-sapphire-25-lancets-1-1702473338.jpg?dim=1440x0",
      alt: "Ibro Pen",
      name: "Baidyanath Nagpur Rheumartho Gold Plus For Chronic Joint Pain Muscle Pain Relief 30 Capsules",
      mrp: 740,
      discount: 5,
    },

    {
      id: 5,
      imageLink:
        "https://cdn01.pharmeasy.in/dam/products_otc/Y71383/venusia-acne-lotion-75gm-2-1722337491.jpg?dim=1440x0",
      alt: "Ibro Pen",
      name: "Baidyanath Nagpur Rheumartho Gold Plus For Chronic Joint Pain Muscle Pain Relief 30 Capsules",
      mrp: 740,
      discount: 11,
    },

    {
      id: 6,
      imageLink:
        "https://images.unsplash.com/photo-1550572017-4fcdbb59cc32?q=80&w=1939&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Ibro Pen",
      name: "Baidyanath Nagpur Rheumartho Gold Plus For Chronic Joint Pain Muscle Pain Relief 30 Capsules",
      mrp: 740,
      discount: 15,
    },

    {
      id: 7,
      imageLink:
        "https://images.unsplash.com/photo-1550572017-4fcdbb59cc32?q=80&w=1939&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Ibro Pen",
      name: "Baidyanath Nagpur Rheumartho Gold Plus For Chronic Joint Pain Muscle Pain Relief 30 Capsules",
      mrp: 740,
      discount: 15,
    },

    {
      id: 8,
      imageLink:
        "https://images.unsplash.com/photo-1550572017-4fcdbb59cc32?q=80&w=1939&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Ibro Pen",
      name: "Baidyanath Nagpur Rheumartho Gold Plus For Chronic Joint Pain Muscle Pain Relief 30 Capsules",
      mrp: 740,
      discount: 15,
    },

    {
      id: 9,
      imageLink:
        "https://images.unsplash.com/photo-1550572017-4fcdbb59cc32?q=80&w=1939&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Ibro Pen",
      name: "Baidyanath Nagpur Rheumartho Gold Plus For Chronic Joint Pain Muscle Pain Relief 30 Capsules",
      mrp: 740,
      discount: 15,
    },
  ];

  return (
    <div className="productsContainer">
      <div className="productsContainer__titleBox">
        <div className="productsContainer__titleBox__title">
          {" "}
          <span className="text-2xl  font-semibold">{title}</span>{" "}
        </div>
        <div className="productsContainer__titleBox__subtitle">
          {" "}
          <span>{subTitle}!</span>
        </div>
      </div>

      <div className="productsContainer__box flex flex-row justify-between gap-5 relative  ">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: false }}
          navigation={{
            nextEl: ".custom-next", // Selector for the custom next button
            prevEl: ".custom-prev", // Selector for the custom prev button
          }}
          slidesPerView={2}
          breakpoints={{
            // Small screens (640px and up)
            640: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
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
          {products.map((data, idx) => (
            <SwiperSlide className="swiper-slide" key={idx}>
              <Link href={data?.imageLink}>
                <Product
                  imageLink={data?.imageLink}
                  imageAlt={data?.alt}
                  name={data?.name}
                  mrp={data?.mrp}
                  discount={data?.discount}
                  id={data?.id}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
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

export default ProductsRange;
