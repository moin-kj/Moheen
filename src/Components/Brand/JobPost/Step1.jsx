import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useData } from './DataContext';

const Step1 = () => {
    const { data, setData } = useData(); // Accessing state and function from DataContext
    const [title, setTitle] = useState(data.title || '');
    const [description, setDescription] = useState(data.description || '');
    const [charCount, setCharCount] = useState(title.length);
    const [descripCount, setdescripCount] = useState(0);
    const [wordCount, setWordCount] = useState(title.trim().split(/\s+/).length);
    const [category, setCategory] = useState(data.category || '');
    const [selectedObjectives, setSelectedObjectives] = useState(data.selectedObjectives || []);
    const [checkedObjectives, setCheckedObjectives] = useState([]);
    useEffect(() => {
        setData((prevData) => ({
            ...prevData,
            title: title,
            description: description,
            category: category,
            selectedObjectives: selectedObjectives
        }));
    }, [title, description, category, selectedObjectives, setData]);



    // Define categories and objective options
    const categories = [
        "Automotive & Vehicles",
        "Beauty & Skincare",
        "Business & Entrepreneurship",
        "Entertainment & Gaming",
        "Financial Advice & Services",
        "Fitness & Wellness",
        "Food & Cooking",
        "Home Decor",
        "Luxury & Lifestyle",
        "Music & Entertainment Events",
        "Outdoor Adventures",
        "Parenting & Family Lifestyle",
        "Pet Care products",
        "Social Impacts",
        "Sports & Fitness Gear",
        "Tech & Gadgets",
        "Travel & Exploration"
    ];

    const objectiveOptions = [
        "Drive Product Awareness",
        "Increase Sales",
        "Enhance Brand Visibility",
        "Generate Leads",
        "Boost Website Traffic",
        "Increase Social Media Engagement",
        "Build Brand Loyalty",
        "Educate Consumers about Product Features",
        "Create Buzz around Product Launch",
        "Improve Brand Reputation"
    ];

    const handleObjectiveChange = (option) => {
        const currentIndex = checkedObjectives.indexOf(option);
        const newCheckedObjectives = [...checkedObjectives];

        if (currentIndex === -1) {
            newCheckedObjectives.push(option);
        } else {
            newCheckedObjectives.splice(currentIndex, 1);
        }

        setCheckedObjectives(newCheckedObjectives);
        setSelectedObjectives(newCheckedObjectives);
    };

    const handleDescriptionChange = (event) => {
        const inputText = event.target.value;
        setDescription(inputText);
        setdescripCount(inputText.length);
    };

    const handleTitleChange = (e) => {
        const inputTitle = e.target.value;
        if (inputTitle.length <= 80) {
            const titleWords = inputTitle.trim().split(/\s+/);
            setTitle(inputTitle);
            setCharCount(inputTitle.length);
            setWordCount(titleWords.length);
        }
    };




    return (
        <div className="container mt-4 mx-auto px-4 py-8  rounded-lg  ">
            <div className="border bg-white  mx-12 p-4 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Left Side */}
                    <div className="md:col-span-1">
                        <div>
                            <label htmlFor="title" className="block text-xl font-semibold text-gray-700">Job Title</label>
                            <p className="text-gray-500 text-sm text-justify  mt-2 w-3/4">Choosing the right <b>title is key</b>. It helps influencers find your job. Make sure to use words they'd search for.</p>
                        </div>
                    </div>
                    {/* Right Side */}
                    <div className="md:col-span-2">
                        {/* Text field for the title */}
                        <TextField
                            fullWidth
                            id="title"
                            value={title}
                            onChange={handleTitleChange}
                            placeholder="Enter title"
                            InputProps={{
                                style: {
                                    color: charCount >= 80 ? 'red' : 'black', // Change text color to red when charCount is 80
                                },
                                classes: {
                                    root: 'focus:outline-none focus:border-blue-500',
                                    input: 'text-black placeholder-gray-400',
                                },
                            }}
                        />
                        {/* Display character count and max count indicator below the text field */}
                        <div className="flex justify-between mt-2">
                            {/* Character count */}
                            <span>
                                {charCount >= 1 && (
                                    <>
                                        {charCount < 15 && <span className="text-red-400">15 character min</span>}
                                        {charCount >= 15 && wordCount < 4 && <span className="text-red-400">min 4 words</span>}
                                        {charCount >= 15 && wordCount >= 4 && wordCount <= 8 && <span className="text-green-400">Just Perfect!</span>}
                                        {charCount >= 15 && wordCount > 12 && <span className="text-red-400">Shorter titles attract more influencers.</span>}
                                    </>
                                )}
                            </span>
                            {/* Max count indicator */}
                            <span className={charCount >= 80 ? 'text-red-500' : (charCount >= 79 ? 'text-gray-500' : 'text-black')}>{charCount}/80 max</span>
                        </div>
                    </div>

                </div>
                {/* Category */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    {/* Left Side */}
                    <div className="md:col-span-1">
                        <div>
                            <label htmlFor="category" className="block text-xl font-semibold text-gray-700">Category</label>
                            <p className="text-gray-500 text-sm text-justify mt-2 w-3/4">Choosing the right category ensures your job reaches the <b>right influencers.</b></p>
                        </div>
                    </div>
                    {/* Right Side */}
                    <div className="md:col-span-2">
                        <select
                            id="category"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="">Select Category</option>
                            {categories.map((cat, index) => (
                                <option key={index} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Objectives */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    {/* Left Side */}
                    <div className="md:col-span-1">
                        <div>
                            <label htmlFor="objectives" className="block text-xl font-semibold text-gray-700">Objectives</label>
                            <p className="text-gray-500 text-sm text-justify mt-2 w-3/4">Selecting the objectives ensures your job <b>attracts influencers</b> aligned with your goals.</p>
                        </div>
                    </div>
                    {/* Right Side */}
                    <div className="md:col-span-2">
                        <div className="grid grid-cols-2 gap-2">
                            {objectiveOptions.map((obj, index) => (
                                <div key={index} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id={`objective-${index}`}
                                        value={obj}
                                        checked={checkedObjectives.includes(obj)}
                                        onChange={() => handleObjectiveChange(obj)}
                                        className="mr-2"
                                    />
                                    <label htmlFor={`objective-${index}`}>{obj}</label>
                                </div>
                            ))}
                        </div>
                        <div className="mb-2 mt-4">
                            <TextField
                                fullWidth
                                id="selectedObjectives"
                                type="text"
                                readOnly
                                value={selectedObjectives}
                                placeholder="Selected Objectives"
                            />
                        </div>
                    </div>
                </div>
                {/* Description */}
                <div className="mb-4 mt-4">
                    <label htmlFor="description" className="block text-xl font-semibold text-gray-700 mb-4">Description</label>
                    <div style={{ height: '250px', overflowY: 'auto', marginTop: '3%' }}> {/* Add overflowY style for vertical scrolling */}
                        <TextField
                            multiline
                            rows={8} // You can adjust the number of rows as needed
                            value={description}
                            onChange={handleDescriptionChange}
                            variant="outlined"
                            fullWidth
                            inputProps={{ maxLength: 2000 }} // Set max length to 2000 characters
                        />
                        <div className="flex justify-end mt-2">
                            {/* Max count indicator */}
                            <span className={descripCount >= 2000 ? 'text-red-500' : 'text-black'}>{descripCount}/2000 max</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Step1;
