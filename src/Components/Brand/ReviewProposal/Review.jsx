import React, { useState } from 'react';
import View from './View/View';
import FindInfluencer from './Profile/FindInfluencer';
// import { DataProvider } from './ShortlistContext';
import Proposals from './Proposals/Proposals';
import { DataProvider } from './ShortlistContext';
import Offer from './Offer/Offer';


const ProposalPage = () => {

    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { id: 0, label: 'View Job Post' },
        { id: 1, label: 'Find Influencer' },
        { id: 2, label: 'Review Proposals (0)' },
        { id: 3, label: 'Send Offers' }

    ];

    return (
        <>
            <div className="container-fluid">
                <div className='container '>
                    <h3 className="font-semibold font-serif p-3 mt-1 mb-2">Frontend Developer with React Expertise</h3>
                    <div className='rounded-xl'>
                        <div className="grid grid-cols-4 border rounded-full">
                            {tabs.map(tab => (
                                <div
                                    key={tab.id}
                                    className={`cursor-pointer text-lg font-semibold text-center p-2 ${activeTab === tab.id ? 'bg-blue-800 border rounded-full text-white font-semibold text-lg' : ''
                                        }`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    {tab.label}
                                </div>
                            ))}
                        </div>
                        <div className="grid grid-cols-1 mt-3 p-2">
                            <DataProvider>
                                {activeTab === 0 && (
                                    <View />
                                )}
                                {activeTab === 1 && (
                                    <FindInfluencer />
                                )}
                                {activeTab === 2 && (
                                    <Proposals />
                                )}
                                {activeTab === 3 && (
                                    <Offer/>
                                )}
                            </DataProvider>
                        </div>
                    </div>
                </div>

            </div>

            {/* Find */}


        </>
    );
};

export default ProposalPage;
