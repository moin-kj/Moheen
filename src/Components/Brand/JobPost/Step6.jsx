import React from 'react'
import { useData } from './DataContext';
import ScrollTop from '../../ScrollTop/ScrollTop';

const Step6 = () => {
    const { data } = useData();

    console.log(data);



    return (
        <>
        <ScrollTop/>
            <div className="container mt-4 mx-auto px-4 py-8  rounded-lg  ">
                <div className="border bg-white  mx-12 p-4 rounded-xl">
                    {/* Step 1 */}
                    {/* Title */}
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                        {/* Left Side */}
                        <div className="">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-600">{data.title}</h3>
                            </div>
                            <hr />
                        </div>
                    </div>
                    {/* Description */}
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                        {/* Left Side */}
                        <div>
                            <div>
                                <p className="text-lg text-justify text-gray-600">
                                    {data.description}
                                </p>
                                <hr />
                            </div>

                        </div>
                    </div>
                    {/* Category */}
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                        {/* Left Side */}
                        <div className="">
                            <div>
                                <h6 className="text-xl font-semibold text-gray-700">Category</h6>
                            </div>
                            <div>
                                <p className="text-sm mt-3 font-semibold w-1/6 text-center bg-gray-200 p-2 rounded-lg text-gray-900">
                                    {data.category ? data.category : 'No category'}
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Objectives */}
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-2">
                        {/* Left Side */}
                        <div className="">
                            <div>
                                <h6 className="text-xl font-semibold text-gray-700">Objectives</h6>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-5 gap-3 mt-3 text-center'>
                                {
                                    data.selectedObjectives.map((objective, index) => (
                                        <p key={index} className="text-sm font-semibold bg-gray-200 p-2 rounded-lg text-gray-900">{objective}</p>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}

                    {/* Age Groups */}
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-2">
                        {/* Left Side */}
                        <div className="">
                            <div>
                                <h6 className="text-xl font-semibold text-gray-700">Age Groups</h6>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-12 gap-4 mt-3 text-center'>
                                {
                                    data.selectedAgeGroups.map((Age, index) => (
                                        <p className="text-sm font-semibold bg-gray-200 p-2 rounded-lg text-gray-900">{Age}</p>
                                    ))
                                }


                            </div>
                        </div>
                    </div>
                    {/* Interest */}
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-2">
                        {/* Left Side */}
                        <div className="">
                            <div>
                                <h6 className="text-xl font-semibold text-gray-700">Interest</h6>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-5 gap-3 mt-3 text-center'>
                                {
                                    data.selectedInterests.map((Interest, index) => (
                                        <p className="text-sm font-semibold bg-gray-200 p-2 rounded-lg text-gray-900">{Interest}</p>
                                    ))
                                }

                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}

                    {/* Preferences */}
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-2">
                        {/* Left Side */}
                        <div className="">
                            <div>
                                <h6 className="text-xl font-semibold text-gray-700">Preferences</h6>
                            </div>
                            <div>
                                <p className="text-sm mt-3 font-semibold w-1/6 text-center bg-gray-200 p-2 rounded-lg text-gray-900">
                                    {data.selectedPreferences ? data.selectedPreferences : 'No Preferences'}
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Format */}
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-2">
                        {/* Left Side */}
                        <div className="">
                            <div>
                                <h6 className="text-xl font-semibold text-gray-700">Content Format</h6>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-6 gap-3 mt-3 text-center'>
                                {
                                    data.selectedFormats.map((Format, index) => (
                                        <p className="text-sm font-semibold bg-gray-200 p-2 rounded-lg text-gray-900">{Format}</p>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    {/* Style */}
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-2">
                        {/* Left Side */}
                        <div className="">
                            <div>
                                <h6 className="text-xl font-semibold text-gray-700">Content Style</h6>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-8 gap-3 mt-3 text-center'>
                                {
                                    data.selectedStyles.map((style, index) => (
                                        <p className="text-sm font-semibold bg-gray-200 p-2 rounded-lg text-gray-900">{style}</p>
                                    ))
                                }


                            </div>
                        </div>
                    </div>

                    {/* Step 4 */}


                    {/* Timeline */}
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-2">
                        <div className="">
                            <div>
                                <h6 className="text-xl font-semibold text-gray-700">Timeline</h6>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-6 gap-3 mt-3'>
                                <div className=''>
                                    <p className="text-lg font-semibold   text-gray-700">Start Date</p>
                                </div>
                                <div className=''>
                                    <p className="text-sm font-semibold text-center bg-gray-200 p-1 rounded-lg text-gray-900">{data.startDate.toLocaleDateString()}</p>
                                </div>

                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-6 gap-3 mt-1'>
                                <div className=''>
                                    <p className="text-lg font-semibold   text-gray-700">End Date</p>
                                </div>
                                <div className=''>
                                    <p className="text-sm font-semibold text-center bg-gray-200 p-1 rounded-lg text-gray-900">{data.endDate.toLocaleDateString()}</p>
                                </div>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-6 gap-3 mt-1'>
                                <div className=''>
                                    <p className="text-lg font-semibold   text-gray-700">Duration</p>
                                </div>
                                <div className=''>
                                    <p className="text-sm font-semibold text-center bg-gray-200 p-1 rounded-lg text-gray-900">1 month 1 week 10 days</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Budget */}
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-2">
                        <div className="">
                            <div>
                                <h6 className="text-xl font-semibold text-gray-700">Budget</h6>
                            </div>
                            <div>
                                <p className="text-sm mt-3 font-semibold w-1/6 text-center bg-gray-200 p-2 rounded-lg text-gray-900">
                                    PKR: {data.budget}
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Frequency */}
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-2">
                        <div className="">
                            <div>
                                <h6 className="text-xl font-semibold text-gray-700">Posting Frequency</h6>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-6 gap-3 mt-3 text-center'>
                                {
                                    data.selectedFrequency.map((frequency, index) => (
                                        <p key={index} className="text-sm font-semibold bg-gray-200 p-2 rounded-lg text-gray-900">{frequency}</p>
                                    ))
                                }
                            </div>
                        </div>
                    </div>


                </div>
            </div>


        </>
    )
}

export default Step6