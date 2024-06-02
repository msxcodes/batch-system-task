import React from "react";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialSection() {
  return (
    <div className="max-w-6xl mx-auto mt-12">
      <div className="text-center">
        <p className="uppercase text-sm tracking-widest">Testimonial</p>
        <h2 className="text-3xl leading-7 font-semibold">
          What Our Users Say <br /> About Us?
        </h2>
      </div>
      <TestimonialCard />
    </div>
  );
}
