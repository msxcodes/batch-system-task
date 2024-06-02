import Image from "next/image";
import React from "react";
import FeaturesIphone from "../../../public/features/features-iphone.png";
import BlurBox from "../../../public/features/features-blurBox.png";
import CubeIcon from "../../../public/features/cube.png";
import HexCube from "../../../public/features/cube01.png";
import StarIcon from "../../../public/features/star.png";

export default function FeaturesCard() {
  return (
    <div className="max-w-6xl md:mx-auto grid grid-cols-1 md:grid-cols-12 mx-8 ">
      <div className="col-span-5 relative ">
        <Image
          src={BlurBox}
          alt=""
          className="-top-8 right-16 absolute -z-10"
        />
        <Image src={FeaturesIphone} alt="" className="scale-125" />
      </div>
      <div className="col-span-7 md:ml-12 ">
        <div className="md:py-16 md:block flex flex-col items-center">
          <h4 className="text-[#ff5555] uppercase">Features</h4>
          <h2 className="text-3xl font-semibold">Uifry Premium</h2>
          <div className="mt-6 flex  flex-col items-center">
            {featuresData.map((data) => (
              <div
                className="space-y-1 mb-4 flex flex-col px-6 md:px-0"
                key={data.id}
              >
                <div className="flex items-center gap-2">
                  <Image src={data.src} alt="" />
                  <span className="font-semibold">{data.title}</span>
                </div>
                <p className="text-sm md:pr-32 text-gray-600 font-[400]">
                  {data.des}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const featuresData = [
  {
    id: "01",
    title: "Budgeting Intervals",
    des: "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
    src: StarIcon,
  },
  {
    id: "02",
    title: "Budgeting Intervals",
    des: "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
    src: HexCube,
  },
  {
    id: "03",
    title: "Budgeting Intervals",
    des: "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
    src: CubeIcon,
  },
];
