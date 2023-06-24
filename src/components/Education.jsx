import React from 'react'
import Card from './Card'
const Education = () => {
  return (
    <div>
      <h2 className='text-center text-2xl lg:text-3xl font-sans font-semibold'>Təhsil İstiqamətləri</h2>
      <div className='w-full flex flex-wrap lg:flex-wrap my-10'>
        <Card title='Frontend' info='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales magna et tortor consequat, vitae malesuada ligula eleifend.'/>
        <Card title='Backend' info='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales magna et tortor consequat, vitae malesuada ligula eleifend.'/>
        <Card title='UI/UX Design' info='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales magna et tortor consequat, vitae malesuada ligula eleifend.'/>
      </div>
    </div>
  )
}

export default Education
