import TextField from '@mui/material/TextField';
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Typography from '@mui/material/Typography';
import { useData } from './DataContext';
import ScrollTop from '../../ScrollTop/ScrollTop';




const Step5 = () => {
    const { data, setData } = useData()
    const currentDate = new Date();
    const [startDate, setStartDate] = useState(data.startDate);
    const [endDate, setEndDate] = useState(data.endDate);
    const [value, setValue] = useState(data.budget);
    const [selectedFrequency, setselectedFrequency] = useState(data.selectedFrequency || []);
    const [checkedFrequency, setcheckedFrequency] = useState(data.selectedFrequency || []);

    useEffect(() => {
        setData(prevData => ({
            ...prevData,
            startDate: startDate,
            endDate: endDate,
            budget: value,
            selectedFrequency: selectedFrequency,
        }));
    }, [startDate, endDate, value, selectedFrequency, setData]);
    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
    };


    const handleInputChange = (event) => {
        setValue(event.target.value);
    };

    const handleInputBlur = () => {
        let inputValue = parseInt(value);
        if (isNaN(inputValue) || inputValue < 1000) {
            // If the input is not a valid number or less than 1000, set it to 1000
            setValue('1000');
        } else if (inputValue > 10000000) {
            // If the input is greater than 10000000, set it to 10000000
            setValue('10000000');
        }
        // You can add further actions if needed
    };


    const calculateDuration = () => {
        if (startDate && endDate) {
            const timeDifference = Math.abs(endDate - startDate);
            const durationInDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

            let remainingDays = durationInDays;
            let months = 0;
            let weeks = 0;
            let days = 0;

            // Calculate months
            months = Math.floor(remainingDays / 30);
            remainingDays %= 30;

            // Calculate weeks
            weeks = Math.floor(remainingDays / 7);
            remainingDays %= 7;

            // Remaining days
            days = remainingDays;

            let durationText = '';

            if (months > 0) {
                durationText += `${months} month(s) `;
            }

            if (weeks > 0) {
                durationText += `${weeks} week(s) `;
            }

            if (days > 0) {
                durationText += `${days} day(s)`;
            }

            return durationText.trim();
        }

        return ''; // Or any default value you prefer if start and end dates are not set
    };


    const FrequencyOptions = [
        "Once a week",
        "Twice a week",
        "Three times a week",
        "Once every two weeks",
        "Once every three weeks",
        "Once a month",
        "Twice a month",
        "Every weekday",
        "Every weekend",
    ];

    const handleFrequencyChange = (option) => {
        const currentIndex = checkedFrequency.indexOf(option);
        const newcheckedFrequency = [...checkedFrequency];

        if (currentIndex === -1) {
            newcheckedFrequency.push(option);
        } else {
            newcheckedFrequency.splice(currentIndex, 1);
        }

        setcheckedFrequency(newcheckedFrequency);
        setselectedFrequency(newcheckedFrequency);
    };






    {/* <div className="w-full h-1 bg-gray-300 relative">
                <div
                    className={`absolute top-0 left-0 h-1 ${currentStep === steps.length ? 'bg-green-500' : 'bg-blue-500'}`}
                    style={{ width: `${(currentStep - 1) / (steps.length - 1) * 100}%` }}
                ></div>
            </div> */}


    return (
        <>

        <ScrollTop/>
            <div className="container  mt-5 mx-auto px-4 py-8 rounded-lg  ">
                <div className="border bg-white mx-12 p-4 rounded-xl">
                    {/* TimeLine */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="md:col-span-1 my-auto">
                            <div>
                                <label htmlFor="title" className="block text-xl font-semibold text-gray-700">Timeline</label>
                                <p className="text-gray-500 text-sm text-justify mt-2 w-3/4">Specify the <b>collaboration timeline!</b>  Let influencers know the duration within which your job will be active.</p>
                            </div>
                        </div>
                        <div className="md:col-span-2">
                            <div className="grid grid-cols-3  mt-3">
                                <div>
                                    <label htmlFor="start-date" className="block text-sm font-medium text-gray-700">Start Date</label>
                                    <DatePicker
                                        id="start-date"
                                        selected={startDate}
                                        onChange={handleStartDateChange}
                                        minDate={currentDate}
                                        dateFormat="dd/MM/yyyy"
                                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="end-date" className="block text-sm font-medium text-gray-700">End Date</label>
                                    <DatePicker
                                        id="end-date"
                                        selected={endDate}
                                        onChange={handleEndDateChange}
                                        dateFormat="dd/MM/yyyy"
                                        minDate={startDate || currentDate}
                                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Duration</label>
                                    <TextField
                                        size='small'
                                        type="text"
                                        fullWidth
                                        value={calculateDuration()}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Budget */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                        <div className="md:col-span-1 my-auto">
                            <div>
                                <label htmlFor="title" className="block text-xl font-semibold text-gray-700">Budget</label>
                                <p className="text-gray-500 text-sm text-justify mt-2 w-3/4">Enter your budget! Share the <b>financial scope</b>  for your collaboration, helping influencers understand the potential compensation</p>
                            </div>
                        </div>
                        <div className="md:col-span-2">
                            <div className='grid grid-cols-1 gap-4 mt-3'>
                                <TextField
                                    type="number"
                                    size="medium"
                                    label="Amount"
                                    fullWidth
                                    value={value}
                                    onChange={handleInputChange}
                                    onBlur={handleInputBlur}
                                    inputProps={{
                                        min: 0,
                                        max: 1000000,
                                        step: 500
                                    }}
                                    InputProps={{
                                        startAdornment: (
                                            <Typography variant="body2" style={{ marginRight: '8px' }}>PKR</Typography>
                                        ),
                                    }}
                                />
                                {/* <input type="number" min="0.01" step="0.01" max="2500"  /> */}
                            </div>
                        </div>
                    </div>

                    {/* Posting Frequency */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                        <div className="md:col-span-1 my-auto">
                            <div>
                                <label htmlFor="title" className="block text-xl font-semibold text-gray-700">Posting Frequency</label>
                                <p className="text-gray-500 text-sm text-justify mt-2 w-3/4">Choose your <b>posting frequency!</b>  Let influencers know how often you expect content to be shared during the collaboration period</p>
                            </div>
                        </div>
                        <div className="md:col-span-2">
                            <div className="grid grid-cols-2 gap-2">
                                {FrequencyOptions.map((obj, index) => (
                                    <div key={index} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id={`frequency-${index}`}
                                            value={obj}
                                            checked={checkedFrequency.includes(obj)}
                                            onChange={() => handleFrequencyChange(obj)}
                                            className="mr-2"
                                        />
                                        <label htmlFor={`frequency-${index}`}>{obj}</label>
                                    </div>
                                ))}
                            </div>
                            <div className="mb-2 mt-4">
                                <TextField
                                    fullWidth
                                    id="selectedFrequency"
                                    type="text"
                                    readOnly
                                    value={selectedFrequency}
                                    placeholder="Selected Frequency"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Step5;
