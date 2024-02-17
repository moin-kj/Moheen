import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const Subject = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [descripCount, setDescripCount] = useState(0);
    const [charCount, setCharCount] = useState(0);
    const [expanded, setExpanded] = useState(false); // Initialize as expanded

    const handleTitleChange = (e) => {
        const inputTitle = e.target.value;
        if (inputTitle.length <= 80) {
            setTitle(inputTitle);
            setCharCount(inputTitle.length);
        }
    };

    const handleDescriptionChange = (event) => {
        const inputText = event.target.value;
        setDescription(inputText);
        setDescripCount(inputText.length);
    };

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 p-3 border-b-2">
                {/* Subject */}
                <div className="flex items-center justify-between cursor-pointer" onClick={toggleExpand}>
                    <div >
                        <label htmlFor="title" className="text-xl font-semibold text-gray-700">Overview</label>
                    </div>
                    <div>
                        {expanded ? (
                            <ExpandLessIcon onClick={toggleExpand} className="cursor-pointer" />
                        ) : (
                            <ExpandMoreIcon onClick={toggleExpand} className="cursor-pointer" />
                        )}
                    </div>
                </div>
                {expanded && (
                    <div className='mt-4'>
                        <label htmlFor="title" className="text-lg font-semibold text-gray-700">Subject</label>
                        {/* Text field for the title */}
                        <div className='mt-3'>
                            <TextField
                                fullWidth
                                id="title"
                                value={title}
                                onChange={handleTitleChange}
                                placeholder="Subject here"
                                InputProps={{
                                    style: {
                                        color: charCount >= 80 ? 'red' : 'black', // Change text color to red when charCount is 80
                                    },
                                    classes: {
                                        root: 'focus:outline-none focus:border-blue-500',
                                        input: 'text-black placeholder-gray-400',
                                    },
                                }}
                            />
                            {/* Display character count and max count indicator below the text field */}
                            <div className="flex justify-end mt-2">
                                {/* Max count indicator */}
                                <span className={charCount >= 80 ? 'text-red-500' : (charCount >= 79 ? 'text-gray-500' : 'text-black')}>{charCount}/80 max</span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Message */}
                {expanded && (
                    <div className="md:col-span-1">
                        <label htmlFor="description" className="text-lg font-semibold text-gray-700">Message</label>
                        <div className='mt-3' style={{ overflowY: 'auto' }}> {/* Add overflowY style for vertical scrolling */}
                            <TextField
                                multiline
                                rows={3} // You can adjust the number of rows as needed
                                value={description}
                                onChange={handleDescriptionChange}
                                variant="outlined"
                                fullWidth
                                inputProps={{ maxLength: 2000 }} // Set max length to 2000 characters
                            />
                            <div className="flex justify-end mt-2">
                                {/* Max count indicator */}
                                <span className={descripCount >= 2000 ? 'text-red-500' : 'text-black'}>{descripCount}/2000 max</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Subject;
