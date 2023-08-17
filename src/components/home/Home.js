import React from 'react'
import Products from '../products/Products'
import styled from './Home.module.css'

const Home = () => {
  return (
    <div className={styled.homeContainer}>
      <Products/>
    </div>
  )
}

export default Home
