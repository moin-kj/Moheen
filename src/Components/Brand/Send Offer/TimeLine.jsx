import React from 'react'
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const TimeLine = () => {
    const [expanded, setExpanded] = useState(false); // Initialize as expanded


    const toggleExpand = () => {
        setExpanded(!expanded);
    };


    return (
        <>
            <div className='border-b-2'>
                <div className='grid grid-cols-1 p-3'>
                    <div className="flex justify-between items-center cursor-pointer" onClick={toggleExpand}>
                        <h6 className="text-xl font-semibold text-gray-700">Collaboration Timeline</h6>
                        {expanded ? (
                            <ExpandLessIcon  className="cursor-pointer" />
                        ) : (
                            <ExpandMoreIcon onClick={toggleExpand} className="cursor-pointer" />
                        )}
                    </div>
                </div>
                {expanded && (
                    <div className='p-3'>
                        <div className='grid grid-cols-8 pt-2'>
                            <div>
                                <p className="text-md font-semibold text-gray-600">Start Date</p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-center bg-gray-200 p-1 rounded-lg text-gray-900">
                                    12/2/2023
                                </p>
                            </div>
                        </div>
                        <div className='grid grid-cols-8 pt-2'>
                            <div>
                                <p className="text-md font-semibold text-gray-600">End Date</p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-center bg-gray-200 p-1 rounded-lg text-gray-900">
                                    12/2/2023
                                </p>
                            </div>
                        </div>
                        <div className='grid grid-cols-8 pt-2'>
                            <div>
                                <p className="text-md font-semibold text-gray-600">Duration</p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-center bg-gray-200 p-1 rounded-lg text-gray-900">
                                    1 month 2 week 2 days
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>


        </>
    )
}

export default TimeLine