import React from 'react';
import './Section17.css'

const Card = ({ id, step, head, descr }) => {
    const getTopClass = (id) => {
        switch (id) {
            case 0:
                return 'top20';
            case 1:
                return 'top30';
            case 2:
                return 'top40';
            case 3:
                return 'top50';
            default:
                return 'top20';
        }
    };



    return (
        <>
            <div className={`container4 text-lg-left mt-48  ${getTopClass(id)}`}>
                <h5 className='ms-1 mb-4'>{step}</h5>
                <h2 className="text-HeadingText font-titleFont sml:mt-5 md:mt-0 font-bold leading-tight">
                    {head}
                </h2>
                <p className="mt-4 section12_desc leading-relaxed text-justify">
                    {descr}
                </p>
            </div>
        </>
    )
}

export default Card