import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { useData } from './DataContext';
import ScrollTop from '../../ScrollTop/ScrollTop';

const Step3 = () => {
    const { data, setData } = useData()
    const [selectedStyles, setselectedStyles] = useState(data.selectedStyles || []); // Initialize state with data from context
    const [checkedStyle, setcheckedStyle] = useState(data.selectedStyles || []); // Initialize state with data from context
    const [selectedPreferences, setselectedPreferences] = useState(data.selectedPreferences || ' '); // Initialize state with data from context
    const [newStyle, setNewStyle] = useState('');
    const [checkedFormat, setCheckedFormat] = useState(data.selectedFormats || []);




    useEffect(() => {
        setData(prevData => ({
            ...prevData,
            selectedStyles: selectedStyles,
            selectedPreferences: selectedPreferences,
            selectedFormats: checkedFormat // Update selected formats in the context
        }));
    }, [selectedStyles, selectedPreferences, checkedFormat, setData]);

    const contentStyle = [
        "Informative",
        "Entertaining",
        "Educational",
        "Inspirational",
        "Humorous",
        "Authentic",
        "Engaging",
        "Lifestyle-oriented Advocates",
        "Thought-provoking",
        "Story-driven"
    ];
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Backspace' && newStyle === '' && checkedStyle.length > 0) {
                const newcheckedStyle = checkedStyle.slice(0, checkedStyle.length - 1);
                setcheckedStyle(newcheckedStyle);
                setselectedStyles(newcheckedStyle);
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [checkedStyle, newStyle]);

    const handlestyleChange = (option) => {
        const currentIndex = checkedStyle.indexOf(option);
        const newcheckedStyle = [...checkedStyle];

        if (currentIndex === -1) {
            newcheckedStyle.push(option);
        } else {
            newcheckedStyle.splice(currentIndex, 1);
        }

        setcheckedStyle(newcheckedStyle);
        setselectedStyles(newcheckedStyle);
        console.log("selected style ", selectedStyles)
    };

    const handleNewstyleChange = (event) => {
        setNewStyle(event.target.value);
    };

    const handleFormatChange = (index) => {
        // Check if the title is already in the checkedFormat array
        if (checkedFormat.includes(format[index].title)) {
            // If it is, remove it from the array
            setCheckedFormat(checkedFormat.filter(title => title !== format[index].title));
        } else {
            // If it's not, add it to the array
            setCheckedFormat([...checkedFormat, format[index].title]);
        }
    };



    const handleNewstyleKeyDown = (event) => {
        if (event.key === 'Enter' && newStyle.trim() !== '') {
            const newcheckedStyle = [...checkedStyle, newStyle.trim()];
            setcheckedStyle(newcheckedStyle);
            setselectedStyles(newcheckedStyle);
            setNewStyle('');
        }
    };

    const handlePreferenceChange = (index) => {
        const selectedTitle = preferencecards[index].title;
        setselectedPreferences(selectedTitle);
    };


    // Cards For Preferences
    const preferencecards = [
        {
            id: 0,
            title: "Sponsored Content",
            img: "https://www.vocusdigital.com/wp-content/uploads/2022/08/Brand-Gif-1.gif",
        },
        {
            id: 1,
            title: "Product Review",
            img: "https://media2.giphy.com/media/D3VCTioOjqJvF98mAi/giphy.gif?cid=6c09b952bhzue49ggy8twofboqunm030vr9uz7mpnja2h9xn&ep=v1_stickers_related&rid=giphy.gif&ct=s",
        },
        {
            id: 2,
            title: "Brand Ambassadorships",
            img: "https://i0.wp.com/yurani.design/wp-content/uploads/2021/03/T-audience.gif",
        },


    ]

    // Card for Content Format
    const format = [
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

            <ScrollTop />
            <div className="container  mt-5 mx-auto px-4 py-8  rounded-lg ">
                <div className="border bg-white mx-12 p-4 rounded-xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Left Side */}
                        <div className="md:col-span-1 my-auto">
                            <div>
                                <label htmlFor="title" className="block text-xl font-semibold text-gray-700">Preferences</label>
                                <p className="text-gray-500 text-sm text-justify  mt-2 w-3/4">Selecting <b>preferences</b> ensures your job matches what influencers are looking for.</p>
                            </div>
                        </div>
                        {/* Right Side */}
                        <div className="md:col-span-2">
                            <div className='grid grid-cols-3 gap-4 mt-3'>
                                {preferencecards.map((val, index) => {
                                    return (
                                        <div key={index} className="border border-gray-300 rounded-lg p-2 flex flex-col items-start mb-2 cursor-pointer">
                                            {/* Image */}
                                            <img src={val.img} alt="Image" className="w-full h-3/4 rounded-lg mb-1" /> {/* Adjust image size */}
                                            {/* Title */}
                                            <h3 className="text-sm font-semibold mt-2 text-left">{val.title}</h3> {/* Adjust font size */}
                                            {/* Radio buttons */}
                                            <div className="ml-auto">
                                                <input
                                                    type="radio"
                                                    name="preference"
                                                    value={index}
                                                    onChange={() => handlePreferenceChange(index)}
                                                    className="cursor-pointer"
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                    </div>
                    {/* Content Format */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        {/* Left Side */}
                        <div className="md:col-span-1 my-4">
                            <div>
                                <label htmlFor="objectives" className="block text-xl font-semibold text-gray-700">Content Format</label>
                                <p className="text-gray-500 text-sm text-justify mt-2 w-3/4">Choosing the right <b>content format</b> helps attract influencers who fit your goals. Pick formats they like.</p>
                            </div>
                        </div>
                        {/* Right Side */}
                        <div className="md:col-span-2">
                            <div className='grid grid-cols-4 gap-4 mt-3'>
                                {format.map((val, index) => (
                                    <div key={val.id} className="border border-gray-300 rounded-lg p-2 flex flex-col items-start mb-3 cursor-pointer">
                                        {/* Image */}
                                        <img src={val.img} alt="Image" className="w-full h-3/4 rounded-lg mb-2" />
                                        {/* Title */}
                                        <h3 className="xs:text-[20px] sm:text-sm font-semibold mb-1 mt-1 text-left">{val.title}</h3>
                                        {/* Checkbox */}
                                        <div className="ml-auto">
                                            <input
                                                className='cursor-pointer'
                                                type="checkbox"
                                                checked={checkedFormat.includes(val.title)} // Check if the title is in the checkedFormat array
                                                onChange={() => handleFormatChange(index)} // Bind the event handler
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                    {/* Content Style */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        {/* Left Side */}
                        <div className="md:col-span-1">
                            <div>
                                <label htmlFor="objectives" className="block text-xl font-semibold text-gray-700">Content Style</label>
                                <p className="text-gray-500 text-sm text-justify mt-2 w-3/4">Picking the right <b>content style</b> attracts influencers aligned with your goals.</p>
                            </div>
                        </div>
                        {/* Right Side */}
                        <div className="md:col-span-2">
                            <div className="grid grid-cols-2 gap-2">
                                {contentStyle.map((Style, index) => (
                                    <div key={index} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id={`Style-${index}`}
                                            value={Style}
                                            checked={checkedStyle.includes(Style)}
                                            onChange={() => handlestyleChange(Style)}
                                            className="mr-2"
                                        />
                                        <label htmlFor={`Style-${index}`}>{Style}</label>
                                    </div>
                                ))}
                                {/* New Style Input Field */}
                                <div className="flex items-center mt-3">
                                    <TextField
                                        type="text"
                                        size='small'
                                        fullWidth
                                        placeholder="Other"
                                        value={newStyle}
                                        onChange={handleNewstyleChange}
                                        onKeyDown={handleNewstyleKeyDown}
                                    />
                                </div>
                            </div>
                            <div className="mb-2 mt-4">
                                <TextField
                                    fullWidth
                                    id="selectedStyles"
                                    type="text"
                                    readOnly
                                    value={selectedStyles}
                                    placeholder="Selected Objectives"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    );
};

export default Step3;
