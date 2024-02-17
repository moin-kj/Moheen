import React from 'react'
import logo1 from '../../../assets/Images/Primary/logo1.png';
import logo2 from '../../../assets/Images/Primary/logo2.png';

const Section9 = () => {
    return (
        <>
            <div className="container mx-auto p-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-2/5 px-4 mb-4 text-center md:text-left md:col-span-2">
                        <h2 className="mb-4 font-bold text-2xl md:text-4xl">All Features</h2>
                    </div>

                    <div className="w-full md:w-1/5 px-4 mb-4 flex flex-col items-center">
                        <img src={logo1} alt="Logo 1" className="w-12 h-12 mb-2" loading="lazy" />
                        <h3 className="text-lg font-bold">Stramlined Communication</h3>
                        <p className="text-center">Description for Logo 1.</p>
                    </div>

                    <div className="w-full md:w-1/5 px-4 mb-4 flex flex-col items-center mt-12 md:mt-0">
                        <img src={logo2} alt="Logo 2" className="w-12 h-12 mb-2" loading="lazy" />
                        <h3 className="text-lg font-bold">Payment Management</h3>
                        <p className="text-center">Description for Logo 2.</p>
                    </div>
                </div>

                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-2/5 px-4 mb-4"></div>

                    <div className="w-full md:w-1/5 px-4 mb-4 flex flex-col items-center">
                        <img src={logo1} alt="Logo 1" className="w-12 h-12 mb-2" loading="lazy" />
                        <h3 className="text-lg font-bold">Support and Training</h3>
                        <p className="text-center">Description for Logo 1.</p>
                    </div>

                    <div className="w-full md:w-1/5 px-4 mb-4 flex flex-col items-center mt-12 md:mt-0">
                        <img src={logo2} alt="Logo 2" className="w-12 h-12 mb-2" loading="lazy" />
                        <h3 className="text-lg font-bold">All in One Platform</h3>
                        <p className="text-center">Description for Logo 2.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section9