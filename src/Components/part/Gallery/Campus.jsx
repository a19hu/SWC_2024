import React from 'react'
import '../../Style/gallery.css'
import fest1 from '../../../Images/Gallery/campus/image1.jpg'
import fest2 from '../../../Images/Gallery/campus/image4.jpg'
import fest3 from '../../../Images/Gallery/campus/image5.jpg'
import fest4 from '../../../Images/Gallery/campus/received_2475544265804885.jpeg'

export default function Campus() {
  return (
     <div className='box'>
      <div className='gallery_image'>

         <img src={fest1} alt=""  />
         <img src={fest2} alt=""  />
          <img src={fest3} alt=""  />
         <img src={fest4} alt=""  />

        </div>
    </div>
  )
}
