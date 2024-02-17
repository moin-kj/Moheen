import React from 'react'

const View = () => {
    return (
        <>
            <div className="py-1">
                <div className="border-l-4">
                    {/* Step 1 */}
                    {/* Title */}
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                        {/* Left Side */}
                        <div className="">
                            <div>
                                <p className="text-lg p-3 font-semibold text-gray-400">Posted yesterday</p>
                            </div>
                            <hr />
                        </div>
                    </div>
                    {/* Description */}
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                        {/* Left Side */}
                        <div>
                            <div>
                                <p className="text-lg text-justify p-3 text-gray-600">
                                    {/* {data.description} */}
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem repellendus excepturi repudiandae vel deleniti at fuga magnam! Qui provident deserunt nostrum, beatae, blanditiis ad alias explicabo iste animi aliquid molestiae.
                                </p>
                                <hr />
                            </div>

                        </div>
                    </div>
                    {/* Budget , Category , Preferences */}
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mt-2">
                        <div className="p-3">
                            <div>
                                <h6 className="text-xl font-semibold text-gray-700">Preferences</h6>
                            </div>
                            <div>
                                <p className="text-sm mt-3 font-semibold  text-center bg-gray-200 p-1 rounded-lg text-gray-900">
                                    {/* {data.selectedPreferences ? data.selectedPreferences : 'No Preferences'} */}
                                    Sponsored Content
                                </p>
                            </div>
                        </div>
                        <div className="p-3">
                            <div>
                                <h6 className="text-xl font-semibold text-gray-700">Category</h6>
                            </div>
                            <div>
                                <p className="text-sm mt-3 font-semibold  text-center bg-gray-200 p-1 rounded-lg text-gray-900">
                                    {/* {data.category ? data.category : 'No category'} */}
                                    Art & Creativity
                                </p>
                            </div>
                        </div>
                        <div className="p-3">
                            <div>
                                <h6 className="text-xl font-semibold text-gray-700">Budget</h6>
                            </div>
                            <div>
                                <p className="text-sm mt-3 font-semibold  text-center bg-gray-200 p-1 rounded-lg text-gray-900">
                                    {/* PKR: {data.budget} */}
                                    PKR: 1000
                                </p>
                            </div>
                            
                        </div>
                       

                    </div>
                    <hr />
                    {/* Objectives */}
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-2">
                        <div className="p-3">
                            <div>
                                <h6 className="text-xl font-semibold text-gray-700">Objectives</h6>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-5 gap-3 mt-3 text-center'>
                                {/* {
                                    data.selectedObjectives.map((objective, index) => (
                                        <p key={index} className="text-sm font-semibold bg-gray-200 p-2 rounded-lg text-gray-900">{objective}</p>
                                    ))
                                } */}
                                <p className="text-sm font-semibold bg-gray-200 p-2 rounded-lg text-gray-900">Build Brand Loyalty</p>
                                <p className="text-sm font-semibold bg-gray-200 p-2 rounded-lg text-gray-900">Build Brand Loyalty</p>
                                <p className="text-sm font-semibold bg-gray-200 p-2 rounded-lg text-gray-900">Build Brand Loyalty</p>
                                <p className="text-sm font-semibold bg-gray-200 p-2 rounded-lg text-gray-900">Build Brand Loyalty</p>

                            </div>
                        </div>
                    </div>
                    <hr />
                    {/* Format */}
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-2">
                        <div className="p-3">
                            <div>
                                <h6 className="text-xl font-semibold text-gray-700">Content Format</h6>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-6 gap-3 mt-3 text-center'>
                                {/* {
                                    data.selectedFormats.map((Format, index) => (
                                        <p className="text-sm font-semibold bg-gray-200 p-2 rounded-lg text-gray-900">{Format}</p>
                                    ))
                                } */}
                                <p className="text-sm font-semibold bg-gray-200 p-2 rounded-lg text-gray-900">Blog Articles</p>
                                <p className="text-sm font-semibold bg-gray-200 p-2 rounded-lg text-gray-900">Blog Articles</p>
                                <p className="text-sm font-semibold bg-gray-200 p-2 rounded-lg text-gray-900">Blog Articles</p>
                                <p className="text-sm font-semibold bg-gray-200 p-2 rounded-lg text-gray-900">Blog Articles</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    {/* Style */}
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-2">
                        <div className="p-3">
                            <div>
                                <h6 className="text-xl font-semibold text-gray-700">Content Style</h6>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-8 gap-3 mt-3 text-center'>
                                {/* {
                                    data.selectedStyles.map((style, index) => (
                                        <p className="text-sm font-semibold bg-gray-200 p-2 rounded-lg text-gray-900">{style}</p>
                                    ))
                                } */}
                                <p className="text-sm font-semibold bg-gray-200 p-2 rounded-lg text-gray-900">Engaging</p>
                                <p className="text-sm font-semibold bg-gray-200 p-2 rounded-lg text-gray-900">Engaging</p>
                                <p className="text-sm font-semibold bg-gray-200 p-2 rounded-lg text-gray-900">Engaging</p>
                                <p className="text-sm font-semibold bg-gray-200 p-2 rounded-lg text-gray-900">Engaging</p>
                                <p className="text-sm font-semibold bg-gray-200 p-2 rounded-lg text-gray-900">Engaging</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    {/* Timeline */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-2">
                        <div className="p-3">
                            <div>
                                <p className="text-lg font-semibold  text-gray-700">Start Date</p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-center bg-gray-200 p-1 rounded-lg text-gray-900">6/12/2001</p>
                            </div>
                        </div>
                        <div className="p-3">
                            <div>
                                <p className="text-lg font-semibold   text-gray-700">End Date</p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-center bg-gray-200 p-1 rounded-lg text-gray-900">6/12/2001</p>
                            </div>
                        </div>
                        <div className="p-3">
                            <div>
                                <p className="text-lg font-semibold   text-gray-700">Duration</p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-center bg-gray-200 p-1 rounded-lg text-gray-900">1 month 1 week 10 days</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    {/* Frequency */}
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-2">
                        <div className="p-3">
                            <div>
                                <h6 className="text-xl font-semibold text-gray-700">Posting Frequency</h6>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-6 gap-3 mt-3 text-center'>
                                {/* {
                                    data.selectedFrequency.map((frequency, index) => (
                                        <p key={index} className="text-sm font-semibold bg-gray-200 p-2 rounded-lg text-gray-900">{frequency}</p>
                                    ))
                                } */}
                                <p className="text-sm font-semibold bg-gray-200 p-2 rounded-lg text-gray-900">Once a week</p>
                                <p className="text-sm font-semibold bg-gray-200 p-2 rounded-lg text-gray-900">Once a week</p>
                                <p className="text-sm font-semibold bg-gray-200 p-2 rounded-lg text-gray-900">Once a week</p>
                                <p className="text-sm font-semibold bg-gray-200 p-2 rounded-lg text-gray-900">Once a week</p>

                            </div>
                        </div>
                    </div>
                    <hr />


                </div>
            </div>

        </>
    )
}

export default View