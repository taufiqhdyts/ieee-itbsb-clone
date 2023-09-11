// import Images
import Image from 'next/image'

// import css
import './event-landing.css'

import type { EventCardProps } from "@/types/components";

const EventsCard = ({ image, title, description }: EventCardProps) => {
  return (
    <div>
      <div className='p-4 w-[250px] h-[300px] md:w-[350px] md:h-[500px] rounded-[10px] border-2 border-[#A164A9] events-box-purple-shadow-glowing bg-gradient-to-r from-[#260D3A] via-[#4F0069] to-[#A164A9] relative z-10'>
        <div className='border-2 border-gradient-to-r from-FFFFFF via-CA58FF to-FFEBB9 h-[125px] md:h-[250px] rounded border-[#A164A9] bg-[#32134A] flex items-center justify-center' >
          <Image src={image} alt="IEEE Event" />
        </div>
        <div className='text-center mt-4'>
          <h3 className='bg-gradient-to-r from-[#D146FF] from-30% via-[#F9BED4] via-55% to-[#FFFFFF] bg-clip-text text-center font-poppins font-bold text-transparent text-3xl uppercase mb-4'>{title}</h3>
          <p className='text-justify events-landing-gradient-text text-xs md:text-base'>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
export default EventsCard;




{/* <div className='opacity-50 translate-y-[-0.5rem] relative z-1'>
    <div className='p-4 w-[275px] h-[325px] rounded-[10px] border-2 border-[#A164A9] events-box-purple-shadow-glowing bg-gradient-to-r from-[#260D3A] via-[#4F0069] to-[#A164A9]'>
      <div className='border-2 border-gradient-to-r from-FFFFFF via-CA58FF to-FFEBB9 h-[125px] rounded border-[#A164A9] bg-[#32134A] flex items-center justify-center' >
        <Image src={placeholder} alt="IEEE Event" />
      </div>
      <div className='text-center mt-4'>
        <p className='events-landing-gradient-text font-poppins-bold text-2xl'>EVENTS</p>
        <p className='text-justify events-landing-gradient-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </p>
      </div>
    </div>
  </div> */}