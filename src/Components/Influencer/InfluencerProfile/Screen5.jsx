import React from 'react'
import { useState } from 'react';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Screen5 = ({ handleNextStep, handlePrevStep, currentStep }) => {

    const [collabtextField, collabsetTextField] = useState('');
    const [addedcollab, setAddedcollab] = useState([]);
    const allcollab = ['Sponsored Content', 'Product Reviews', 'Brand Ambassadorships', 'Affiliate Marketing', 'Event Coverage', 'Giveaways and Contests', 'Sponsored Travel', 'Sponsored Events'];


    const handleNext = () => {
        handleNextStep(); // Call the prop function to move to the next step
    };

    const handlePrev = () => {
        handlePrevStep(); // Call the prop function to move to the previous step
    };

    
    const handleRemoveCollab = (collab) => {
        collabsetTextField((prevTextField) =>
            prevTextField
                .split(' ')
                .filter((s) => s !== collab)
                .join(' ')
        );
        setAddedcollab((prevcollab) => prevcollab.filter((s) => s !== collab));
    };

    const handleAddCollab = (collab) => {
        collabsetTextField((prevTextField) => (prevTextField ? prevTextField + ' ' + collab : collab));
        setAddedcollab((prevcollab) => [...prevcollab, collab]);
    };



    return (
        <>
            <div className="min-h-screen flex justify-center items-center">
                <div className="bg-[aliceblue] flex flex-col md:flex-row w-full mdl:w-[1200px] rounded-2xl border shadow-sm relative">
                    {/* Left Side */}
                    <div className="w-full mdl:w-1/2 xs:p-5 sm:p-5  lg:p-3 flex flex-col">
                        <div className="mb-auto">
                            <span className="font-semibold text-gray-400">{currentStep}/5  Profile Creation</span>
                        </div>
                        <div className="flex md:justify-center  sm:p-2 lg:p-12">
                            <div className="flex-col max-w-lg">
                                <h2 className="sml:text-xl md:text-3xl text-HeadingText font-bold text-left sml:mb-0 xs:mt-8 sm:mt-6 sml:mt-4  md:mt-0 md:mb-2">
                                Collaboration Preferences
                                </h2>
                                <p className="text-gray-500">
                                What types of collaborations are you open to?
                                </p>
                            </div>
                        </div>
                        {/* Back Button */}
                        <div className="mt-auto xs:hidden md:block">
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
                    </div>
                    <hr className='md:hidden sml:block mx-2'/>
                    {/* Right Side */}
                    <div className="w-full sml:p-1 mdl:w-1/2 md:p-6 sm:x-2 xs:x-1 mdl:p-14 flex flex-col">
                        <div className="border border-gray-300 p-3 mb-4 xs-w-full xs:mx-2  sm:w-2/3 md:w-full rounded sm:mx-auto md:mx-0">
                            {addedcollab.map((collab, index) => (
                                <span key={index} className="inline-block bg-gray-200 text-gray-800 px-2 py-1 rounded-full mr-2 mb-2">
                                    {collab}
                                    <button className="ml-2" onClick={() => handleRemoveCollab(collab)}>x</button>
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-wrap xs:mb-12 sm:mb-16 md:mb-16 lg:mb-5 xs:mx-2 sm:mx-14 sml:mx-20 md:mx-0">
                            {allcollab.map((collab, index) => (
                                !collabtextField.includes(collab) && (
                                    <button
                                        key={index}
                                        className={`bg-gray-200 text-gray-800  px-2 py-1 rounded-full mr-2 mb-2`}
                                        onClick={() => handleAddCollab(collab)}
                                    >
                                        {collab} +
                                    </button>
                                )
                            ))}
                        </div>
                    </div>
                    {/* Next Button */}
                    <div className="mt-auto mx-3 xs:mb-4 sml:mb-3 md:mb-0 sml:block md:hidden">
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
                    <div className="absolute bottom-4 right-4">
                        <Button
                            className="rounded-lg"
                            variant="outlined"
                            endIcon={<ArrowForwardIcon />}
                            onClick={handleNext}
                            disabled={!collabtextField.trim()}
                        >
                            Next
                        </Button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Screen5