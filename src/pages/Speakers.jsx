import React from 'react'
import { useContext } from 'react'
import CategoryHeading from '../Components/CategoryHeading'
import ProductAds from '../Components/ProductAds'
import { UserContext } from '../Context/UserContext'
import data from '../storage.json'
import AudioGear from '../Components/AudioGear'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const Speakers = () => {
  const {sethash} = useContext(UserContext)
  const filteredData = data.filter((item) => item.category === "speakers");
  sethash('/speakers')
  return (
    <div className='w-full  flex flex-col items-center'>
      <Navbar/>
      <CategoryHeading title={'SPEAKERS'}/>
      <ProductAds filteredData={filteredData[0]} reverse={true} />
      <ProductAds filteredData={filteredData[1]} reverse={false} />
      <AudioGear />
      <Footer />
     </div>
  )
}

export default Speakers