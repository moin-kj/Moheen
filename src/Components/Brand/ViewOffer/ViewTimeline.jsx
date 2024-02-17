import React from 'react'

const ViewTimeline = () => {

    return (
        <>
            <div className='border-b-[1px]'>

                <div className='grid grid-cols-1 p-3 mb-0'>
                    <h6 className="text-xl font-serif font-semibold text-gray-700">Collaboration Timeline</h6>
                </div>
                <div className='ps-3'>
                    <div className='grid grid-cols-8'>
                        <div>
                            <p className="text-md font-semibold text-gray-600">Start Date</p>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-center bg-gray-200 p-1 rounded-lg text-gray-900">
                                12/2/2023
                            </p>
                        </div>
                    </div>
                    <div className='grid grid-cols-8'>
                        <div>
                            <p className="text-md font-semibold text-gray-600">End Date</p>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-center bg-gray-200 p-1 rounded-lg text-gray-900">
                                12/2/2023
                            </p>
                        </div>
                    </div>
                    <div className='grid grid-cols-8  '>
                        <div>
                            <p className="text-md font-semibold text-gray-600">Duration</p>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-center bg-gray-200 p-1 rounded-lg text-gray-900">
                                1 month 2 week 2 days
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewTimeline