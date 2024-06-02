import React from "react";

interface BlurGradientBoxProps {
  className?: string;
}

export default function BlurGradientBox({ className }: BlurGradientBoxProps) {
  return <div className={`${className}`}></div>;
}
