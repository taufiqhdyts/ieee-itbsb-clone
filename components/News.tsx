"use client"
import { responsiveImage } from '@/types/components'
import { Image, StructuredText, useQuerySubscription } from "react-datocms";
import Loader from './Loader';

function News({ subscription }: any) {
  const { data: realtimeData, error, status } = useQuerySubscription(subscription);
  const { newsletter } = realtimeData;

  if (status !== 'connected') {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  function formatDate(inputDate: string) {
    const months = [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"
    ];

    const dateObj = new Date(inputDate);
    const year = dateObj.getFullYear();
    const month = months[dateObj.getMonth()];
    const day = dateObj.getDate();

    const dayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(dateObj);

    const daySuffix = (day: number) => {
      if (day > 3 && day < 21) return 'th';
      switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    };

    const formattedDate = `${dayOfWeek.toUpperCase()}, ${day}${daySuffix(day)} ${month} ${year}`;

    return formattedDate;
  }

  return (
    <main className="News px-5 pb-[194px] w-full 2xl:pl-[76px] 2xl:pr-[160px]">
      <h1 className="NewsTitle text-[36px] mt-5 md:text-[66px] lg:text-[96px] font-poppins-bold bg-gradient-to-r from-[#D146FF] via-[#F9BED4] to-[#FFF] text-transparent bg-clip-text">{newsletter?.title}</h1>
      <h4 className="NewsDate text-[12px] md:text-[14px] lg:text-[16px] text-white font-montserrat-alternates-regular font-bold "> {newsletter?._firstPublishedAt && formatDate(newsletter?._firstPublishedAt.split("T")[0])}</h4>

      <div className="w-full h-[calc(100vw*4.5/7)] mt-8 md:h-[500px] 2xl:h-[700px] md:mt-16 p-[2px] bg-gradient-to-tr from-white via-[#CA58FF] to-[#FFEBB9] rounded-lg overflow-hidden shadow-[2px_-3px_10px_0px_rgba(248,169,108,1)]">
        <div className="w-full flex justify-center items-center hover:scale-110 duration-400 transition h-full rounded-lg overflow-hidden bg-gradient-to-b from-[#32134A] to-[#573273]">
          {newsletter?.image[0]?.responsiveImage && newsletter?.image[0]?.responsiveImage.webpSrcSet && (
            <Image data={newsletter?.image[0]?.responsiveImage as responsiveImage} className="object-cover w-full h-auto min-h-full" layout='responsive' />
          )}
        </div>
      </div>

      <h5 className='text text-white mt-16 text-[14px] md:text-[16px] lg:text-[20px]'>
        <StructuredText data={newsletter?.content} renderBlock={({ record }: any) => {
          switch (record.__typename) {
            case "ImageRecord":
              return <div className="w-full h-[calc(100vw*4.5/7)] mt-8 mb-8 md:h-[500px] 2xl:h-[700px] md:mt-16 p-[2px] bg-gradient-to-tr from-white via-[#CA58FF] to-[#FFEBB9] rounded-lg overflow-hidden shadow-[2px_-3px_10px_0px_rgba(248,169,108,1)]">
                <div className="w-full flex justify-center items-center hover:scale-110 duration-400 transition  h-full rounded-lg overflow-hidden bg-gradient-to-b from-[#32134A] to-[#573273]">
                  <Image className="object-cover w-full h-auto min-h-full" layout='responsive' data={record.image.responsiveImage as responsiveImage} />
                </div>
                <h5 className='Desc  text-white mt-6 mb-16 text-[20px] '>Image Description</h5>
              </div>
            default:
              return null;
          }
        }} />
      </h5>
    </main>
  );
}

export default News;
