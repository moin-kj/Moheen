import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import { GoLightBulb } from "react-icons/go";
import { HiDotsHorizontal } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";

const cardData = [
    {
        id: 1,
        title: 'Frontend development with React Expertise Needed for Existing',
        proposals: 5,
        status: 'Hiring',
        buttonText: 'Review Proposals',
        threeDotsButton: <HiDotsHorizontal className='text-[#0055a2]' />
    },
    {
        id: 2,
        title: 'Frontend development with React Expertise Needed for Existing',
        proposals: 10,
        status: 'Hiring',
        buttonText: 'Review Proposals',
        threeDotsButton: <HiDotsHorizontal className='text-[#0055a2]' />
    },
    {
        id: 3,
        title: 'Frontend development with React Expertise Needed for Existing',
        proposals: 220,
        status: 'Hiring',
        buttonText: 'Review Proposals',
        threeDotsButton: <HiDotsHorizontal className='text-[#0055a2]' />
    },
    {
        id: 4,
        title: 'Frontend development with React Expertise Needed for Existing',
        proposals: 3,
        status: 'Hiring',
        buttonText: 'Review Proposals',
        threeDotsButton: <HiDotsHorizontal className='text-[#0055a2]' />
    },
];

const BrandJobs = () => {
    const [cards, setCards] = useState(cardData);

    const handleClose = (id) => {
        const updatedCards = cards.filter(card => card.id !== id);
        setCards(updatedCards);
    };

    return (
        <div className='container pb-10'>
            <h4>
              Your Jobs
            </h4>
            <div className="flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-2">
                {cards.map((card) => (
                    <div key={card.id} className={`border-[#5e6d55] border-[1px] flex flex-col justify-between min-h-[350px] rounded-xl p-6 bg-white`}>
                        <div>
                            {card.title && (
                                <div className="text-black flex justify-between items-start">
                                    <div className="flex items-center">
                                        <p className='font-[500]'>{card.title}</p>
                                    </div>
                                </div>
                            )}
                            {card.proposals !== undefined && (
                                <div className="h-100 text-black pt-4 ">
                                    <h5>You have {card.proposals} new proposals</h5>
                                    <div className="flex justify-end">
                                        <div className='bg-[#0055a2] w-fit text-white rounded-md px-3 text-lg'>{card.status}</div>
                                    </div>
                                </div>
                            )}
                            {card.icon && (
                                <div className="text-black flex justify-between items-start">
                                    <div className="flex items-center">
                                        {card.icon}
                                        <h5 className='font-[500] text-base mb-0'>{card.tipTitle}</h5>
                                    </div>
                                    <button onClick={() => handleClose(card.id)}>
                                        <IoClose className='text-2xl' />
                                    </button>
                                </div>
                            )}
                            {card.tipContent && (
                                <div className=" h-100 text-black pt-4 ">
                                    <h4>{card.title}</h4>
                                    <h4>{card.largTitle}</h4>
                                    <p className='text-[#5e6d55]'>{card.tipContent}</p>
                                </div>
                            )}
                        </div>
                        <div className="text-black boxIcon">
                            {card.buttonText && (
                                <div className='flex items-center justify-center'>
                                    <a href='#' className='font-[500] bg-[#0055a2] rounded-full py-2 px-4 text-white no-underline'>
                                        {card.buttonText}
                                    </a>
                                </div>
                            )}
                            {card.linkText && (
                                <a href='#' className='font-[500] text-[#5e6d55] no-underline hover:underline'>
                                    {card.linkText}
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <button className="hidden xl:block nextButton rounded-full ml-4 p-[6px] h-[32px] w-[32px] border-2 border-[#0057a2]">
                    <FiArrowRight className='text-[#0057a2]' />
            </button>
        </div>
        </div>
    );
};

export default BrandJobs;
