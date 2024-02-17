import React from 'react'

const ViewOfferProfile = () => {
    return (
        <>
            <div className='col-span-1 my-auto'>
                <div className="p-3">
                    <div className="grid grid-cols-4">
                        <div className="">
                            <div className="relative w-24 h-24 ">
                                <img
                                    className="w-24 h-24 rounded-full"
                                    src="https://source.unsplash.com/600x300/?student"
                                    alt="Profile"
                                />
                                <div className="absolute bottom-1 right-2 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
                            </div>
                        </div>
                        <div className="col-span-3 mx-3 my-auto">
                            <h6 className="text-lg font-semibold text-gray-700 hover:text-blue-500 cursor-pointer mb-1">Hamna Arshad</h6>
                            <p className="text-xl text-gray-900 mb-1">
                                Fashion | Beauty | Design
                            </p>

                            <p className="text-md text-gray-500 mb-0">Karachi</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewOfferProfile