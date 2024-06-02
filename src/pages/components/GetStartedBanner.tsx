import Image from "next/image";
import Link from "next/link";
import React from "react";
import iPhoneBanner from "../../../public/banner/iphone-group.png";
import BannerLines from "../../../public/banner/banner-line.png";
import { FaApple } from "react-icons/fa6";
import BlurBox from "../../../public/advantages/advantages-blurbox.png";

export default function GetStartedBanner() {
  return (
    <div className="relative md:my-12">
      <Image
        src={BlurBox}
        alt=""
        className=" absolute left-44 -top-44 hidden md:flex"
      />
      <div className="max-w-[66rem] overflow-hidden mx-auto bg-black h-[350px] md:h-[450px] relative rounded-md">
        <div className="text-white absolute top-24 left-4 md:top-[35%] z-10 md:left-24 space-y-4">
          <h2 className="text-3xl font-semibold">Ready To Get Started?</h2>
          <p className="text-gray-300 font-[400]">
            Risus habitant leo egestas mauris diam eget morbi tempus{" "}
            <br className="hidden md:block" /> vulputate.
          </p>
          <button className="cursor-pointer">
            <Link
              href="#"
              className="max-w-max bg-gray-100 flex items-center justify-center rounded-sm px-5 py-2.5 text-center text-lg font-[400] text-black focus:outline-none focus:ring-4 hover:bg-gray-300 cursor-pointer transition-all duration-300"
            >
              Download App
              <FaApple size={24} />
            </Link>
          </button>
        </div>
        <Image
          src={iPhoneBanner}
          alt=""
          className="absolute  -right-7 scale-90 z-10 hidden md:block"
        />
        <Image src={BannerLines} alt="" className="absolute bottom-0 " />

        <div className="size-32 blur-2xl bg-[#ff5555] absolute top-12 right-12 md:bottom-20 md:right-12 "></div>
      </div>
    </div>
  );
}
