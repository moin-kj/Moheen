import React, { useRef, useEffect } from 'react';
import './Section14.css'

const Card = ({ id, icon, head, descr }) => {
    console.log(id)
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
            <div className={`container2 mb-4 bg-[#FFFFFF] border border-black p-10 rounded-2xl ${getTopClass(id)}`}>
                <div>
                    <div className="mb-2">
                        <h1>{icon}</h1>
                    </div>
                    <h5 className="text-HeadingText font-titleFont font-bold leading-tight  py-3">{head}
                    </h5>
                    <p className="font-medium text-justify">{descr}</p>
                </div>
            </div>
        </>
    )
}

export default Card