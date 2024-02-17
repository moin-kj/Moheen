import React, { useEffect, useState } from 'react';
import './Section16.css'
import Card from './Card.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS styles
import img1 from '../../../assets/Images/Primary/bran.png'

const Section16 = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [imageSrc, setImageSrc] = useState('0'); // Initial image source
    const [imageKey, setImageKey] = useState(0);

    useEffect(() => {
        AOS.init();
        console.log("Image Key ", imageKey)
    }, [imageKey]);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        // Attach the event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array means this effect runs once when the component mounts

    // Change the image source based on the scroll position
    useEffect(() => {
        let newImageSrc;
        if (scrollPosition > 1600) {
            newImageSrc = img1;
        } else if (scrollPosition > 1300) {
            newImageSrc = 'https://assets-global.website-files.com/64396970daa63b2dec8b44a8/6470265485072710b16def9b_cta%20image-p-1080.webp';
        } else if (scrollPosition > 1000) {
            newImageSrc = img1;
        } else if (scrollPosition > 700) {
            newImageSrc = 'https://assets-global.website-files.com/64396970daa63b2dec8b44a8/6470265485072710b16def9b_cta%20image-p-1080.webp';
        } else if (scrollPosition > 200) {
            newImageSrc = img1;
        } else {
            newImageSrc = 'https://assets-global.website-files.com/64396970daa63b2dec8b44a8/6470265485072710b16def9b_cta%20image-p-1080.webp';
        }

        // Change the image source only if it's different from the current image
        if (newImageSrc !== imageSrc) {
            setImageSrc(newImageSrc);
            setImageKey((prevKey) => prevKey + 1);
        }
    }, [scrollPosition]);


    const card_Data = [
        {
            id: 0,
            step: "Step 01",
            head: "Signup/Login",
            descr: "Brands commence their journey by accessing the Brandfluence Network platform through a seamless signup or login process.",
            img: "https://assets-global.website-files.com/64396970daa63b2dec8b44a8/6470265485072710b16def9b_cta%20image-p-1080.webp"

        },
        {
            id: 1,
            step: "Step 02",
            head: "Explore Opportunities",
            descr: "Upon entering, brands navigate through a curated feed of tailored opportunities, containing essential details like project titles, descriptions, budget allocations, and timelines.",
            img: img1
        },
        {
            id: 2,
            step: "Step 03",
            head: "Create Initiatives",
            descr: "Brands can create and post job opportunities, specifying their requirements & details to attract influencers.",
            img: "https://assets-global.website-files.com/64396970daa63b2dec8b44a8/6470265485072710b16def9b_cta%20image-p-1080.webp"
        },
        {
            id: 3,
            step: "Step 04",
            head: "Evaluate Proposals",
            descr: "Brands review and assess proposals submitted by interested influencers, gaining insights into their expertise, past collaborations, and proposed timelines and costs.",
            img: img1
        },
        {
            id: 4,
            step: "Step 05",
            head: "Assess Influencer Profiles",
            descr: "Brands leverage insights from influencers' work history, reviews, and ratings, aiding in the selection of influencers that align with their objectives.",
            img: "https://assets-global.website-files.com/64396970daa63b2dec8b44a8/6470265485072710b16def9b_cta%20image-p-1080.webp"

        },
        {
            id: 5,
            step: "Step 06",
            head: "Connect and Collaborate",
            descr: "Brands can connect with chosen influencers, discuss collaboration details, and finalize agreements for successful partnerships.",
            img: img1
        },

    ]
    // const img_Data = [

    //     {
    //         id: 0,
    //         img: "https://assets-global.website-files.com/64396970daa63b2dec8b44a8/6470265485072710b16def9b_cta%20image-p-1080.webp"

    //     },
    //     // {
    //     //     id: 1,
    //     //     img: img1
    //     // },
    //     // {
    //     //     id: 2,
    //     //     img: "https://assets-global.website-files.com/64396970daa63b2dec8b44a8/6470265485072710b16def9b_cta%20image-p-1080.webp"
    //     // },
    //     // {
    //     //     id: 3,
    //     //     img: img1
    //     // },

    // ]





    return (
        <>
            <div className="container-fluid ">
                <div className="container">
                    <div className="row ">
                        {/* Left Side */}
                        <div className="col-md-12 col-lg-7 ">
                            {card_Data.map((val, key) => (
                                <Card
                                    key={key}
                                    id={val.id}
                                    step={val.step}
                                    head={val.head}
                                    descr={val.descr}
                                />
                            ))}
                        </div>

                        {/* Right Side */}
                        <div className="col-md-12 col-lg-5 p-5 mt-10">
                            <div
                                className={`right-lg-left mt-2 position-sticky top-10 ${imageKey ? 'active animation' : ''}`}
                                key={imageKey}
                            >
                                <img
                                    className="img-fluid animation mt-5"
                                    src={imageSrc}
                                    alt="Right Side Image"
                                    data-aos="fade" // Add AOS fade animation
                                    data-aos-duration="3000" // Set AOS animation duration to 3 seconds
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>;




        </>
    )
}

export default Section16