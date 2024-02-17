import React from 'react'

const Profile = () => {
    return (
        <>

            <div className="grid grid-cols-2 gap-1 p-4 border-b-2">
                <div className="grid grid-cols-5">
                    <div className="">
                        <div className="relative w-28 h-28">
                            <img
                                className="w-28 h-28 rounded-full"
                                src="https://source.unsplash.com/600x300/?student"
                                alt="Profile"
                            />
                            {/* Online/Offline Dot */}
                            <div className="absolute bottom-1 right-2 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
                        </div>
                    </div>
                    <div className="col-span-3 mx-2 my-auto">
                        <h6 className="text-lg font-semibold text-gray-700 hover:text-blue-500 cursor-pointer mb-1">Hamna Arshad</h6>
                        <p className="text-xl text-gray-900 mb-1">
                            Fashion | Beauty | Design
                        </p>

                        <p className="text-md text-gray-500 mb-0">Karachi</p>
                    </div>
                </div>
            </div>
            


        </>
    )
}

export default Profile