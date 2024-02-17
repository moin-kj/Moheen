import React from 'react'
import img1 from '../../../assets/Images/Primary/midimg.png'


const ViewAssets = () => {


    return (
        <>
            <div className='border-b-[1px]'>

                <div className='grid grid-cols-1 p-3'>
                    <h6 className="text-xl font-serif font-semibold text-gray-700">Collaboration Assets</h6>
                </div>
                {/* Image */}
                <div className='grid grid-cols-1 ps-3 gap-3'>
                    {/* Image Heading */}
                    <div>
                        <p className="text-lg font-semibold text-gray-700">Images</p>
                    </div>

                    {/* Images Row */}
                    <div className="grid grid-cols-3 gap-8">
                        {/* Image 1 */}
                        <div className="border border-gray-300 rounded-lg p-2 h-34 flex flex-col items-center justify-center mb-3 cursor-pointer relative">
                            <img src={img1} alt="Selected" />
                        </div>
                        <div className="border border-gray-300 rounded-lg p-2 h-34 flex flex-col items-center justify-center mb-3 cursor-pointer relative">
                            <img src={img1} alt="Selected" />
                        </div>
                        <div className="border border-gray-300 rounded-lg p-2 h-34 flex flex-col items-center justify-center mb-3 cursor-pointer relative">
                            <img src={img1} alt="Selected" />
                        </div>


                    </div>
                </div>

                {/* Videos */}
                <div className='grid grid-cols-1 p-3 gap-3'>
                    {/* Video Heading */}
                    <div>
                        <p className="text-lg font-semibold text-gray-800">Videos</p>
                    </div>
                    <div className="grid grid-cols-3 gap-8">
                        {/* Image 1 */}
                        <div className="border border-gray-300 rounded-lg p-2 h-40 flex flex-col items-center justify-center mb-3 cursor-pointer relative">
                            <video src="" className="w-full h-full" controls />
                        </div>
                        <div className="border border-gray-300 rounded-lg p-2 h-40 flex flex-col items-center justify-center mb-3 cursor-pointer relative">
                            <video src="" className="w-full h-full" controls />
                        </div>
                        <div className="border border-gray-300 rounded-lg p-2 h-40 flex flex-col items-center justify-center mb-3 cursor-pointer relative">
                            <video src="" className="w-full h-full" controls />
                        </div>



                    </div>
                </div>

                {/* Documents */}
                <div className='grid grid-cols-1 p-3 gap-3'>
                    {/* Documents Heading */}
                    <div>
                        <p className="text-lg font-semibold text-gray-800">Documents</p>
                    </div>
                    <div className="grid grid-cols-3 gap-8">
                        <div className="border border-gray-300 rounded-lg p-2 h-40 flex flex-col items-center justify-center mb-3 cursor-pointer relative">
                            <a href="" target="_blank" rel="noopener noreferrer"></a>
                        </div>
                        <div className="border border-gray-300 rounded-lg p-2 h-40 flex flex-col items-center justify-center mb-3 cursor-pointer relative">
                            <a href="" target="_blank" rel="noopener noreferrer"></a>
                        </div>
                        <div className="border border-gray-300 rounded-lg p-2 h-40 flex flex-col items-center justify-center mb-3 cursor-pointer relative">
                            <a href="" target="_blank" rel="noopener noreferrer"></a>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default ViewAssets