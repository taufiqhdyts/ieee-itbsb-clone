"use client";

import type { Image as ImageType } from "@/types/components";
import { useState, useEffect } from "react";
import Image from "next/image";
import CarouselButton from "./CarouselButton";

interface _Image {
  image: ImageType
}

const EventDetailCarousel = ({ images }: { images: _Image[] }) => {
  // Carousel State
  const [carouselIndex, setCarouselIndex] = useState(0);
  const countImages = images?.length;
  const nextIndex = (carouselIndex + 1) % countImages;
  const previousIndex = (carouselIndex - 1 + countImages) % countImages;

  // Changeslide every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex(nextIndex);
    }, 10000);
    return () => clearInterval(interval);
  }, [nextIndex]);

  return (
    <div className="w-full max-w-xl lg:max-w-2xl xl:max-w-5xl">
      {/* Images */}
      <div className="relative w-full rounded-lg bg-gradient-to-tr from-white via-[#CA58FF] to-[#FFEBB9] p-[2px] shadow-[2px_-3px_10px_0px_rgba(248,169,108,1)] xl:rounded-xl">
        <Image
          className="aspect-video w-full rounded-lg object-cover xl:rounded-xl"
          src={images[carouselIndex]?.image?.url}
          alt={images[carouselIndex]?.image?.alt}
          width={images[carouselIndex]?.image?.width}
          height={images[carouselIndex]?.image?.height}
        />

        {/* Previous Button */}
        <div className="absolute left-3 top-[calc(50%-18px)] xl:left-6">
          <CarouselButton
            type="previous"
            onClick={() => setCarouselIndex(previousIndex)}
          />
        </div>

        {/* Next Button */}
        <div className="absolute right-3 top-[calc(50%-18px)] xl:right-6">
          <CarouselButton
            type="next"
            onClick={() => setCarouselIndex(nextIndex)}
          />
        </div>

        {/* Carousel State */}
        <div className="absolute bottom-3 flex h-fit w-full justify-center gap-1 xl:bottom-6">
          {images?.map((_, index) => {
            return (
              <button
                className={`h-3 w-3 rounded-full drop-shadow-[0px_2px_8px_rgba(255,250,250,0.50)] ${
                  carouselIndex === index
                    ? "bg-primary-3-dark-purple"
                    : "bg-white"
                }`}
                key={index}
                onClick={() => setCarouselIndex(index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EventDetailCarousel;
