import React from 'react'
import '../Style/fastival.css'
import fest from '../../Images/festivals/prometeo_imahe.png'

export default function Prometeo() {
  return (
 <>
      
     <div className='box'>
         <div className='fest_context'>
         Prometeo is National Technical + Entrepreneurial Festival of IIT Jodhpur.
                Prometeo derives its name from the Greek word for forethinker, and celebrates disruptive 
                technologies through talks, workshops, and competitions.
         </div>
         <br />
         <br />
         <div className='fest_context'>
         Technology has been the heart of the development of the human race from the very beginning
                and is speculated to be its heart till infinity. The theme of Prometeo 2023, “Origin to Infinity”
                is centered around the same thought where we explore what technology has been in the past, what it 
                is now and what it can be in the future.
         </div>
          <br />
         <br />
         <div className='fest_context'>
         This year we are going to explore the past and future of 
                technological and entrepreneurial developments through a wide range of ideas developed and presented 
                during the course of Prometeo '23.
         </div>
          <br />
         <br />
         <div className='fest_context'>
            To know more about Prometeo Click Here
         </div>
      </div>
      <div className='box'>
        <div className='fest_image'>

         <img src={fest} alt=""  />
        </div>
      </div>
    </>
  )
}
