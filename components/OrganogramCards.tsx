import Image from "next/image";
import Link from "next/link";
import type { OrganogramCardsProps } from "@/types/components";

const OrganogramCards = ({ position, name, url, linkedin }: OrganogramCardsProps) => {
  return (
    // Gradient border trick
    <article className="w-[250px] rounded-xl bg-gradient-to-br from-[#D442FF] to-[#BE6DFF] p-[2px] shadow-[0px_2px_8px_0px_rgba(255,250,250,0.50)] xl:duration-300 xl:ease-in xl:hover:scale-105">
      <div className="flex h-full w-full flex-col items-center gap-3 rounded-xl bg-gradient-to-tr from-[#260D3A] via-[#4F0069] to-[#A164A9] p-5">
        {/* Image needs to be transparent to match previous background gradient, can't use border gradient trick, and to simplify css fill properties, use svg for the bg image */}
        <Link href={linkedin}>
          <div className="relative flex aspect-square w-full p-[3px] drop-shadow-organogram-cards-profile">
            {/* Person's photo */}
            <Image
              src={url}
              alt={name}
              className="z-30 aspect-square w-full rounded-full bg-transparent object-scale-down object-bottom"
              width={600}
              height={600}
            />

            {/* Border radius and Colorful background effect */}
            <Image
              className="z-20 rounded-full bg-transparent object-cover object-center"
              alt="Photo Background Picture"
              src="/about/organogram/profile-backgorund.svg"
              fill={true}
            />
          </div>

          {/* Texts */}
          <div className="flex flex-col items-center gap-1">
            <h4 className="text-center font-poppins text-xl font-bold leading-tight tracking-wider text-white xl:text-2xl xl:leading-tight">
              {position}
            </h4>
            <h5 className="text-center font-montserrat-alternates text-sm font-normal leading-tight text-white xl:text-base xl:leading-tight">
              {name}
            </h5>
          </div>
        </Link>
      </div>
    </article>
  );
};

export default OrganogramCards;
