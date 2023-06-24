import React from 'react'
import {GrLinkNext} from 'react-icons/gr'

const Card = ({title,info}) => {
  return (
    <div className='w-50 md:w-72 h-96 rounded-lg p-5 bg-sky-300 mx-auto my-8 shadow-lg shadow-slate-500
    hover:scale-110 hover:bg-gradient-to-b from-green-500 to-sky-500 transition-all duration-500 group'>
      <h3 className='text-center text-2xl font-sans font-semibold group-hover:text-slate-200'>{title}</h3>
      <p className='font-sans text-xl my-12 text-center group-hover:text-slate-200'>{info}</p>
      <div className='w-14 h-14 bg-cyan-600 rounded-full p-4 float-right group-hover:bg-cyan-100'><GrLinkNext size={25} className='text-x cursor-pointer'/></div>
    </div>
  )
}

export default Card
