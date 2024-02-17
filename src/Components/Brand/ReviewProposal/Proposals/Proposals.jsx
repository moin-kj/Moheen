import React, { useState } from 'react';
import Allproposal from './Allproposal';
import Shortlist from './Shortlist';
import Message from './Message';
import { useData } from '../ShortlistContext';



const Proposals = () => {
    const { data } = useData();
    console.log("Proposals " , data)
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    // Define an array of options
    const options = [
        { id: 0, label: 'All Proposals' },
        { id: 1, label: `Shortlisted (${data.shortlistcount})` },
        { id: 2, label: 'Messaged' }
    ];

    return (
        <div className="py-1">
            <div className="">
                <div className="grid grid-cols-8 ">
                    {options.map(option => (
                        <div
                            key={option.id}
                            className={`cursor-pointer font-semibold text-md py-2 px-4 ${activeTab === option.id ? 'border-b-2 border-blue-800 text-blue-800' : ''
                                }`}
                            onClick={() => handleTabClick(option.id)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            </div>
            <div className="p-4">
                {activeTab === 0 && (
                    <div>
                        {/* Content for All Proposals */}
                        <Allproposal />
                    </div>
                )}
                {activeTab === 1 && (
                    <div>
                        {/* Content for Shortlisted Proposals */}
                        <Shortlist />
                    </div>
                )}
                {activeTab === 2 && (
                    <div>
                        {/* Content for Messaged Proposals */}
                        <Message />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Proposals;
