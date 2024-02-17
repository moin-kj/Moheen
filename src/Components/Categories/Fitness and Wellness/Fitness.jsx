import React from 'react'
import Constant from '../Constant/Constant'
import DataContext from '../Constant/DataContext';
import img1 from '../../../assets/Images/Primary/img1.jpg'
import img2 from '../../../assets/Images/Primary/img2.jpg'






const Fitness = () => {



    const image_data = [
        {
            id: 0,
            img: img2

        },
        {
            id: 1,
            img: img1
        },
        {
            id: 2,
            img: img2

        },
        {
            id: 3,
            img: img1
        },
        {
            id: 4,
            img: img2

        },
        {
            id: 5,
            img: img1
        },
        {
            id: 6,
            img: img2

        },
        {
            id: 7,
            img: img1
        },

    ]



    return (
        <>
           <DataContext.Provider value={image_data}>
                <Constant
                    head="We are here for you"
                    main_head="Fueling Wellness and Vitality"
                    desc="Partner with fitness and wellness influencers to promote your brand. Inspire a healthier lifestyle with your products, as influencers share their fitness journeys and the impact of your brand."
                />

            </DataContext.Provider>


        </>
    )
}

export  default Fitness