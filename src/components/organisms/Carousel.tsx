"use client";

import React from "react";

import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Slider = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50">
      <div className="relative px-8">
        <Carousel className="custom-carousel">
          <CarouselContent className="-ml-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/3">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-2xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-8" />
          <CarouselNext className="-right-8" />
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
