import React from 'react'
import NavigationBar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import {
    BrowserRouter,
    Routes, // Just Use Routes instead of "Switch"
    Route,
    Navigate,
    Outlet

} from "react-router-dom";
import Home from '../../Pages/Home/Home';
import Platform from '../../Pages/Explore/Platform';
import Strategy from '../../Pages/Explore/Strategy';
import Article from '../../Pages/Resources/Article';
import Blog from '../../Pages/Resources/Blog';
import Story from '../../Pages/Resources/Story';
import Guides from '../../Pages/Resources/Guides';
import Influencers from '../../Pages/Influencers/Influencers';
import Brand from '../../Pages/Brand/Brand';
import About from '../../Pages/About/About';
import C10 from '../../Pages/Categories/C10';
import C1 from '../../Pages/Categories/C1';
import C2 from '../../Pages/Categories/C2';
import C3 from '../../Pages/Categories/C3';
import C4 from '../../Pages/Categories/C4';
import C5 from '../../Pages/Categories/C5';
import C6 from '../../Pages/Categories/C6';
import C7 from '../../Pages/Categories/C7';
import C8 from '../../Pages/Categories/C8';
import C9 from '../../Pages/Categories/C9';
import C11 from '../../Pages/Categories/C11';
import C12 from '../../Pages/Categories/C12';
import C13 from '../../Pages/Categories/C13';
import C14 from '../../Pages/Categories/C14';
import C15 from '../../Pages/Categories/C15';
import C16 from '../../Pages/Categories/C16';
import C17 from '../../Pages/Categories/C17';
import C18 from '../../Pages/Categories/C18';
import Login from '../Authent/Login/Login';
import Signup from '../Authent/Signup/Signup';
import Forget from '../Authent/ForgetPassword/Forget';
import OTP from '../Authent/OTP/OTP';
import Update from '../Authent/UpdatePassword/Update';
import InflProfile_Creation from '../Influencer/InfluencerProfile/InflProfile_Creation';
import BrandProfileCreate from '../Brand/BrandProfile/BrandProfile_Creation';


const LandingPage = () => {
    return (
        <>



            {/* <NavigationBar /> */}
            <Routes>
                <Route path="/" exact element={<Home />} />

                {/* Explore */}

                <Route path="/platform" element={<Platform />} />
                <Route path="/strategy" element={<Strategy />} />


                {/* Resources */}

                <Route path="/article" element={<Article />} />
                <Route path="/blogs" element={<Blog />} />
                <Route path="/stories" element={<Story />} />
                <Route path="/guides" element={<Guides />} />

                {/* Influencers */}
                <Route path="/influencer" element={<Influencers />} />
                {/* Brands */}
                <Route path="/brand" element={<Brand />} />
                {/* About */}
                <Route path="/about" element={<About />} />

                {/* Categories */}
                <Route path="/art" element={<C1 />} />
                <Route path="/vehicle" element={<C2 />} />
                <Route path="/beauty" element={<C3 />} />
                <Route path="/business" element={<C4 />} />
                <Route path="/gaming" element={<C5 />} />
                <Route path="/fashion" element={<C6 />} />
                <Route path="/finance" element={<C7 />} />
                <Route path="/fitness" element={<C8 />} />
                <Route path="/food" element={<C9 />} />
                <Route path="/decor" element={<C10 />} />
                <Route path="/luxury" element={<C11 />} />
                <Route path="/music" element={<C12 />} />
                <Route path="/adventure" element={<C13 />} />
                <Route path="/parenting" element={<C14 />} />
                <Route path="/pet" element={<C15 />} />
                <Route path="/sports" element={<C16 />} />
                <Route path="/tech" element={<C17 />} />
                <Route path="/travel" element={<C18 />} />

                {/* Authentication */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login/forgetpassword" element={<Forget />} />
                <Route path="/login/forgetpassword/otp" element={<OTP />} />
                <Route path="/login/forgetpassword/otp/update" element={<Update />} />


                {/* Profile Creation */}
                <Route path="/signup/brandprofile" element={<BrandProfileCreate />} />
                <Route path="/signup/influencerprofile" element={<InflProfile_Creation />} />














            </Routes>

            {/* <Footer /> */}






            {/* Above are Final Sections */}
            {/* These both for Strategy */}
            {/* <Section8/>  layout will be set */}
            {/* <Section9/>  layout will be set */}


        </>
    )
}

export default LandingPage