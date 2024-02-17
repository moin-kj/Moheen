import React from 'react'
import './Section11.css'
import card_Data from './data'
import Card from './Card';

const Section11 = () => {
    console.log(card_Data)
    return (
        <>
            {/* bg-[#253778] */}

            <div className="sticky top-10 z-10 text-HeadingText text-center mx-auto mt-12">
                {/* Headline */}
                <h1 className="text-4xl xs:text-[15px] sm:text-xl sml:text-2xl md:text-3xl mdl:text-3xl lg:text-4xl lgl:text-4xl font-bold font-titleFont leading-tight">
                    {/* Use line height and margin to adjust lines */}
                    <span className="block leading-tight">Discover Your Path!</span>
                </h1>
                <h2 className="mt-4 text-black text-xl sm:text-2xl sml:text-xl md:text-1xl mdl:text-1xl leading-tight">
                    <span className="block leading-tight xs:hidden sm:hidden sml:block">
                        Embark on a journey of self-discovery with our versatile offerings</span>

                </h2>
            </div>
            {/* <div className='sticky top-36 z-10 border-b border-black mt-5'>

            </div> */}
            <div className="container-fluid mt-10 ">

                {
                    card_Data.map((val, index) => {
                        // Using return inside map function to generate an array of <li> elements
                        return <Card
                            id={val.id}
                            head={val.head}
                            main_head={val.main_head}
                            descr={val.descr}
                            img={val.img}
                        />
                    })
                }


            </div>


        </>
    )
}

export default Section11