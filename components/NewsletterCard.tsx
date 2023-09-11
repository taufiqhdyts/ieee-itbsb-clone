import { getDateWithSuffix } from "@/lib/date";
import { type NewsLetterCardProps } from "@/types/components"
import Link from "next/link";
import { Image } from "react-datocms";

const NewsletterCard = ({ slug, title, summary, _firstPublishedAt, image }: NewsLetterCardProps) => {
    // Formatting date
    const date = new Date(_firstPublishedAt);
    const daySuffix = getDateWithSuffix(date);
    const formattedDate = date?.toLocaleString('en-US', { weekday: 'long' }) + ', ' + daySuffix + ' ' + date?.toLocaleString('en-US', { month: 'long' }) + ' ' + String(date?.getHours()).padStart(2, '0') + ":" + String(date?.getMinutes()).padStart(2, '0');;

    return (
        <Link href={`/newsletter/${slug}`} key={slug} className="animate-blink w-full sm:w-[460px] lg:w-[550px] xl:w-[600px] hover:drop-shadow-[0px_2px_8px_rgba(255,250,250,0.2)] drop-shadow-[0px_2px_8px_rgba(255,250,250,0.50)] rounded-lg gap-3 lg:gap-6 border border-[#CA58FF] bg-gradient-to-tr pt-3 pb-6 from-[#260D3A] via-40% via-[#4F0069] to-[#A164A9] px-4 lg:px-6 lg:py-5 flex flex-col">
            {/* Handle acontainer as border gradient */}
            <div className="w-full h-[170px] md:h-[200px] lg:h-[250px] p-[1px] bg-gradient-to-tr from-white via-[#CA58FF] to-[#FFEBB9] rounded-lg overflow-hidden shadow-[2px_-3px_10px_0px_rgba(248,169,108,1)]">
                {/* Image Container */}
                <div className="w-full hover:scale-110 duration-400 transition  h-full rounded-lg overflow-hidden bg-gradient-to-b from-[#32134A] to-[#573273]">
                    {/* Image */}
                    {/* <Image src={image[0].url} alt={image[0].alt} width={image[0].width} height={image[0].height} className="object-contain object-center " /> */}
                    {image[0].responsiveImage &&
                        <Image data={image[0].responsiveImage} className="object-contain object-center " />
                    }
                </div>
            </div>

            {/* Details content container */}
            <div className="flex flex-col gap-0.5 lg:gap-3 justify-start items-start">
                {/* Title */}
                <h2 className="bg-gradient-to-br from-[#D146FF] via-[#F9BED4] via-80% to-[#FFFFFF uppercase bg-clip-text font-poppins font-bold text-transparent text-2xl lg:text-4xl">{title}</h2>
                {/* Date */}
                <h3 className="text-white uppercase lg:mt-3 font-montserrat-alternates font-bold text-sm lg:text-lg">{formattedDate}</h3>
                {/* Description */}
                <p className="bg-gradient-to-br from-[#D146FF] via-[#F9BED4] via-65% to-[#FFFFFF bg-clip-text font-poppins-regular text-transparent text-sm lg:text-lg text-justify">{summary}</p>
            </div>
        </Link>
    )
}

export default NewsletterCard
