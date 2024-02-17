import React from 'react'
import { useState } from 'react';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const ageGroups = ["18", "18-24", "25-34", "35-44", "45+"];
const hobbies = ["Reading", "Traveling", "Painting", "Photography", "Cooking", "Yoga", "Gardening", "Sports", "Music", "Dancing"];
const preferences = ["Healthy Eating", "Outdoor Activities", "Sustainability", "Fashion", "Reading", "Technology", "Fitness", "Adventure", "Art", "Cooking"];


const Screen3 = ({ handleNextStep, handlePrevStep, currentStep }) => {

    const [selectedAgeGroups, setSelectedAgeGroups] = useState([]);
    const [selectedHobbies, setSelectedHobbies] = useState([]);
    const [selectedPreferences, setSelectedPreferences] = useState([]);
    const [city, setCity] = useState('');

    const handleAgeGroupChange = (e, group) => {
        const isChecked = e.target.checked;
        if (isChecked) {
            setSelectedAgeGroups(prevGroups => [...prevGroups, group]);
        } else {
            setSelectedAgeGroups(prevGroups => prevGroups.filter(item => item !== group));
        }
    };

    const handleHobbyChange = (e, hobby) => {
        const isChecked = e.target.checked;
        if (isChecked) {
            setSelectedHobbies(prevHobbies => [...prevHobbies, hobby]);
        } else {
            setSelectedHobbies(prevHobbies => prevHobbies.filter(item => item !== hobby));
        }
    };

    const handlePreferenceChange = (e, preference) => {
        const isChecked = e.target.checked;
        if (isChecked) {
            setSelectedPreferences(prevPreferences => [...prevPreferences, preference]);
        } else {
            setSelectedPreferences(prevPreferences => prevPreferences.filter(item => item !== preference));
        }
    };

    const handleNext = () => {
        handleNextStep(); // Call the prop function to move to the next step
    };

    const handlePrev = () => {
        handlePrevStep(); // Call the prop function to move to the previous step
    };








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
                            <h2 className="text-xl md:text-3xl font-bold text-HeadingText mb-2">
                                Audience Preferences
                            </h2>
                            <p className="text-gray-500">
                                Specify your audience and what are their preferences?
                            </p>
                        </div>
                    </div>

                    {/* Left Side - Step Indicator */}
                    <div className="hidden md:block absolute left-0 top-0 p-4">
                        <span className="font-semibold text-gray-400">{currentStep}/5</span>
                    </div>

                    {/* Right Side - Age Groups, City, Hobbies, Preferences */}
                    <div className="p-4">
                        {/* Age Group */}
                        <div className="mb-4">
                            <label className="block mb-2 font-semibold text-gray-600">Age Group</label>
                            <div className="flex flex-wrap mb-4">
                                {ageGroups.map(group => (
                                    <label key={group} className="inline-flex items-center mr-4">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox h-5 w-5 text-blue-600"
                                            value={group}
                                            onChange={(e) => handleAgeGroupChange(e, group)}
                                            checked={selectedAgeGroups.includes(group)}
                                        />
                                        <span className="ml-2">{group}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* City */}
                        <div className="mb-4">
                            <label className="block font-semibold text-gray-600 mb-2" htmlFor="city">
                                City
                            </label>
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="city"
                                type="text"
                                placeholder="Enter City"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </div>

                        {/* Hobbies */}
                        <div className="mb-4">
                            <label className="block font-semibold text-gray-600 mb-2">Hobbies</label>
                            <div>
                                {hobbies.map(hobby => (
                                    <label key={hobby} className="inline-flex items-center mr-4">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox h-5 w-5 text-blue-600"
                                            value={hobby}
                                            onChange={(e) => handleHobbyChange(e, hobby)}
                                            checked={selectedHobbies.includes(hobby)}
                                        />
                                        <span className="ml-2">{hobby}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Preferences */}
                        <div className="mb-4">
                            <label className="block font-semibold text-gray-600 mb-2">Preferences</label>
                            <div>
                                {preferences.map(preference => (
                                    <label key={preference} className="inline-flex items-center mr-4">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox h-5 w-5 text-blue-600"
                                            value={preference}
                                            onChange={(e) => handlePreferenceChange(e, preference)}
                                            checked={selectedPreferences.includes(preference)}
                                        />
                                        <span className="ml-2">{preference}</span>
                                    </label>
                                ))}
                            </div>
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

export default Screen3