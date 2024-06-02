import Image from "next/image";
import React from "react";
import AvatarGroup from "../../../../public/testimonial/avatar-group.png";
import BgLines from "../../../../public/testimonial/bg-lines.png";
import BlurBox from "../../../../public/advantages/advantages-blurbox.png";
import AvatarLeft from "../../../../public/testimonial/leftboxAvatar.png";

export default function TestimonialCard() {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2">
      <div className="relative">
        <Image src={BgLines} className="md:absolute" alt="" />
        <Image
          src={BlurBox}
          alt=""
          className="absolute -z-10 top-16 right-20 scale-90"
        />
        <Image
          src={AvatarLeft}
          alt=""
          className="absolute top-12 md:top-12 md:left-12 z-10 "
        />
      </div>

      <div className="md:py-36 space-y-4 md:pr-48 px-12 md:px-0">
        <h4 className="text-2xl font-semibold">
          The Best Financial Accounting App Ever!
        </h4>
        <p className="text-sm text-gray-500">
          “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
          In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et
          blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit
          nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
          suspendisse aliquam.”
        </p>
        <Image src={AvatarGroup} alt="" />
        <span className="block">Nick Jonas</span>
      </div>
    </div>
  );
}
