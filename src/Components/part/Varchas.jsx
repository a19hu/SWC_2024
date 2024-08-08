import React from 'react'
import '../Style/fastival.css'
import fest from '../../Images/festivals/varchas_image.jpg'
export default function Varchas() {
  return (
    <>
      
     <div className='box'>
         <div className='fest_context'>
           Varchas is the sports fest of IIT Jodhpur organised every year in the month of February. This year it was organised from 30th Oct to 2nd Nov. Varchas celebrates the spirit of sportsmanship and serves as a platform to showcase countless hours of perspiration put in by college teams to achieve excellence in sports. Varchas was first conducted in the year 2011, with a vision of promoting sports among the colleges of India, particularly Rajasthan and providing the athletes in India a platform to showcase their talent.
               </div>
         <br />
         <br />
         <div className='fest_context'>
          Competitions are held in the fields of football, cricket, table tennis, lawn tennis, badminton, squash, volleyball, basketball and athletics in national level stadiums of Jodhpur. Varchas promotes healthy competition and is a great opportunity for the teams to prove their mettle in their respective sports.
               </div>
          <br />
         <br />
         <div className='fest_context'>
         Moreover, being the educated core of the country, the students of IIT Jodhpur try to fulfil their social duties through "Soch -The Social Aspect of Varchas". Soch is a platform where we take up pertinent social issues and try to find possible solutions through discussions and debates; spread awareness and conduct drives to involve people spanning across varied backgrounds. We attempt to create a profound social impact for the amelioration of the society.
                </div>
          <br />
         <br />
        
         <div className='fest_context'>
           To know more about Varchas Click Here
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
