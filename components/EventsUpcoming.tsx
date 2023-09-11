"use client";

import Image from "next/image";
import { Speaker, Timeline } from '@/types/components'

const EventsUpcoming = ({ speakers, timeline }: { speakers: Speaker[], timeline: Timeline[] }) => {
    const sortedTimeline = timeline?.sort((a, b) => new Date(a?.date).getTime() - new Date(b?.date).getTime());

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const daySuffix = getDaySuffix(day);
        const monthNames = [
            "JANUARY",
            "FEBRUARY",
            "MARCH",
            "APRIL",
            "MAY",
            "JUNE",
            "JULY",
            "AUGUST",
            "SEPTEMBER",
            "OCTOBER",
            "NOVEMBER",
            "DECEMBER",
        ];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();

        return `${day}${daySuffix} ${month} ${year}`;
    };

    // Function to get the day suffix (st, nd, rd, or th)
    const getDaySuffix = (day: number) => {
        if (day >= 11 && day <= 13) {
            return "th";
        }
        switch (day % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    };

    return (
        <>
            <div className="xl:mx-36 lg:mx-24 mx-12">
                {/* SPEAKERS */}

                <h1 className="mt-10 font-poppins-bold text-5xl text-white text-align-left">SPEAKERS</h1>
                <div className="mt-6 grid-cols-3 flex justify-center gap-6">
                    {speakers.length > 0 && speakers.map((speaker: any) => (
                        <div key={speaker.id} className="speaker mx-6">
                            <div>
                                <Image
                                    className="speakerPhoto mx-auto rounded-full border-2 border-[#FFB0FB] relative top-10 bg-gradient-to-tr from-[#260D3A] from-25% via-[#A164A9] to-[#260D3A] to-75%"
                                    src={speaker.image.url}
                                    alt={"Speaker"}
                                    width={178}
                                    height={178}
                                />
                            </div>
                            <Image
                                className="speakerBox"
                                src={"/events/SpeakerBox.png"}
                                alt={"SpeakerBox"}
                                width={281}
                                height={424}
                            />
                            <p className="my-6 font-montserrat-alternate text-white text-center">{speaker.name}</p>
                        </div>
                    ))}
                </div>

                {/* END OF SPEAKER */}

                {/* TIMELINE */}

                <h1 className="mt-10 font-poppins-bold text-5xl text-white text-align-left">TIMELINE</h1>
                <div className="mt-6 flex justify-center grid-cols-3 gap-8">
                    <div className="leftRow">
                        {sortedTimeline.length > 0 && sortedTimeline.map((item: any, index: number) => (
                            (index + 1) % 2 !== 0 ? (
                                <div key={index} className="timelineCard">
                                    <div className="dates text-center relative top-16">
                                        <p className="font-poppins-bold text-8xl text-transparent bg-clip-text bg-gradient-to-r from-[#D146FF] to-white">XX</p>
                                        <p className=" font-poppins-bold text-2xl text-white">{formatDate(item?.date)}</p>
                                    </div>

                                    <div className="diamond">
                                        <Image
                                            className="diamond mx-auto"
                                            src={"/events/diamond.png"}
                                            alt={"diamond"}
                                            width={201}
                                            height={115}
                                        />
                                    </div>

                                    <div className="vv">
                                        <Image
                                            className="vv -mt-12"
                                            src={"/events/vv.png"}
                                            alt={"vv"}
                                            width={432}
                                            height={187}
                                        />
                                    </div>

                                    <p className="text-center font-poppins-bold text-2xl text-white mt-6">
                                        {item?.title}
                                    </p>

                                    <p className="text-center font-montserrat-alternates text-white text-lg">
                                        {item?.description}
                                    </p>
                                </div>
                            ) : null
                        ))}
                    </div>

                    <div className="dotsRow">
                        {sortedTimeline.length > 1 &&
                            Array.from({ length: sortedTimeline.length - 1 }).map((_, index) => (
                                <div key={index + 1} className={`mt-${(index === 0) && ((index + 1) % 2 !== 0) ? 72 : 20} ${(index + 1) % 2 !== 0 ? "dots" : "dotsx"} relative align-bottom`}>
                                    <Image
                                        className={`dots ${(index + 1) % 2 !== 0 ? "dots" : "dotsx"}`}
                                        src={(index + 1) % 2 !== 0 ? "/events/dots.png" : "/events/dotsx.png"}
                                        alt={(index + 1) % 2 !== 0 ? "dots" : "dotsx"}
                                        width={218}
                                        height={138}
                                    />
                                </div>
                            ))
                        }
                    </div>

                    <div className="rightRow">
                        {sortedTimeline.length > 1 &&
                            sortedTimeline.map((item, index) => {
                                const isEvenIndex = (index + 1) % 2 === 0;
                                const isFirstItem = (index + 1) === 2;

                                if (isEvenIndex) {
                                    return (
                                        <div key={index + 1} className={`mt-${isFirstItem ? 60 : 0} timelineCard`}>
                                            <div className="dates text-center relative top-16">
                                                <p className="font-poppins-bold text-8xl text-transparent bg-clip-text bg-gradient-to-r from-[#D146FF] to-white">XX</p>
                                                <p className="font-poppins-bold text-2xl text-white">{formatDate(item?.date)}</p>
                                            </div>

                                            <div className="diamond">
                                                <Image
                                                    className="diamond mx-auto"
                                                    src={"/events/diamond.png"}
                                                    alt={"diamond"}
                                                    width={201}
                                                    height={115}
                                                />
                                            </div>

                                            <div className="vv">
                                                <Image
                                                    className="vv -mt-12"
                                                    src={"/events/vv.png"}
                                                    alt={"vv"}
                                                    width={432}
                                                    height={187}
                                                />
                                            </div>

                                            <p className="text-center font-poppins-bold text-2xl text-white mt-6">
                                                {item?.title}
                                            </p>

                                            <p className="text-center font-montserrat-alternates text-white text-lg">
                                                {item?.description}
                                            </p>
                                        </div>
                                    );
                                }

                                return null;
                            })}
                    </div>
                </div>

                {/* END OF TIMELINE */}

                {/* REGISTER */}

                <div className="mt-10 py-60"> {/* hidden untuk past event*/}
                    <Image
                        className="registernow mx-auto"
                        src={"/events/registernow.png"}
                        alt={"registernow"}
                        width={920}
                        height={411}
                    />

                    <div className="flex">
                        <button className="mt-10 mx-auto px-16 py-2 rounded-full text-white font-poppins border-2 bg-purple-90 hover:bg-purple-800">
                            Register
                        </button>
                    </div>

                </div>

                {/* END OF REGISTER */}
            </div>
        </>
    )
}

export default EventsUpcoming;
