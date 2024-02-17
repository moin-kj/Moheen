import * as React from 'react';
import { useState } from 'react';
import './Login.css'
import TextField from '@mui/material/TextField';
import LockIcon from '@mui/icons-material/Lock';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom"
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';

const Login = () => {
    const [showSecondScreen, setShowSecondScreen] = useState(false);
    

    const handleContinue = () => {
        setShowSecondScreen(true);
    };

   

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    return (
        <>
            <div className={`min-h-screen flex justify-center items-center ${showSecondScreen ? 'hidden' : ''}`} >
                <div className="bg-white sm:p-3 sml:p-12 rounded-2xl shadow-md w-[500px] ">
                    <h2 className="text-center text-blue-600 mb-5 sm:py-2 sml:py-1">Login</h2>
                    <div className='mx-4 mb-4 '>
                        <TextField
                            id="outlined-size-small"
                            size="small"
                            fullWidth
                            placeholder='Email'
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                    <div className="mx-4 mb-3">
                        <button className="bg-blue-700 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-full w-full"
                            onClick={handleContinue}
                        >

                            Continue with Email
                        </button>
                    </div>
                    <div className="flex items-center justify-center">
                        <hr className="w-1/3 border-gray-400 border-1 mr-2" />
                        <span className="text-gray-500">OR</span>
                        <hr className="w-1/3 border-gray-400 border-1 ml-2" />
                    </div>
                    <p className="text-center pt-2">Don't have an account?</p>
                    <div className="mx-4 sm:mb-5 sml:mb-0">
                        <button
                            onClick={() => navigate("/signup")}
                            className="hover:bg-gray-100 border text-blue-700 font-semibold py-2 px-4 rounded-full w-full">
                            Sign Up
                        </button>
                    </div>

                </div>
            </div>

            <div className={`min-h-screen flex justify-center items-center ${showSecondScreen ? '' : 'hidden'}`}>
                <div className="bg-white sm:p-1 sml:p-12 rounded-2xl shadow-md w-[500px] ">
                    <h2 className="text-center text-blue-600 mb-3 sm:py-4 sml:py-1">Welcome</h2>
                    <p className="text-center font-semibold text-black mb-5">muazshahzad667@gmail.com</p>
                    <div className='mx-4 mb-4'>
                        <TextField
                            id="outlined-size-small1"
                            size="small"
                            type={showPassword ? 'text' : 'password'}
                            fullWidth
                            placeholder='Password'
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon style={{ fontSize: "20px" }} />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />


                    </div>

                    <div className="flex justify-between items-center mb-4 mx-3">
                        <div>
                            <Checkbox id="rememberMe" style={{ marginTop: '-5px' }} />
                            <label className='text-semibold ' htmlFor="rememberMe">Remember me</label>
                        </div>
                        <Link to="/login/forgetpassword" className="text-blue-700 no-underline hover:underline cursor-pointer">
                            Forgot Password?
                        </Link>
                        {/* <a href="#" className="text-blue-500 no-underline">Forgot password?</a> */}
                    </div>
                    <div className="text-center mb-3 pt-3">
                        <button className="bg-blue-700 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-full w-1/2">
                            Login
                        </button>
                    </div>
                    <div className="flex items-center justify-center">
                        <hr className="w-1/3 border-gray-400 border-1 mr-2" />
                        <span className="text-gray-500">OR</span>
                        <hr className="w-1/3 border-gray-400 border-1 ml-2" />
                    </div>

                    <div className="text-center mb-3 pt-3">
                        <button className="mx-auto text-center pt-2 text-blue-700 font-semibold"
                            onClick={() =>
                                setShowSecondScreen(false)
                            }
                        >
                            Not You?
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login