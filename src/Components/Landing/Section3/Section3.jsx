import React from 'react'

import "./Section3.css"

const Section3 = () => {
    return (
        <>
            <div className="container-fluid mt-5  bg-[#253778]">
                <div className="container pt-5">
                    <div className="row ">
                        {/* Left Side */}
                        <div className="col-md-12 col-lg-7 d-flex flex-column justify-content-center">
                            <div className="text-lg-left">
                                <h1 className="section3_heading font-titleFont">
                                    Fuel success with BrandFluence Network—Ready for the boost?
                                </h1>
                                <p className="mt-4 section3_desc">
                                    Unlock your full potential now—click the button and gear up for growth with BrandFluence Network!
                                </p>
                            </div>
                            <button className="mt-6 bg-buttonhovercolor hover:bg-buttoncolor text-white font-bold py-2 px-4 rounded-full align-self-start">
                                Get Started
                            </button>
                        </div>

                        {/* Right Side */}
                        <div className="col-md-12 col-lg-5 d-flex align-items-center justify-content-center justify-content-lg-end py-3 ">
                            <img
                                className="img-fluid"
                                src="https://assets-global.website-files.com/64396970daa63b2dec8b44a8/6470265485072710b16def9b_cta%20image-p-1080.webp" // Replace with your image URL
                                alt="Right Side Image"
                            />
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Section3