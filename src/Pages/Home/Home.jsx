import React from 'react'
import Section1 from '../../Components/Landing/Section1/Section1'
import Section2 from '../../Components/Landing/Section2/Section2'
import Section3 from '../../Components/Landing/Section3/Section3'
import Section5 from '../../Components/Landing/Section5/Section5'
import Section12 from '../../Components/Landing/Section12/Section12'
import Section4 from '../../Components/Landing/Section4/Section4'
import Section6 from '../../Components/Landing/Section6/Section6'
import NavigationBar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
const Home = () => {
    return (
        <>
            <NavigationBar />
            <Section1 />
            <Section3 />
            <Section2 />
            <Section5 />
            <Section12 />
            <Section4 />
            <Section6 />
            <Footer />
        </>
    )
}

export default Home