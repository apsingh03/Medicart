import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="#">
                <span className="text-base font-normal hover:text-gray-800">
                  About Us
                </span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="text-base font-normal hover:text-gray-800">
                  Careers
                </span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="text-base font-normal hover:text-gray-800">
                  Blog
                </span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="text-base font-normal hover:text-gray-800">
                  Partner with PharmEasy
                </span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="text-base font-normal hover:text-gray-800">
                  Sell at PharmEasy
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="#">
                <span className="text-base font-normal hover:text-gray-800">
                  Order Medicine
                </span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="text-base font-normal hover:text-gray-800">
                  Healthcare Products
                </span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="text-base font-normal hover:text-gray-800">
                  Lab Tests
                </span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="text-base font-normal hover:text-gray-800">
                  Find Nearest Collection Centre
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Featured Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Featured Categories</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="#">
                <span className="text-base font-normal hover:text-gray-800">
                  Must Haves
                </span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="text-base font-normal hover:text-gray-800">
                  Sports Nutrition
                </span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="text-base font-normal hover:text-gray-800">
                  Homeopathy Care
                </span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="text-base font-normal hover:text-gray-800">
                  Elderly Care
                </span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="text-base font-normal hover:text-gray-800">
                  Personal Care
                </span>
              </Link>
            </li>
          </ul>
        </div>

      

        <div>
          <h3 className="text-lg font-semibold mb-4">Follow us on</h3>
          {/* <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="#">
                <span className="text-base font-normal hover:text-gray-800">
                  Editorial Policy
                </span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="text-base font-normal hover:text-gray-800">
                  Privacy Policy
                </span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="text-base font-normal hover:text-gray-800">
                  Vulnerability Disclosure Policy
                </span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="text-base font-normal hover:text-gray-800">
                  Terms and Conditions
                </span>
              </Link>
            </li>
          </ul> */}
          <div className="flex space-x-4">
            <Link href="#">
              <span>
                <Image
                  src="https://assets.pharmeasy.in/apothecary/images/Instagram.svg?dim=64x0"
                  alt="Instagram"
                  width={24}
                  loading="lazy"
                  objectFit="contain"
                  height={24}
                />
              </span>
            </Link>
            <Link href="#">
              <span>
                <Image
                  src="https://assets.pharmeasy.in/apothecary/images/facebook.svg?dim=64x0"
                  alt="Facebook"
                  width={24}
                  height={24}
                  loading="lazy"
                  objectFit="contain"
                />
              </span>
            </Link>
            <Link href="#">
              <span>
                <Image
                  src="https://assets.pharmeasy.in/apothecary/images/Youtube.svg?dim=64x0"
                  alt="YouTube"
                  width={24}
                  height={24}
                  loading="lazy"
                  objectFit="contain"
                />
              </span>
            </Link>
            <Link href="#">
              <span>
                <Image
                  src="https://assets.pharmeasy.in/apothecary/images/Twitter.svg?dim=64x0"
                  alt="Twitter"
                  width={24}
                  height={24}
                  loading="lazy"
                  objectFit="contain"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Payment Partners & Social Links */}
      <div className="mt-8 border-t border-gray-200 pt-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Payment Partners */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Payment Partners</h3>
            <div className="flex space-x-4">
              <Image
                src="https://assets.pharmeasy.in/apothecary/images/gpay.png?dim=1440x0"
                alt="GPay"
                width={50}
                height={20}
                objectFit="contain"
                loading="lazy"
              />
              <Image
                src="https://assets.pharmeasy.in/apothecary/images/paytm.png?dim=1440x0"
                alt="Paytm"
                width={50}
                height={20}
                objectFit="contain"
                loading="lazy"
              />
              <Image
                src="https://assets.pharmeasy.in/apothecary/images/amazon.png?dim=1440x0"
                alt="PhonePe"
                width={50}
                height={20}
                objectFit="contain"
                loading="lazy"
              />
              <Image
                src="https://assets.pharmeasy.in/apothecary/images/rupay.png?dim=1440x0"
                alt="Rupay"
                objectFit="contain"
                loading="lazy"
                width={50}
                height={20}
              />
            </div>
          </div>

          {/* Social Links */}
          <div className=" md:text-right">
            <h3 className="text-sm font-semibold mb-4">
              © 2024 MediCart. All Rights Reserved
            </h3>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
