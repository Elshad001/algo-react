import { Link } from 'react-router-dom'
import { FaBars} from 'react-icons/fa'
import logo from '../images/logo.png'


const Header = ({sidebar,setSidebar}) => {


    return (
        <div>
                 <div className='fixed top-0 left-0 w-full h-18 bg-white flex justify-between  py-4 px-5 lg:px-20 z-50'>
                  <Link to='/' className=' w-4/12 text-2xl font-bold -mt-1'><img className='w-12 h-12' src={logo} alt=''/></Link>
                  <nav className=' w-6/12 font-sans pt-1.5 px-12 hidden lg:block'>
                      <ul className='w-full flex justify-between'>
                          <li className='w-28 hover:text-sky-500 hover:border-sky-500 hover:border-b-4 text-center'><Link to='/about'>Haqqımızda</Link></li>
                          <li className='w-28 hover:text-sky-500 hover:border-sky-500 hover:border-b-4  text-center'><Link to='/contact'>Əlaqə</Link></li>
                          <li className='relative w-28 align-sub group hover:text-sky-500 hover:border-sky-500 hover:border-b-4 transition-all z-10  text-center'>Kurslar
                          <ul className=' absolute top-7 z-10 w-full h-0 text-zinc-800 overflow-hidden bg-slate-100 group-hover:h-auto  transition-all duration-200 '>
                              <Link to='/courses/frontend'><li className='hover:text-slate-600 text-center px-2 py-2 hover:bg-cyan-300'>Frontend</li></Link>
                              <Link to='/courses/backend'><li className='hover:text-slate-600 text-center px-2 py-2 hover:bg-cyan-300'>Backend</li></Link>
                              <Link to='/courses/design'><li className='hover:text-slate-600 text-center px-2 py-2 hover:bg-cyan-300'>UI/UX Design</li></Link>
                          </ul>
                          </li>
                          <li className='w-28 hover:text-sky-500 hover:border-sky-500 hover:border-b-4 text-center'><Link to='/career'>Karyera</Link></li>
                          <li className='w-28 hover:text-sky-500 hover:border-sky-500 hover:border-b-4 text-center'><Link to='/technoblog'>Texnoblog</Link></li>
                      </ul>
                  </nav>
                  <span className=' w-2/12 lg:block h-11 hover:text-white   bg-sky-400  hover:bg-gradient-to-r from-green-500 to-sky-500 rounded text-center py-2 hidden '><a href='https://docs.google.com/forms/d/1PexI6f6e4npvzC5QSfHBqxPBoKVeldJXcIgIRAhEBYw/edit#responses'>Müraciət Et</a></span>
                    <span className='block lg:hidden py-4 mr-1'><FaBars size={25} onClick={()=>setSidebar(!sidebar)}/></span>
              </div>
        </div>
       

    )
}

export default Header
