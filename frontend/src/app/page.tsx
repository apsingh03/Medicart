import Footer from "@/components/client/Footer";
import Header from "@/components/client/Header";
import DoubleProductsRange from "@/components/client/HomePage/DoubleProductsRange/DoubleProductsRange";
import HeroSection from "@/components/client/HomePage/HeroSection/HeroSection";
import ProductsRange from "@/components/client/HomePage/ProductsRange/ProductsRange";
import ShopByCategory from "@/components/client/HomePage/ShopByCategory/ShopByCategory";
import SpotlightProductsRange from "@/components/client/HomePage/SpotlightProductsRange/SpotlightProductsRange";
import WhyChooseUs from "@/components/client/HomePage/WhyChooseUs/WhyChooseUs";
import SubHeader from "@/components/client/ṢubHeader";
import Image from "next/image";

import { FaBeer, FaHome } from "react-icons/fa"; // Import the icons you need
export const metadata = {
  title: "MediCart - HomePage",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <SubHeader />

      <HeroSection />

      <ShopByCategory />

      <ProductsRange
        title="New Launches"
        subTitle="New wellness range just for you!"
      />

      <ProductsRange
        title="Trending Near You"
        subTitle="Popular in your city"
      />

      <DoubleProductsRange
        title="Wellness Essentials of the Week"
        subTitle="Super charge your immunity with us"
      />

      <WhyChooseUs />

      <SpotlightProductsRange />

      <Footer />
    </>
  );
}
