import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/footer.css'
import { PiFacebookLogoBold } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineDiscord } from "react-icons/ai";
import { LiaTelegram } from "react-icons/lia";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer_container'>
                <div className='footer_context'>
                    <div className='circle_map_image circle_map_image_laptop'></div>

                    <div className='footer_help'>
                        <div className='footer_swc'> SWC IITJ</div>
                        <div>
                            IIT Jodhpur Student Wellbeing Committee team will be happy to help you anytime.
                            Join our freshers' forum:
                        </div>
                        <div>

                            Join our freshers' forum:
                        </div>
                        <div className='footer_fresher_connect'>
                            <Link to="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Fgroups%2Fiitjff13%2F%3Fref%3Dshare">FRESHER'S FORUM</Link>
                            <Link>YOURS QUESTIONS</Link>
                        </div>

                    </div>
                    <div className='circle_map'>
                    <div className='circle_map_image'></div>
                    </div>
                    <div className='circle_map_image circle_map_image_phone'></div>
                    <div>
                        <div className='icon_with_details_container'>
                            <div className='icon_with_details'>
                                <FaLocationDot size={35} />
                                NH 65, Karwad, Jodhpur <br />
                                Rajasthan
                            </div>
                            <div className='icon_with_details'>
                                <FaPhoneAlt size={35} />
                                +91-291-2801906  <br />
                                Mon - Fri, 10:00-17:00
                            </div>
                        </div>
                        <div className='social_details'>
                            <div>
                                Join our official social media handles
                            </div>
                            <div>
                                <Link><PiFacebookLogoBold size={35} /></Link>
                                <Link><FaInstagram size={35} /></Link>
                                <Link><AiOutlineDiscord size={35} /></Link>
                                <Link><LiaTelegram size={35} /></Link>
                                <Link><MdOutlineEmail size={35} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='social_media'>

                </div>
            </div>
            <hr />
            <div className='footer_copyright'>
                © 2024 Copyright: Student Wellbeing Committee - IIT Jodhpur
            </div>
        </div>
    )
}
