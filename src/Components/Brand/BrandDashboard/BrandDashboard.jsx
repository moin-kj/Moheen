import React from 'react'
import BrandWelcome from './BrandWelcome/BrandWelcome'
import BrandSteps from './BrandSteps/BrandSteps'
import BrandFooter from "../BrandFooter/BrandFooter"
import BrandDiscover from './BrandDiscover/BrandDiscover'
import BrandJobs from './BrandJobs/BrandJobs'
import BrandNavbar from "../BrandNavbar/BrandNavbar"

const BrandDashboard = () => {
    return (
        <>
            <BrandNavbar/>
            <BrandWelcome/>
            <BrandSteps/>
            <BrandDiscover/>
            <BrandJobs/>
            <BrandFooter/>
        </>
    )
}

export default BrandDashboard