'use client'

import Image from "next/image"
import { useEffect, useState } from "react"


export default function NotFound() {

  const[Listrik1 , setListrik1] = useState('')
  const[Listrik2 , setListrik2] = useState('')
  const[Listrik3 , setListrik3] = useState('')
  const[Listrik4 , setListrik4] = useState('')
  const[Listrik5 , setListrik5] = useState('')
  const[Listrik6 , setListrik6] = useState('')

  useEffect( () => {
    const time = 200
    setTimeout(function () {
      setListrik1("animate-glow");
    }, 0);
    setTimeout(function () {
      setListrik2("animate-glow");
    }, 1 * time);
    setTimeout(function () {
      setListrik3("animate-glow");
    }, 2 * time);
    setTimeout(function () {
      setListrik4("animate-glow");
    }, 3 * time);
    setTimeout(function () {
      setListrik5("animate-glow");
    }, 4 * time);
    setTimeout(function () {
      setListrik6("animate-glow");
    }, 6 * time);
  });


  return (
    <main className="Body from-[#260D3A] via-[#3C1859] to-[#652D92] bg-gradient-to-b w-full min-h-screen overflow-hidden">
      <div className="NotFound flex w-screen h-[100vh] overflow-hidden">
        <div className="NotFoundContainer relative w-full h-[100vw] m-auto overflow-hidden md:top-[calc((768px-100vw)/2)]">
          <div className="HeroShade1 absolute w-[calc(100vw*0.79)] h-[calc(100vw*0.706)] bg-gradient-radial from-[#ffffff26] to-[#ffffff00] to-60% top-[calc(100vw*0.3)] left-[calc(100vw*0.32)] "></div>
          <div className="HeroShade2 absolute w-[calc(100vw*0.79)] h-[calc(100vw*0.706)] bg-gradient-radial from-[#ffffff26] to-[#ffffff00] to-60% top-[calc(100vw*0.2)] "></div>
          <div className="HeroShade3 absolute w-[calc(100vw*0.79)] h-[calc(100vw*0.706)] bg-gradient-radial from-[#ffffff26] to-[#ffffff00] to-60% top-[calc(100vw*0.3)] "></div>
          
          <Image
            src="/coming-soon/FullGrid.svg"
            alt="Grid 404"
            className={"absolute w-full top-[calc(100vw*100/390)]"}
            width={100}
            height={100}
            priority
          />

          <Image
            src="/coming-soon/Crane.svg"
            alt="Crane 404"
            className={"absolute w-[calc(100vw*157.5/390)] h-[calc(100vw*201/390)] left-[calc(100vw*218/390)] top-[calc(100vw*71/390)]"}
            width={100}
            height={100}
            priority
          />
            
          <Image
            src="/coming-soon/ConstructionL.svg"
            alt="Construction L"
            className={"absolute w-[calc(100vw*76.2/390)] h-[calc(100vw*82.5/390)] left-[calc(100vw*28.5/390)] top-[calc(100vw*192/390)] "}
            width={100}
            height={100}
            priority
          />

          <Image
            src="/coming-soon/ConstructionR.svg"
            alt="Construction R 1"
            className={"absolute w-[calc(100vw*76.2/390)] h-[calc(100vw*82.5/390)] left-[calc(100vw*120.3/390)] top-[calc(100vw*141/390)]"}
            width={100}
            height={100}
            priority
          />

          <Image
            src="/coming-soon/ConstructionR.svg"
            alt="Construction R 3"
            className={"absolute w-[calc(100vw*76.2/390)] h-[calc(100vw*82.5/390)] left-[calc(100vw*260/390)] top-[calc(100vw*250/390)]"}
            width={100}
            height={100}
            priority
          />

          <Image
            src="/coming-soon/Listriknospark.svg"
            alt="Electric 1"
            className={`absolute w-[calc(100vw*22.2/390)] h-[calc(100vw*40.9/390)] left-[calc(100vw*65/390)] top-[calc(100vw*150/390)] ${Listrik1}`}
            width={100}
            height={100}
            priority
          />

          <Image
            src="/coming-soon/Listriknospark.svg"
            alt="Electric 2"
            className={`absolute w-[calc(100vw*22.2/390)] h-[calc(100vw*40.9/390)] left-[calc(100vw*47.2/390)] top-[calc(100vw*160.2/390)] ${Listrik2}`}
            width={100}
            height={100}
            priority
          />

          <Image
            src="/coming-soon/Listriknospark.svg"
            alt="Electric 3"
            className={`absolute w-[calc(100vw*22.2/390)] h-[calc(100vw*40.9/390)] left-[calc(100vw*29.4/390)] top-[calc(100vw*170.4/390)] ${Listrik3}`}
            width={100}
            height={100}
            priority
          />

          <Image
            src="/coming-soon/Listriknospark.svg"
            alt="Electric 4"
            className={`absolute w-[calc(100vw*22.2/390)] h-[calc(100vw*40.9/390)] left-[calc(100vw*302.8/390)] top-[calc(100vw*150/390)] ${Listrik4}`}
            width={100}
            height={100}
            priority
          />
            
          <Image
            src="/coming-soon/Listriknospark.svg"
            alt="Electric 5"
            className={`absolute w-[calc(100vw*22.2/390)] h-[calc(100vw*40.9/390)] left-[calc(100vw*320.6/390)] top-[calc(100vw*160.2/390)] ${Listrik5}`}
            width={100}
            height={100}
            priority
          />

          <Image
            src="/coming-soon/Listriknospark.svg"
            alt="Electric 6"
            className={`absolute w-[calc(100vw*22.2/390)] h-[calc(100vw*40.9/390)] left-[calc(100vw*338.4/390)] top-[calc(100vw*170.4/390)] ${Listrik6}`}
            width={100}
            height={100}
            priority
          />

          <div className="NewsTitle absolute top-[calc(100vw*280/390)] leading-[8vw] h-fit w-[calc(100vw*150/390)] left-[calc(100vw*20/390)] text-[7vw] lg:top-[calc((100vw*280/390)-(100vw-1024px)/8)] font-poppins-bold bg-gradient-to-r from-[#D146FF] via-[#F9BED4] to-[#FFF] text-transparent bg-clip-text">
            Coming Soon
          </div>

        </div>
      </div>
    </main>
  )
} 