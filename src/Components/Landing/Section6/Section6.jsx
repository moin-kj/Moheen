import React from 'react'
import "./Section6.css"
import img1 from '../../../assets/Images/Primary/logo-godrej.png'
import img2 from '../../../assets/Images/Primary/logo-coca-cola.png'
import img3 from '../../../assets/Images/Primary/logo-oppo.png'
import img4 from '../../../assets/Images/Primary/logo-paypal.png'
import img5 from '../../../assets/Images/Primary/logo-philips.png'



const Section6 = () => {
    const Brand = [
        {
            key: 0,
            img: img1
        },
        {
            key: 1,
            img: img2
        },
        {
            key: 2,
            img: img3
        },
        {
            key: 3,
            img: img4
        },
        {
            key: 4,
            img: img5
        },

    ]
    return (
        <>
            <div className="relative bg-cover bg-center flex items-center mt-32 mb-48">
                <div className="relative z-10 text-HeadingText  text-center mx-auto">
                    <h1 className="text-4xl xs:text-[15px] sm:text-xl sml:text-2xl md:text-3xl mdl:text-3xl lg:text-4xl lgl:text-4xl font-bold font-titleFont leading-tight">
                        {/* Use line height and margin to adjust lines */}
                        <span className="block leading-tight">Trusted by Brands</span>
                    </h1>
                    <div className="row pt-3">
                        <marquee behavior="scroll" direction="left" scrollamount="5">
                            {
                                Brand.map((val, key) => (
                                    <img key={key} src={val.img} className="brands img-fluid" alt={`Brand ${key}`} style={{ display: 'inline-block' }} />
                                ))
                            }
                        </marquee>
                    </div>



                </div>
            </div>



        </>
    )
}

export default Section6