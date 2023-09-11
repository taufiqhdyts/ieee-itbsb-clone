"use client";

const Timeline = () => {
    return (
        <>
        <div className="">

            <h1 className="mt-10 font-poppins-bold font-bold text-5xl text-white text-align-left">TIMELINE</h1>
            
            {/* TIMELINE */}

            <div className=" flex justify-center grid-cols-3 ">
                
                <div className="leftRow ">
                    <div className="timelineCard-1 relative  sm:pb-10 lg:pl-2">

                        <img 
                            className="mx-auto "
                            src={"/events/datefloor.png"}
                            alt={"datefloor"}
                        />

                        <div className="dates text-center relative sm:-top-56 .. xl:-top-80">
                            <p className="font-poppins-bold font-bold text-6xl .. xl:text-7xl .. text-transparent bg-clip-text bg-gradient-to-r from-[#D146FF] to-white">XX</p>
                            <p className=" font-poppins-bold font-bold text-xs .. xl:text-lg .. text-white">NOVEMBER, 2023</p>
                        </div>
                        
                        <div className="relative sm:-mt-32 .. xl:-mt-44">
                            <p className="text-center font-poppins-bold font-bold text-xs .. xl:text-base .. text-white">
                                LOREM IPSUM
                            </p>

                            <p className="text-center px-2 font-montserrat-alternates text-white text-xs">
                                LOREM IPSUM DOLRO AMET AMET AMET AMET
                            </p>
                        </div>

                    </div>

                    <div className="timelineCard-2 relative .. sm:mt-4 sm:pb-10 .. lg:-mt-5 lg:pl-2">
                        <img 
                            className="mx-auto"
                            src={"/events/datefloor.png"}
                            alt={"datefloor"}
                        />

                        <div className="dates text-center relative sm:-top-56 .. xl:-top-80">
                            <p className="font-poppins-bold font-bold text-6xl .. xl:text-7xl .. text-transparent bg-clip-text bg-gradient-to-r from-[#D146FF] to-white">XX</p>
                            <p className=" font-poppins-bold font-bold text-xs .. xl:text-lg .. text-white">NOVEMBER, 2023</p>
                        </div>
                        
                        <div className="relative sm:-mt-32 .. xl:-mt-44">
                            <p className="text-center font-poppins-bold font-bold text-xs .. xl:text-base .. text-white">
                                LOREM IPSUM
                            </p>

                            <p className="text-center px-2 font-montserrat-alternates text-white text-xs">
                                LOREM IPSUM DOLRO AMET AMET AMET AMET
                            </p>
                        </div>
                    </div>
                </div>

                <div className="dotsRow hidden place-content-start relative lg:grid">
                    <div className="dots .. lg:mt-40 lg:-mx-6 .. xl:mt-64">
                        <img
                            className="dots"
                            src={"/events/dots.png"}
                            alt={"dots"}
                        />
                    </div>

                    <div className="dotsx lg:-mx-6 lg:mt-14 .. xl:mt-20">
                        <img
                            className="dotsx"
                            src={"/events/dotsx.png"}
                            alt={"dots"}
                        />
                    </div>

                    <div className="dots lg:-mx-6 lg:mt-12 .. xl:mt-20">
                        <img
                            className="dots"
                            src={"/events/dots.png"}
                            alt={"dots"}
                        />
                    </div>
                </div>

                <div className="rightRow">
                    <div className="timelineCard-3 .. sm:mt-36 sm:pb-10 .. lg:pl-2 .. xl:mt-52">
                        <img 
                            className="mx-auto "
                            src={"/events/datefloor.png"}
                            alt={"datefloor"}
                        />

                        <div className="dates text-center relative sm:-top-56 .. xl:-top-80">
                            <p className="font-poppins-bold font-bold text-6xl .. xl:text-7xl .. text-transparent bg-clip-text bg-gradient-to-r from-[#D146FF] to-white">XX</p>
                            <p className=" font-poppins-bold font-bold text-xs .. xl:text-lg .. text-white">NOVEMBER, 2023</p>
                        </div>
                        
                        <div className="relative sm:-mt-32 .. xl:-mt-44">
                            <p className="text-center font-poppins-bold font-bold text-xs .. xl:text-base .. text-white">
                                LOREM IPSUM
                            </p>

                            <p className="text-center px-2 font-montserrat-alternates text-white text-xs">
                                LOREM IPSUM DOLRO AMET AMET AMET AMET
                            </p>
                        </div>
                    </div>

                    <div className="timelineCard-4 sm:mt-4 sm:pb-10 lg:-mt-5 lg:pl-2">
                        <img 
                            className="mx-auto "
                            src={"/events/datefloor.png"}
                            alt={"datefloor"}
                        />

                        <div className="dates text-center relative sm:-top-56 .. xl:-top-80">
                            <p className="font-poppins-bold font-bold text-6xl .. xl:text-7xl .. text-transparent bg-clip-text bg-gradient-to-r from-[#D146FF] to-white">XX</p>
                            <p className=" font-poppins-bold font-bold text-xs .. xl:text-lg .. text-white">NOVEMBER, 2023</p>
                        </div>
                        
                        <div className="relative sm:-mt-32 .. xl:-mt-44">
                            <p className="text-center font-poppins-bold font-bold text-xs .. xl:text-base .. text-white">
                                LOREM IPSUM
                            </p>

                            <p className="text-center px-2 font-montserrat-alternates text-white text-xs">
                                LOREM IPSUM DOLRO AMET AMET AMET AMET
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}

export default Timeline;
