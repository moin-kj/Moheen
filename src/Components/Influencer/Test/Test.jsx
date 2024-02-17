import React, { useState, useEffect } from 'react';
import Screen1 from '../InfluencerProfile/Screen1';
import Screen2 from '../InfluencerProfile/Screen2';
import Screen3 from '../InfluencerProfile/Screen3';
import Screen4 from '../InfluencerProfile/Screen4';
import Screen5 from '../InfluencerProfile/Screen5';
import End from '../InfluencerProfile/End';
import Greeting from '../InfluencerProfile/Greeting';
import Start from '../InfluencerProfile/Start';

const Test = () => {
    const [isLoading, setIsLoading] = useState(true);

    const [currentScreen, setCurrentScreen] = useState(0);
    const [currentStep, setCurrentStep] = useState(1);

    const handleContinue = () => {
        setCurrentScreen(1); // Switch to the next screen
    };

    const handleNextStep = () => {
        setCurrentStep(currentStep + 1);
        setCurrentScreen(currentScreen + 1); // Move to the next screen
    };

    const handlePrevStep = () => {
        setCurrentStep(currentStep - 1);
        if (currentScreen > 0) {
            setCurrentScreen(currentScreen - 1); // Move to the previous screen
        }
    };

    useEffect(() => {
        // Simulate an asynchronous operation or any app setup logic
        setTimeout(() => {
            setIsLoading(false);
        }, 1000); // Adjust the time as needed
    }, []);



    return (
        <>

            {currentScreen === 0 && isLoading ? <Greeting /> : null}
            {currentScreen === 0 && !isLoading ? <Start handleContinue={handleContinue} /> : null}
            {currentScreen === 1 && <Screen1 currentStep={currentStep} handleNextStep={handleNextStep} handlePrevStep={handlePrevStep} />}
            {currentScreen === 2 && <Screen2 currentStep={currentStep} handleNextStep={handleNextStep} handlePrevStep={handlePrevStep} />}
            {currentScreen === 3 && <Screen3 currentStep={currentStep} handleNextStep={handleNextStep} handlePrevStep={handlePrevStep} />}
            {currentScreen === 4 && <Screen4 currentStep={currentStep} handleNextStep={handleNextStep} handlePrevStep={handlePrevStep} />}
            {currentScreen === 5 && <Screen5 currentStep={currentStep} handleNextStep={handleNextStep} handlePrevStep={handlePrevStep} />}
            {currentScreen === 6 && <End />}


            {/* <Start /> */}

        </>
    );
};

export default Test;
