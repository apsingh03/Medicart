import Link from "next/link";
import React from "react";

const ṢubHeader = () => {
  return (
    <section className="subHeader  flex flex-row justify-center items-center  gap-6">
      <div className="subHeader__card">
        <Link href="#"> Medicine </Link>
      </div>

      <div className="subHeader__card">
        <Link href="#"> Lab Tests </Link>
      </div>

      <div className="subHeader__card">
        <Link href="#"> Healthcare </Link>
      </div>

      <div className="subHeader__card">
        <Link href="#"> Health Blogs </Link>
      </div>

      <div className="subHeader__card">
        <Link href="#"> Plus </Link>
      </div>
    </section>
  );
};

export default ṢubHeader;
