import React from 'react'
import "./Section12.css"

const Section12 = () => {
    return (
        <>
            <div className="container-fluid mt-5 ">
                <div className="container pt-5">
                    <div className="row ">
                        {/* Left Side */}
                        <div className="col-md-12 col-lg-7 d-flex flex-column justify-content-center">
                            <div className="text-lg-left">
                                <h1 className="text-HeadingText font-titleFont sml:mt-5 md:mt-0 font-bold leading-tight">
                                Tailored Marketing Solutions
                                </h1>
                                <p className="mt-4 section12_desc leading-relaxed text-justify">
                                    Are you tired of generic, one-size-fits-all marketing approaches that fail to resonate with your
                                    target audience? At Brandfluence Network, we offer Customized Marketing Strategies
                                    tailored to your brand's unique identity. Step away from cookie-cutter solutions and elevate your influencer marketing with strategies that truly connect and drive impactful results for your business.
                                </p>
                                <button className="mt-6 bg-buttonhovercolor hover:bg-buttoncolor text-white font-bold py-2 px-4 rounded-full align-self-start">
                                    Get Started
                                </button>
                            </div>
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

export default Section12