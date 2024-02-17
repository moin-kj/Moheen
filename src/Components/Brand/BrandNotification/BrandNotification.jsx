import React from 'react'
import BrandFooter from "../BrandFooter/BrandFooter"
import BrandNavbar from "../BrandNavbar/BrandNavbar"
import { FaRegCircleUser } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const MostRecent = [
    {
        id: 1,
        text: "A recent sign-in to your Upwork account (7bgfdaf332) from an unknown device or browser",
        time: "9:00 PM",
    },
    {
        id: 2,
        text: "A recent sign-in to your Upwork account (7bgfdaf332) from an unknown device or browser",
        time: "10:00 PM",
    }
]
const Earlier = [
    {
        id: 1,
        text: "A recent sign-in to your Upwork account (7bgfdaf332) from an unknown device or browser",
        time: "9:00 PM",
    },
]

const BrandDashboard = () => {
    return (
        <>
            <BrandNavbar />
            <div className="container py-10">
                <h1>Notifications</h1>
                <div className="pt-10">
                    <h3>Most Recent</h3>
                    {MostRecent.map((data) => (
                        <div key={data.id} className="flex items-start lg:items-center justify-between cursor-pointer py-4 border-b-2 px-3 lg:px-6">
                            <div className="flex items-start lg:items-center">
                                <button>
                                    <FaRegCircleUser className='text-2xl lg:text-3xl' />
                                </button>
                                <div className="pl-6">
                                    <p className='mb-0 text-lg font-[500]'>{data.text}</p>
                                    <p className='mb-0 font-[500] text-[#cacabe]'>{data.time}</p>
                                </div>
                            </div>
                            <button className='md:pl-10'>
                                <IoClose className='text-2xl lg:text-3xl' />
                            </button>
                        </div>
                    ))}

                </div>

                <div className="pt-12 lg:pt-20">
                    <h3>Earlier</h3>
                    {Earlier.map((data) => (
                        <div key={data.id} className="flex items-start lg:items-center justify-between cursor-pointer py-4 border-b-2 px-3 lg:px-6">
                            <div className="flex items-start lg:items-center">
                                <button>
                                    <FaRegCircleUser className='text-2xl lg:text-3xl' />
                                </button>
                                <div className="pl-6">
                                    <p className='mb-0 text-lg font-[500]'>{data.text}</p>
                                    <p className='mb-0 font-[500] text-[#cacabe]'>{data.time}</p>
                                </div>
                            </div>
                            <button className='md:pl-10'>
                                <IoClose className='text-2xl lg:text-3xl' />
                            </button>
                        </div>
                    ))}

                </div>
            </div>
            <BrandFooter />
        </>
    )
}

export default BrandDashboard;