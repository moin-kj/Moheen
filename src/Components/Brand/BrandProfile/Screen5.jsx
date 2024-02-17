import React from 'react'
import { useState } from 'react';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Screen5 = ({ handleNextStep, handlePrevStep, currentStep }) => {
    const [checked, setChecked] = useState(Array(6).fill(false));



    const handleNext = () => {
        handleNextStep(); // Call the prop function to move to the next step
    };

    const handlePrev = () => {
        handlePrevStep(); // Call the prop function to move to the previous step
    };

    const handleCheckboxChange = (index) => {
        const newChecked = [...checked];
        newChecked[index] = !newChecked[index];
        setChecked(newChecked);
    };

    const anyCheckboxChecked = checked.includes(true);



    const leftcards = [
        {
            id: 0,
            title: "Small",
            desc: "1-50 employees",
            img: "https://png.pngtree.com/png-vector/20220930/ourmid/pngtree-small-building-png-image_6241917.png",
        },
        {
            id: 1,
            title: "Medium ",
            desc: "51-500 employees",
            img: "https://cdn-icons-png.flaticon.com/512/3232/3232179.png",
        },
        {
            id: 2,
            title: "Large ",
            desc: "501+ employees",
            img: "https://www.vhv.rs/dpng/f/125-1257334_small-business-icon-png-download-small-business-icon.png",
        },


    ]



    return (
        <>
            <div className="flex justify-center">
                <div className="bg-[aliceblue] flex flex-col w-full max-w-[800px] rounded-2xl border shadow-sm relative"> {/* Reduce overall width */}
                    {/* Step Indicator */}
                    <div className="p-4">
                        <span className="font-semibold text-gray-400">{currentStep}/5  Profile Creation</span>
                    </div>

                    {/* Heading and Description */}
                    <div className="flex justify-center items-center p-4">
                        <div className="max-w-lg text-center">
                            <h2 className="sm:text-1xl md:text-3xl font-bold text-HeadingText mb-2">
                                Company Information
                            </h2>
                            <p className="text-gray-500">
                                How would you describe the size of your company?
                            </p>
                        </div>
                    </div>

                    {/* Left Side - Step Indicator */}
                    <div className="hidden md:block absolute left-0 top-0 p-4">
                        <span className="font-semibold text-gray-400">{currentStep}/5</span>
                    </div>

                    {/* Right Side */}
                    <div className="w-full xs:p-6 sm:p-4  mdl:w-full md:p-6 sm:x-2 xs:x-1 mdl:p-4 mx-20">
                        {/* Card Container */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3"> {/* Adjust grid columns and reduce gap */}
                            {leftcards.map((val, index) => {
                                return (
                                    <div key={index} className="border border-gray-300 rounded-lg p-2 flex flex-col items-start mb-2 cursor-pointer">
                                        {/* Image */}
                                        <img src={val.img} alt="Image" className="w-full h-3/4 rounded-lg mb-1" /> {/* Adjust image size */}
                                        {/* Title */}
                                        <h3 className="text-sm font-bold mt-2 text-left">{val.title}</h3> {/* Adjust font size */}
                                        <p className="text-sm text-gray-500 text-left">{val.desc}</p>
                                        {/* Checkbox */}
                                        <div className="ml-auto">
                                            <input
                                                className="cursor-pointer"
                                                type="checkbox"
                                                checked={checked[index]}
                                                onChange={() => handleCheckboxChange(index)}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                    </div>

                    {/* Next and Back Buttons */}
                    <div className="flex justify-between p-4">
                        <div>
                            <Button
                                className="rounded-lg"
                                onClick={handlePrev}
                                disabled={currentStep === 0}
                                variant="outlined"
                                startIcon={<ArrowBackIcon />}
                            >
                                Back
                            </Button>
                        </div>
                        <div>
                            <Button
                                className="rounded-lg"
                                variant="outlined"
                                endIcon={<ArrowForwardIcon />}
                                onClick={handleNext}
                                disabled={!anyCheckboxChecked}
                            >
                                Next
                            </Button>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Screen5