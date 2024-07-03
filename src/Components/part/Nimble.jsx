import React from 'react'
import '../Style/fastival.css'
import fest from '../../Images/image 3.png'

export default function Nimble() {
  return (
  <>
      
     <div className='box'>
         <div className='fest_context'>
            The Indian Institute Of Technology Jodhpur, since its inception has played an efficacious role in enhancing the socio-cultural aspects of education in its domain. The Inter college Socio-cult fest IGNUS epitomizes the same.
         </div>
         <br />
         <br />
         <div className='fest_context'>
            Ignus witnesses the participation of numerous stalwarts in the various arenas offered. The fest gives a platform to some of the country’s best hidden and unfathomed talents. With the total footfall amounting to about 1015 thousand, Ignus has witnessed the absorbing performance of famous artists like Andrew Newton, the band Pentagram, Shilpa Rao, Javed Ali among others.
         </div>
          <br />
         <br />
         <div className='fest_context'>
            What makes Ignus different is that it coalesces all the three aspects required to be lucrative, thrilling and full of fun. The team of Ignus consists of student volunteers who work to promote creativity and intellectualism, the foundation of this festival.
         </div>
          <br />
         <br />
         <div className='fest_context'>
            The fest intends to promote social awareness about the flaring issues rampant in the nation via trademark IITJ ways like NUKKAD, stage shows, etc. As stated above, Ignus comprises of an array of cultural events, activities and competitions which keep the fest full of life and zest. Ignus has become the front runner and the benchmark for all college fests making it the most anticipated extravaganza of IITJ. It has attracted major sponsors and extensive media coverage over the years. Ignus has created an unmatched aura of science and technology spectacle at the campus of IITJ.
         </div>
          <br />
         <br />
         <div className='fest_context'>
            To know more about Ignus Click Here
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
