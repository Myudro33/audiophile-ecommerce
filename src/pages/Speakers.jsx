import React from 'react'
import { useContext } from 'react'
import CategoryHeading from '../Components/CategoryHeading'
import ProductAds from '../Components/ProductAds'
import { UserContext } from '../Context/UserContext'
import data from '../storage.json'

const Speakers = () => {
  const {sethash} = useContext(UserContext)
  const filteredData = data.filter((item) => item.category === "speakers");
  sethash('/speakers')
  return (
    <div className='w-full  flex flex-col items-center'>
      <CategoryHeading title={'SPEAKERS'}/>
      <ProductAds filteredData={filteredData[0]} reverse={true} />
      <ProductAds filteredData={filteredData[1]} reverse={false} />
     </div>
  )
}

export default Speakers