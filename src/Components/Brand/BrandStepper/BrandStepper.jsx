import React, { useState } from 'react';
import InfoTab from './InfoTab';
import BillingTab from './BillingTab';
import SecurityTab from './SecurityTab';
import './BrandStepper.css'

const BrandStepper = () => {

    const [activeTab, setActiveTab] = useState('info');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='container py-12'>
        <div className="flex flex-col md:flex-row justify-between">
            <div className="md:w-[25%]">
                <h1 className='mb-0'>Settings</h1>
                <div className="stepper pt-8 ">
                    <ul className='pl-0'>
                        <li className={`border-l-2 text-lg hover:text-[#0055a2] transition-all duration-500 ease-in-out px-2 py-1 border-l-[#939393] text-[#939393] font-[500] cursor-pointer ${activeTab === 'info' ? 'active text-[#0055a2] border-l-[#0055a2]' : ''}`} onClick={() => handleTabClick('info')}>My Info</li>
                        <li className={`border-l-2 text-lg hover:text-[#0055a2] transition-all duration-500 ease-in-out px-2 py-1 border-l-[#939393] text-[#939393] font-[500] cursor-pointer ${activeTab === 'billing' ? 'active text-[#0055a2] text-black border-l-[#0055a2]' : ''}`} onClick={() => handleTabClick('billing')}>Billing & Payments</li>
                        <li className={`border-l-2 text-lg hover:text-[#0055a2] transition-all duration-500 ease-in-out px-2 py-1 border-l-[#939393] text-[#939393] font-[500] cursor-pointer ${activeTab === 'security' ? 'active text-[#0055a2] text-black border-l-[#0055a2]' : ''}`} onClick={() => handleTabClick('security')}>Password & Security</li>
                    </ul>
                </div>
            </div>
            <div className="md:w-[74%]">
                {activeTab === 'info' && <InfoTab />}
                {activeTab === 'billing' && <BillingTab />}
                {activeTab === 'security' && <SecurityTab />}
            </div>
        </div>
    </div>
    )
}

export default BrandStepper;