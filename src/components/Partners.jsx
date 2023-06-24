import React from 'react'
import PrCard from './PrCard'

const Partners = () => {
  return (
    <div>
      <h2 className='text-center text-2xl lg:text-3xl font-sans font-semibold'>Partnyorlarımız</h2>
      <div className='flex flex-wrap justify-between px-12 py-12 mx-8'>
        <PrCard/>
        <PrCard/>
        <PrCard/>
        <PrCard/>
        <PrCard/>
        <PrCard/>
        <PrCard/>
        <PrCard/>
      </div>
    </div>
  )
}

export default Partners
