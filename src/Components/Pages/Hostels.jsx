import React from 'react'
import '../Style/hostels.css'
import fest from '../../Images/image 3.png'

export default function Hostels() {
  return (
    <div className='hostels'>
      <div className='box'>
         <div className='hostels_heading'>
Hostels
         </div>
         <div className='cantant'>
            All hostel rooms (~80 square feet) are air-cooled, and have basic furniture facilities like table, chair, bed and almirah and Internet connection. The hostel (of 236 rooms) will have a gymnasium, a games room, a TV room, a music room, and a reading room. The Dining Hall caters to 1000 students. It will have separate vegetarian and non-vegetarian kitchens and dining areas, along with a generic food court.
         </div>
      </div>
       <div className='box'>
         <div className='hostels_heading'>
Hostel Images
         </div>
         <div className='gallery_image'>

         <img src={fest} alt=""  />
         <img src={fest} alt=""  />
          <img src={fest} alt=""  />
         <img src={fest} alt=""  />

        </div>
      </div>
    </div>
  )
}
