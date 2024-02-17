import React, { useEffect, useState } from 'react';
import './Section14.css'
import Card from './Card.jsx'
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import EmojiObjectsRoundedIcon from '@mui/icons-material/EmojiObjectsRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';

const Section14 = () => {



    const card_Data = [
        {
            id: 0,
            icon: <RocketLaunchRoundedIcon style={{ fontSize: "38px", color: "#008BFF" }} />,
            head: "Targeted Talent Discovery",
            descr: "Discover influencers tailored to your brand's needs. Streamlined process for finding the perfect fit. Boost your reach with precision. ",

        },
        {
            id: 1,
            icon: <DashboardRoundedIcon style={{ fontSize: "38px", color: "#EC6E47" }} />,
            head: "Effortless Collaboration",
            descr: "Simplify influencer collaborations in one integrated platform. Manage partnerships seamlessly from start to finish. Enhance brand visibility effortlessly. ",

        },
        {
            id: 2,
            icon: <EmojiObjectsRoundedIcon style={{ fontSize: "38px", color: "#F9A51A" }} />,
            head: "Performance Analytics",
            descr: "Gain insights with detailed analytics. Understand the impact of your influencer collaborations.  Optimize future strategies for maximum effectiveness. ",

        },
        {
            id: 3,
            icon: <ArticleRoundedIcon style={{ fontSize: "38px", color: "#16CAA1" }} />,
            head: "Customized Brand Management",
            descr: "Customize engagements to align with your brand's identity. Ensure influencer content resonates authentically. Drive meaningful results with personalized strategies. ",

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
                                    Boost Your Brand with BrandFluence Network
                                </h1>
                                <p className="mt-4 section13_desc leading-relaxed text-justify">
                                    Enhance your brand visibility effortlessly.  BrandFluence Network provides a platform for seamless brand-influencer connections, fostering meaningful collaborations that resonate with your audience. 
                                </p>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="md:col-span-1 lg:col-span-1 xl:col-span-1">
                            {card_Data. map((val, key) => (
                                <Card
                                    key={key}
                                    id={val. id}
                                    icon={val. icon}
                                    head={val. head}
                                    descr={val. descr}
                                />
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Section14