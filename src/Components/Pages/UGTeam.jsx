import React,{useEffect} from 'react'
import '../Style/ugteam.css'
import anjali from '../../Images/anjali_bhatia.jpg'
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";
import { TiSocialLinkedin } from "react-icons/ti";
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

export default function UGTeam() {
      useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className='ugteam'>
      <div className='ugteam_heading'>UG Team</div>
      <div className='box'>
        <div className='ugteam_heading'>Student Heads</div>
         <div className='info_about_team_container'>
            <div className='info_about_team' data-aos="fade-up"
     data-aos-duration="1000">
            <img src={anjali} alt="" className='team_img' />
            <div className='team_details'>
                <div className='team_details_name'>Dr Anjali Bhatia</div>
                <div className='team_content'> <FaWhatsapp color='green' size={20} style={{marginRight:7}}/>+91-7611856898</div>
                <div className='team_content'><span style={{fontWeight:600}}> Hometown :</span> +91 9897347663</div>
                <div className='team_content'><span style={{fontWeight:600}}> Branch : </span> anjalibhatia@iitj.ac.in</div>
                <div className='team_content_small'>PhD Psychology</div>
                <div className='team_content_icon'>
                    <Link><MdOutlineEmail size={20}/></Link>
                    <Link><IoLogoInstagram size={19}/></Link>
                    <Link><TiSocialLinkedin size={22}/></Link>
                </div>
            </div>
        </div>
            <div className='info_about_team'>
            <img src={anjali} alt="" className='team_img' />
            <div className='team_details'>
                <div className='team_details_name'>Dr Anjali Bhatia</div>
                <div className='team_content'> <FaWhatsapp color='green' size={20} style={{marginRight:7}}/>+91-7611856898</div>
                <div className='team_content'><span style={{fontWeight:600}}> Hometown :</span> +91 9897347663</div>
                <div className='team_content'><span style={{fontWeight:600}}> Branch : </span> anjalibhatia@iitj.ac.in</div>
                <div className='team_content_small'>PhD Psychology</div>
                <div className='team_content_icon'>
                    <Link><MdOutlineEmail size={20}/></Link>
                    <Link><IoLogoInstagram size={19}/></Link>
                    <Link><TiSocialLinkedin size={22}/></Link>
                </div>
            </div>
        </div>
        </div>
      </div>
      <div className='box'>
        <div className='ugteam_heading'>Student Assistant Heads</div>
<div className='info_about_team_container'>
            <div className='info_about_team'>
            <img src={anjali} alt="" className='team_img' />
            <div className='team_details'>
                <div className='team_details_name'>Dr Anjali Bhatia</div>
                <div className='team_content'> <FaWhatsapp color='green' size={20} style={{marginRight:7}}/>+91-7611856898</div>
                <div className='team_content'><span style={{fontWeight:600}}> Hometown :</span> +91 9897347663</div>
                <div className='team_content'><span style={{fontWeight:600}}> Branch : </span> anjalibhatia@iitj.ac.in</div>
                <div className='team_content_small'>PhD Psychology</div>
                <div className='team_content_icon'>
                    <Link><MdOutlineEmail size={20}/></Link>
                    <Link><IoLogoInstagram size={19}/></Link>
                    <Link><TiSocialLinkedin size={22}/></Link>
                </div>
            </div>
        </div>
            <div className='info_about_team'>
            <img src={anjali} alt="" className='team_img' />
            <div className='team_details'>
                <div className='team_details_name'>Dr Anjali Bhatia</div>
                <div className='team_content'> <FaWhatsapp color='green' size={20} style={{marginRight:7}}/>+91-7611856898</div>
                <div className='team_content'><span style={{fontWeight:600}}> Hometown :</span> +91 9897347663</div>
                <div className='team_content'><span style={{fontWeight:600}}> Branch : </span> anjalibhatia@iitj.ac.in</div>
                <div className='team_content_small'>PhD Psychology</div>
                <div className='team_content_icon'>
                    <Link><MdOutlineEmail size={20}/></Link>
                    <Link><IoLogoInstagram size={19}/></Link>
                    <Link><TiSocialLinkedin size={22}/></Link>
                </div>
            </div>
        </div>
        </div>

      </div>
      <div className='box'>
        <div className='ugteam_heading'>Student Guides</div>
        <div className='info_about_team_container_ug'>
            <div className='info_about_team_ug'>
            <img src={anjali} alt="" className='team_img' />
            <div className='team_details'>
                <div className='team_details_name'>Dr Anjali Bhatia</div>
                <div className='team_content'> <FaWhatsapp color='green' size={20} style={{marginRight:7}}/>+91-7611856898</div>
                <div className='team_content'><span style={{fontWeight:600}}> Hometown :</span> +91 9897347663</div>
                <div className='team_content'><span style={{fontWeight:600}}> Branch : </span> anjalibhatia@iitj.ac.in</div>
                <div className='team_content_small'>PhD Psychology</div>
                <div className='team_content_icon'>
                    <Link><MdOutlineEmail size={20}/></Link>
                    <Link><IoLogoInstagram size={19}/></Link>
                    <Link><TiSocialLinkedin size={22}/></Link>
                </div>
            </div>
        </div>
        <div className='info_about_team_ug'>
            <img src={anjali} alt="" className='team_img' />
            <div className='team_details'>
                <div className='team_details_name'>Dr Anjali Bhatia</div>
                <div className='team_content'> <FaWhatsapp color='green' size={20} style={{marginRight:7}}/>+91-7611856898</div>
                <div className='team_content'><span style={{fontWeight:600}}> Hometown :</span> +91 9897347663</div>
                <div className='team_content'><span style={{fontWeight:600}}> Branch : </span> anjalibhatia@iitj.ac.in</div>
                <div className='team_content_small'>PhD Psychology</div>
                <div className='team_content_icon'>
                    <Link><MdOutlineEmail size={20}/></Link>
                    <Link><IoLogoInstagram size={19}/></Link>
                    <Link><TiSocialLinkedin size={22}/></Link>
                </div>
            </div>
        </div>
        <div className='info_about_team_ug'>
            <img src={anjali} alt="" className='team_img' />
            <div className='team_details'>
                <div className='team_details_name'>Dr Anjali Bhatia</div>
                <div className='team_content'> <FaWhatsapp color='green' size={20} style={{marginRight:7}}/>+91-7611856898</div>
                <div className='team_content'><span style={{fontWeight:600}}> Hometown :</span> +91 9897347663</div>
                <div className='team_content'><span style={{fontWeight:600}}> Branch : </span> anjalibhatia@iitj.ac.in</div>
                <div className='team_content_small'>PhD Psychology</div>
                <div className='team_content_icon'>
                    <Link><MdOutlineEmail size={20}/></Link>
                    <Link><IoLogoInstagram size={19}/></Link>
                    <Link><TiSocialLinkedin size={22}/></Link>
                </div>
            </div>
        </div>
        <div className='info_about_team_ug'>
            <img src={anjali} alt="" className='team_img' />
            <div className='team_details'>
                <div className='team_details_name'>Dr Anjali Bhatia</div>
                <div className='team_content'> <FaWhatsapp color='green' size={20} style={{marginRight:7}}/>+91-7611856898</div>
                <div className='team_content'><span style={{fontWeight:600}}> Hometown :</span> +91 9897347663</div>
                <div className='team_content'><span style={{fontWeight:600}}> Branch : </span> anjalibhatia@iitj.ac.in</div>
                <div className='team_content_small'>PhD Psychology</div>
                <div className='team_content_icon'>
                    <Link><MdOutlineEmail size={20}/></Link>
                    <Link><IoLogoInstagram size={19}/></Link>
                    <Link><TiSocialLinkedin size={22}/></Link>
                </div>
            </div>
        </div>
        </div>

      </div>
    </div>
  )
}
