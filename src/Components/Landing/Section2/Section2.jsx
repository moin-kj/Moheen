import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Section2.css"
// import Card from './Card';
import Card from './Card';
import { FaHandHoldingDollar } from "react-icons/fa6";
import { MdInsights } from "react-icons/md";
import { SlTarget } from "react-icons/sl";


const Section2 = () => {
    return (
        <>
            <div className="">
                {/* Content Container */}
                <div className="relative z-10 text-HeadingText text-center mx-auto mt-24">
                    {/* Headline */}
                    <h1 className="text-4xl xs:text-[15px] sm:text-xl sml:text-2xl md:text-3xl mdl:text-3xl lg:text-4xl lgl:text-4xl font-bold font-titleFont leading-tight">
                        {/* Use line height and margin to adjust lines */}
                        <span className="block leading-tight">Why BrandFluence Newtork?</span>
                    </h1>
                    <h2 className="mt-4 text-black text-xl sm:text-2xl sml:text-xl md:text-xl mdl:text-2xl leading-tight">
                        <span className="block leading-tight xs:hidden sm:hidden sml:block">Connect with your audience, elevate brand visibility, and drive impactful</span>
                        <span className="block leading-tight xs:hidden sm:hidden sml:hidden md:block">conversions through strategic influencer partnerships.</span>

                    </h2>
                </div>
                <div className="container">
                    <div className="row">
                        <Card
                            icon={<FaHandHoldingDollar style={{color: "#008BFF"}}/>}
                            title="Cost Effective"
                            description="Achieve big on a budget with BrandFluence Network where power meets affordability."
                        />
                        <Card
                            icon={<SlTarget style={{color: "#EC6E47"}}/>}
                            title="Targeted Reach"
                            description="Effortless reach, targeted impact we delivers your message where it matters most."
                        />
                        <Card
                            icon={<MdInsights style={{color: "#F9A51A"}}/>}
                            title="High Engagement"
                            description="Our Platform making every brand interaction count, where engagement truly matters."
                        />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Section2