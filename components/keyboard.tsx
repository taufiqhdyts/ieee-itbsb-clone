// import Images
import Image from 'next/image'
// import assets
import keyboardImage from './images/keyboard.svg'

const Keyboard = () => {
  return (
    <div>
      <div>
        <div className='fixed top-[50%] right-[50%] flex gap-x-1 z-20 translate-x-[1.5rem] translate-y-[4.5rem] md:translate-y-[3rem]'>
          <div className='bg-white rounded-full w-3 h-3 events-white-shadow-glowing'></div>
          <div className='bg-white rounded-full w-3 h-3 events-white-shadow-glowing'></div>
          <div className='bg-white rounded-full w-3 h-3 events-white-shadow-glowing'></div>
        </div>
        <div className='font-work-sans-bold fixed top-[50%] right-[50%] translate-x-[6.5rem] translate-y-[7.25rem] md:translate-y-[6rem] lg:translate-y-[7rem] z-20 bg-gradient-to-r border-2 border-[#632276] from-[#632276] to-[#8300AA] flex gap-x-4 text-white py-2 px-8 rounded-full'>
          <p className='bg-white bg-opacity-25 rounded-full px-2 border-2 border-[#632276]'>UPCOMING</p>
          <p>PAST</p>
        </div>
        <Image src={keyboardImage} alt='IEEE Events' className='w-full h-[300px] md:h-[350px] lg:h-[70vh] lg:translate-y-[14rem] fixed translate-y-[3.25rem] md:translate-y-[5rem] bottom-0 z-10 '/>
      </div>
    </div>
  )
}

export default Keyboard