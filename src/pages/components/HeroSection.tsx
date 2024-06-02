import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import iPhone01 from "../../../public/hero/hero-mobile02.png";
import iPhone02 from "../../../public/hero/hero-mobile03.png";
import iPhone03 from "../../../public/hero/mobile-frame.png";
import SubBanner from "../../../public/hero/sub-banner.png";
import BlurGradientBox from "@/common/BlurGradientBox";

export default function HeroSection() {
  return (
    <div
      id="hero"
      className="max-w-6xl md:py-12 mx-auto grid grid-cols-1 md:grid-cols-12 px-12 "
    >
      <div className="space-y-4 my-16 md:my-24 relative col-span-6 ">
        <BlurGradientBox className="absolute blur-2xl w-44 h-32 bg-gradient-to-b left-16 top-8 md:top-0 md:left-44 from-[#ff5555] to-[#fde598] -z-10 " />
        <h1 className="text-4xl md:text-5xl font-extrabold ">
          Make The Best Financial Decisions
        </h1>
        <p className="text-sm text-gray-500 ">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet{" "}
          <br className="hidden md:block" />
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>

        <div className="flex gap-2 ">
          <button className="group flex max-w-max cursor-pointer select-none items-center justify-center rounded-sm bg-black px-6 py-2 text-white transition">
            <Link
              href="#"
              className="group flex w-full items-center justify-center rounded py-1 text-center font-[400]"
            >
              {" "}
              Get Started{" "}
            </Link>
            <svg
              className="flex-0 group-hover:w-6 ml-4 h-6 w-0 transition-all"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
          <div className="flex max-w-max gap-2 px-4 items-center cursor-pointer hover:border-2 transition-all duration-75">
            <FaRegCirclePlay size={22} />
            <span>Watch Video</span>
          </div>
        </div>
        <div className="w-[400px] hidden md:flex">
          <Image src={SubBanner} alt="banner" className="size-full" />
        </div>
      </div>
      <div className="relative col-span-6  hidden md:block">
        <Image
          src={iPhone02}
          className="absolute bottom-16 right-20"
          alt="mobile"
        />
        <Image src={iPhone01} className="absolute -z-10  left-4" alt="mobile" />
        <Image src={iPhone03} className="absolute left-4 -z-20" alt="mobile" />
        <BlurGradientBox className="w-52 h-32 bg-red-500 blur-2xl absolute bottom-28 left-36 -z-30" />
      </div>
    </div>
  );
}
