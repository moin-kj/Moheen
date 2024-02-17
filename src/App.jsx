import { useState, useEffect } from 'react'
import LandingPage from './Components/Landing/LandingPage'
import Preloader from './Components/Preloader/Preloader';
import './App.css'
import Categories from './Components/Categories/Categories';
import { BrowserRouter as Router } from 'react-router-dom';
import InfProfileCreation from './Components/Influencer/InfluencerProfile/InflProfile_Creation';
import Test from './Components/Influencer/Test/Test';
import BrandProfileCreate from './Components/Brand/BrandProfile/BrandProfile_Creation';
import Jobpost from './Components/Brand/JobPost/Jobpost';
import CreateTaskMultiStepFormContainer from './Components/Brand/Test/CreateTaskMultiStepForm';
import Review from './Components/Brand/ReviewProposal/Review';
import SendOffer from './Components/Brand/Send Offer/SendOffer';
import ViewOffer from './Components/Brand/ViewOffer/ViewOffer';
import BrandDashboard from './Components/Brand/BrandDashboard/BrandDashboard';
import BrandNotification from "./Components/Brand/BrandNotification/BrandNotification"
import BrandSetting from './Components/Brand/BrandSetting/BrandSetting';


function App() {
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    // Simulate an asynchronous operation or any app setup logic
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the time as needed
  }, []);

  return (
    <>
      {/* {isLoading ? <Preloader /> : <LandingPage />} */}
      {/* <BrandDashboard/> */}
      {/* <BrandNotification/> */}
      <BrandSetting />
      {/* <Jobpost/> */}
      {/* <CreateTaskMultiStepFormContainer/> */}
      {/* <Review /> */}
      {/* <ViewOffer/> */}
      {/* <SendOffer/> */}
      {/* <InfProfileCreation/> */}
      {/* <BrandProfileCreate/> */}




    </>
  )





}

export default App


{/* Color Codes */ }
{/* // #e8f5fc  #253778  #008bff  #172B4D*/ }
{
  /* --black: black;
    --burntsienna: #ec6e47;
    --dodger-blue: #008bff;
    --light-grey: #f4f4f4;
    --white: white;
    --alice-blue: #e8f5fc;
    --dark-slate-blue: #253778; 
  */
}