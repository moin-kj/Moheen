import React, { useState } from 'react';
import { BsArrowRight } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { FaBoxTissue } from "react-icons/fa6";
import ProfilePic from "../../../../assets/Images/Primary/img1.jpg"
import { FaStar } from "react-icons/fa";
import { BiDollarCircle } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { BiVideo } from "react-icons/bi";
import { FiArrowRight } from "react-icons/fi";

const cardData = [
    {
        id: 0,
        name: "Sumit Y.",
        city: "Pakistan",
        tags: ["javascript", "frontend development", "php", "my sql", "html", "css"],
        title: "Web Scrapping | React | Node | Laravel | Python | Django | API",
        profilePic: ProfilePic,
        rating: 4.66,
        price: "$12.00/hr"
    },
    {
        id: 1,
        name: "Sumit Y.",
        city: "Pakistan",
        tags: ["javascript", "frontend development", "php", "my sql", "html", "css"],
        title: "Web Scrapping | React | Node | Laravel | Python | Django | API",
        profilePic: ProfilePic,
        rating: 2.66,
        price: "$10.00/hr"
    },
    {
        id: 2,
        name: "Sumit Y.",
        city: "Pakistan",
        tags: ["javascript", "frontend development", "php", "my sql", "html", "css"],
        title: "Web Scrapping | React | Node | Laravel | Python | Django | API",
        profilePic: ProfilePic,
        rating: 5,
        price: "$5.00/hr"
    },

   
];

const BrandDiscover = () => {
    const [showGuidedTour, setShowGuidedTour] = useState(true);

    return (
        <div className='container py-10'>
            <div className="flex items-center">
                <h4>Discover Influencer</h4>
                <a href='#'>
                    <BsArrowRight className='ml-8 text-3xl' />
                </a>
            </div>
            <div className="flex items-center">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {showGuidedTour && (
                        <div className="flex flex-col justify-between min-h-[400px] rounded-xl p-6 bg-[#0055a2]">
                            <div className="">
                                <div className="text-white flex justify-between items-start">
                                    <h5 className='font-[400]'>Guided tour</h5>
                                    <button onClick={() => setShowGuidedTour(false)}>
                                        <IoClose className='text-2xl' />
                                    </button>
                                </div>
                                <div className="h-100 text-white pt-4 ">
                                    <h4>Check Out top rated talent for your open job posts</h4>
                                </div>
                            </div>
                            <div className="text-white boxIcon flex justify-end">
                                <FaBoxTissue className='text-7xl' />
                            </div>
                        </div>
                    )}
                    {cardData.map((card) => (
                        <div key={card.id} className="flex flex-col justify-between min-h-[400px] rounded-xl p-6 border-1 shadow-md bg-white">
                            <div className="">
                                <div className="flex justify-between">
                                    <div className="profileTitle flex">
                                        <div className='w-[50px] h-[50px]'>
                                            <img className='w-100 h-auto rounded-full' src={card.profilePic} alt="profile pic" />
                                        </div>
                                        <div className='px-3'>
                                            <p className=' mb-0 font-bold text-lg'>{card.name}</p>
                                            <p className=' mb-0 font-[600]'>{card.city}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className=" pt-3">
                                    <h6 className='text-md'>{card.title}</h6>
                                    <div className=" flex justify-between items-center py-2">
                                        <div className=" flex items-center text-md font-[600] text-[#8a8e87]">
                                            <p className='mb-0 mr-2'>PKR</p>
                                            <p className='mb-0'>{card.price}</p>
                                        </div>
                                        <div className=" flex items-center text-md font-[600] text-[#8a8e87]">
                                            <FaStar className='text-[#e7c000]' />
                                            <p className='mb-0 ml-2'>{card.rating}</p>
                                        </div>
                                    </div>
                                    <div className=" pt-2 flex flex-wrap gap-2">
                                        {card.tags.slice(0, 4).map((tag, index) => (
                                            <div key={index} className=" rounded-md bg-[#e3e3e3] text-[#8a8e87] w-fit px-2 ">
                                                <p className='mb-0 text-black'>{tag}</p>
                                            </div>
                                        ))}
                                        {card.tags.length > 4 && (
                                            <div className=" rounded-md bg-[#e3e3e3] text-[#8a8e87] w-fit px-2 ">
                                                <p className='mb-0 text-black'>+{card.tags.length - 4}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <button className='border-2 border-[#0057a2] hover:bg-[#0057a2] hover:text-white transition-all duration-500 ease-in-out text-[#0057a2] w-full py-2 rounded-full font-bold'>
                                View Profile
                            </button>
                        </div>
                    ))}
                </div>
                <button className="hidden xl:block nextButton rounded-full ml-4 p-[6px] h-[32px] w-[32px] border-2 border-[#0057a2]">
                    <FiArrowRight className='text-[#0057a2]' />
                </button>
            </div>
        </div>
    )
}

export default BrandDiscover;
