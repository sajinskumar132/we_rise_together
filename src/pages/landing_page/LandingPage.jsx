import React from 'react'
import CustomNavBar from '../../custom_components/custom_navbar/CustomNavBar'
import Hero from './sub_components/hero/Hero'
import AboutUs from './sub_components/about_us/AboutUs'
import Features from './sub_components/features/Features'
import Stories from './sub_components/stories/Stories'
import Events from './sub_components/events/Events'
import CommingSoon from './sub_components/comming_soon/CommingSoon'
import Footer from './sub_components/footer/Footer'

function LandingPage() {

  
  return (
    <div>
        <CustomNavBar/>
        <Hero/>
        <AboutUs/>
        <Features/>
        <Stories/>
        <Events/>
        <CommingSoon/>
        <Footer/>
    </div>
  )
}

export default LandingPage