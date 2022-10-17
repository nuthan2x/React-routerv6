import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  const [indexactive, setindexactive] = useState(true);
  return (
    <nav className='navbar'>

      <NavLink to='/' className={({ isActive }) => { setindexactive(isActive ? true :false ) ; return (indexactive ? 'link active' : 'link')}}>
        home
      </NavLink>
      <NavLink to='/about' className={({ isActive }) => {isActive && setindexactive(false); return (isActive ? 'link active' : 'link')}}>
        About
      </NavLink>  
      <NavLink to='/products' className={({ isActive }) =>{isActive && setindexactive(false); return (isActive ? 'link active' : 'link')}}>
        Products
      </NavLink>
      <NavLink to='/login' className={({ isActive }) =>{isActive && setindexactive(false); return (isActive ? 'link active' : 'link')}}>
        Login
      </NavLink>
    </nav>
  )
}

export default Navbar