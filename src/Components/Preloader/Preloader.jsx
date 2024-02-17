import React from 'react'
import './Preloader.css'
const Preloader = () => {
    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="flex gap-2">
                    <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
                    <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
                    <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
                </div>
            </div>
        </>
    )
}

export default Preloader