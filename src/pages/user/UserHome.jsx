import React from 'react'
import Hero from '../../components/user/Hero'
import HomeGenderSelect from '../../components/user/HomeGenderSelect'
import HomeNewProducts from '../../components/user/HomeNewProducts'
import ProductDetails from '../../components/user/ProductDetails'


const UserHome = () => {
  return (
    <>
      <Hero/>
      <HomeGenderSelect/>
      <HomeNewProducts/>

      <ProductDetails/>
    </>
  )
}

export default UserHome