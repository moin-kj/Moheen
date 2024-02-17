import React from 'react'

const Card = ({  title, description,icon }) => {
    return (
        <>
            <div className="sm:mx-8 sml:mx-14 sm:mt-8  mdl:mt-0  md:mx-20 mdl:mx-11">
                <div className="w-12 h-12 mb-2">
                    <span className="text-4xl">{icon}</span>
                </div>
                <h6 className="mdl:text-[14px] xl:text-lg font-titleFont font-bold">{title}</h6>
                <p className='text-justify'>{description}</p>
            </div>
        </>
    )
}

export default Card