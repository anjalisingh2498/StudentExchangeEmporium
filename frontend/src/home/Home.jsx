import React from 'react'
import Banner from '../components/Banner'
import AvailableItems from './AvailableItems'
import FavBook from './FavBook'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Review from './Review'

const Home = () => {
  return (

  <div>
    <Banner></Banner>
    <AvailableItems></AvailableItems>
    <FavBook></FavBook>
    <PromoBanner></PromoBanner>
    <OtherBooks></OtherBooks>
    <Review></Review>
    
  </div>
    
    
  )
}

export default Home