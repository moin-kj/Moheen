import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import TextField from '@mui/material/TextField';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

const Guidelines = () => {
    const [expanded, setExpanded] = useState(false); // Initialize as collapsed
    const [guidelines, setGuidelines] = useState([]);
    const [newGuideline, setNewGuideline] = useState('');

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    const handleInputChange = (event) => {
        setNewGuideline(event.target.value);
    };

    const handleAddGuideline = (event) => {
        if (event.key === 'Enter' && newGuideline.trim() !== '') {
            setGuidelines([...guidelines, newGuideline]);
            setNewGuideline('');
        }
    };

    const AddGuideline = (event) => {
        setGuidelines([...guidelines, newGuideline]);
        setNewGuideline('');
    }

    return (
        <>
            <div className='border-b-2'>
                <div className='grid grid-cols-1 p-3'>
                    <div className="flex justify-between items-center cursor-pointer" onClick={toggleExpand} >
                        <h6 className="text-xl font-semibold text-gray-700">Collaboration Guidelines</h6>
                        <div className="cursor-pointer">
                            {expanded ? (
                                <ExpandLessIcon className="cursor-pointer" />
                            ) : (
                                <ExpandMoreIcon className="cursor-pointer" />
                            )}
                        </div>
                    </div>
                </div>
                {expanded && (
                    <div className='mb-0 p-3'>
                        <div className='grid grid-cols-2 mb-0'>
                            <div className='col-span-1'>
                                <TextField
                                    type="text"
                                    size="small"
                                    fullWidth
                                    placeholder="Type a guideline and press Enter"
                                    value={newGuideline}
                                    onChange={handleInputChange}
                                    onKeyDown={handleAddGuideline}
                                />
                            </div>
                            <div className="cursor-pointer mb-0 text-end mt-2 col-span-1">
                                <AddCircleRoundedIcon onClick={AddGuideline} className='text-blue-500' style={{ fontSize: "36px" }} />
                            </div>
                        </div>
                        <div className='mt-3'>
                            <div className='grid grid-col-1'>
                                {guidelines.map((guideline, index) => (
                                    <p key={index} className="text-md text-justify font-semibold pt-2 text-gray-600">{guideline}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Guidelines;
