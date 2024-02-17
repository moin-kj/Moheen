import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';

const stepsData = [
    {
        title: 'Required to Collaborate',
        description: 'Need to verify phone number',
        icon: <CheckCircleIcon className='text-green-400' />,
        iconColor: '#0057a2',
        altIcon: <PhoneEnabledIcon className='text-blue-500' style={{ fontSize: "30px" }} />,
    },
    {
        title: 'Required to Collaborate',
        description: 'Need to verify email address',
        icon: <CheckCircleIcon className='text-green-400' />,
        iconColor: '#0057a2',
        altIcon: <MarkEmailReadIcon className='text-blue-500' style={{ fontSize: "30px" }} />,
    },
];



const BrandSteps = () => {


    return (

        <>
            <div className='container mt-5 mb-4'>
                <div>
                    <p className='text-lg text-gray-700 font-semibold'>
                        Follow these steps to collaborate swiftly
                    </p>
                </div>
                <div className=' grid grid-cols-1 lg:grid-cols-3 gap-6'>
                    {stepsData.map((step, index) => (
                        <div key={index} className="cursor-pointer rounded-xl p-3 bg-white flex justify-between items-center relative">
                            <div className="flex items-center w-[90%]">
                                <div className="mr-4 mb-0">{step.icon}</div>
                                <div>
                                    <p className='font-semibold mb-2'>{step.title}</p>
                                    <div>
                                        <p className='text-lg font-mono font-semibold mb-0'>{step.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-4  mb-0 right-3">
                                {step.altIcon}
                            </div>
                        </div>
                    ))}
                </div>

            </div>



        </>

    )
}

export default BrandSteps;
