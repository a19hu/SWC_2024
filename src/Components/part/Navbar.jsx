import React,{useState} from 'react'
import { IoMdArrowDropdown } from "react-icons/io";

import { Link } from 'react-router-dom'
import '../Style/Navbar.css'
import logo from '../../Images/logo.png'
export default function Navbar() {
    const [demo,setdemo]= useState(false)
  return (
    <div className='navbar'>
<div className='Navbar_container'>
        <div className='logo_'>
            <Link to="/">
           <img src={logo} alt=""  className='logo_image'/>
           <div className='logo_context'>Student Wellbeing Committee</div>
            </Link>
        </div>
      <div className='nav_link'>
          <Link to="/">Home</Link>
          <div className='nav_link_container' onMouseEnter={()=>setdemo(true)} onMouseLeave={()=>setdemo(false)}>
           <div >
             Counsellers <IoMdArrowDropdown />
            </div>
            <div>

            <div className='nav_link_drop' style={ !demo ? {display:'none'} : {display:'flex'}}>
              <div>
           team
              </div>
              <div>
all team
              </div>
            </div>
            </div>
            </div>

          <div>Team <IoMdArrowDropdown /></div>
          <div>Activities <IoMdArrowDropdown /></div>
          <div>Life @ IITJ <IoMdArrowDropdown /></div>
          <div>FAQS <IoMdArrowDropdown /></div>
          <div>QuickLink <IoMdArrowDropdown /></div>
          <Link to="https://yourdost.com/">YourDost</Link>
      </div>
    </div>
    </div>

    
  )
}
