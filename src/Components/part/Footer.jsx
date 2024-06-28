import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/footer.css'
export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer_container'>
                <div className='footer_context'>
                    <div className='footer_help'>
                        <div className='footer_swc'> SWC - IITJ</div>
                        <div>

                            IIT Jodhpur Student Wellbeing Committee team will be happy to help you anytime.
                        </div>
                        <div>

                            Join our freshers' forum:
                        </div>
                        <div className='footer_fresher_connect'>
                            <Link to="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Fgroups%2Fiitjff13%2F%3Fref%3Dshare">FRESHER'S FORUM</Link>
                            <Link>YOURS QUESTIONS</Link>
                        </div>

                    </div>
                    <div className='youtube_link'>
                        <Link to="https://www.youtube.com/results?search_query=positive+attitude+and+mental+awareness" style={{ color: "white" }}>Click here
                        </Link>
                        {" "}to "watch videos about developing a positive attitude and mental awareness"
                    </div>
                </div>
                <div className='social_media'>

                </div>
            </div>
            <div className='footer_copyright'>
                © 2022 Copyright: Student Wellbeing Committee - IIT Jodhpur
            </div>
        </div>
    )
}
