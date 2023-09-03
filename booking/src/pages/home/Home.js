import React from 'react'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import Footer from '../../components/footer/Footer'
import MailList from '../../components/mailList/MailList'
import Featured from '../../components/navbar/featured/Featured'
import Header from '../../components/navbar/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Propertylist from '../../components/propertyList/Propertylist'
import './home.css'

function Home() {
  return (
    <div><Navbar></Navbar>
    <Header></Header>
    <div className='homeContainer'>
      <Featured/>
      <h1 className='homeTitle'>Browse by property type</h1>
      <Propertylist></Propertylist>
      <h1 className='homeTitle'>Homes guests love</h1>
      <FeaturedProperties></FeaturedProperties>
      <MailList></MailList>
      <Footer></Footer>
    </div>
    </div>
  )
}

export default Home