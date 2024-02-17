import React, { useEffect, useState } from 'react';
import './Section17.css'
import Card from './Card.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS styles
import img1 from '../../../assets/Images/Primary/bran.png'

const Section17 = () => {

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
        if (scrollPosition > 2100) {
            newImageSrc = 'https://assets-global.website-files.com/64396970daa63b2dec8b44a8/6470265485072710b16def9b_cta%20image-p-1080.webp';
        } else if (scrollPosition > 1900) {
            newImageSrc = img1;
        } else if (scrollPosition > 1500) {
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
            descr: "Influencers start their journey by signing up or logging into the Brandfluence Network platform.",
            img: "https://assets-global.website-files.com/64396970daa63b2dec8b44a8/6470265485072710b16def9b_cta%20image-p-1080.webp"

        },
        {
            id: 1,
            step: "Step 02",
            head: "Create Profile",
            descr: "Influencers create a comprehensive profile, highlighting their skills, expertise, and previous work through portfolio items, videos, and project links.",
            img: img1
        },
        {
            id: 2,
            step: "Step 03",
            head: "Discover Opportunities",
            descr: "Influencers navigate through a spectrum of engaging opportunities, featuring titles, detailed descriptions, compensation details, and specified timelines aligned with their expertise.",
            img: "https://assets-global.website-files.com/64396970daa63b2dec8b44a8/6470265485072710b16def9b_cta%20image-p-1080.webp"
        },
        {
            id: 3,
            step: "Step 04",
            head: "Submit Proposals",
            descr: "Eager influencers submit detailed proposals for opportunities, outlining proposed timelines, compensation, and adding a personalized cover letter to underscore their suitability.",
            img: img1
        },
        {
            id: 4,
            step: "Step 05",
            head: "Highlight Work History",
            descr: "Influencers accentuate their work history, featuring reviews and ratings from prior collaborations, building credibility and enhancing their appeal to brands.",
            img: "https://assets-global.website-files.com/64396970daa63b2dec8b44a8/6470265485072710b16def9b_cta%20image-p-1080.webp"

        },
        {
            id: 5,
            step: "Step 06",
            head: "Connect with Brands",
            descr: "Influencers proactively engage with brands offering opportunities, initiate meaningful discussions, and articulate their distinct value proposition to secure collaborations.",
            img: img1
        },
        {
            id: 6,
            step: "Step 07",
            head: "Collaborate and Deliver",
            descr: "Upon securing collaborations, influencers dedicate their efforts to deliver high-quality content, ensuring alignment with the brand's requirements.",
            img: img1
        },

    ]
    





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

export default Section17