import React from 'react'
import { useState } from 'react';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Screen4 = ({ handleNextStep, handlePrevStep, currentStep }) => {
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
            title: "Blog Articles",
            img: "https://media2.giphy.com/media/PgRsEC3YowPSBtMqGQ/giphy.gif",
        },
        {
            id: 1,
            title: "Social Media Posts",
            img: "https://media1.giphy.com/media/iurMjrejMG9tMPpUEc/giphy.gif?cid=6c09b95209tmda9mw9mvznuzxdq004ng2pnic8jap1jhdk1a&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s",
        },
        {
            id: 2,
            title: "Videos",
            img: "https://monophy.com/media/Pomea5EkMuLCQOWdog/monophy.gif",
        },
        {
            id: 3,
            title: "Podcasts",
            img: "https://www.hdyagency.com/wp-content/uploads/2020/03/MICROPHONE2.gif",
        },
        {
            id: 4,
            title: "Live Streams",
            img: "https://media.tenor.com/VqWLXgT2PIcAAAAj/live-dj-scene.gif",
        },
        {
            id: 5,
            title: "Reviews",
            img: "https://media.baamboozle.com/uploads/images/90021/1656428802_18560_gif-url.gif",
        },

    ]



    return (
        <>
            <div className="flex justify-center">
                <div className="bg-[aliceblue] flex flex-col w-full max-w-[1200px] rounded-2xl border shadow-sm relative">
                    {/* Step Indicator */}
                    <div className="p-4">
                        <span className="font-semibold text-gray-400">{currentStep}/5  Profile Creation</span>
                    </div>

                    {/* Heading and Description */}
                    <div className="flex justify-center items-center p-4">
                        <div className="max-w-lg text-center">
                            <h2 className="sm:text-1xl md:text-3xl font-bold text-HeadingText mb-2">
                                Content Specialization
                            </h2>
                            <p className="text-gray-500">
                                What types of content formats and styles do you prefer?
                            </p>
                        </div>
                    </div>

                    {/* Left Side - Step Indicator */}
                    <div className="hidden md:block absolute left-0 top-0 p-4">
                        <span className="font-semibold text-gray-400">{currentStep}/5</span>
                    </div>

                    {/* Right Side */}
                    <div className="w-full xs:p-6 sm:p-4  mdl:w-full md:p-6 sm:x-2 xs:x-1 mdl:p-4">
                        {/* Card Container */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 sml:grid-cols-3 md:grid-cols-3 mdl:grid-cols-4 lg:grid-cols-5 lgl:grid-cols-6  sm:gap-4 sml:gap-2 md:gap-4 lg:gap-4 lgl:gap-2 xl:gap-4">
                            {
                                leftcards.map((val, index) => {
                                    return <div className="border border-gray-300 rounded-lg p-1 flex flex-col items-start mb-3 cursor-pointer">
                                        {/* Image */}
                                        <img src={val.img} alt="Image" className="w-full h-3/4 rounded-lg mb-2" />
                                        {/* Title */}
                                        <h3 className="xs:text-[20px] sm:text-sm font-semibold mb-2 text-left">{val.title}</h3>
                                        {/* Checkbox */}
                                        <div className="ml-auto ">
                                            <input
                                                className='cursor-pointer'
                                                type="checkbox"
                                                checked={checked[index]}
                                                onChange={() => handleCheckboxChange(index)}
                                            />
                                        </div>
                                    </div>

                                })
                            }

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

export default Screen4