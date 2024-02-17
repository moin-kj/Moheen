import React from 'react'
import VerticalSlider from '../../Vertical_Slider/VerticalSlider'

const Constant = ({head,main_head,desc}) => {
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-6 gap-1 overflow-hidden" >
                    {/* Left Side */}
                    <div className="md:col-span-3 lg:col-span-3 xl:col-span-3 p-5">
                        <div className="text-lg-left p-5">
                            <h6>{head}</h6>
                            <h2 className="text-HeadingText font-titleFont sml:mt-5 md:mt-0 font-bold leading-tight">
                                {main_head}
                            </h2>
                            <p className="mt-4 section13_desc leading-relaxed text-justify">
                                {desc}
                            </p>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="md:col-span-1 lg:col-span-1 xl:col-span-1 ">
                        <VerticalSlider animationDuration={20} />
                    </div>

                    <div className="md:col-span-1 lg:col-span-1 xl:col-span-2">
                        <VerticalSlider animationDuration={100} />
                    </div>

                </div>
            </div>

        </>
    )
}

export default Constant