import React from 'react'
import AOS from 'aos'; // Assuming you're using AOS for animations
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const End = () => {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 1500,
            delay: 100,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);
    return (
        <>
            <div className="min-h-screen flex justify-center items-center opacity-transition" data-aos="fade-down">
                <div className="bg-[white] sm:p-2 sml:p-12 rounded-2xl shadow-md w-[500px] ">
                    <img className="img-fluid mx-auto" src="https://media.licdn.com/dms/image/C4D12AQEvxqZqshW0xQ/article-cover_image-shrink_600_2000/0/1578929263153?e=2147483647&v=beta&t=GXWKo4eBJBPhjeWfgRjgkABtFIR5ugTBQXi_NEgGOJE" alt="" data-aos="fade-up"/>
                    <h4 className="text-center text-blue-600 mb-2 py-2 mt-4">Profile complete. Ready to go!</h4>
                    <div className="text-center mb-3 pt-3">
                        <button className="bg-blue-700 hover:bg-blue-500 text-white font-semibold py-2 px-6 rounded-full w-1/3"
                            onClick={() => navigate("/")}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default End