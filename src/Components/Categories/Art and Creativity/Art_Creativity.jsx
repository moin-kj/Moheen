import React from 'react'
import Constant from '../Constant/Constant'
import DataContext from '../Constant/DataContext';
import img1 from '../../../assets/Images/Primary/img1.jpg'
import img2 from '../../../assets/Images/Primary/img2.jpg'







const Art_Creativity = () => {



    const image_data = [
        {
            id: 0,
            img: img1

        },
        {
            id: 1,
            img: img2
        },
        {
            id: 2,
            img: img1

        },
        {
            id: 3,
            img: img2
        },
        {
            id: 4,
            img: img1

        },
        {
            id: 5,
            img: img2
        },
        {
            id: 6,
            img: img1

        },
        {
            id: 7,
            img: img2
        },

    ]



    return (
        <>
           <DataContext.Provider value={image_data}>
                <Constant
                    head="We are here for you"
                    main_head="Elevate Your Art"
                    desc="Feeling a bit lost in the creative scene? Brandfluence Network is your ticket to boosting your art business. Take your artistic venture to new heights in the world of business. Discover the power of teaming up with influential creators to give your brand a tailored lift."
                />

            </DataContext.Provider>


        </>
    )
}

export  default Art_Creativity