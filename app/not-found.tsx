import Image from "next/image"

export const metadata = { title: "Whoops! | IEEE ITB SB 2023" }

export default function NotFound() {

  return (
      <main className="Body from-[#260D3A] via-[#3C1859] to-[#652D92] bg-gradient-to-b w-full min-h-screen overflow-hidden">
        <div className="NotFound flex w-screen h-[100vh] overflow-hidden">
          <div className="NotFoundContainer relative w-full h-[100vw] m-auto overflow-hidden md:top-[calc((768px-100vw)/2)]">
            <div className="HeroShade1 absolute w-[calc(100vw*0.79)] h-[calc(100vw*0.706)] bg-gradient-radial from-[#ffffff26] to-[#ffffff00] to-60% top-[calc(100vw*0.3)] left-[calc(100vw*0.32)] opacity-80"></div>
            <div className="HeroShade2 absolute w-[calc(100vw*0.79)] h-[calc(100vw*0.706)] bg-gradient-radial from-[#ffffff26] to-[#ffffff00] to-60% top-[calc(100vw*0.2)] opacity-80"></div>
            <div className="HeroShade3 absolute w-[calc(100vw*0.79)] h-[calc(100vw*0.706)] bg-gradient-radial from-[#ffffff26] to-[#ffffff00] to-60% top-[calc(100vw*0.3)]  opacity-80"></div>
            
            <Image
              src="/not-found/FullGrid.svg"
              alt="Grid 404"
              className={"absolute w-full top-[calc(100vw*100/390)]"}
              width={100}
              height={100}
              priority
            />

            <Image
              src="/not-found/Crane.svg"
              alt="Crane 404"
              className={"absolute w-[calc(100vw*179.4/390)] h-[calc(100vw*229.2/390)] left-[calc(100vw*205/390)] top-[0]"}
              width={100}
              height={100}
              priority
            />

            <Image
              src="/not-found/Hanging4.svg"
              alt="404 Text"
              className={"absolute w-[calc(100vw*27.47/390)] h-[calc(100vw*33.46/390)] left-[calc(100vw*195/390)] top-[calc(100vw*205/390)]"}
              width={100}
              height={100}
              priority
            />

            <Image
              src="/not-found/Laying4.svg"
              alt="404 Text"
              className={"absolute w-[calc(100vw*39.26/390)] h-[calc(100vw*33.19/390)] left-[calc(100vw*115/390)] top-[calc(100vw*208/390)]"}
              width={100}
              height={100}
              priority
            />

            <Image
              src="/not-found/Laying0.svg"
              alt="404 Text"
              className={"absolute w-[calc(100vw*35.23/390)] h-[calc(100vw*34.71/390)] left-[calc(100vw*150/390)] top-[calc(100vw*225/390)]"}
              width={100}
              height={100}
              priority
            />

            <Image
              src="/not-found/PageError.svg"
              alt="Page Error"
              className={"absolute w-[calc(100vw*167.82/390)] h-[calc(100vw*96.99/390)] left-[calc(100vw*55/390)] top-[calc(100vw*230/390)]"}
              width={100}
              height={100}
              priority
            />


          </div>
        </div>
      </main>
  )
} 