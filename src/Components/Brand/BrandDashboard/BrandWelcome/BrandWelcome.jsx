import React, { useState, useEffect } from 'react';
import { FaPlus } from "react-icons/fa6";
import AOS from 'aos';

const BrandWelcome = () => {
    const [showSecondSection, setShowSecondSection] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: 1500,
            delay: 400,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowSecondSection(false);
        }, 5000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            <div className={` ${showSecondSection ? 'fade-up' : 'opacity-0 transition-opacity duration-1000 hidden delay-500 opacity-0-delay'}`} data-aos={showSecondSection ? "fade-down" : ""}>
                <div className='bg-blue-700 container mt-5 p-5 border rounded-xl shadow-sm'>
                    <div>
                        <h2 className='font-semibold text-white font-serif'>Welcome X Sports</h2>
                    </div>
                    <div>
                        <p className='text-lg font-mono text-white pt-3 font-semibold text-justify'>
                            Get ready to elevate your game and inspire greatness with Tech Solution, explore our dynamic platform designed to connect you with top-tier athletes, Influencer, and sports enthusiasts worldwide. Whether you are seeking to sponsor athletes, promote your latest sports gear, or engage with your audience in exciting new ways, Tech Solution has you covered.
                        </p>
                    </div>
                </div>
            </div>


            {!showSecondSection && (
                <div className={`fade-up transition-opacity duration-1000`} data-aos="fade-up">
                    <div className='container flex flex-col md:flex-row justify-between mt-5 p-2'>
                        <div>
                            <h2 className='font-semibold select-none text-gray-800 font-serif'>Your Brandspace</h2>
                        </div>
                        <div>
                            <button data-aos="fade-up" className="bg-buttoncolor select-none hover:bg-buttonhovercolor text-white font-semibold py-2 px-4 lg:px-4 rounded-full  flex items-center">
                                Get Started
                                <FaPlus className='pl-2 text-white text-lg lg:text-2xl' />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default BrandWelcome;