import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import './Section10.css'


const Section10 = () => {

    const FAQS = [
        {
            id: 0,
            question: "What is Brandfluence Network?",
            answer: "Brandfluence Network is a platform that seamlessly connects brands with influencers and individuals, enabling them to authentically share their favorite brands."

        },
        {
            id: 1,
            question: "What can Brandfluence Network offer my brand?",
            answer: `
            "With Brandfluence Network, you can:
            
            - Easily collaborate with influencers for brand promotion
            - Manage influencer content and campaigns efficiently
            - Achieve your marketing goals through impactful collaborations
            - Build brand credibility with genuine influencer profiles"
          `

        },
        {
            id: 2,
            question: "Can my brand create collaborations on the Brandfluence Network platform?",
            answer: "You can explore collaboration opportunities directly by answering a few questions. We'll promptly connect you with suitable influencers."

        },
        {
            id: 3,
            question: "Can I find a diverse range of influencers to promote my brand within a specified timeframe?",
            answer: "Absolutely! Brandfluence Network boasts a diverse network of over 900,000 influencers across various categories. Once your collaboration is live, influencers interested in your brand can seamlessly join the initiative."

        },
        {
            id: 4,
            question: "Can I monitor the progress and actual impact of brand activities independently?",
            answer: "Utilize Brandfluence Network's Activity Manager to track the real-time progress and impact of your collaborations without external assistance."

        },
    ]


    return (
        <>
            <div className="container  mt-5 pt-5">
                <div className="row ">
                    {/* Left Side */}
                    <div className="col-md-12 col-lg-5 justify-content-center">
                        <div className="text-lg-left">
                            <h1 className="section11_heading text-HeadingText font-titleFont sml:mt-5 md:mt-0 font-bold leading-tight">
                                Frequently Asked Questions
                            </h1>
                            <p className="mt-4 section11_desc">
                                Before you jump in, there might be a few questions that you need some answers for.
                            </p>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="col-md-12 col-lg-7  justify-content-center justify-content-lg-end">
                        <Accordion className='bg-[#F0F8FF]'>
                            {
                                FAQS.map((val, key) => {
                                    return <Accordion.Item eventKey={val.id} className='accor'>
                                        <Accordion.Header className='accor text-2xl'
                                        >{val.question}</Accordion.Header>
                                        <Accordion.Body className='accor'>
                                           {val.answer}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                })
                            }

                           
                        </Accordion>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Section10