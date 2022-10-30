import React from 'react'

const CategoryHeading = ({title}) => {
  return (
    <div className='w-full md:h-60 text-white xs:text-3xl md:text-5xl font-semibold xs:h-24 bg-[#000000] flex justify-center items-center'>
     <h1>{title}</h1>
    </div>
  )
}

export default CategoryHeading