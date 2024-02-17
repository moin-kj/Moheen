import React from 'react'
import logothailand from "../../assets/Images/Primary/logothailand.png"
import logo_2 from "../../assets/Images/Primary/logo_2.png";

const Footer = () => {
    const marketLogos = [
        { logo: logothailand, name: 'Singapore' },
        { logo: logothailand, name: 'Taiwan' },
        { logo: logothailand, name: 'Indonesia' },
        { logo: logothailand, name: 'Malaysia' },
        { logo: logothailand, name: 'Philippines' },
        { logo: logothailand, name: 'Hong Kong' },
        { logo: logothailand, name: 'Vietnam' },
        { logo: logothailand, name: 'Thailand' },
        // Add more markets with their respective logos
    ];
    return (

        <>
            <hr className="mt-4 border-t border-gray-600" />

            <footer className="text-black mt-12">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1  sml:grid-cols-2 md:grid-cols-4 mdl:grid-cols-4 lg:grid-cols-4 gap-2">
                        {/* First Column */}
                        <div className="col-span-1 xs:mx-16 md:mx-0">
                            {/* Logo */}
                            <img
                                src={logothailand}
                                alt="Logo"
                                className="w-26 h-16 mb-4"
                            />
                            {/* Additional content for the first column if needed */}
                        </div>

                        {/* Second Column */}
                        <div className="col-span-1 xs:mx-16 md:mx-0">
                            <ul className="pl-5">
                                <li className="font-bold mb-2 font-titleFont">General</li>
                                <li className='py-2 text-black font-semibold'>Home</li>
                                <li className='py-2 text-black font-semibold'>About Us</li>
                                <li className='py-2 text-black font-semibold'>Contact Us</li>
                                <li className='py-2 text-black font-semibold'>FAQs</li>
                                <li className='py-2 text-black font-semibold'>Check Out</li>
                            </ul>
                        </div>

                        {/* Third Column */}
                        <div className="col-span-1 xs:mx-16 md:mx-0">
                            <ul className="pl-5">
                                <li className="font-bold mb-2 font-titleFont">Explore</li>
                                <li className='py-2 text-black font-semibold'>Home</li>
                                <li className='py-2 text-black font-semibold'>Become Partiposters</li>
                                <li className='py-2 text-black font-semibold'>About Us</li>
                                <li className='py-2 text-black font-semibold'>Contact Us</li>
                                <li className='py-2 text-black font-semibold'>Careers</li>
                                <li className='py-2 text-black font-semibold'>Request a Demo</li>
                            </ul>
                        </div>

                        {/* Fourth Column */}
                        <div className="col-span-1 xs:mx-16 md:mx-0">
                            <ul className="pl-5">
                                <li className="font-bold mb-2 font-titleFont">Resource & Guide</li>
                                <li className='py-2 text-black font-semibold'>Brand Stories</li>
                                <li className='py-2 text-black font-semibold'>Articles</li>
                                <li className='py-2 text-black font-semibold'>Platform Guides</li>
                            </ul>
                        </div>

                    </div>

                    {/* Horizontal Line */}
                    <hr className="mt-4 border-t border-gray-600" />

                    {/* Copyright and Links */}
                    <div className="flex flex-col lgl:flex-row justify-between items-center mt-4">
                        <p className="text-black-400 mb-4 md:mb-0">©2023 BrandFluenceNetwork. All rights reserved.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-black-400 hover:text-blue">Privacy Policy</a>
                            <a href="#" className="text-black-400 hover:text-blue">Terms of Service</a>
                            <a href="#" className="text-black-400 hover:text-blue">Cookies Settings</a>
                        </div>
                    </div>

                </div>
            </footer>

        </>


    );
}

export default Footer