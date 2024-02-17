import React from 'react';
import { useData } from '../ShortlistContext';

import { useEffect, useState } from 'react';

const Allproposal = () => {


    const proposaldata = [
        {
            id: 0,
            Name: "Hasssan",
            img: "https://source.unsplash.com/600x300/?student",
            expert: ["Fashion", "Beauty", "Travel"],
            city: "Karachi",
            rate: "100K",
            descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestias, quas iure vel labore corrupti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nihil officiis nesciunt vitae, incidunt rem nam sint necessitatibus non ut voluptatum impedit eaque maiores fugiat perspiciatis numquam vero. In, a?"
        },
        {
            id: 1,
            Name: "Awais",
            img: "https://source.unsplash.com/600x300/?student",
            expert: ["Fashion", "Beauty", "Travel"],
            city: "Karachi",
            rate: "100K",
            descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestias, quas iure vel labore corrupti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nihil officiis nesciunt vitae, incidunt rem nam sint necessitatibus non ut voluptatum impedit eaque maiores fugiat perspiciatis numquam vero. In, a?"
        },
        {
            id: 2,
            Name: "Hamza",
            img: "https://source.unsplash.com/600x300/?student",
            expert: ["Fashion", "Beauty", "Travel"],
            city: "Karachi",
            rate: "100K",
            descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestias, quas iure vel labore corrupti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nihil officiis nesciunt vitae, incidunt rem nam sint necessitatibus non ut voluptatum impedit eaque maiores fugiat perspiciatis numquam vero. In, a?"
        },
        {
            id: 3,
            Name: "Asad",
            img: "https://source.unsplash.com/600x300/?student",
            expert: ["Fashion", "Beauty", "Travel"],
            city: "Karachi",
            rate: "100K",
            descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestias, quas iure vel labore corrupti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nihil officiis nesciunt vitae, incidunt rem nam sint necessitatibus non ut voluptatum impedit eaque maiores fugiat perspiciatis numquam vero. In, a?"
        },
    ]

    const { data, setData } = useData(); // Accessing state and function from DataContext
    const [shortlistedProposals, setShortlistedProposals] = useState(data.shortlistedProposals || []);
    useEffect(() => {
        setData(prevData => ({
            ...prevData,
            shortlistedProposals,
            shortlistcount: shortlistedProposals.length,
            proposalcount: proposaldata
        }));
    }, [shortlistedProposals, setData]);


    const handleShortlistClick = (proposal) => {
        setShortlistedProposals(prevProposals => {
            const isShortlisted = prevProposals.some(item => item.id === proposal.id);

            if (isShortlisted) {
                return prevProposals.filter(item => item.id !== proposal.id);
            } else {
                return [...prevProposals, proposal];
            }
        });
    };





    return (
        <>

            {
                proposaldata.map((val, index) => {
                    return <div key={index} className="border-b-2 p-4 cursor-pointer hover:bg-gray-200 hover:rounded-2xl">
                        <div className="grid grid-cols-2 gap-1">
                            <div className="grid grid-cols-5">
                                <div className="">
                                    <div className="relative w-28 h-28">
                                        <img
                                            className="w-28 h-28 rounded-full"
                                            src="https://source.unsplash.com/600x300/?student"
                                            alt="Profile"
                                        />
                                        {/* Online/Offline Dot */}
                                        <div className="absolute bottom-1 right-2 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
                                    </div>
                                </div>
                                <div className="col-span-3 mx-2 my-auto">
                                    <h6 className="text-lg font-semibold text-gray-600 mb-1">{val.Name}</h6>
                                    <p className="text-xl font-semibold text-gray-900 mb-1">
                                        {val.expert.join(" | ")}
                                    </p>
                                    <h6 className="text-lg font-semibold text-gray-600 mb-1">{val.city}</h6>
                                </div>
                            </div>
                            {/* Right side */}
                            <div className="grid grid-cols-1">
                                <div className="flex justify-end my-auto">
                                    <div className="">
                                        <button className="bg-blue-500 mx-3 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded-full">
                                            View Profile
                                        </button>
                                        <button
                                            className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full"
                                            onClick={() => handleShortlistClick(val)}
                                        >
                                            {shortlistedProposals.some(item => item.id === val.id) ? 'Remove' : 'Shortlist'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Second row for Price and Description */}
                        <div className="grid grid-cols-1 ">
                            <div className='ps-32 pt-1'>
                                <h6 className="text-xl font-semibold text-gray-700 mb-1">$100</h6>
                                <p className="text-lg font-semibold text-gray-600 text-justify mb-1 pt-1 overflow-hidden overflow-ellipsis whitespace-nowrap" >
                                    {val.descr}
                                </p>
                            </div>

                        </div>
                    </div>
                })
            }

        </>


    );
}

export default Allproposal;
