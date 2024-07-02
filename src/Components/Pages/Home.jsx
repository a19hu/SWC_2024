import React, { useState, useEffect } from 'react';
import '../Style/home.css'
import Carousel from 'react-bootstrap/Carousel';
import logo from '../../Images/logo.png'

export default function Home() {
   const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
    const images = [
    'https://via.placeholder.com/600x400?text=Image+1',
    'https://via.placeholder.com/600x400?text=Image+2',
    'https://via.placeholder.com/600x400?text=Image+3',
  ];

  const  interval = 3000;
  useEffect(() => {
    const autoScroll = setInterval(goToNext, interval);

    return () => clearInterval(autoScroll);
  }, [currentIndex, interval]);

  const links=[
    {
      name:"Faculty Advisors",
      link:""
    },
    {
      name:"Counsellors Team",
      link:""
    },
    {
      name:"UG Team",
      link:""
    },
    {
      name:"PG Team",
      link:""
    },
    {
      name:"General Queries",
      link:""
    },
    {
      name:"Discord Server",
      link:""
    },
    {
      name:"Instagram",
      link:""
    },
    {
      name:"Telegram",
      link:""
    },
    {
      name:"Facebook",
      link:""
    },
    {
      name:"PHC Contact no. : +91 291 280 1190",
      link:""
    },
  ]
  const Announ=[
    "We are excited to launch our newsletter Aasmaan.",
    "For Dates and Instructions for registration Click Here."
  ]
  return (
    <div className='Home_page'>
     <div className="carousel">
      <div className="carousel-inner">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
      <button className="carousel-button prev" onClick={goToPrevious}>❮</button>
      <button className="carousel-button next" onClick={goToNext}>❯</button>
    </div>
    
      <div className='home_container'>
<div className='contant_ box'>
          <div>
            Mental health is a state of mental well-being that enables people to cope with the stresses of life, realise their abilities, learn well and work well, and contribute to their community... Mental health is a basic human right. And it is crucial to personal, community and socio-economic development." (World Health Organization, 2024). It is as important as physical health, because both are connected through the body and its nervous system and are affected by environmental factors. Just as one would reach out to a doctor for a physical ailment, similarly, one should not hesitate to contact a Professional (Counsellor) for psychological problems.
          </div>
      </div>
      <div className='our_moto box' >
        <div className='our_moto_heading heading'>
Our Motto
        </div>
          <div className='our_moto_ cantant'>
            The upcoming years of your stay at IIT Jodhpur will give your life a new direction both academically and personally. As the time passes, there will be various challenges waiting for you. We, the Student Wellbeing Committee is devoted to providing personal guidance and necessary resources to students to deal with all these challenges. The team tries to ensure that IITJ is not just an institute, but a home away from home for you
          </div>
      </div>
       <div className='stu_exp box'>
        <div className='stu_exp_heading heading'>
Student Experiences
        </div>
          <div className='our_moto_ cantant'>
The student experience with the counselors at IIT Jodhpur was akin to discovering an oasis amidst the academic journey. 
          </div>
          <div className='stu_exp_list'>
            <li>
              The student experience with the counselors at IIT Jodhpur was akin to discovering an oasis amidst the academic journey. 
            </li>
            <li>
              I have had a total of approximately 10 sessions with ma'am. She is a great listener. Initially I was facing a lot of issues at IIT Jodhpur, those issues are still their but I have learned to handle them with a broader perspective which was a result of my sessions with ma'am
            </li>
          </div>
          <div className='stu_exp_button'>Read more</div>
      </div>
       <div className='info box'>
        <div className='info_heading heading'>
Info
        </div>
        <div className='information_list'>
          <div className='info_box'>
            <div>
Important Links
            </div>
            <hr />
            <div>

            {links.map((data,intex)=>
            {
              return <li><a href="" className='links_info'>{data.name}</a></li>
            }
            )}
            
            </div>
          </div>
          <div className='info_box'>
            <div>
Announcements
            </div>
            <hr />
            <div className='annou_new'>New</div>
            <div className='annou_context'>
             {Announ.map((data,index)=>{
            return <li>{data}</li>
             })}
            </div>

          </div>
          <div className='info_box'>
            <div>
Facebook
            </div>
            <hr />

          </div>
        </div>
      </div>
      </div>
      
      
    </div>
  )
}
