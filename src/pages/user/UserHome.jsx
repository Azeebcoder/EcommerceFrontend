import React from 'react'
import Hero from '../../components/user/Hero'
import HomeGenderSelect from '../../components/user/HomeGenderSelect'
import HomeNewProducts from '../../components/user/HomeNewProducts'

const UserHome = () => {
  return (
    <>
      <Hero/>
      <HomeGenderSelect/>
      <HomeNewProducts/>
    </>
  )
}

export default UserHome