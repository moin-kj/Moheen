import React from 'react'

const Last = () => {
    return (
        <>

            <div className='grid grid-cols-1 p-3'>
                <div className='flex justify-end'>
                    <button className="mx-3 border  hover:bg-blue-800 hover:text-white font-semibold py-1 px-6 rounded-full">
                        Cancel
                    </button>
                    <button className="bg-blue-800 hover:bg-blue-500 text-white font-semibold py-1 px-6 rounded-full">
                        Send
                    </button>
                </div>
            </div>

        </>
    )
}

export default Last