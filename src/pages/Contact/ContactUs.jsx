import React from 'react'
import Footer from '../../components/Footer'
import SocialMediaSlider from '../../components/SocialMediaSlider'
import Navbar from '../../components/Navbar'
import ContactHero from './ContactHero'
import ContactMap from './ContactMap'
import ContactMain from './ContactMain'

function ContactUs() {
  return (
    <main>
        <Navbar/>
        <ContactHero/>
        <ContactMap/>
        <ContactMain/>
        <Footer/>
        <SocialMediaSlider/>
    </main>
  )
}

export default ContactUs