import React from 'react'
import "./Section13.css"
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import SwitchAccessShortcutAddOutlinedIcon from '@mui/icons-material/SwitchAccessShortcutAddOutlined';


const Section13 = () => {
    return (
        <>
            <div className="container-fluid mt-5 ">
                <div className="container pt-5">
                    <div className="row ">
                        {/* Left Side */}
                        <div className="col-md-12 col-lg-7 d-flex flex-column justify-content-center">
                            <div className="text-lg-left">
                                <h6>With Our Experts</h6>
                                <h1 className="text-HeadingText font-titleFont sml:mt-5 md:mt-0 font-bold leading-tight">
                                    We'll manage the worries on your behalf.
                                </h1>
                                <p className="mt-4 section13_desc leading-relaxed text-justify">
                                    Tired of navigating through multiple platforms for influencer marketing?
                                    Let BrandFluence Network handle the complexities.
                                    Our all-in-one platform allows you to manage  influencers seamlessly, from discovery to post-collaboration insights. Tailored solutions designed uniquely for you.

                                </p>
                                <div className="mt-4">
                                    <ul className="flex flex-col md:space-y-6">
                                        {/* List Item 1 */}
                                        <li className="flex items-center section13_list leading-relaxed">
                                            <svg
                                                className="w-15 h-8 mr-2 text-[#F9A51A]"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            // #008BFF
                                            // #EC6E47
                                            // #F9A51A
                                            >
                                                <WidgetsOutlinedIcon />
                                            </svg>

                                            All-in-one and trouble-free, making things smooth for your business.
                                        </li>

                                        {/* List Item 2 */}
                                        <li className="flex items-center  section13_list leading-relaxed">
                                            <svg
                                                className="w-15 h-8 mr-2 text-[#EC6E47]"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <TipsAndUpdatesOutlinedIcon />
                                            </svg>
                                            Regular updates to gauge performance insights.
                                        </li>

                                        {/* List Item 3 */}
                                        <li className="flex items-center section13_list leading-relaxed">
                                            <svg
                                                className="w-15 h-8 mr-2 text-[#008BFF]"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <SwitchAccessShortcutAddOutlinedIcon />
                                            </svg>
                                            Flexible and made just for you.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="col-md-12 col-lg-5 d-flex align-items-center justify-content-center justify-content-lg-end py-3 ">
                            <video width="100%" controls>
                                <source
                                    src="https://www.youtube.com/watch?v=wg0ojZANYHY&t=107s" // Replace with your video URL
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Section13