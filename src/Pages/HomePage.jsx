import React from 'react'
import Navigation from '../components/molecules/navigations'
import Header from '../components/organisms/Header'
import Intro from '../components/organisms/Intro'
import Banner from '../components/organisms/Banner'
import Servicios from '../components/organisms/Servicios'
import Galeria from '../components/organisms/Galeria'
import Testimonio from '../components/organisms/Testimonio'
import Footer from '../components/organisms/Footer'


const HomePage = () => {
  return (
    <>
    <Navigation/>
    <Header></Header>
    <Intro/>
    <Banner/>
    <Servicios/>
    <Galeria/>
    <Testimonio/>
    <Footer/>
    </>
  )
}

export default HomePage