import Image from "next/image";
import podium from "./images/podium.svg";
import EventsCard from "./EventsCard";
import placeholder from "./images/placeholder.svg"

export default function HomeEvents() {
  return (
    <div className="my-16 py-4 md:mb-40 xl:mb-[466px]">
      <h2 className="mb-24 text-center text-2xl font-bold text-white lg:text-6xl xl:mb-44">
        UPCOMING EVENTS
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        <EventsCard 
        image={placeholder}
        title="Event"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quisquam neque voluptatum autem commodi tenetur maiores possimus veniam eveniet voluptatibus." />
      </div>
      <Image src={podium} alt="podium" className="lg:-mt-36 pl-8 md:pl-14 lg:pl-16 mx-auto"/>
      
    </div>
  );
}
