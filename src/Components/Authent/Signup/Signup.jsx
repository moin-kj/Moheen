import * as React from 'react';
import './Signup.css'
import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Checkbox from '@mui/material/Checkbox';


const Signup = () => {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState("brand");
    const [buttonText, setButtonText] = useState('Create Account');
    const [currentScreen, setCurrentScreen] = useState('first');


    const handleContinue = () => {
        console.log("Button Text", buttonText)
        if (buttonText == 'Join as a Brand') {
            setCurrentScreen('second');
        } else if (buttonText == 'Join as an Influencer') {
            setCurrentScreen('third');
        }
        else {
            setCurrentScreen('first');
        }
    };





    const profileselect = [
        {
            id: 0,
            title: "Brand, starting a new project.",
            secondtitle: "Brand",
            img: "https://static.vecteezy.com/system/resources/previews/012/001/587/non_2x/business-brand-concept-building-brand-marketing-strategy-brand-name-brand-planning-brand-reputation-vector.jpg"
        },
        {
            id: 1,
            title: "Influencer, Seeking Opportunities",
            secondtitle: "Influencer",
            img: "https://akm-img-a-in.tosshub.com/indiatoday/styles/medium_crop_simple/public/2022-12/influencer-gd3c218110_1920.jpg?VersionId=ob48UkfUT5UCXC.QV42F278656FEqBb1&size=750:*"
        },
    ]

    const handleCardSelection = (id) => {
        id === 0 ? setSelectedOption("brand") : setSelectedOption("influencer")
        setButtonText(selectedOption === "brand" ? 'Join as a Brand' : 'Join as an Influencer')
    };


    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <>
            {currentScreen === 'first' && (
                <div className="min-h-screen flex justify-center items-center">
                    <div className="bg-white xs:p-3 sm:p-5 sml:p-0 md:p-5 mdl:p-10 rounded-2xl shadow-md w-[700px]">
                        <h2 className="text-center text-blue-600 sml:mt-5 md:mt-0">Join as a Brand or Influencer</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-2 sml:p-2 md:p-0 sml:w-2/3 sml:mx-auto md:mx-0 md:w-full">
                            {profileselect.map((val, key) => (
                                <label key={key} className="bg-white shadow-sm rounded-lg cursor-pointer border sm:mt-5 md:mt-0 "
                                    htmlFor={val.id}
                                    onClick={() => handleCardSelection(val.id)}>
                                    <div className="overflow-hidden">
                                        <img className="img-fluid rounded-lg md:h-48 w-full object-cover" src={val.img} alt="Image" />
                                    </div>
                                    <div className="p-2">
                                        <p className="text-[18px] font-semibold">{val.title}</p>
                                        <div className="text-end">
                                            <input type="radio" name="option" id={val.id} className="form-radio h-5 w-5 text-indigo-600" />
                                            <label htmlFor={val.id} className="ml-2 text-gray-700"></label>
                                        </div>
                                    </div>
                                </label>
                            ))}
                        </div>

                        <div className="text-center mt-3">
                            <button className={`bg-blue-700 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-full sm:w-2/3 sml:w-1/2 ${buttonText === 'Create Account' ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={buttonText === 'Create Account'}
                                onClick={handleContinue}

                            >
                                {buttonText}

                            </button>
                        </div>
                        <div className="text-center">
                            <p className="login_Desc pt-4">
                                Already have an account? <span>
                                    <Link to="/login" className="text-blue-700 no-underline hover:underline cursor-pointer">
                                        Login
                                    </Link>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            )}



            {/*  */}
            {currentScreen === 'second' && (
                <div className="min-h-screen flex justify-center items-center " >
                    <div className="bg-white xs:p-5 sml:p-12 rounded-2xl shadow-md w-[600px] ">
                        <h2 className="text-center text-blue-600 mb-4 py-1">Join to connect with influencers.</h2>
                        <hr />
                        <div className="mb-4 grid xs:grid-cols-1 sml:grid-cols-2 gap-3 mt-4">
                            <TextField
                                id="outlined-size-small_6"
                                size="small"
                                placeholder="First Name"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-size-small_7"
                                size="small"
                                placeholder="Last Name"
                                variant="outlined"
                            />
                        </div>
                        <div className="mb-4">
                            <TextField
                                id="outlined-size-small_8"
                                size="small"
                                fullWidth
                                placeholder="Work Email"
                                variant="outlined"
                            />
                        </div>
                        <div className="mb-4">
                            <TextField
                                id="outlined-size-small_9"
                                size="small"
                                fullWidth
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password (more than 8 characters)"
                                variant="outlined"
                                InputProps={{
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
                        <div className="mb-4">
                            <p className="w-full p-2 border border-gray-300 rounded disabled">Pakistan</p>
                        </div>

                        <div className="flex items-center">
                            <Checkbox style={{ marginLeft: "-10px" }} id="rememberMe" />
                            <label className='text-[12px] xs:hidden sml:block' htmlFor="rememberMe">
                                Yes, I understand and agree to the BrandFluence Network Terms of Service, including the User Agreement and Privacy Policy.
                            </label>
                            <label className='text-[12px] xs:block sml:hidden' htmlFor="rememberMe">
                                Yes, I understand and agree to the Terms of Service & Privacy Policy.
                            </label>
                        </div>
                        <div className="mx-4 mb-3 mt-4">
                            <button className="bg-blue-700 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-full w-full"
                                onClick={() => navigate("/signup/brandprofile")}
                            >
                                Create my Account
                            </button>
                        </div>


                        <div className="text-center">
                            <p className="login_Desc pt-2">
                                Already have an account? <span>
                                    <Link to="/login" className="text-blue-700 no-underline hover:underline cursor-pointer">
                                        Login
                                    </Link>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            )}


            {/*  */}
            {currentScreen === 'third' && (
                <div className="min-h-screen flex justify-center items-center " >
                    <div className="bg-white xs:p-5 sml:p-12 rounded-2xl shadow-md w-[600px] ">
                        <h2 className="text-center text-blue-600 mb-4 py-1">Signup to Discover Exciting Work.</h2>
                        <hr />
                        <div className="mb-4 grid xs:grid-cols-1 sml:grid-cols-2 gap-3 mt-4">
                            <TextField
                                id="outlined-size-small_6"
                                size="small"
                                placeholder="First Name"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-size-small_7"
                                size="small"
                                placeholder="Last Name"
                                variant="outlined"
                            />
                        </div>
                        <div className="mb-4">
                            <TextField
                                id="outlined-size-small_8"
                                size="small"
                                fullWidth
                                placeholder="Work Email"
                                variant="outlined"
                            />
                        </div>
                        <div className="mb-4">
                            <TextField
                                id="outlined-size-small_9"
                                size="small"
                                fullWidth
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password (more than 8 characters)"
                                variant="outlined"
                                InputProps={{
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
                        <div className="mb-4">
                            <p className="w-full p-2 border border-gray-300 rounded disabled">Pakistan</p>
                        </div>

                        <div className="flex items-center">
                            <Checkbox style={{ marginLeft: "-10px" }} id="rememberMe" />
                            <label className='text-[12px] xs:hidden sml:block' htmlFor="rememberMe">
                                Yes, I understand and agree to the BrandFluence Network Terms of Service, including the User Agreement and Privacy Policy.
                            </label>
                            <label className='text-[12px] xs:block sml:hidden' htmlFor="rememberMe">
                                Yes, I understand and agree to the Terms of Service & Privacy Policy.
                            </label>
                        </div>
                        <div className="mx-4 mb-3 mt-4">
                            <button className="bg-blue-700 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-full w-full"
                                onClick={() => navigate("/signup/influencerprofile")}
                            >
                                Create my Account
                            </button>
                        </div>


                        <div className="text-center">
                            <p className="login_Desc pt-2">
                                Already have an account? <span>
                                    <Link to="/login" className="text-blue-700 no-underline hover:underline cursor-pointer">
                                        Login
                                    </Link>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            )}



        </>
    )
}

export default Signup