import { React, useEffect } from 'react'
import "./Section1.css"
// import img1 from "../../assets/Images/Background3/slider-dec.png"
import img1 from "../../../assets/Images/Primary/bg7.svg"
// import img5 from "../../assets/Images/Primary/bg11.svg"
import AOS from 'aos';


const Section1 = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500, // Animation duration in milliseconds
            delay: 100, // Delay before the animation starts in milliseconds
            easing: 'ease-in-out', // Easing function for the animation (e.g., 'ease', 'ease-in', 'ease-out', 'ease-in-out')
            once: true, // Whether the animation should happen only once
        });
    }, []);
    return (
        <>
            <div className="relative bg-cover bg-center h-screen flex items-center">
                {/* Background Image */}
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        background: `url(${img1})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>
                <div
                    className="absolute inset-0 opacity-60"
                    style={{
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>
                <div className="relative z-10 text-HeadingText  text-center mx-auto">
                    <h1 className="text-4xl xs:text-[15px] sm:text-xl sml:text-2xl md:text-3xl mdl:text-3xl lg:text-4xl lgl:text-5xl font-bold font-titleFont leading-tight">
                        <span className="block leading-tight">Boost Your Reach</span>
                        <span className="block leading-tight">Real Success with Influencer Magic!</span>
                    </h1>
                    <h2 className="mt-4 text-black text-xl sm:text-2xl sml:text-xl md:text-xl mdl:text-2xl leading-tight">
                        <span className="block leading-tight xs:hidden sm:hidden sml:block">Step into a world where Brands shine bright with Influencers igniting</span>
                        <span className="block leading-tight xs:hidden sm:hidden sml:hidden md:block">a spark of creativity and impact!</span>
                    </h2>

                    <button data-aos="fade-up" className="mt-6 bg-buttoncolor hover:bg-buttonhovercolor text-white font-bold py-2 px-4 rounded-full">
                        Get Started
                    </button>
                </div>
            </div>



        </>
    )
}

export default Section1