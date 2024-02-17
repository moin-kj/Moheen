import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router
import AOS from 'aos'; // Assuming you're using AOS for animations
import 'aos/dist/aos.css';







const Start = ({handleContinue}) => {

    useEffect(() => {
        AOS.init({
            duration: 1500,
            delay: 100,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    
    const handleCon = () => {
        handleContinue() // Switch to the next screen
    };


    return (
        <>
            <div className="min-h-screen flex justify-center items-center" data-aos="fade-down">
                <div className="bg-[white] sm:p-2 sml:p-12 rounded-2xl shadow-md w-[500px] ">
                    <img className="img-fluid mx-auto" src="https://cdn.dribbble.com/users/2520294/screenshots/7269423/alaminxyz.gif" alt="" data-aos="fade-up" />
                    <h4 className="text-center font-serif text-blue-600 mb-2 py-2 mt-3">Embark on your profile journey with us!</h4>
                    <div className="text-center mb-3 pt-3">
                        <button className="bg-blue-700 hover:bg-blue-500 text-white font-semibold py-2 px-6 rounded-full w-1/3"
                        onClick={handleCon}
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Start;
