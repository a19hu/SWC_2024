import React from 'react';
import '../Style/hostels.css';
import image1 from '../../Images/hostel/image1.jpg';
import image2 from '../../Images/hostel/image2.jpg';
import image3 from '../../Images/hostel/image3.jpg';
import image4 from '../../Images/hostel/image4.jpg';
import image5 from '../../Images/hostel/image5.jpg';
import image6 from '../../Images/hostel/image6.jpg';
import image7 from '../../Images/hostel/image7.jpg';
import image8 from '../../Images/hostel/image8.jpg';
import image9 from '../../Images/hostel/image9.jpg';
import image10 from '../../Images/hostel/image10.jpg';
import image11 from '../../Images/hostel/image11.jpg';

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
          <img src={image1} alt="Hostel Image 1" />
          <img src={image2} alt="Hostel Image 2" />
          <img src={image3} alt="Hostel Image 3" />
          <img src={image4} alt="Hostel Image 4" />
          <img src={image5} alt="Hostel Image 5" />
          <img src={image6} alt="Hostel Image 6" />
          <img src={image7} alt="Hostel Image 7" />
          <img src={image8} alt="Hostel Image 8" />
          <img src={image9} alt="Hostel Image 9" />
          <img src={image10} alt="Hostel Image 10" />
          <img src={image11} alt="Hostel Image 11" />
        </div>
      </div>
    </div>
  );
}
