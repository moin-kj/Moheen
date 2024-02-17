import React from 'react'
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const Work = () => {
    const [expanded, setExpanded] = useState(false); // Initialize as expanded


    const toggleExpand = () => {
        setExpanded(!expanded);
    };


    return (
        <>
            <div className='grid grid-cols-1 p-3 border-b-2 mb-5'>
                <div className="flex justify-between items-center cursor-pointer" onClick={toggleExpand} >
                    <h6 className="text-xl font-semibold text-gray-700">Work Description</h6>
                    {expanded ? (
                        <ExpandLessIcon className="cursor-pointer" />
                    ) : (
                        <ExpandMoreIcon onClick={toggleExpand} className="cursor-pointer" />
                    )}
                </div>
                {expanded && (
                    <div>
                        <div className='pt-3'>
                            <p className="text-lg font-semibold text-gray-800 mb-1">Title</p>
                            <p className="text-md font-semibold text-gray-600 mb-0">Frontend Developer with React Expertise</p>
                        </div>
                        <div className='pt-4'>
                            <p className="text-lg font-semibold text-gray-800 mb-1">Description</p>
                            <p className="text-md text-justify font-semibold text-gray-600 mb-0">I hope this message finds you well! I came across your profile on Brandfluence Network and was impressed by your engaging content and strong connection with your audience. I believe your expertise in the tech niche aligns perfectly with our upcoming product launch.</p>
                        </div>
                    </div>
                )}

            </div>


        </>
    )
}

export default Work