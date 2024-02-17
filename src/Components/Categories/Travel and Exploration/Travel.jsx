import React from 'react'
import Constant from '../Constant/Constant'
import DataContext from '../Constant/DataContext';
import img1 from '../../../assets/Images/Primary/img1.jpg'
import img2 from '../../../assets/Images/Primary/img2.jpg'






const Travel = () => {



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
                    main_head="Explore and Share with Your Brand"
                    desc="Collaborate with influencers in travel and exploration. Let your brand be part of exciting journeys, inspiring wanderlust and becoming an essential companion for travelers."
                />

            </DataContext.Provider>


        </>
    )
}

export  default Travel