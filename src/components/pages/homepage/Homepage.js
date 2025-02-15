import React from 'react'
import Navigation from './sections/Navigation/Navigation'
import CarouselPage from './sections/Carousel/CarouselPage'
import ChurchInfo from './sections/ChurchInfo/ChurchInfo'
import LatestSermon from './sections/LatestSermon/LatestSermon'
import AboutChurch from './sections/AboutChurch/AboutChurch'
import OurMinistries from './sections/OurMinistries/OurMinistries'
import WhatWeOffer from './sections/WhatWeOffer/WhatWeOffer'
import BringingFaith from './sections/BringingFaith/BringingFaith'
import Team from './sections/Team/Team'
import AppSection from './sections/AppSection/AppSection'
import Consultation from './sections/Consultation/Consultation'
import Footer from './sections/Footer/Footer'

const Homepage = () => {
  return (
    <>
        <header style={{ position: 'relative' }}>
            <CarouselPage/>
        </header>
        <ChurchInfo/>
        <AboutChurch/>
        <OurMinistries/>
        <LatestSermon/>
        <WhatWeOffer/>
        <BringingFaith/>
        <Team/>
        <AppSection/>
        <Consultation/>
    </>
  )
}

export default Homepage