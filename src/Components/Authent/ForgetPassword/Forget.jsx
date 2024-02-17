import React from 'react'
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom"

import '../Login/Login.css'

const Forget = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="min-h-screen flex justify-center items-center">
                <div className="bg-white sm:p-3 sml:p-12 rounded-2xl shadow-md w-[500px] ">
                    <img className="img-fluid w-1/3 mx-auto" src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1123.jpg" alt="" />
                    <h2 className="text-center text-blue-600 mb-3 py-1">Forgot Password?</h2>
                    <p className="text-center mt-4 xs:px-4 sm:px-2 sml:px-0  sml:p-0 login_Desc">
                        Enter your email address & select Send Email.</p>
                    <div className='mx-4 mb-4'>
                        <TextField
                            id="outlined-size-small"
                            size="small"
                            fullWidth
                            placeholder='Email'
                            variant="outlined"
                        />
                    </div>
                    <div className="xs:text-center sml:text-end mb-3 pt-3">
                        <button className=" text-blue-700 font-semibold py-2 sm:px-1 sml:px-4 rounded-full w-1/4"
                            onClick={() => navigate("/login")}
                        >
                            Cancel
                        </button>
                        <button className="bg-blue-700 hover:bg-blue-500 text-white font-semibold xs:py-1 sml:py-2 sm:px-0 sml:px-4 rounded-full xs:w-2/5 sm:w-2/4 sml:w-1/3"
                            onClick={() => navigate("/login/forgetpassword/otp")}
                        >
                            Send Email
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Forget