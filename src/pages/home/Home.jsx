import React from 'react'
import Hero from './Hero'
import WhyChoose from './WhyChoose'
import Products from '../shop/Products'
import Expenience from './Expenience'
import Materials from './Materials'

const Home = () => {
  return (
    <>
      <Hero /> 
      <WhyChoose />
      <Products title="Best Selling Products" />
      <Expenience />
      <Materials />
    </>
  )
}

export default Home