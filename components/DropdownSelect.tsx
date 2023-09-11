import React, { ChangeEvent, useState } from 'react';
import ArrowDropdownIcon from './icons/ArrowDropdownIcon';


interface DropdownSelectProps {
    options: string[];
    placeholder?: string;
    selectedOption: string
    setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}

const DropdownSelect: React.FC<DropdownSelectProps> = ({ options, placeholder, selectedOption, setSelectedOption }) => {
    // State to keep track of whether the dropdown is open or closed.
    const [open, setOpen] = useState(false);

    // Function to handle an option click. Sets the selected option and closes the dropdown.
    const handleOptionClick = (value: string) => {
        setSelectedOption(value);
        setOpen(false);
    };

    return (
        <div className="relative cursor-pointer">
            {/* Main div unaffected by open state and palceholder */}
            <div
                className="block w-full p-[1.5px]  rounded-xl bg-gradient-to-tr from-[#EBA7FF] to-[#7B0D9B] drop-shadow-[0px_0px_10px_rgba(161,100,169,0.45)]"
                onClick={() => setOpen(!open)}
            >
                <div className='flex justify-between items-center w-full py-3 px-4 lg:py-[18px] lg:px-5 rounded-xl bg-gradient-to-bl from-[#A164A9] to-[#4F0069]'>
                    <p className="text-white text-sm lg:text-base font-poppins capitalize font-semibold">{selectedOption || placeholder}</p>
                    <ArrowDropdownIcon className="fill-white w-6 h-6" />
                </div>
            </div>
            {/* Dropdown open */}
            <div className={`${open ? "opacity-100 translate-y-0" : "-translate-y-[60px] pointer-events-none opacity-0"} transition-all duration-300 absolute z-20 top-16 lg:top-20 left-0 w-full py-2 bg-gradient-to-tr from-[#4F0069] to-[#A164A9] border border-white rounded-lg`} style={{
                background: 'var(--gradient-2, linear-gradient(9deg, #4F0069 0%, #A164A9 100%))',
                boxShadow: '-4px 0px 10px 0px #8300AA, 0px 0px 4px 0px rgba(131, 0, 170, 0.25) inset, 0px 0px 10px 0px #8300AA',
            }}>
                {/* Mapping options */}
                <div
                    onClick={() => handleOptionClick("All")}
                    className="cursor-pointer break-all text-sm font-poppins capitalize font-semibold text-white py-2 px-5"
                >
                    All
                </div>
                {options.map((option) => (
                    <p
                        key={option}
                        onClick={() => handleOptionClick(option)}
                        className="cursor-pointer break-all text-sm font-poppins capitalize font-semibold text-white py-2 px-5"
                    >
                        {option}
                    </p>
                ))}
            </div>

        </div>
    );
};

export default DropdownSelect;
