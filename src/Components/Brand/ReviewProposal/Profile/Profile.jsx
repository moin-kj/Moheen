import React from 'react'

const Profile = ({id,Name, expert, rate, city, success, img }) => {
    return (
        <>
            <div key={id} id={id} className="grid grid-cols-2 gap-1 p-4 border-b-2 cursor-pointer hover:bg-gray-200 hover:rounded-2xl">
                <div className="grid grid-cols-5">
                    <div className="">
                        <div className="relative w-28 h-28">
                            <img
                                className="w-28 h-28 rounded-full"
                                src={img}
                                alt="Profile"
                            />
                            {/* Online/Offline Dot */}
                            <div className="absolute bottom-1 right-2 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
                        </div>
                    </div>
                    <div className="col-span-3 mx-2 my-auto">
                        <h6 className="text-xl font-semibold text-gray-700 mb-1">{Name}</h6>
                        <p className="text-lg text-gray-900 mb-1">
                            {expert.join(" | ")}
                        </p>

                        <p className="text-md text-gray-500 mb-0">{city}</p>
                    </div>
                </div>

                {/* Right side */}
                <div className="flex justify-end my-auto">
                    <div className="">
                        <button className="bg-blue-800 mx-3 hover:bg-blue-500 text-white font-semibold py-2 px-6 rounded-full">
                            View Profile
                        </button>
                        <button className="bg-green-700 hover:bg-green-500 text-white font-semibold py-2 px-6 rounded-full">
                            Send Offer
                        </button>
                    </div>
                </div>

                {/* Second grid below the image */}
                <div className="grid grid-cols-5 gap-2">
                    <div className="col-span-1">
                        <p className="text-lg text-center mt-3 font-semibold text-gray-600">{rate}/day</p>
                    </div>
                    <div className="col-span-3">
                        <p className="text-lg mt-3 font-semibold text-gray-600">{success} Collaboration Completed</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile