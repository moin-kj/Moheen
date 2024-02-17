import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom"


const OTP = () => {
    const navigate = useNavigate();
    const [count, setCount] = useState(30); // Initial value
    const [otp, setOTP] = useState(['', '', '', '', '', '']);

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Decrement the count
            setCount(prevCount => {
                if (prevCount === 0) {
                    // Reset count to 30 when it reaches 0
                    return 30;
                } else {
                    // Decrement count by 1
                    return prevCount - 1;
                }
            });
        }, 1000);

        // Clear the interval when component unmounts
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures the effect runs only once



    const refs = [
        useRef(),
        useRef(),
        useRef(),
        useRef(),
        useRef(),
        useRef()
    ];

    const handleChange = (index, value) => {
        const newOTP = [...otp];
        newOTP[index] = value;
        setOTP(newOTP);

        // If the current input field has a value and it's not the last field, focus on the next field
        if (value !== '' && index < 5) {
            refs[index + 1].current.focus();
        }
    };

    const handleKeyUp = (event, index) => {
        // If the user deletes a digit and the current input field is empty, focus on the previous field
        if (event.key === 'Backspace' && index > 0 && otp[index] === '') {
            refs[index - 1].current.focus();
        }
    };


    return (
        <>
            <div className="min-h-screen flex justify-center items-center">
                <div className="bg-white sm:p-8 sml:p-12 rounded-2xl shadow-md w-[500px] ">
                    <img className="img-fluid w-full mx-auto" src="https://thumbs.dreamstime.com/b/otp-authentication-security-identity-security-illustration-concept-flat-illustration-isolated-white-background-250136154.jpg" alt="" />
                    <h2 className="text-center text-blue-600 mb-3 pt-2">OTP</h2>
                    <p className="text-center mt-4 login_Desc">
                        Your OTP was sent to you via email
                    </p>
                    <div className="otp-field mb-4">
                        {otp.map((value, index) => (
                            <input
                                key={index}
                                type="number"
                                value={value}
                                onChange={(e) => handleChange(index, e.target.value)}
                                onKeyUp={(e) => handleKeyUp(e, index)}
                                ref={refs[index]}
                                maxLength={1}
                            />
                        ))}
                    </div>
                    <p className="mt-4 xs:mx-3 sm:mx-1 sml:mx-5 login_Desc">
                        Remaining Time {count}
                    </p>

                    <div className="xs:text-center sml:text-end mb-3 pt-3">
                        <button className=" text-blue-700 font-semibold py-2 sm:px-1 sml:px-4 rounded-full w-1/4">
                            Resend
                        </button>
                        <button className="bg-blue-700 hover:bg-blue-500 text-white font-semibold xs:py-1 sml:py-2 sm:px-0 sml:px-4 rounded-full xs:w-2/5 sm:w-2/5 sml:w-1/3"
                            onClick={() => navigate("/login/forgetpassword/otp/update")}
                        >
                            Verify
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default OTP