import React from 'react'
import './Section11.css'
const Card = ({id,head,main_head,descr,img}) => {
    return (
        <>
            <div className="container container1 pt-5">
                <div className="row ">
                    {/* Left Side */}
                    <h5>{head}</h5>
                    <div className="col-md-12 col-lg-7 d-flex flex-column justify-content-center">
                        <div className="text-lg-left">
                            <h1 className="section11_heading text-HeadingText font-titleFont sml:mt-5 md:mt-0 font-bold leading-tight">
                                {main_head}
                            </h1>
                            <p className="mt-4 section11_desc">
                                {descr}
                            </p>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="col-md-12 col-lg-5 d-flex align-items-center justify-content-center justify-content-lg-end py-3 ">
                        <img
                            className="img-fluid"
                            src={img}
                            alt="Right Side Image"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card