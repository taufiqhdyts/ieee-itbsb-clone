"use client";

import { useState } from "react";
import OrganogramCards from "./OrganogramCards";
import type { OrganogramCardsProps } from "@/types/components";
import CarouselButton from "./CarouselButton";
import { useSwipeable } from "react-swipeable";

const OrganogramCarousel = ({
  data,
}: {
  data: Array<OrganogramCardsProps>;
}) => {
  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const countCards = data.length;

  // Handler
  const handlePrevious = () =>
    setCurrentIndex((currentIndex - 1 + countCards) % countCards);
  const handleNext = () => setCurrentIndex((currentIndex + 1) % countCards);

  // Swipeable effect
  const swipeableHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrevious,
    swipeDuration: 500,
    delta: 60,
  });

  // Get current shown data
  const { name, position, url, linkedin } = data[currentIndex];

  return (
    <div className="flex flex-col items-center gap-3">
      {/* Cards & Buttons */}
      <div className="flex flex-row items-center gap-2">
        <CarouselButton type="previous" onClick={handlePrevious} />
        <div {...swipeableHandlers}>
          <OrganogramCards position={position} name={name} url={url} linkedin={linkedin}/>
        </div>
        <CarouselButton type="next" onClick={handleNext} />
      </div>

      {/* Carousel Index Status */}
      <div className="flex flex-row items-center gap-2">
        {data.map((_, index) => {
          return (
            <div
              key={index}
              className={`h-3 w-3 rounded-full bg-white ${
                index === currentIndex
                  ? "bg-opacity-100 drop-shadow-[0px_2px_8px_rgb(255,250,250,0.5)]"
                  : "bg-opacity-50"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OrganogramCarousel;
