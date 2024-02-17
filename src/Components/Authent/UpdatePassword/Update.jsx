import * as React from 'react'
import TextField from '@mui/material/TextField';
import LockIcon from '@mui/icons-material/Lock';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from "react-router-dom"



const Update = () => {
    const navigate = useNavigate();
    const [showSecondScreen, setShowSecondScreen] = React.useState(false);


    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleContinue = () => {
        setShowSecondScreen(true);
    };

    return (
        <>
            <div className={`min-h-screen flex justify-center items-center ${showSecondScreen ? 'hidden' : ''}`} >
                <div className="bg-white sm:p-2 sml:p-12 rounded-2xl shadow-md w-[500px] ">
                    <img className="img-fluid w-1/2 mx-auto" src="https://www.shutterstock.com/image-vector/password-reset-icon-flat-vector-600nw-2018493584.jpg" alt="" />
                    <h2 className="text-center text-blue-600 mb-5 py-2">Update Password</h2>
                    <div className='mx-4 mb-4'>
                        <TextField
                            id="outlined-size-small3"
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
                        <br />
                        <br />

                        <TextField
                            id="outlined-size-small4"
                            size="small"
                            type={showPassword ? 'text' : 'password'}
                            fullWidth
                            placeholder='Confirm Password'
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
                    <div className="xs:text-center sml:text-end mb-3 pt-3">
                        <button className=" text-blue-700 font-semibold py-2 sm:px-1 sml:px-4 rounded-full w-1/4"
                            onClick={() => navigate("/login")}
                        >
                            Cancel
                        </button>
                        <button className="bg-blue-700 hover:bg-blue-500 text-white font-semibold xs:py-1 sml:py-2 sm:px-0 sml:px-4 rounded-full xs:w-2/5 sm:w-2/5 sml:w-1/3"
                            onClick={handleContinue}
                        >
                            Confirm
                        </button>
                    </div>

                </div>
            </div>



            <div className={`min-h-screen flex justify-center items-center ${showSecondScreen ? '' : 'hidden'}`} >
                <div className="bg-white sm:p-2 sml:p-12 rounded-2xl shadow-md w-[500px] ">
                    <img className="img-fluid w-1/3 mx-auto" src="https://www.pngall.com/wp-content/uploads/9/Green-Tick-Vector-PNG-Images.png" alt="" />
                    <h4 className="text-center text-blue-600 mb-2 py-2">Password Changed Successfully!</h4>
                    <p className="text-center mt-2 login_Desc">
                        Now you can login
                    </p>
                    <div className="text-center mb-3 pt-3">
                        <button className="bg-blue-700 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-full w-1/3"
                            onClick={() => navigate("/login")}
                        >
                            Login
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Update