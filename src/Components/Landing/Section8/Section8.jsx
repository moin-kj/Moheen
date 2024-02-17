import React from 'react'
import logo1 from '../../../assets/Images/Primary/logo1.png';
import logo2 from '../../../assets/Images/Primary/logo2.png';
import logo3 from '../../../assets/Images/Primary/logo3.png';

const Section8 = () => {
    return (
        <>
            <div className="container mx-auto mt-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Picture Column */}
                    <div className="mb-4 md:mb-6 md:ml-2 md:col-span-1">
                        {/* <img
                            src={sideimg}
                            alt="Center Image"
                            className="object-cover w-full h-auto rounded"
                            loading="lazy"
                        /> */}
                       
                    </div>

                    {/* Content Column */}
                    <div className="md:col-span-1">
                        <div className="md:ml-4 text-center md:text-left">
                            <h3 className="font-bold text-xl">With our experts</h3>
                            <h1 className="font-bold text-2xl md:text-4xl mt-2">
                                Take your marketing to the next level
                            </h1>
                            <p className='mt-8'>
                                Case Study: Dive into the nano influencer marketing strategy
                                we curated for Coconut Queen and how it impacted their overall brand awareness!
                            </p>
                        </div>
                        <div className="content mb-8 md:ml-4 mt-4 flex items-center">
                            <img src={logo3} alt="Logo 3" className="w-12 h-12 mr-4" loading="lazy" />
                            <div>
                                <p>Partner with top brands to build relationships with influencers.</p>
                            </div>
                        </div>
                        <div className="content mb-8 md:ml-4 flex items-center">
                            <img src={logo1} alt="Logo 1" className="w-12 h-12 mr-4" loading="lazy" />
                            <div>
                                <p>Start as a Partiposter with Instagram guidance.</p>
                            </div>
                        </div>
                        <div className="content mb-8 md:ml-4 flex items-center">
                            <img src={logo2} alt="Logo 2" className="w-12 h-12 mr-4" loading="lazy" />
                            <div>
                                <p>Join campaigns, get paid all in Partipost.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section8