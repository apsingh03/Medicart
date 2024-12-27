import Image from "next/image";
import Link from "next/link";
import React from "react";
const {
  calculateProductDiscount,
} = require("../../../../../utils/productDiscountCalculate.js");

interface ProductProps {
  id: number;
  imageLink: string;
  imageAlt: string;
  name: string;
  mrp: number;
  discount?: number; // Optional prop
}

const Product: React.FC<ProductProps> = ({
  id,
  imageLink,
  imageAlt,
  name,
  mrp,
  discount,
}) => {
  return (
    <div
      className="productsContainer__box__card flex flex-row gap-3 "
      style={{ width: "100%", height: "150px" }}
    >
      <div
        className="productsContainer__box__card__imageBox bg-white "
        style={{ width: "50%", height: "150px" }}
      >
        <Image
          src={imageLink} // Use the image URL from your JSON data
          width={130}
          height={150}
          objectFit="cover" // Ensures the image maintains its aspect ratio and covers the container
          alt={imageAlt}
          loading="lazy"
        />
      </div>

      <div
        className="productsContainer__box__card__names"
        style={{ width: "50%" }}
      >
        <p className="productsContainer__box__card__names__name limit-to-two-lines ">
          {id} - {name}
        </p>
        <p className="productsContainer__box__card__names__mrp">
          MRP &#8377;
          <span className="line-through"> {mrp} </span>
        </p>
        <div className="productsContainer__box__card__names__price flex flex-row gap-2">
          <p className="productsContainer__box__card__names__price__final">
            {calculateProductDiscount(mrp, discount)}
          </p>
          <p className="productsContainer__box__card__names__price__discountPercent">
            {"("}
            {discount}%{")"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
