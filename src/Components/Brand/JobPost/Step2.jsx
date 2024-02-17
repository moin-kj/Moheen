import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { useData } from './DataContext';



const Step2 = () => {
    const { data, setData } = useData();
    const [selectedInterest, setSelectedInterest] = useState(data.selectedInterests || []);
    const [checkedInterests, setCheckedInterests] = useState(data.selectedInterests || []);
    const [checkedAge, setCheckedAge] = useState(data.selectedAgeGroups || []);
    const [newInterest, setNewInterest] = useState('');

    const agegroups = [
        "1-5",
        "5-13",
        "13-17",
        "18-24",
        "25-34",
        "35-44",
    ];

    const interestOptions = [
        "Technology Enthusiasts",
        "Fashion & Beauty Lovers",
        "Health & Fitness Enthusiasts",
        "Foodies & Cooking Enthusiasts",
        "Travel & Adventure Seekers",
        "Increase Social Media Engagement",
        "Gaming & Entertainment Enthusiasts",
        "Pet Lovers & Animal Advocates",
        "Finance & Investment Enthusiasts",
        "Environmental & Sustainability Advocates"
    ];

    useEffect(() => {
        setData(prevData => ({
            ...prevData,
            selectedInterests: selectedInterest,
            selectedAgeGroups: checkedAge
        }));
    }, [selectedInterest, checkedAge, setData]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Backspace' && newInterest === '' && checkedInterests.length > 0) {
                const newCheckedInterests = checkedInterests.slice(0, checkedInterests.length - 1);
                setCheckedInterests(newCheckedInterests);
                setSelectedInterest(newCheckedInterests);
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [checkedInterests, newInterest]);

    const handleInterestChange = (option) => {
        const currentIndex = checkedInterests.indexOf(option);
        const newCheckedInterests = [...checkedInterests];

        if (currentIndex === -1) {
            newCheckedInterests.push(option);
        } else {
            newCheckedInterests.splice(currentIndex, 1);
        }

        setCheckedInterests(newCheckedInterests);
        setSelectedInterest(newCheckedInterests);
    };

    const handleNewInterestChange = (event) => {
        setNewInterest(event.target.value);
    };

    const handleNewInterestKeyDown = (event) => {
        if (event.key === 'Enter' && newInterest.trim() !== '') {
            const newCheckedInterests = [...checkedInterests, newInterest.trim()];
            setCheckedInterests(newCheckedInterests);
            setSelectedInterest(newCheckedInterests);
            setNewInterest('');
        }
    };

    const handleageGroups = (option) => {
        const currentIndex = checkedAge.indexOf(option);
        const newcheckedAge = [...checkedAge];

        if (currentIndex === -1) {
            newcheckedAge.push(option);
        } else {
            newcheckedAge.splice(currentIndex, 1);
        }

        setCheckedAge(newcheckedAge);
    };

    return (
        <div className="container  mt-5 mx-auto px-4 py-8 rounded-lg  ">
            <div className="border bg-white mx-12 p-4 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Left Side */}
                    <div className="md:col-span-1">
                        <div>
                            <label htmlFor="title" className="block text-xl font-semibold text-gray-700">Age</label>
                            <p className="text-gray-500 text-sm text-justify  mt-2 w-3/4">Picking the <b> right age group </b> matters. It helps influencers spot your job.</p>
                        </div>
                    </div>
                    {/* Right Side */}
                    <div className="md:col-span-2">
                        <div className='grid grid-cols-3 gap-2 mt-3'>
                            {agegroups.map((age, index) => (
                                <div key={index} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id={`AgeGroup-${index}`}
                                        value={age}
                                        checked={checkedAge.includes(age)}
                                        onChange={() => handleageGroups(age)}
                                        className="mr-2"
                                    />
                                    <label htmlFor={`AgeGroup-${index}`}>{age}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Interest */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    {/* Left Side */}
                    <div className="md:col-span-1">
                        <div>
                            <label htmlFor="objectives" className="block text-xl font-semibold text-gray-700">Interest</label>
                            <p className="text-gray-500 text-sm text-justify mt-2 w-3/4">Picking multiple <b> interests </b> helps your job  connect with influencers who share your goals.</p>
                        </div>
                    </div>
                    {/* Right Side */}
                    <div className="md:col-span-2">
                        <div className="grid grid-cols-2 gap-2">
                            {interestOptions.map((interest, index) => (
                                <div key={index} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id={`interest-${index}`}
                                        value={interest}
                                        checked={checkedInterests.includes(interest)}
                                        onChange={() => handleInterestChange(interest)}
                                        className="mr-2"
                                    />
                                    <label htmlFor={`interest-${index}`}>{interest}</label>
                                </div>
                            ))}
                            {/* New Interest Input Field */}
                            <div className="flex items-center mt-3">
                                <TextField
                                    type="text"
                                    size='small'
                                    fullWidth
                                    placeholder="Other"
                                    value={newInterest}
                                    onChange={handleNewInterestChange}
                                    onKeyDown={handleNewInterestKeyDown}
                                />
                            </div>
                        </div>
                        <div className="mb-2 mt-4">
                            <TextField
                                fullWidth
                                id="selectedInterest"
                                type="text"
                                readOnly
                                value={selectedInterest}
                                placeholder="Selected Objectives"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step2;
