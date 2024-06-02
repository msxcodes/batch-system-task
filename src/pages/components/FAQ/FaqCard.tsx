import React from "react";

interface FaqCardProps {
  bgColor: boolean;
}

export default function FaqCard({ bgColor }: FaqCardProps) {
  return (
    <div
      className={` py-4 px-6 rounded-md space-y-2 ${
        bgColor ? "bg-[#ff5555] text-white" : "bg-white text-black"
      }`}
    >
      <h4 className="capitalize text-xl font-semibold">
        the best financial accounting app ever!
      </h4>
      <p
        className={`text-[1rem] ${bgColor ? "text-gray-100" : "text-gray-500"}`}
      >
        “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, <br />{" "}
        ultricies. In ultrices malesuada elit mauris.
      </p>
    </div>
  );
}
