// import image from next
import Image from 'next/image' 

//import link from next
import Link from 'next/link'

// import assets
import podium from './images/podium.svg'
import instagram from './images/instagram.svg'
import linkedin from './images/linkedin.svg'

export default function FollowUs() {
  return (
    <div className='flex flex-col  gap-y-[2.5rem] md:gap-y-0 py-4 items-center overflow-x-hidden '>
      <p className='text-2xl lg:text-6xl text-white font-bold text-center mb-2 lg:mb-24'>FOLLOW US</p>
      <div className='translate-x-4'>
        <div className='flex items-center justify-center'>
          <Link href='https://www.instagram.com/ieeeitbsb/'><Image src={instagram} alt="IEEE ITB Instagram" className='cursor-pointer w-16 md:w-24 lg:w-32 relative right-6 top-[3.5rem] md:top-[6rem] lg:top-[8rem] hover:scale-[125%] transition-all'/></Link>
          <Link href='https://www.linkedin.com/company/ieee-itb-student-branch'><Image src={linkedin} alt="IEEE ITB Linkedin" className='cursor-pointer w-16 md:w-24 lg:w-32 relative right-6 top-[7rem] md:top-[12rem] lg:top-[16rem]  hover:scale-[125%] transition-all'/></Link>
        </div>
        <Image src={podium} alt="Follow IEEE Social Media" />
      </div>
    </div>
  )
}