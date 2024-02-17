import React from 'react'



const ViewCollaboration = () => {


    return (
        <>
            <div className='border-b-[1px]'>
                <div className='grid grid-cols-1 p-3'>
                    <h6 className="text-xl font-serif font-semibold text-gray-700">Collaboration Details</h6>
                </div>
                {/* Content Type */}
                <div className='grid grid-cols-8 p-3'>
                    <div>
                        <p className="text-md font-semibold text-gray-600">Content Type</p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-center bg-gray-200 p-1 rounded-lg text-gray-900">
                            Sponsored Content
                        </p>
                    </div>
                </div>
                {/* Content Format */}
                <div className='grid grid-cols-8 p-3 gap-3'>
                    <div>
                        <p className="text-md font-semibold text-gray-600">Content Format</p>
                    </div>
                    {/* Sponsored Content */}
                    <div>
                        <p className="text-sm font-semibold text-center bg-gray-200 p-1 rounded-lg text-gray-900">
                            Blog Articles
                        </p>

                    </div>
                    <div>
                        <p className="text-sm font-semibold text-center bg-gray-200 p-1 rounded-lg text-gray-900">
                            Blog Articles
                        </p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-center bg-gray-200 p-1 rounded-lg text-gray-900">
                            Blog Articles
                        </p>

                    </div>
                </div>
                {/* Content Style */}
                <div className='grid grid-cols-8 p-3 gap-3'>
                    <div>
                        <p className="text-md font-semibold text-gray-600">Content Style</p>
                    </div>
                    {/* Sponsored Content */}
                    <div>
                        <p className="text-sm font-semibold text-center bg-gray-200 p-1 rounded-lg text-gray-900">
                            Informative
                        </p>

                    </div>
                    <div>
                        <p className="text-sm font-semibold text-center bg-gray-200 p-1 rounded-lg text-gray-900">
                            Educational
                        </p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-center bg-gray-200 p-1 rounded-lg text-gray-900">
                            Educational
                        </p>

                    </div>
                </div>
                {/* Posting Frequency */}
                <div className='grid grid-cols-8 p-3 gap-3'>
                    <div>
                        <p className="text-md font-semibold text-gray-600">Posting Frequency</p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-center bg-gray-200 p-1 rounded-lg text-gray-900">
                            Once a Week
                        </p>

                    </div>
                    <div>
                        <p className="text-sm font-semibold text-center bg-gray-200 p-1 rounded-lg text-gray-900">
                            Once a Week
                        </p>

                    </div>
                    <div>
                        <p className="text-sm font-semibold text-center bg-gray-200 p-1 rounded-lg text-gray-900">
                            Once a Week
                        </p>

                    </div>
                </div>
                {/* Budget */}
                <div className='grid grid-cols-8 p-3 gap-3'>
                    <div>
                        <p className="text-md font-semibold text-gray-600">Budget</p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-center bg-gray-200 p-1 rounded-lg text-gray-900">
                            PKR: 20000
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewCollaboration