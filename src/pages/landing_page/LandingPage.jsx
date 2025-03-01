import React from 'react'
import CustomNavBar from '../../custom_components/custom_navbar/CustomNavBar'
import Hero from './sub_components/hero/Hero'
import AboutUs from './sub_components/about_us/AboutUs'
import Features from './sub_components/features/Features'

function LandingPage() {
//   const cities = ["Tokyo","Cairo","Los Angeles","Paris","Seattle"];
//   console.log(cities.slice(0,2))
//  cities.splice(2,1)
//   console.log(cities)
//   Object.entries({name:"sajin"}).map(([key,value])=>{
//     console.log(key)
//     console.log(value)
//   })
  
  return (
    <div>
        <CustomNavBar/>
        <Hero/>
        <AboutUs/>
        <Features/>
    </div>
  )
}

export default LandingPage