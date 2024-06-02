import React from "react";
import FaqCard from "./FaqCard";

export default function FaqSection() {
  return (
    <div className="mx-auto max-w-6xl px-12 pb-28">
      <div className="py-6">
        <p className="text-[#ff5555]">FAQ</p>
        <h2 className="text-3xl font-semibold leading-7">
          Frequently Asked <br /> Questions
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <FaqCard bgColor={true} />
        <FaqCard bgColor={false} />
        <FaqCard bgColor={true} className="block md:hidden" />
        <FaqCard bgColor={false} className="block md:hidden" />
        <FaqCard bgColor={false} className="hidden md:block" />
        <FaqCard bgColor={true} />
        <FaqCard bgColor={true} className="hidden md:block" />
        <FaqCard bgColor={false} className="md:hidden block" />
        <FaqCard bgColor={false} className="hidden md:block" />
      </div>
    </div>
  );
}
