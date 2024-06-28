import React, { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from 'react-router-dom'
import '../Style/Navbar.css'
import logo from '../../Images/logo.png'
import Aasmaan from '../pdf/Aasmaan.pdf'
export default function Navbar() {



  return (
    <div className='navbar'>
      <div className='Navbar_container'>
        <div className='logo_'>
          <Link to="/">
            <img src={logo} alt="" className='logo_image' />
            <div className='logo_context'>Student Wellbeing Committee</div>
          </Link>
        </div>
        <div className='nav_link' >
          <Link to="/">Home</Link>
          <div className='nav_link_container'>
            <div >
              Counsellors <IoMdArrowDropdown />
            </div>

              <div className='nav_link_drop' >
                <div>
                  Counsellors Team
                </div>
                <div>
                  Student Experience
                </div>
              </div>
            </div>
<div className='nav_link_container'>
            <div >
              Team <IoMdArrowDropdown />
            </div>

              <div className='nav_link_drop' >
                <div>
                  Counsellors Team
                </div>
                <div>
                  Student Experience
                </div>
              </div>
            </div>
          <div>Activities <IoMdArrowDropdown /></div>
          <div>Life @ IITJ <IoMdArrowDropdown /></div>
          <Link to="">FAQS</Link>
          <div className='nav_link_container'>
            <div >
              QuickLink <IoMdArrowDropdown />
            </div>

              <div className='nav_link_drop' >
                <Link to="">
                  Chairperson's slides
                </Link>
                <Link to="">
                  Bus Schedule
                </Link>
                 <Link to="">
                  Hotel map
                </Link>
                 <a href='http://home.iitj.ac.in/~ankitasharma' target='_blank' rel='noopener'>
                  Assoc. Dean (Students)
                </a>
                 <a href="http://iitj.ac.in/" target='_blank' rel='noopener'>
                  IITJ
                </a>
                 <a href={Aasmaan} target='_blank' rel='noopener'>
                  Aasmaan
                </a>
              </div>
            </div>
          <a href="https://yourdost.com/" target='_blank' rel='noopener'>YourDost</a>
        </div>
      </div>
    </div>


  )
}
