// import components
import Keyboard from "./keyboard"
import Carousel from "./carousel"
// import css
import './event-landing.css'

export default function EventsLanding() {
  return (
    <div className='bg-primary-3-dark-purple h-[1000px] py-4 overflow-x-hidden'>
      <p className='font-poppins-bold text-5xl events-landing-gradient-text text-center'>EVENTS</p>
      <Carousel />
      <Keyboard />
    </div>
  )
}