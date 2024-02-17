import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useState } from 'react';
const Collaboration = () => {

    const [isEditingBudget, setIsEditingBudget] = useState(false);
    const [budget, setBudget] = useState(20000); // Initial budget value
    const [expanded, setExpanded] = useState(false);

    const handleToggleExpand = () => {
        setExpanded(!expanded);
    };

    const handleEditBudget = () => {
        setIsEditingBudget(true);
    };

    const handleInputBlur = () => {
        let updatedBudget = parseInt(budget);
        if (isNaN(updatedBudget) || updatedBudget < 1000) {
            // If the input is not a valid number or less than 1000, set it to 1000
            setBudget(1000);
        } else if (updatedBudget > 1000000) {
            // If the input is greater than 1000000, set it to 1000000
            setBudget(1000000);
        }
        // You can add further actions if needed
    };

    const handleBudgetChange = (e) => {
        setBudget(e.target.value);
    };

    const handleSaveBudget = () => {
        setIsEditingBudget(false);
        // You can perform any additional actions here, like sending the updated budget to the server
    };

    return (
        <>
            <div className='border-b-2'>
                <div className='grid grid-cols-1 p-3'>
                    <div className="flex justify-between items-center cursor-pointer" onClick={handleToggleExpand}>
                        <h6 className="text-xl font-semibold text-gray-700">Collaboration Details</h6>
                        {expanded ? (
                            <ExpandLessIcon onClick={handleToggleExpand} className="cursor-pointer" />
                        ) : (
                            <ExpandMoreIcon onClick={handleToggleExpand} className="cursor-pointer" />
                        )}
                    </div>
                </div>

                {expanded && (
                    <div>
                        {/* Content Type */}
                        <div className='grid grid-cols-8 p-3'>
                            <div>
                                <p className="text-md font-semibold text-gray-600">Content Type</p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-center bg-gray-200 p-1 rounded-lg text-gray-900">
                                    Sponsored Content
                                </p>
                            </div>
                        </div>
                        {/* Content Format */}
                        <div className='grid grid-cols-8 p-3 gap-3'>
                            <div>
                                <p className="text-md font-semibold text-gray-600">Content Format</p>
                            </div>
                            {/* Sponsored Content */}
                            <div>
                                <p className="text-sm font-semibold text-center bg-gray-200 p-1 rounded-lg text-gray-900">
                                    Blog Articles
                                </p>

                            </div>
                            <div>
                                <p className="text-sm font-semibold text-center bg-gray-200 p-1 rounded-lg text-gray-900">
                                    Blog Articles
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-center bg-gray-200 p-1 rounded-lg text-gray-900">
                                    Blog Articles
                                </p>

                            </div>
                        </div>
                        {/* Content Style */}
                        <div className='grid grid-cols-8 p-3 gap-3'>
                            <div>
                                <p className="text-md font-semibold text-gray-600">Content Style</p>
                            </div>
                            {/* Sponsored Content */}
                            <div>
                                <p className="text-sm font-semibold text-center bg-gray-200 p-1 rounded-lg text-gray-900">
                                    Informative
                                </p>

                            </div>
                            <div>
                                <p className="text-sm font-semibold text-center bg-gray-200 p-1 rounded-lg text-gray-900">
                                    Educational
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-center bg-gray-200 p-1 rounded-lg text-gray-900">
                                    Educational
                                </p>

                            </div>
                        </div>
                        {/* Posting Frequency */}
                        <div className='grid grid-cols-8 p-3 gap-3'>
                            <div>
                                <p className="text-md font-semibold text-gray-600">Posting Frequency</p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-center bg-gray-200 p-1 rounded-lg text-gray-900">
                                    Once a Week
                                </p>

                            </div>
                            <div>
                                <p className="text-sm font-semibold text-center bg-gray-200 p-1 rounded-lg text-gray-900">
                                    Once a Week
                                </p>

                            </div>
                            <div>
                                <p className="text-sm font-semibold text-center bg-gray-200 p-1 rounded-lg text-gray-900">
                                    Once a Week
                                </p>

                            </div>
                        </div>
                        {/* Budget */}
                        <div className='grid grid-cols-8 p-3 gap-3'>
                            <div>
                                <p className="text-md font-semibold text-gray-600">Budget</p>
                            </div>
                            <div>
                                {isEditingBudget ? (
                                    <TextField
                                        type="number"
                                        size="small"
                                        value={budget}
                                        onChange={handleBudgetChange}
                                        onBlur={handleInputBlur}
                                        inputProps={{
                                            min: 0,
                                            max: 1000000,
                                            step: 500
                                        }}
                                        InputProps={{
                                            startAdornment: (
                                                <Typography variant="body2" style={{ marginRight: '8px' }}>PKR</Typography>
                                            ),
                                        }}
                                    />
                                ) : (
                                    <p className="text-sm font-semibold text-center bg-gray-200 p-1 rounded-lg text-gray-900">
                                        PKR: {budget}
                                    </p>
                                )}
                            </div>
                            <div className=''>
                                {isEditingBudget ? (
                                    <button className="text-sm bg-blue-800 hover:bg-blue-500 text-white mt-2 font-semibold py-1 px-6 rounded-full"
                                        onClick={handleSaveBudget}>
                                        Save
                                    </button>
                                ) : (
                                    <EditIcon className='text-gray-600 cursor-pointer' onClick={handleEditBudget} />
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>







        </>
    )
}

export default Collaboration