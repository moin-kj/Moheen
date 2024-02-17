import React from 'react';
import './Vertical.css'
import { useContext } from 'react'
import DataContext from '../Categories/Constant/DataContext'



const Vertical_Slider = ({ animationDuration }) => {

    const image_data = useContext(DataContext);

    // const image_data = [
    //     {
    //         id: 0,
    //         img: "https://assets-global.website-files.com/64396970daa63b2dec8b44a8/6452034978cec9074ce14e0f_Fashion-Partipost-Influencer-Marketing-Campaign%200-p-500.jpg"

    //     },
    //     {
    //         id: 1,
    //         img: "https://assets-global.website-files.com/64396970daa63b2dec8b44a8/645203be51262ddbb40ab5b6_Fashion-Partipost-Influencer-Marketing-Campaign%204-p-500.jpg"
    //     },
    //     {
    //         id: 2,
    //         img: "https://assets-global.website-files.com/64396970daa63b2dec8b44a8/6452034978cec9074ce14e0f_Fashion-Partipost-Influencer-Marketing-Campaign%200-p-500.jpg"

    //     },
    //     {
    //         id: 3,
    //         img: "https://assets-global.website-files.com/64396970daa63b2dec8b44a8/645203be51262ddbb40ab5b6_Fashion-Partipost-Influencer-Marketing-Campaign%204-p-500.jpg"
    //     },
    //     {
    //         id: 4,
    //         img: "https://assets-global.website-files.com/64396970daa63b2dec8b44a8/6452034978cec9074ce14e0f_Fashion-Partipost-Influencer-Marketing-Campaign%200-p-500.jpg"

    //     },
    //     {
    //         id: 5,
    //         img: "https://assets-global.website-files.com/64396970daa63b2dec8b44a8/645203be51262ddbb40ab5b6_Fashion-Partipost-Influencer-Marketing-Campaign%204-p-500.jpg"
    //     },
    //     {
    //         id: 6,
    //         img: "https://assets-global.website-files.com/64396970daa63b2dec8b44a8/6452034978cec9074ce14e0f_Fashion-Partipost-Influencer-Marketing-Campaign%200-p-500.jpg"

    //     },
    //     {
    //         id: 7,
    //         img: "https://assets-global.website-files.com/64396970daa63b2dec8b44a8/645203be51262ddbb40ab5b6_Fashion-Partipost-Influencer-Marketing-Campaign%204-p-500.jpg"
    //     },

    // ]
    const marqueeStyle = {
        display: 'flex',
        flexDirection: 'column',
        animation: `marquee-animation ${animationDuration}s linear infinite`,
    };

    return (
        <>
            <div className="vertical-marquee-container">
                <div className="vertical-marquee-content" style={marqueeStyle}>
                    {image_data.map((val, index) => (
                        <div key={index} className="marquee-card">
                            <img
                                className='img-fluid border rounded-2xl overflow-hidden mt-2'
                                src={val.img}
                                alt={`Image ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Vertical_Slider