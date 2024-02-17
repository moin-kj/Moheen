import React from 'react'
import "./Section4.css"
import { IoIosChatboxes } from "react-icons/io";
import { MdScreenSearchDesktop } from "react-icons/md";
import { FaHandFist } from "react-icons/fa6";
import Card from './Card';

const Section4 = () => {
    return (
        <>
            {/* Content Container */}
            <div className="relative z-10 text-HeadingText text-center mx-auto mt-16">
                <h1 className="text-4xl xs:text-[15px] sm:text-xl sml:text-2xl md:text-3xl mdl:text-3xl lg:text-4xl lgl:text-4xl font-bold font-titleFont leading-tight">
                    <span className="block leading-tight">Key Offerings</span>
                </h1>
            </div>
            <div className="container">
                <div className="row">
                    <div
                        className="inset-0 opacity-30 services"
                    ></div>
                    <Card
                        icon={<IoIosChatboxes />}
                        title="Smooth Communication"
                        description="We offers a straightforward and transparent communication channel with influencers. No more lengthy negotiations—save time and energy for impactful collaborations."
                    />
                    <Card
                        icon={<MdScreenSearchDesktop />}
                        title="Centralized Solution"
                        description="We offers a comprehensive platform where you can effortlessly review influencer submissions, provide feedback, and grant approvals. Experience a streamlined way to manage your collaborations."
                    />
                    <Card
                        icon={<FaHandFist />}
                        title="Guidance & Empowerment"
                        description="We provide robust support and training to navigate influencer collaborations with confidence. Achieve marketing goals through informed decisions on our platform."
                    />
                </div>
            </div>

        </>
    )
}

export default Section4