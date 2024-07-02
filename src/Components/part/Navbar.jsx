import React, { useState } from 'react';
import { IoMdArrowDropdown} from 'react-icons/io';
import { Link } from 'react-router-dom';
import '../Style/Navbar.css';
import logo from '../../Images/logo.png';
import Aasmaan from '../pdf/Aasmaan.pdf';
import { IoMenuOutline } from 'react-icons/io5';

export default function Navbar() {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };

  return (
    <div className='navbar'>
      <div className='Navbar_container'>
        <Link to="/" className='logo'>
          <img src={logo} alt="logo" className='logo_image' />
          <div className='logo_context'>Student Wellbeing Committee</div>
        </Link>
        <div className='nav_toggle' onClick={toggleNavLinks}>
          <IoMenuOutline size={30} />
        </div>
        <div className={`nav_link ${showNavLinks ? 'active' : ''}`}>
          <Link to="/">Home</Link>
          <div className='nav_link_container'>
            <div className='nav_link_with_icon'>
              Counsellors <IoMdArrowDropdown />
            </div>
            <div className='nav_link_drop'>
              <div><Link to="/CounsellorTeam">Counsellors Team</Link>  </div>
              <div>Student Experience</div>
            </div>
          </div>
          <div className='nav_link_container'>
            <div className='nav_link_with_icon'>
              Team <IoMdArrowDropdown />
            </div>
            <div className='nav_link_drop'>
              <div> <Link to="/FacultyAdvisor"> Faculty Advisors </Link></div>
              <div>Student Experience</div>
            </div>
          </div>
          <div className='nav_link_container'>
            <div className='nav_link_with_icon'>
              Activities <IoMdArrowDropdown />
            </div>
            <div className='nav_link_drop'>
              <div>Activity 1</div>
              <div>Activity 2</div>
            </div>
          </div>
          <div className='nav_link_container'>
            <div className='nav_link_with_icon'>
              Life @ IITJ <IoMdArrowDropdown />
            </div>
            <div className='nav_link_drop'>
              <div>Life 1</div>
              <div>Life 2</div>
            </div>
          </div>
          <Link to="">FAQS</Link>
          <div className='nav_link_container'>
            <div className='nav_link_with_icon'>
              QuickLink <IoMdArrowDropdown />
            </div>
            <div className='nav_link_drop'>
              <div>Chairperson's slides</div>
              <div>Bus Schedule</div>
              <div to="" >Hotel map</div>
              <a href='http://home.iitj.ac.in/~ankitasharma' target='_blank' rel='noopener noreferrer'>
                Assoc. Dean (Students)
              </a>
              <a href="http://iitj.ac.in/" target='_blank' rel='noopener noreferrer'>
                IITJ
              </a>
              <a href={Aasmaan} target='_blank' rel='noopener noreferrer'>
                Aasmaan
              </a>
            </div>
          </div>
          <a href="https://yourdost.com/" target='_blank' rel='noopener noreferrer'>YourDost</a>
        </div>
      </div>
    </div>
  );
}
