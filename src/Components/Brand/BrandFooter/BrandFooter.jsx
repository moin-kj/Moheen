import React from 'react'
import { FaFacebookF , FaInstagram,FaTwitter   } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";

const BrandFooter = () => {
    return (
        <div className='brandfooter-main bg-[#0055a2] py-10'>
            <div className="container">
                <div className="grid grid-col-1 md:grid-cols-4">
                    <ul className='text-white pl-0 md:pl-8'>
                        <li className='mb-2'><a href="#" className='text-white no-underline hover:underline '>About Us</a></li>
                        <li className='mb-2'><a href="#" className='text-white no-underline hover:underline '>Feedback</a></li>
                        <li className='mb-2'><a href="#" className='text-white no-underline hover:underline '>Community</a></li>
                    </ul>
                    <ul className='text-white pl-0 md:pl-8'>
                        <li className='mb-2'><a href="#" className='text-white no-underline hover:underline '>Trust, Safety & Security</a></li>
                        <li className='mb-2'><a href="#" className='text-white no-underline hover:underline '>Help & Support</a></li>
                        <li className='mb-2'><a href="#" className='text-white no-underline hover:underline '>Our Foundation</a></li>
                    </ul>
                    <ul className='text-white pl-0 md:pl-8'>
                        <li className='mb-2'><a href="#" className='text-white no-underline hover:underline '>Terms of Service</a></li>
                        <li className='mb-2'><a href="#" className='text-white no-underline hover:underline '>Privacy Policy</a></li>
                        <li className='mb-2'><a href="#" className='text-white no-underline hover:underline '>CA Notice at Collection</a></li>
                        <li className='mb-2'><a href="#" className='text-white no-underline hover:underline '>Cookie Settings</a></li>
                    </ul>
                    <ul className='text-white pl-0 md:pl-8'>
                        <li className='mb-2'><a href="#" className='text-white no-underline hover:underline '>Accessibility</a></li>
                        <li className='mb-2'><a href="#" className='text-white no-underline hover:underline '>Desktop App</a></li>
                        <li className='mb-2'><a href="#" className='text-white no-underline hover:underline '>Cookie Policy</a></li>
                        <li className='mb-2'><a href="#" className='text-white no-underline hover:underline '>Enterprise Solutions</a></li>
                    </ul>
                </div>
                <div className="footer-social py-4">
                    <p className='text-center text-white text-xl'>Follow Us</p>
                    <ul className='flex flex-wrap gap-2 justify-center pl-0 md:pl-8'>
                        <li className='h-10 w-10 group transition duration-150 ease-out hover:ease-in rounded-full border-2 flex items-center justify-center'>
                            <a href="#" className='w-full h-full flex items-center justify-center text-white transition duration-150 ease-out hover:ease-in group-hover:scale-[1.5]'> <FaFacebookF /></a>
                        </li>
                        <li className='h-10 w-10 group transition duration-150 ease-out hover:ease-in rounded-full border-2 flex items-center justify-center'>
                            <a href="#" className='w-full h-full flex items-center justify-center text-white transition duration-150 ease-out hover:ease-in group-hover:scale-[1.5]'> <FaInstagram /></a>
                        </li>
                        <li className='h-10 w-10 group transition duration-150 ease-out hover:ease-in rounded-full border-2 flex items-center justify-center'>
                            
                            <a href="#" className='w-full h-full flex items-center justify-center text-white transition duration-150 ease-out hover:ease-in group-hover:scale-[1.5]'> <FaTwitter /></a>
                        </li>
                        <li className='h-10 w-10 group transition duration-150 ease-out hover:ease-in rounded-full border-2 flex items-center justify-center'>
                            
                            <a href="#" className='w-full h-full flex items-center justify-center text-white transition duration-150 ease-out hover:ease-in group-hover:scale-[1.5]'> <MdEmail /></a>
                        </li>
                        <li className='h-10 w-10 group transition duration-150 ease-out hover:ease-in rounded-full border-2 flex items-center justify-center'>
                            
                            <a href="#" className='w-full h-full flex items-center justify-center text-white transition duration-150 ease-out hover:ease-in group-hover:scale-[1.5]'> <IoLogoWhatsapp /></a>
                        </li>
                        <li className='h-10 w-10 group transition duration-150 ease-out hover:ease-in rounded-full border-2 flex items-center justify-center'>
                            
                            <a href="#" className='w-full h-full flex items-center justify-center text-white transition duration-150 ease-out hover:ease-in group-hover:scale-[1.5]'> <FaLinkedinIn  /></a>
                        </li>
                    </ul>
                </div>
                <div className="copyright border-t-[2px] border-t-white pt-4">
                    <p className='mb-0 text-center text-white text-[12px]'>© 2015 - 2024 Company® Global Inc.</p>
                </div>
            </div>
        </div>
    )
}

export default BrandFooter