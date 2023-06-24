import React from 'react';
import PauseOnHover from './Slider';
import Education from './Education';
import Partners from './Partners';
import Quote from './Quote';
import  Pagination  from './Pagination'
import { FaQuoteRight } from 'react-icons/fa'


const Home = ({sidebar}) => {
 

console.log(sidebar)
  return (
    <div className='w-full h-auto px-5 lg:px-20 pt-10'>
      <PauseOnHover/>
      <section className=' w-full mt-12 h-auto border-t-2 border-b-2 pt-24 px-5 lg:px-20'>
        <Education/>
      </section>
      <section className=' w-full mt-10  h-auto  px-5 lg:px-20'>
        <Partners/>
      </section>
      <section className=' w-full my-10  h-auto  px-5 lg:px-20 border-t-2 border-b-2  py-12  '>
      <FaQuoteRight className='mx-auto text-5xl text-cyan-500'/>
        <Quote/>
      </section>
      <section className=' w-full my-10  h-auto py-12 ' >
        <h2 className='text-center 2xl lg:text-3xl font-sans font-semibold py-8'>Tələbə Proyektləri</h2>
        <Pagination/>
      </section>
    </div>
  )
}

export default Home
