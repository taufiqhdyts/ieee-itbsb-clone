"use client"
import React, { useState } from 'react'
import TextFields from './TextFields'
import DropdownSelect from './DropdownSelect';
import CardScoreBoard from './CardScoreBoard';
import { Image } from '@/types/components';
import type { Document } from "datocms-structured-text-utils";

interface ScoreboardDataProps {
    id:string
    name: string;
    score: number;
    division: string;
    positionDivision: string;
    image: Image;
    achievements: Document
}
const ScoreBoardClient = ({ data }: { data: ScoreboardDataProps[] }) => {
    // Array of options for the dropdown
    const options = [
        "Resource Management", "Resource Development", "Marketing", "Partnership",
        "Competition", "Project", "Paper", "Event", "Logistic", "Web Development",
        "Finance", "Sponsorshipd iakjsdklj aslkdjalksjd lkasjd klajsd lk"
    ];

    // State for the search input field
    const [search, setSearch] = useState("");

    // State for the selected option in the dropdown
    const [selectedOption, setSelectedOption] = useState<string>('');
    const filterData = () => {
        if (!selectedOption || selectedOption === "All") {
            return data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()) || item.division.toLowerCase().includes(search.toLowerCase()));
        } else {
            if (search) {
                return data.filter((item) => item.division.toLowerCase() === selectedOption.toLowerCase() && item.name.toLowerCase().includes(search.toLowerCase()) || item.division.toLowerCase().includes(search.toLowerCase()))
            }
            return data.filter((item) => item.division.toLowerCase() === selectedOption.toLowerCase());
        }
    };
    const filteredData = filterData()
    return (
        // Main container with flex layout and some styling
        <section className="flex flex-col gap-5 lg:gap-14 px-10 items-center justify-center pt-12 w-full">
            {/* Container for the search field and the dropdown */}
            <div className="flex flex-col gap-4 w-full lg:flex-row items-center lg:gap-28 justify-center">
                {/* TextFields component, assuming it handles text input */}
                <TextFields
                    type="text"
                    value={search}
                    setValue={setSearch}
                    placeholder='Search here...'
                />
                {/* DropdownSelect component, the custom dropdown */}
                <div className="w-full lg:w-[350px]">
                    <DropdownSelect
                        options={options}
                        placeholder="Division"
                        setSelectedOption={setSelectedOption}
                        selectedOption={selectedOption}
                    />
                </div>
            </div>
            <div className="flex flex-col w-full gap-10 lg:gap-20 mt-3">
                {filteredData.length > 0 ? filteredData.map((item, index) => (
                    <CardScoreBoard key={item.id} image={item.image} name={item.name} position={item.positionDivision} score={item.score} achievements={item.achievements} />
                )) : <h2 className="text-white font-poppins font-bold text-2xl lg:text-4xl text-center">No data found</h2>}
            </div>
        </section>
    );
};

export default ScoreBoardClient;