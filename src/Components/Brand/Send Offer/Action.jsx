import React from 'react'
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


const Action = () => {

    const [expanded, setExpanded] = useState(false); // Initialize as expanded


    const toggleExpand = () => {
        setExpanded(!expanded);
    };


    return (
        <>
            <div className='border-b-2'>
                <div className='grid grid-cols-1 p-3'>
                    <div className="flex justify-between items-center cursor-pointer" onClick={toggleExpand}>
                        <h6 className="text-xl font-semibold text-gray-700">Action Required</h6>
                        {expanded ? (
                            <ExpandLessIcon className="cursor-pointer" />
                        ) : (
                            <ExpandMoreIcon onClick={toggleExpand} className="cursor-pointer" />
                        )}
                    </div>
                </div>
                {expanded && (
                    <p className="text-lg text-justify font-semibold p-3  text-gray-600">
                        If you're interested in collaborating on this exciting project, please review the details outlined above and let me know if you have any questions or suggestions. Your feedback and insights are valuable to us, and we're committed to ensuring a mutually beneficial partnership.
                        <br />
                        <br />
                        I'm looking forward to the opportunity to work together and create compelling content that resonates with your audience while achieving our marketing objectives.
                    </p>
                )}
            </div>


        </>
    )
}

export default Action