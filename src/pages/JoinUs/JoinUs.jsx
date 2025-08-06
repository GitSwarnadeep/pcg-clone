import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SocialMediaSlider from '../../components/SocialMediaSlider'
import JoinHero from './JoinHero'
import JoinMain from './JoinMain'

function JoinUs() {
  return (
   <main>
    <Navbar/>
    <JoinHero/>
    <JoinMain/>
    <Footer/>
    <SocialMediaSlider/>
   </main>
  )
}

export default JoinUs