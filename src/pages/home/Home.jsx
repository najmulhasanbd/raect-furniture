import React from 'react'
import Hero from './Hero'
import WhyChoose from './WhyChoose'
import Products from '../shop/Products'
import Expenience from './Expenience'

const Home = () => {
  return (
    <>
      <Hero /> 
      <WhyChoose />
      <Products title="Best Selling Products" />
      <Expenience />
    </>
  )
}

export default Home