import React from 'react'
import midimg from '../../../assets/Images/Primary/midimg.png'; // Import your center image
import { FaHandshakeSimple } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { TbAdjustmentsSearch } from "react-icons/tb";
import { FaUnlockKeyhole } from "react-icons/fa6";

import Card from './Card';

const Section7 = () => {
    return (
        <>
            <div className="">
                {/* Content Container */}
                <div className="relative z-10 text-HeadingText text-center mx-auto mt-16">
                    {/* Headline */}
                    <h1 className="text-4xl xs:text-[15px] sm:text-xl sml:text-2xl md:text-3xl mdl:text-3xl lg:text-4xl lgl:text-4xl font-bold font-titleFont leading-tight">
                        {/* Use line height and margin to adjust lines */}
                        <span className="block leading-tight">Join as an Influencer</span>
                    </h1>
                    <p className="mt-2 text-black text-xl  leading-tight ">
                        <span className="block leading-tight xs:hidden sm:hidden sml:block">Empower your influence: Join us, connect with brands, and thrive in influencer marketing.</span>
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="max-w-4xl px-4 py-2 w-full flex justify-center">
                        <div className="flex flex-col md:flex-col mdl:flex-row  items-stretch w-full">
                            <div className="w-full md:w-full mdl:w-1/2 flex flex-col">
                                <div className="text-center">
                                    <img
                                        src={midimg}
                                        loading="lazy"
                                        alt="Center Image"
                                        className="max-w-full h-auto sml:mb-20 md:mb-16 lg:mb-10 xl:mb-10"
                                    />
                                </div>
                                <Card
                                    icon={<TbAdjustmentsSearch color='#008bff' />}
                                    title='Effortless Management'
                                    description='Simplify your influencer tasks from submissions to earnings with our user-friendly Brandfluence Network app.'
                                />
                            </div>
                            <div className="w-full md:w-full mdl:w-1/2 flex flex-col mdl:space-y-2 lg:space-y-11 xl:space-y-9">
                                <Card
                                    icon={<FaHandshakeSimple color='#ec6e47' />}
                                    title='Build Strong Brand Connections'
                                    description='Explore opportunities for long-term partnerships and exciting collaborations with reputable brands on our platform.'
                                />
                                <Card
                                    icon={<FaUnlockKeyhole color='#008BFF' />}
                                    title='Unlock Earning Potential'
                                    description='Maximize your social media influence to earn extra income without compromising your academic or professional commitments.'
                                />
                                <Card
                                    icon={<FaPeopleGroup color='#f9a51a' />}
                                    title='Guidance & Community Support'
                                    description='Start your influencer journey with our supportive community. Access guides, tips & tricks for success on the Brandfluence Network.'
                                />




                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Section7