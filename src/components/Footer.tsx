import Image from "next/image";
import React from "react";
import logo from "../../public/header/Frame.svg";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto">
      <div className="grid gap-y-8 gap-x-12 mx-4 px-4 py-10 sm:px-20 grid-cols-2 xl:grid-cols-5 xl:px-10">
        <div className="max-w-sm ">
          <div className="mb-6 flex h-10 items-center space-x-2">
            <Image src={logo} alt="" width={35} height={35} />
            <span className="text-3xl font-medium">uifry</span>
          </div>
          <div className="text-gray-500 space-y-4">
            <div className="flex items-center text-[#ff5555] gap-2">
              <IoMail size={24} />
              <span className="text-gray-700">Help@Frybix.Com</span>
            </div>
            <div className="flex items-center text-[#ff5555] gap-2">
              <FaPhoneAlt size={20} />
              <span className="text-gray-700">+123 456 678 89</span>
            </div>
          </div>
        </div>
        <div className="">
          <div className="text-3xl font-[400] xl:mb-4">Links</div>
          <nav
            aria-label="Guides Navigation"
            className="text-gray-700 font-[400] text-lg "
          >
            <ul className="space-y-3">
              <li>
                <a
                  className="hover:text-[#ff5555]  transition-all duration-300"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#ff5555]  transition-all duration-300"
                  href="#"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#ff5555]  transition-all duration-300"
                  href="#"
                >
                  Bookings
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#ff5555]  transition-all duration-300"
                  href="#"
                >
                  Blogs
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="">
          <div className="text-3xl font-[400] xl:mb-4">Legal</div>
          <nav
            aria-label="Guides Navigation"
            className="text-gray-700 font-[400] text-lg "
          >
            <ul className="space-y-3">
              <li>
                <a
                  className="hover:text-[#ff5555]  transition-all duration-300"
                  href="#"
                >
                  Terms Of Use
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#ff5555]  transition-all duration-300"
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#ff5555]  transition-all duration-300"
                  href="#"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="">
          <div className="text-3xl font-[400] xl:mb-4">Product</div>
          <nav
            aria-label="Guides Navigation"
            className="text-gray-700 font-[400] text-lg "
          >
            <ul className="space-y-3">
              <li>
                <a
                  className="hover:text-[#ff5555]  transition-all duration-300"
                  href="#"
                >
                  Take Tour
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#ff5555]  transition-all duration-300"
                  href="#"
                >
                  Live Chat
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#ff5555]  transition-all duration-300"
                  href="#"
                >
                  Reviews
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="">
          <div className="text-3xl font-[400] xl:mb-4">Newsletter</div>
          <nav
            aria-label="Guides Navigation"
            className="text-gray-700 font-[400] text-lg "
          >
            <ul className="space-y-3">
              <li>
                <a
                  className="hover:text-[#ff5555]  transition-all duration-300"
                  href="#"
                >
                  Stay Up To Date
                </a>
              </li>
              <li>
                <div className="flex">
                  <input
                    type="text"
                    className="bg-white border pl-3 w-40"
                    placeholder="Your email"
                  />
                  <button className="max-w-max bg-gray-900 px-6 py-3 text-white transition hover:bg-gray-700 rounded-sm">
                    Subscribe
                  </button>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="border-t-2 border-gray-300">
        <div className="flex py-6 pb-12 text-gray-800 justify-center capitalize">
          <p className="">Copyright 2022 uifry.com all rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
