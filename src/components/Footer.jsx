import React from 'react'
import logo from '../images/logo.png'
import { FaPhoneAlt, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'



const Footer = () => {
  return (
    <div className=' w-full h-72 lg:h-80 bg-zinc-800'>
      <div className='flex'>
        <div className='w-1/3 pl-5 pt-20  md:w-2/5 lg:w-51 md:px-20 md:py-14  lg:px-24 lg:py-14'>
          <img className='w-14 h-14 md:w-20 md:h-20 ml-12' src={logo} alt='' />
        </div>
        <div className='flex  justify-between w-2/3 md:w-4/5 px-12 py-4   md:px-20 md:py-6 lg:px-36 lg:py-8'>
          <ul className='hidden lg:block'>
            <li className='font-sans text-xl font-bold text-white'>Kurslar</li>
            <li className='font-sans text-lg text-white mt-3'>Frontend</li>
            <li className='font-sans text-lg text-white mt-3'>Backend</li>
            <li className='font-sans text-lg text-white mt-3'>UI/UX-Design</li>
          </ul>
          <ul className='hidden lg:block'>
            <li className='font-sans text-xl  font-bold text-white'>Karyera</li>
            <li className='font-sans text-lg text-white mt-3'>Frontend</li>
            <li className='font-sans text-lg text-white mt-3'>Backend</li>
            <li className='font-sans text-lg text-white mt-3'>UI/UX-Design</li>
          </ul>
          <ul>
            <li className='font-sans text-xl  font-bold text-white'>Əlaqə</li>
            <li className='flex gap-3 font-sans text-md text-white mt-3 mx-1'><FaPhoneAlt className='mt-1' /> 077 444 90 10</li>
            <li className='flex gap-3 font-sans text-md text-white mt-3'><MdLocationOn size={25} className='' /> Gəncə,Cavadxan 47</li>
            <li className='flex gap-5 mt-5 text-slate-50 mx-1'>
              <a href='https://www.facebook.com/algoacademy21/'><FaFacebook size={25} /></a>
              <a href='https://www.instagram.com/algo.academy/'><FaInstagram size={25} /></a>
              <a href='https://www.linkedin.com/company/algoacademy/?originalSubdomain=az'><FaLinkedin size={25} /></a>
            </li>
          </ul>
        </div>
      </div>
      <div className='border-t border-neutral-600 text-center my-5 py-5 w-11/12 mx-auto'>
        <p className='text-white opacity-30'>Algo Academy &copy;2023</p>
      </div>
    </div>
  )
}

export default Footer
