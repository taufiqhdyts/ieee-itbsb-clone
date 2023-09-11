import Image from 'next/image';
import React from 'react';
import type { Document } from "datocms-structured-text-utils";
import { StructuredText } from "react-datocms/structured-text";
import { type Image as typeImage } from '@/types/components';


const CardScoreBoard = ({ name, score, position, achievements, image }: { name: string, score: number, position: string, achievements: Document, image: typeImage }) => {
    return (
        // The main container with styling using tailwind CSS classes and inline styles
        <div className='w-full flex-col gap-12 lg:gap-4 lg:px-10 xl:px-28 2xl:px-52 overflow-hidden lg:flex-row flex items-center lg:items-start justify-center lg:justify-between py-7  bg-gradient-to-tr rounded-xl from-[#260D3A] via-40% via-[#4F0069] to-[#A164A9]' style={{
            boxShadow: '-4px 0px 10px 0px #FF38DF, 0px 0px 4px 0px rgba(255, 176, 251, 0.25) inset, 0px 0px 10px 0px #FF38DF',
        }}>
            {/* Background gradient elements */}
            {/* Inline styles are used to define the radial gradient backgrounds */}
            <div className="flex flex-col relative gap-4 z-10">
                <span className='w-[201.5px] xl:w-[304px] aspect-square blur-md absolute top-32 lg:top-52 left-10 lg:left-20' style={{
                    background: 'radial-gradient(50% 50.00% at 50% 50.00%, #8300AA 0%, rgba(68, 3, 92, 0.00) 100%)',
                }} />
                <span className='w-[154px] lg:w-[170px] xl:w-[184px] aspect-square blur-md absolute top-32 lg:top-[350px] left-14 lg:left-40 xl:-left-10' style={{
                    background: 'radial-gradient(50% 50.00% at 50% 50.00%, #8300AA 0%, rgba(68, 3, 92, 0.00) 100%)',
                }} />
                <span className='w-[134px] lg:w-[170px] xl:w-[204px] aspect-square blur-md absolute top-32 lg:top-80 left-1 lg:left-0' style={{
                    background: 'radial-gradient(50% 50.00% at 50% 50.00%, #8300AA 0%, rgba(68, 3, 92, 0.00) 100%)',
                }} />
                <span className='w-[134px] lg:w-[170px] xl:w-[184px] aspect-square blur-md absolute top-32 lg:top-[360px] left-0 lg:left-7' style={{
                    background: 'radial-gradient(50% 50.00% at 50% 50.00%, #8300AA 0%, rgba(68, 3, 92, 0.00) 100%)',
                }} />
                <span className='w-[134px] lg:w-[170px] xl:w-[204px] aspect-square blur-md absolute top-40 lg:top-80 left-10 lg:left-[70px]' style={{
                    background: 'radial-gradient(50% 50.00% at 50% 50.00%, #8300AA 0%, rgba(68, 3, 92, 0.00) 100%)',
                }} />
                <span className='w-[134px] lg:w-[170px] xl:w-[204px] aspect-square blur-md absolute top-44 lg:top-80 left-10 lg:left-24' style={{
                    background: 'radial-gradient(50% 50.00% at 50% 50.00%, #8300AA 0%, rgba(68, 3, 92, 0.00) 100%)',
                }} />

                <span className='w-[134px] lg:w-[170px] xl:w-[184px] aspect-square blur-md absolute top-36 lg:top-[360px] left-16 lg:left-[100px]' style={{
                    background: 'radial-gradient(50% 50.00% at 50% 50.00%, #8300AA 0%, rgba(68, 3, 92, 0.00) 100%)',
                }} />
                <span className='w-[134px] lg:w-[170px] xl:w-[204px] aspect-square blur-md absolute top-32 lg:top-72 left-28 lg:left-[240px]' style={{
                    background: 'radial-gradient(50% 50.00% at 50% 50.00%, #8300AA 0%, rgba(68, 3, 92, 0.00) 100%)',
                }} />
                <span className='w-[134px] lg:w-[170px] xl:w-[184px] aspect-square blur-md absolute top-32 lg:top-[370px] left-36 lg:left-48' style={{
                    background: 'radial-gradient(50% 50.00% at 50% 50.00%, #8300AA 0%, rgba(68, 3, 92, 0.00) 100%)',
                }} />

                <span className='w-[154px] xl:w-[308px] -z-[9] aspect-square blur-md absolute top-14 lg:top-60 left-16' style={{
                    background: 'radial-gradient(50% 50% at 50% 50%, #8300AA 0%, rgba(68, 3, 92, 0.00) 100%)',
                }} />
                <span className='w-[154px] hidden xl:w-[308px]  aspect-square blur-md absolute top-28 lg:top-72 right-5 -z-[9]' style={{
                    background: 'radial-gradient(50% 50% at 50% 50%, #FFAAE2 0%, rgba(68, 3, 92, 0.00) 100%)',
                }} />

                {/* User's photo */}
                <Image
                    src={image.url}
                    alt={image.alt}
                    width={image.width}
                    height={image.height} priority
                    sizes="(max-width: 1024px) 152px,304px"
                    className="w-[152px] object-center object-cover absolute left-1/2 transform -translate-x-1/2 lg:w-[304px] lg:h-[487px] -z-[7] h-[243px]"
                />
                {/* Text information section */}
                <div className="flex flex-col items-center justify-center gap-1 mt-40 lg:mt-60 relative z-[15] w-[260px] lg:w-[374px]">
                    {/* User's score */}
                    <h2 className="text-center font-poppins font-bold text-6xl lg:text-7xl xl:text-8xl bg-gradient-to-br from-[#D146FF] via-40% via-[#F9BED4] to-[#FFFFFF] bg-clip-text text-transparent drop-shadow-[-4px_0px_10px_#8300AA]">{score}</h2>
                    {/* User's name */}
                    <h3 className="text-center font-poppins font-bold text-2xl lg:text-4xl text-white px-5">{name}</h3>
                    {/* User's division */}
                    <h4 className="text-center font-poppins font-regular text-base lg:text-lg text-white">{position}</h4>
                </div>
            </div>
            {/* Achievements section */}
            <div className="flex flex-col gap-3 lg:gap-5 lg:w-[650px] lg:py-10">
                {/* Heading for achievements */}
                <h4 className="text-center font-poppins font-bold text-3xl text-white uppercase lg:tracking-wider 2xl:tracking-widest lg:text-5xl xl:text-6xl">Achievements</h4>
                {/* List of achievements */}
                <div className="custom-scrollbar max-h-[381px] lg:h-[438px] text-justify overflow-y-scroll text-white font-poppins font-regular text-base px-3 sm:px-4 mx-4 md:px-12 gap-3 lg:gap-4 flex flex-col">
                    {/* Mapping through the list of achievements */}
                    <StructuredText data={achievements} />
                </div>
            </div>
        </div>
    );
}

// Exporting the CardScoreBoard component as the default export
export default CardScoreBoard;
