"use client";

const Speakers = () => {
    const speakerBackground = {
        backgroundImage: "url('/events/speakerbackground.png')",
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'inherit',
        backgroundSize: 'cover',
    };
    
    return (
        <>
        <div className="">

            <h1 className="mt-10 mb-10 font-poppins-bold font-bold text-5xl text-white text-align-left">SPEAKERS</h1>

            <div className="grid grid-cols-3 flex relative">
                
                <div className="relative -mx-28 .. md:-mx-46 .. xl:-mx-46">
                    
                    <div className="rounded-full absolute m-auto left-0 right-0 top-7 w-24 h-24 .. sm:w-32 sm:h-32..  .. lg:w-38 lg:h-38 .. xl:w-44 xl:h-44 .. ">
                        
                        <div className="rounded-full p-2.5" style={speakerBackground}>
                            <img 
                                className="speakerPhoto ..  .. rounded-full"
                                src={"/events/speaker0.png"}
                                alt={"Speaker"}
                            />
                        </div>
                        
                    </div>

                    <img
                        className="left-0 right-0 .."
                        src={"/events/speakerfloor.png"}
                        alt={"speakerfloor"}
                    />
                    
                    <div className="absolute left-0 right-0 bottom-14">
                        <p className="font-montserrat-alternate text-white text-center">
                            Dhanika Novlisariyanti
                        </p>
                    </div>
                    
                </div>
                
                <div className="relative -mx-28 .. md:-mx-46 .. xl:-mx-46">
                    
                    <div className="rounded-full absolute m-auto left-0 right-0 top-7 w-24 h-24 .. sm:w-32 sm:h-32..  .. lg:w-38 lg:h-38 .. xl:w-44 xl:h-44 .. ">
                        
                        <div className="rounded-full p-2.5" style={speakerBackground}>
                            <img 
                                className="speakerPhoto ..  .. rounded-full"
                                src={"/events/speaker0.png"}
                                alt={"Speaker"}
                            />
                        </div>
                        
                    </div>

                    <img
                        className="left-0 right-0 .."
                        src={"/events/speakerfloor.png"}
                        alt={"speakerfloor"}
                    />
                    
                    <div className="absolute left-0 right-0 bottom-14">
                        <p className="font-montserrat-alternate text-white text-center">
                            Dhanika Novlisariyanti
                        </p>
                    </div>
                    
                </div>
                <div className="relative -mx-28 .. md:-mx-46 .. xl:-mx-46">
                    
                    <div className="rounded-full absolute m-auto left-0 right-0 top-7 w-24 h-24 .. sm:w-32 sm:h-32..  .. lg:w-38 lg:h-38 .. xl:w-44 xl:h-44 .. ">
                        
                        <div className="rounded-full p-2.5" style={speakerBackground}>
                            <img 
                                className="speakerPhoto ..  .. rounded-full"
                                src={"/events/speaker0.png"}
                                alt={"Speaker"}
                            />
                        </div>
                        
                    </div>

                    <img
                        className="left-0 right-0 .."
                        src={"/events/speakerfloor.png"}
                        alt={"speakerfloor"}
                    />
                    
                    <div className="absolute left-0 right-0 bottom-14">
                        <p className="font-montserrat-alternate text-white text-center">
                            Dhanika Novlisariyanti
                        </p>
                    </div>
                    
                </div>
                
            </div>

        </div>
        
        </>
    )
}

export default Speakers;
