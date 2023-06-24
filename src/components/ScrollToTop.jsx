import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop =({sidebar,setSidebar}) => {
    const {pathname} = useLocation();
  useEffect(()=>
  {
     window.scroll(0,0)
  },[pathname])
}

export default ScrollToTop
