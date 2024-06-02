import React from "react";
import AdvantageIphone from "../../../../public/features/advantages-iphone.png";
import BlurBox from "../../../../public/advantages/advantages-blurbox.png";
import Image from "next/image";
import { FaRegBell } from "react-icons/fa6";
import AdvantageCard from "./AdvantageCard";

import Bar from "../../../../public/features/avatar-bar.png";

export default function AdvantagesSection() {
  return (
    <div className="max-w-6xl mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-12 mx-auto w-full">
        <div className="md:col-span-7 md:ml-32 md:py-8">
          <div className="md:py-16 flex flex-col items-center md:block ">
            <h4 className="text-[#ff5555] uppercase">Advantages</h4>
            <h2 className="text-3xl font-semibold">Why Choose Uifry?</h2>
            <div className="mt-6">
              <div className="space-y-1 mb-4 flex flex-col md:block px-12 md:px-0 ">
                <div className="flex items-center gap-2">
                  <div className="size-8 rounded-full text-white flex items-center justify-center bg-[#ff5555]">
                    <FaRegBell />
                  </div>
                  <span className="font-semibold">Clever Notifications</span>
                </div>
                <p className="text-sm md:pr-32 text-gray-600 font-[400]">
                  Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                  ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                  tristique lacus, et blandit viverra nisl velit. Sed mattis
                  rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget
                  eget ac dolor neque lorem sapien, suspendisse aliquam.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-5 relative md:right-20 px-8 md:px-0">
          <Image
            src={BlurBox}
            alt=""
            className="absolute right-16 top-24 -z-10"
          />

          <Image
            src={Bar}
            alt="bar"
            className="absolute z-10 right-6 top-44 scale-90"
          />
          <Image src={AdvantageIphone} alt="" className="scale-125" />
        </div>
      </div>
      <AdvantageCard />
    </div>
  );
}
