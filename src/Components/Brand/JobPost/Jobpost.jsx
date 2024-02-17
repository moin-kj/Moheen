import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';
import CheckIcon from '@mui/icons-material/Check';
import PublishIcon from '@mui/icons-material/Publish';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import Step7 from './Step7';
import { DataProvider } from './DataContext';
import RocketIcon from '@mui/icons-material/Rocket';


const Jobpost = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [completedSteps, setCompletedSteps] = useState([]);
    const [confirmed, setConfirmed] = useState(false);

    const steps = [
        'Details',
        'Audience',
        'Preferences',
        'Assets',
        'Timeline',
        'Review',
        'Publish'
    ];

    const handleNext = () => {
        if (currentStep < steps.length) {
            setCurrentStep(currentStep + 1);
            setCompletedSteps([...completedSteps, currentStep]);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
            setCompletedSteps(completedSteps.filter(step => step !== currentStep - 1));
            setConfirmed(false);
        }
    };

    const handleConfirm = () => {
        setConfirmed(true);
        handleNext(); // Move to the next step after confirmation
    };

    const renderStepComponent = () => {
        switch (currentStep) {
            case 1:
                return <Step1 />
            case 2:
                return <Step2 />;
            case 3:
                return <Step3 />;
            case 4:
                return <Step4 />;
            case 5:
                return <Step5 />;
            case 6:
                return <Step6 />;
            case 7:
                return <Step7 />;
            default:
                return null;
        }
    };

    return (
        <>

            <div className="container-fluid">
                <div className="mx-10">
                    <div className=' flex flex-wrap justify-between mx-auto my-4'>
                        {steps.map((step, index) => (
                            <div key={index} className="flex items-center">
                                <div
                                    className={`w-6 h-6 flex items-center justify-center rounded-full ${completedSteps.includes(index + 1) || currentStep >= index + 1 ? 'bg-green-500 text-white font-bold' : 'bg-gray-300 text-black'}`}
                                >
                                    {completedSteps.includes(index + 1) ? (
                                        <FaCheck className="w-4 h-4" />
                                    ) : (
                                        <span className="w-4 h-4 flex justify-center items-center">{index + 1}</span>
                                    )}
                                </div>
                                <div className="ml-2 mt-2">
                                    <h5 className="leading-tight tracking-tighter">{step}</h5>
                                </div>
                                {index < steps.length - 1 && <div className={`ml-2 mt-1 h-px bg-${currentStep > index + 1 ? 'blue' : 'gray'}-500 w-20`} />}
                            </div>
                        ))}
                    </div>

                    <DataProvider>
                        {renderStepComponent()}
                    </DataProvider>

                    <div className='container'>
                        <div className="mx-16 flex justify-between mb-3">
                            {currentStep !== 1 && (
                                <Button
                                    className="rounded-lg"
                                    onClick={handleBack}
                                    variant="contained"
                                    startIcon={<ArrowBackIcon />}
                                >
                                    Back
                                </Button>
                            )}

                            {currentStep !== steps.length ? (
                                confirmed ? (
                                    <Button
                                        className="rounded-lg"
                                        onClick={handleNext}
                                        variant="contained"
                                        startIcon={<SaveIcon />}
                                    >
                                        Save
                                    </Button>
                                ) : (
                                    currentStep === 1 ? (
                                        <>
                                            <div style={{ flex: 1 }}></div>
                                            <Button
                                                className="rounded-lg"
                                                onClick={handleNext}
                                                variant="contained"
                                                endIcon={<SaveIcon />}
                                            >
                                                Save
                                            </Button>
                                        </>
                                    ) : (
                                        currentStep === 6 ? (
                                            <Button
                                                className="rounded-lg"
                                                onClick={handleConfirm}
                                                variant="contained"
                                                endIcon={<CheckIcon />}
                                            >
                                                Confirm
                                            </Button>
                                        ) : (
                                            <Button
                                                className="rounded-lg"
                                                onClick={handleNext}
                                                variant="contained"
                                                endIcon={<SaveIcon />}
                                            >
                                                Save
                                            </Button>
                                        )
                                    )
                                )
                            ) : (
                                <Button
                                    className="rounded-lg"
                                    onClick={() => console.log("Publish")}
                                    variant="contained"
                                    endIcon={<RocketIcon style={{ fontSize: "30px" }} />}
                                >
                                    Publish Post
                                </Button>
                            )}
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
};

export default Jobpost;
