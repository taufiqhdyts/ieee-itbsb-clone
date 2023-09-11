import type { Metadata } from "next";
import VisionMissionSection from "@/components/VisionMissionSection";
import Organogram from "@/components/Organogram";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | IEEE ITB Student Branch",
  description:
    "IEEE is the world's largest technical society dedicated to advancing innovation and technological excellence for the benefit of humanity. In line with that purpose, IEEE ITB Student Branch, as a part of the Indonesia Section, strives to realize our vision: Engineering Human Excellence. By giving vast exposure to technology, advocating for collaboration, and providing a network for students, academia, and industry, we aim to create a greater impact on society.",
};

const About = () => {
  // Fetch CMS
  // const { ... } = await getCMS()

  return (
    <main className="relative flex flex-auto flex-col gap-16 overflow-hidden bg-gradient-to-b from-primary-2-very-dark-purple via-[#3C1859] via-30% to-[#652D92] px-5 pb-10 pt-28 sm:px-10 xl:gap-32 xl:pb-20 xl:pt-48">
      {/* About Us Section*/}
      <article className="z-10 flex flex-col items-center gap-4 xl:gap-8">
        <h1 className="bg-gradient-to-r from-[#D146FF] via-[#F9BED4] via-45% to-[#FFFFFF] bg-clip-text text-center font-poppins text-4xl font-bold text-transparent xl:text-7xl ">
          About Us
        </h1>
        <div className="max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
          <p className="text-justify font-montserrat-alternates text-base font-normal text-white xl:text-lg">
            <span className="font-bold">
              Hello, future innovators! Welcome to IEEE ITB Student Branch
            </span>
            <br />
            IEEE is the world&apos;s largest technical society dedicated to
            advancing innovation and technological excellence for the benefit of
            humanity. In line with that purpose, IEEE ITB Student Branch, as a
            part of the Indonesia Section, strives to realize our vision:
            Engineering Human Excellence. By giving vast exposure to technology,
            advocating for collaboration, and providing a network for students,
            academia, and industry, we aim to create a greater impact on
            society.
          </p>
          <br />
          <p className="text-justify font-montserrat-alternates text-base font-normal text-white">
            For those ITB undergraduate students who have are interested in
            IEEE, especially topics related to electrical engineering, we open
            recruitment every year and you are very welcome to join us!
            Currently, we have 80+ officers from various majors in ITB, which
            are not limited to STEI students only. Come and join us, we
            can&apos;t wait to meet you early next year!
          </p>
        </div>
      </article>

      {/* Vision and Mission Section */}
      <VisionMissionSection />

      {/* Organogram */}
      <section className="flex w-full flex-col items-center gap-12">
        {/* Title */}
        <div className="flex flex-col items-center gap-2 xl:gap-5">
          <h2 className="flex-none bg-gradient-to-r from-[#D146FF] via-[#F9BED4] via-45% to-[#FFFFFF] bg-clip-text text-center font-poppins text-3xl font-bold text-transparent xl:text-6xl ">
            Board of Directors
          </h2>
          <h3 className="flex-none bg-gradient-to-r from-[#D146FF] via-[#F9BED4] via-45% to-[#FFFFFF] bg-clip-text text-center font-poppins text-xl font-bold text-transparent xl:text-3xl">
            2023/2024
          </h3>
        </div>

        {/* Organogram */}
        <Organogram />
      </section>

      {/* Bacgkround Decorations */}
      <>
        {/* Dark Purple Radial Right */}
        <div className="absolute right-[-350px] top-0 z-0 aspect-square w-[600px] rounded-full bg-opacity-50 bg-gradient-radial from-[#240848] via-[#8300AA] via-35% to-[#240848] blur-[200px] xl:right-[-350px] xl:w-[700px]" />

        {/* White Radial Left */}
        <div className="absolute left-[-150px] top-[300px] z-0 aspect-square w-[300px] rounded-full bg-opacity-40 bg-gradient-radial from-white via-[#FFAAE2] via-35% to-[#240848] blur-[200px] xl:left-[-200px] xl:w-[400px]" />

        {/* White Radial Right */}
        <div className="absolute right-[-150px] top-[400px] z-0 aspect-square w-[300px] rounded-full bg-opacity-40 bg-gradient-radial from-white via-[#FFAAE2] via-35% to-[#240848] blur-[200px] xl:right-[-200px] xl:w-[400px]" />

        {/* Right Bubble */}
        <Image
          className="absolute right-[-125px] top-[450px] z-0 aspect-square w-[250px] rounded-full"
          src="/about/bubble-background.png"
          alt="Bubble Background"
          width={330}
          height={330}
        />

        {/* Left Bubble */}
        <Image
          className="absolute left-[-125px] top-[900px] z-0 aspect-square w-[250px] rounded-full"
          src="/about/bubble-background.png"
          alt="Bubble Background"
          width={330}
          height={330}
        />
      </>
    </main>
  );
};

export default About;
