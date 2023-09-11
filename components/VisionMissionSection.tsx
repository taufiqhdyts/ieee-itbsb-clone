"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const VisionMissionSection = () => {
  const [slide, setSlide] = useState<"vision" | "mission">("vision");

  // Every 1/2 minute change slide.
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev === "vision" ? "mission" : "vision"));
    }, 30000);
    return () => clearInterval(interval);
  });

  return (
    <section className="z-10 flex flex-col items-center gap-4 xl:gap-8">
      <h2 className="bg-gradient-to-r from-[#D146FF] via-[#F9BED4] via-45% to-[#FFFFFF] bg-clip-text text-center font-poppins text-3xl font-bold text-transparent xl:text-6xl">
        {slide === "vision" ? "Vision" : "Mission"}
      </h2>

      <div className="flex flex-row items-center gap-4 lg:gap-8 xl:gap-12">
        {/* Left Image */}
        <Image
          className="hidden h-fit object-contain sm:block sm:w-[100px] md:w-[150px] xl:w-[200px]"
          src={slide === "vision" ? "/about/v-left.png" : "/about/m-left.png"}
          alt={slide === "vision" ? "V Logo Left" : "M Logo Left"}
          width={257}
          height={272}
        />

        {/* Carousel */}
        {/* Min height is chosen such that ~1/2 the width */}
        <article className="min-h-[288px] w-full max-w-xl border-4 border-white bg-gradient-to-b from-[#32134A] to-[#573273] drop-shadow-vision-mission-carousel lg:min-h-[336px] lg:max-w-2xl xl:min-h-[384px] xl:max-w-3xl">
          <div className="relative flex min-h-[inherit] w-full items-center bg-[#E798FF] bg-opacity-20 px-6 py-12 lg:p-12">
            {/* Carousel Text */}
            <p className="text-justify font-montserrat-alternates text-base font-normal text-white drop-shadow-vision-mission-carousel xl:text-lg">
              {slide === "vision"
                ? "Vision Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur."
                : "Mission Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur."}
            </p>

            {/* Left Button */}
            <button
              className="absolute bottom-5 left-5 h-fit w-fit xl:bottom-7 xl:left-7"
              onClick={() =>
                setSlide(slide === "vision" ? "mission" : "vision")
              }
            >
              <svg
                width="30"
                height="18"
                viewBox="0 0 30 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.1189 0.878562C15.9475 -0.292855 14.0452 -0.292855 12.8738 0.878563L0.878801 12.8739C0.0166606 13.736 -0.236358 15.0199 0.232197 16.1445C0.700751 17.269 1.7878 18 3.00604 18L26.996 17.9906C28.2049 17.9906 29.3013 17.2597 29.7699 16.1351C30.2384 15.0105 29.976 13.7267 29.1233 12.8645L17.1283 0.869191L17.1189 0.878562Z"
                  fill="url(#paint0_linear_1200_4849)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1200_4849"
                    x1="28.5"
                    y1="22.275"
                    x2="-7.36949"
                    y2="4.84738"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D146FF" />
                    <stop offset="0.463542" stop-color="#F9BED4" />
                    <stop offset="1" stop-color="white" />
                  </linearGradient>
                </defs>
              </svg>
            </button>

            {/* Right Button */}
            <button
              className="absolute bottom-5 right-5 h-fit w-fit xl:bottom-7 xl:right-7"
              onClick={() =>
                setSlide(slide === "vision" ? "mission" : "vision")
              }
            >
              <svg
                width="30"
                height="18"
                viewBox="0 0 30 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.1189 0.878562C15.9475 -0.292855 14.0452 -0.292855 12.8738 0.878563L0.878801 12.8739C0.0166606 13.736 -0.236358 15.0199 0.232197 16.1445C0.700751 17.269 1.7878 18 3.00604 18L26.996 17.9906C28.2049 17.9906 29.3013 17.2597 29.7699 16.1351C30.2384 15.0105 29.976 13.7267 29.1233 12.8645L17.1283 0.869191L17.1189 0.878562Z"
                  fill="url(#paint0_linear_1200_4849)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1200_4849"
                    x1="28.5"
                    y1="22.275"
                    x2="-7.36949"
                    y2="4.84738"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D146FF" />
                    <stop offset="0.463542" stop-color="#F9BED4" />
                    <stop offset="1" stop-color="white" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          </div>
        </article>

        {/* Right Image */}
        <Image
          className="hidden h-fit object-contain sm:block sm:w-[100px] md:w-[150px] xl:w-[200px]"
          src={slide === "vision" ? "/about/v-right.png" : "/about/m-right.png"}
          alt={slide === "vision" ? "V Logo Right" : "M Logo Right"}
          width={257}
          height={272}
        />
      </div>
    </section>
  );
};

export default VisionMissionSection;
