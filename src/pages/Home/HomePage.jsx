import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from './Hero'
import SocialMediaSlider from '../../components/SocialMediaSlider'
import Pcg from './Pcg'
import Vission from './Vission'
import Footer from '../../components/Footer'
import Experience from './Experience'
import ProductShow from './ProductShow'
import Awards from './Awards'
import Action from './Action'

function HomePage() {
  return (
    <main >
    <Navbar/>
    <Hero/>
    <Pcg/>
    <Vission/>
    <Experience/>
    {/* <Action/> */}
    <Awards/>
    <ProductShow/>
    <Footer/>
    <SocialMediaSlider/>
    </main>
  )
}

export default HomePage