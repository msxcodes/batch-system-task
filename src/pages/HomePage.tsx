import React from "react";
import HeroSection from "./components/HeroSection";
import FeaturesCard from "./components/FeaturesCard";
import AdvantagesSection from "./components/Advantages/AdvantagesSection";
import TestimonialSection from "./components/Testimonial/TestimonialSection";
import FaqSection from "./components/FAQ/FaqSection";
import GetStartedBanner from "./components/GetStartedBanner";

export default function HomePage() {
  return (
    <div className="">
      <HeroSection />
      <FeaturesCard />
      <AdvantagesSection />
      <TestimonialSection />
      <FaqSection />
      <GetStartedBanner />
    </div>
  );
}
