import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import { GrClose } from 'react-icons/gr';

const Sidebar = ({sidebar,setSidebar}) => {
  console.log(sidebar)
  return (
   <div className='fixed top-0 left-0 z-50  w-full h-auto bg-slate-100'>
    <div className='flex justify-between px-5 py-5'>
    <Link to='/' className=' w-4/12 text-2xl font-bold -mt-1'  onClick={()=>setSidebar(!sidebar)}><img className='w-12 h-12' src={logo} alt=''/></Link>
    <span className='block lg:hidden py-4 mr-1'><GrClose  size={25} onClick={()=>setSidebar(!sidebar)}/></span>
    </div>
        <nav className='flex-col justify-between w-full h-auto pt-5 px-12 list-none'>
            <li className='text-center text-lg font-sans border-b-2 py-3'><Link to='/about' onClick={()=>setSidebar(!sidebar)}>Haqqımızda</Link></li>
            <li className='text-center text-lg font-sans border-b-2 py-3'><Link to='/contact' onClick={()=>setSidebar(!sidebar)}>Əlaqə</Link></li>
            <li className='text-center text-lg font-sans border-b-2 py-3'>Kurslar</li>
            <li className='text-center text-lg font-sans border-b-2 py-3'><Link to='/career' onClick={()=>setSidebar(!sidebar)}>Karyera</Link></li>
            <li className='text-center text-lg font-sans border-b-2 py-3'><Link to='/technoblog' onClick={()=>setSidebar(!sidebar)}>Texnobloq</Link></li>
        </nav>
       <div className='w-full text-center'><button className='w-52  h-11 hover:text-white mx-auto  my-3  bg-sky-400  hover:bg-gradient-to-r from-green-500 to-sky-500 rounded text-center py-2 '><a href='https://google.com'>Müraciət et</a></button></div>
    </div>
  )
}

export default Sidebar
