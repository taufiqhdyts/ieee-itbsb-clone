"use client"
import React from 'react';

const Pagination = ({ numberPage, currentNumberPage, setCurrentNumberPage}: {numberPage: number, currentNumberPage: number, setCurrentNumberPage: React.Dispatch<React.SetStateAction<number>> }) => {
    const numbers = Array.from({ length: numberPage }, (_, index) => index + 1);
    return (
        numberPage>1&&
        numbers.map((number: number) => (
            <button
                key={number}
                onClick={() => setCurrentNumberPage(number)}
                aria-label={`Page-${number}`}
                className={`w-10 h-10 lg:w-[60px] rounded-lg hover:scale-105 ${currentNumberPage === number && "drop-shadow-none"} lg:h-[60px] p-[1px] bg-gradient-to-bl from-[#DE81FF] to-[#DA70FF] drop-shadow-[0px_0px_10px_rgba(190,1,246,0.5)]
                    `}
            >
                <div className="w-full h-full rounded-lg bg-gradient-to-tr flex items-center justify-center from-[#4F0069] to-[#A164A9]">
                    <p className="bg-gradient-to-br from-[#D146FF] via-[#F9BED4] via-90% to-[#FFFFFF uppercase bg-clip-text font-poppins-bold text-transparent text-2xl lg:text-4xl">
                        {number}
                    </p>
                </div>
            </button>
        )
        )
    );
};

export default Pagination;
