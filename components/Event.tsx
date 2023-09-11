"use client"
import type { Image } from "@/types/components";
import Countdown from "@/components/Countdown";
import EventDetailCarousel from "@/components/EventDetailCarousel";
// import EventsUpcoming from "@/components/EventsUpcoming";
import Speakers from "@/components/Speakers";
import Timeline from "@/components/Timeline";
import Register from "@/components/Register";
import { getDateWithSuffix } from "@/lib/date";
import { StructuredText, useQuerySubscription } from "react-datocms";
import Loader from './Loader';

const Event = ({ subscription }: any) => {
  const { data: realtimeData, error, status } = useQuerySubscription(subscription);
  const { event } = realtimeData;

  if (status !== 'connected') {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const date = new Date(event?.dateTime);
  // Get times
  const timeEvent = date.getTime();
  const timeNow = Date.now();

  // Create custom formatted date (with suffix)
  const year = date.toLocaleString("en-US", { year: "numeric" });
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = getDateWithSuffix(date);
  const weekday = date.toLocaleString("en-US", { weekday: "long" });
  const hourMinute = date.toLocaleString("en-US", {
    hour: "numeric",
    hour12: false,
    minute: "numeric",
  });
  const formattedDate =
    `${weekday}, ${day} ${month} ${year} ${hourMinute}`.toUpperCase();

  // const tesImages: Array<Image> = [
  //   {
  //     url: "/about/carousel-background.png",
  //     alt: "Tes1",
  //     width: 1920,
  //     height: 1080,
  //     id: "1",
  //   },
  //   {
  //     url: "/about/bukti-form-twibbon.png",
  //     alt: "Tes2",
  //     width: 1920,
  //     height: 1080,
  //     id: "2",
  //   },
  //   {
  //     url: "/about/movies-indiana-jones-indiana-jones-and-the-last-crusade-harrison-ford-wallpaper-preview.jpg",
  //     alt: "Tes3",
  //     width: 1920,
  //     height: 1080,
  //     id: "3",
  //   },
  //   {
  //     url: "/about/thumb-1920-86520.jpg",
  //     alt: "Tes4",
  //     width: 1920,
  //     height: 1080,
  //     id: "4",
  //   },
  // ];

  return (
    <main className="flex min-h-screen flex-auto flex-col items-center gap-8 bg-gradient-to-b from-primary-2-very-dark-purple via-[#3C1859] via-30% to-[#652D92] px-5 py-10 sm:px-10 lg:py-48 xl:gap-20">
      {/* Date & Title */}
      <section className="flex w-full max-w-xl flex-col gap-4 lg:max-w-2xl xl:max-w-5xl xl:gap-10">
        <div>
          <time className="font-montserrat-alternates text-xs font-bold text-white xl:text-base">
            {formattedDate}
          </time>
          <h1 className="bg-gradient-to-r from-[#D146FF] via-[#F9BED4] via-45% to-[#FFFFFF] bg-clip-text font-poppins text-4xl font-bold uppercase leading-none text-transparent xl:text-8xl xl:leading-none">
            {event?.title}
          </h1>
        </div>
        <div className="flex w-full justify-center">
          {timeNow <= timeEvent ? (
            <Countdown date={date} />
          ) : (
            <EventDetailCarousel images={event?.images} />
          )}
        </div>
      </section>

      {/* Description */}
      <section className="w-full max-w-xl lg:max-w-2xl xl:max-w-5xl">
        <h2 className="font-poppins text-2xl font-bold leading-normal tracking-wider text-white xl:text-6xl xl:leading-normal">
          Description
        </h2>

        <div className="text-justify font-poppins text-sm font-normal leading-normal text-white xl:text-base xl:leading-normal">
          <StructuredText data={event?.description} />
        </div>
      </section>

      {/* Speakers */}
      <section>
        {/*{event && <EventsUpcoming speakers={event?.speakers} timeline={event?.timeline} />} */}
        <Speakers />
      </section>

      {/* Timeline */}
      <section>
        <Timeline />
      </section>

      {/* Register Now */}
      <section>
        <Register />
      </section>
    </main>
  );
}

export default Event
