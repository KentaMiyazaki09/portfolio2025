"use client";

import React from "react";

import useEmblaCarousel from "embla-carousel-react";
import Slide from "../atoms/Slide";

const Slider = () => {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    dragFree: true,
  });

  return (
    <div
      className="overflow-hidden fixed bottom-0 left-0 w-full"
      ref={emblaRef}
    >
      <div className="flex">
        <Slide text="Slide 1" />
        <Slide text="Slide 2" />
        <Slide text="Slide 3" />
      </div>
    </div>
  );
};

export default Slider;
