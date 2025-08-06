import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import StoreHero from './StoreHero'
import StoreLocator from './StoreLocator'
import SocialMediaSlider from '../../components/SocialMediaSlider'

function FindStore() {
  return (
    <main>
        <Navbar/>
        <StoreHero/>
        <StoreLocator/>
        <Footer/>
        <SocialMediaSlider/>
    </main>
  )
}

export default FindStore