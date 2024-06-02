import Image from "next/image";
import React from "react";
import AdvantageIphone from "../../../../public/features/features-iphone.png";
import BlurBox from "../../../../public/features/blur-box.png";
import { PiStarFour } from "react-icons/pi";
import VisaCard from "../../../../public/features/visa-card.png";

export default function AdvantageCard() {
  return (
    <div
      id="pricing"
      className="grid grid-cols-1 md:grid-cols-12 mx-auto w-full"
    >
      <div className="col-span-5 relative md:left-24 px-8 md:px-0">
        <Image
          src={BlurBox}
          alt=""
          className="absolute -bottom-6 left-12 -z-10 hidden"
        />
        <Image
          src={VisaCard}
          alt=""
          className="absolute right-20 scale-90 top-24 z-10"
        />
        <Image src={AdvantageIphone} alt="" className="scale-125" />
      </div>
      <div className="col-span-7 md:ml-32 md:py-20">
        <div className="md:py-16 px-12 md:px-0">
          <div className="flex items-center gap-2 mb-4">
            <div className="size-8 rounded-full text-white flex items-center justify-center bg-[#ff5555]">
              <PiStarFour />
            </div>
            <span className="font-semibold">Fully Customizable</span>
          </div>
          <p className="text-sm md:pr-32 text-gray-600 font-[400]">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
      </div>
    </div>
  );
}
