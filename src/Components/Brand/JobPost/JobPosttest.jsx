import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const JobPosttest = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [completedSteps, setCompletedSteps] = useState([]);
    const [confirmed, setConfirmed] = useState(false);

    const steps = [
        'Job Details',
        'Target Audience',
        'Collaboration Preferences',
        'Upload Creative Assets',
        'Specify Collaboration Timeline',
        'Review and Confirm',
        'Publish'
    ];

    const handleNext = () => {
        if (currentStep < steps.length) {
            if (currentStep === 6 && !confirmed) {
                setConfirmed(true); // Show the Confirm button on Step 6
            } else {
                setCurrentStep(currentStep + 1);
                setCompletedSteps([...completedSteps, currentStep]);
            }
        }
    };



    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
            setCompletedSteps(completedSteps.filter(step => step !== currentStep - 1));
        }
    };

    const handleConfirm = () => {
        setConfirmed(true);
    };

    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <div className="flex justify-between items-center mx-8 my-4">
                {steps.map((step, index) => (
                    <div key={index} className="flex items-center">
                        <div
                            className={`w-8 h-8 flex items-center justify-center rounded-full ${completedSteps.includes(index + 1) ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-500'}`}
                        >
                            {completedSteps.includes(index + 1) ? (
                                <FaCheck className="w-6 h-6" />
                            ) : (
                                index + 1
                            )}
                        </div>
                        <div className="ml-2">
                            <span>{step}</span>
                        </div>
                        {index < steps.length - 1 && <div className={`ml-2 h-px bg-${currentStep > index + 1 ? 'blue' : 'gray'}-500 w-6`} />}
                    </div>
                ))}

            </div>
            <div className="flex-1 flex justify-center items-center">
                <div className="w-full max-w-3xl">
                    <div className="w-full h-2 bg-gray-300 relative">
                        <div
                            className={`absolute top-0 left-0 h-2 ${currentStep === steps.length ? 'bg-green-500' : 'bg-blue-500'}`}
                            style={{ width: `${(currentStep - 1) / (steps.length - 1) * 100}%` }}
                        ></div>
                    </div>
                    <div className="mt-4 p-8 bg-white rounded shadow-md">
                        <h2 className="text-xl font-bold mb-4">{steps[currentStep - 1]}</h2>
                    </div>
                </div>
            </div>
            <div className="mt-4 mx-8 mb-4">
                {currentStep !== 1 && (
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded mr-4"
                        onClick={handleBack}
                    >
                        Back
                    </button>
                )}
                {currentStep !== steps.length ? (
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={handleNext}
                    >
                        Save
                    </button>
                ) : (
                    !confirmed ? (
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                            onClick={handleConfirm}
                        >
                            Confirm
                        </button>
                    ) : (
                        <button
                            className="bg-green-500 text-white px-4 py-2 rounded"
                            onClick={() => console.log("Publish")} // Add your publish logic here
                        >
                            Publish
                        </button>
                    )
                )}

            </div>
        </div>
    );
};

export default JobPosttest;
