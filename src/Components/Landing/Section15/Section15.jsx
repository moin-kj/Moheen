import React, { useEffect, useState } from 'react';
import './Section15.css'
import Card from './Card.jsx'
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';

const Section15 = () => {



    const card_Data = [
        {
            id: 0,
            icon: <TravelExploreOutlinedIcon style={{ fontSize: "38px", color: "#008BFF" }} />,
            head: "Brand Discovery Platform",
            descr: "Showcase your skills and expertise to a global audience. Get discovered by brands seeking your unique talents. Elevate your influencer journey with targeted exposure.",

        },
        {
            id: 1,
            icon: <HubOutlinedIcon style={{ fontSize: "38px", color: "#EC6E47" }} />,
            head: "Seamless Collaboration Hub",
            descr: "Collaborate effortlessly with brands in one centralized platform. Manage communications, proposals, and partnerships efficiently. Focus on content creation while we handle logistics.",

        },
        {
            id: 2,
            icon: <AutoGraphOutlinedIcon style={{ fontSize: "38px", color: "#F9A51A" }} />,
            head: "Insights into Impact",
            descr: "Access analytics to measure the impact of your content. Understand audience engagement and collaboration success. Leverage data for continuous improvement.",

        },
        {
            id: 3,
            icon: <LockOpenOutlinedIcon style={{ fontSize: "38px", color: "#16CAA1" }} />,
            head: "Tailored Opportunities",
            descr: "Receive engagement opportunities tailored to your niche. Explore diverse collaborations that align with your brand. Expand your influence with curated opportunities.",

        },

    ]





    return (
        <>
            <div className="container-fluid mt-5 ">
                <div className="sticky top-10 pt-5 p-3">
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                        {/* Left Side */}
                        <div className="md:col-span-1 lg:col-span-1 xl:col-span-1">
                            <div className="text-lg-left position-sticky top-10">
                                <h6>How may we assist you?</h6>
                                <h1 className="text-HeadingText font-titleFont sml:mt-5 md:mt-0 font-bold leading-tight">
                                    Unleash Your Influence with BrandFluence Network
                                </h1>
                                <p className="mt-4 section13_desc leading-relaxed text-justify">
                                Empower your influence on BrandFluence Network. Connect with brands organically, showcase your talent, and thrive in a supportive community that values authentic collaborations.
                                </p>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="md:col-span-1 lg:col-span-1 xl:col-span-1">
                            {card_Data.map((val, key) => (
                                <Card
                                    key={key}
                                    id={val.id}
                                    icon={val.icon}
                                    head={val.head}
                                    descr={val.descr}
                                />
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Section15