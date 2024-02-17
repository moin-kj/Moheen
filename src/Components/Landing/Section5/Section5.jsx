import React from 'react'
import './Section5.css'
import { FaHandHoldingDollar } from "react-icons/fa6";
import { MdInsights } from "react-icons/md";
import { AiOutlineSolution } from "react-icons/ai";
import { FaHandshakeSimple } from "react-icons/fa6";
import { IoMdPeople } from "react-icons/io";
import { SlTarget } from "react-icons/sl";
import Card from './Card';
const Section5 = () => {
    return (
        <>
            <div className="container-fluid mt-5 bg-[#253778]">
                <div className="row">
                    {/* Left Side */}
                    <div className="col-md-12 col-lg-7 d-flex flex-column justify-content-center py-5 px-5">
                        <div className="text-lg-left">
                            <h5>Benefits of Working Together</h5>
                            <h1 className="section5_heading font-titleFont py-2">
                                Simplify collaboration on BrandFluence Network.
                            </h1>
                            <p className="mt-4 section5_desc">
                                Unlock direct connections between businesses and influencers on BrandFluence Network, creating powerful partnerships effortlessly.
                            </p>
                        </div>
                        <div className="row mt-6">
                            {/* Card 1 */}
                            <Card
                                icon={<SlTarget style={{ color: "#008BFF" }} />}
                                title="Influencer Variety"
                                description="BrandFluence Network offers a diverse range of influencers across nano, micro, and macro tiers, simplifying the selection process for brands and ensuring the perfect match for client."
                            />
                            <div className="col-lg-1">

                            </div>
                            <Card
                                icon={<AiOutlineSolution  style={{ color: "#008BFF" }} />}
                                title="Economical Solutions"
                                description="Brands on BrandFluence Network achieve cost-effectiveness by harnessing a variety of influencers, ensuring budget-friendly strategies for impactful results."
                            />
                        </div>
                        <div className="row">
                            {/* Card 3 */}
                            <Card
                                icon={<FaHandshakeSimple style={{ color: "#008BFF" }} />}
                                title="Simplified Operations"
                                description="BrandFluence Network optimizes influencer collaboration with an integrated platform. Access tracking, analytics, budget flexibility, and dedicated support—all in one streamlined workflow."
                            />
                            <div className="col-lg-1">

                            </div>
                            {/* Card 4 */}
                            <Card
                                icon={<IoMdPeople style={{ color: "#008BFF" }} />}
                                title="Brand Engagement Metrics"
                                description="BrandFluence Network provides in-depth metrics on brand engagement, helping brands gauge the effectiveness of their influencer partnerships and refine strategies for optimal impact."
                            />
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="col-md-12 col-lg-5 d-flex align-items-center justify-content-center justify-content-lg-end px-1">
                        <img
                            className="img-fluid"
                            src="https://assets-global.website-files.com/64396970daa63b2dec8b44a8/6470265485072710b16def9b_cta%20image-p-1080.webp" // Replace with your image URL
                            alt="Right Side Image"
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Section5