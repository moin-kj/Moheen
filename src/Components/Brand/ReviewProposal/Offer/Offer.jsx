import React from 'react';

import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ViewOffer from '../../ViewOffer/ViewOffer';

const Offer = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const offerData = [
        {
            id: 0,
            Name: "Hassan",
            img: "https://source.unsplash.com/600x300/?student",
            subject: "Sponsored Content for Tech Product Launch",
            descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestias, quas iure vel labore corrupti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nihil officiis nesciunt vitae, incidunt rem nam sint necessitatibus non ut voluptatum impedit eaque maiores fugiat perspiciatis numquam vero. In, a?"
        },
        {
            id: 1,
            Name: "Awais",
            img: "https://source.unsplash.com/600x300/?student",
            subject: "Sponsored Content for Tech Product Launch",
            descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestias, quas iure vel labore corrupti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nihil officiis nesciunt vitae, incidunt rem nam sint necessitatibus non ut voluptatum impedit eaque maiores fugiat perspiciatis numquam vero. In, a?"
        },
        {
            id: 2,
            Name: "Hamza",
            img: "https://source.unsplash.com/600x300/?student",
            subject: "Sponsored Content for Tech Product Launch",
            descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestias, quas iure vel labore corrupti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nihil officiis nesciunt vitae, incidunt rem nam sint necessitatibus non ut voluptatum impedit eaque maiores fugiat perspiciatis numquam vero. In, a?"
        },
        {
            id: 3,
            Name: "Asad",
            img: "https://source.unsplash.com/600x300/?student",
            subject: "Sponsored Content for Tech Product Launch",
            descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestias, quas iure vel labore corrupti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nihil officiis nesciunt vitae, incidunt rem nam sint necessitatibus non ut voluptatum impedit eaque maiores fugiat perspiciatis numquam vero. In, a?"
        },
    ]










    return (
        <>

            {
                offerData.map((val, index) => {
                    return <div key={index} className="border-b-2 p-4 cursor-pointer hover:bg-gray-200 hover:rounded-2xl" onClick={handleShow}>
                        <div className="grid grid-cols-2 gap-1" >
                            <div className="grid grid-cols-5">
                                <div className="">
                                    <div className="relative w-28 h-28">
                                        <img
                                            className="w-28 h-28 rounded-full"
                                            src="https://source.unsplash.com/600x300/?student"
                                            alt="Profile"
                                        />
                                        {/* Online/Offline Dot */}
                                        <div className="absolute bottom-1 right-2 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
                                    </div>
                                </div>
                                <div className="col-span-4 mx-2 my-auto">
                                    <h6 className="text-md font-semibold text-gray-600 mb-1">{val.Name}</h6>
                                    <p className="text-xl font-semibold text-gray-900 mb-1">
                                        {val.subject}
                                    </p>
                                    <p className="text-md font-semibold text-gray-600 text-justify mb-1 line-clamp-1" >
                                        {val.descr}
                                    </p>
                                </div>
                            </div>
                            {/* Right side */}
                            <div className="grid grid-cols-1">
                                <div className="flex justify-end my-auto">
                                    <div className="">
                                        <button className="bg-blue-500 mx-3 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded-full">
                                            View Profile
                                        </button>
                                        {/* <button
                                            className="text-yellow-500 border font-semibold py-2 px-6 rounded-full"
                                        >
                                            Pending
                                        </button> */}
                                        <button
                                            className="bg-green-500 text-white border font-semibold py-2 px-6 rounded-full"
                                        >
                                            Accepted
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Second row for Price and Description */}
                        <div className="grid grid-cols-1 ">
                            <div className='ps-32 pt-1'>

                            </div>

                        </div>
                    </div>
                })
            }


            <Offcanvas show={show} onHide={handleClose} placement='end' style={{ width: '80%' }}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className='text-lg font-serif'>Offers sent</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                   <ViewOffer/>
                </Offcanvas.Body>
            </Offcanvas>

        </>


    );
}

export default Offer;
