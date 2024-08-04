import React from 'react';
import '../../Style/gallery.css';
import fest1 from '../../../Images/Gallery/activities/32251943373_fb38e85c74_o.jpg';
import fest2 from '../../../Images/Gallery/activities/32117090103_576df63ef3_o.jpg';
import fest3 from '../../../Images/Gallery/activities/32414739922_43b234d0b4_o.jpg';
import fest4 from '../../../Images/Gallery/activities/32445006111_131233cf82_o.jpg'; // Added missing fest4
import fest5 from '../../../Images/Gallery/activities/32526663626_74f6171304_o.jpg';
import fest6 from '../../../Images/Gallery/activities/32551561080_13f227215c_o.jpg';
import fest7 from '../../../Images/Gallery/activities/32685552690_4daa660d31_o.jpg';
import fest8 from '../../../Images/Gallery/activities/32932146865_fece5dc6f9_o.jpg';
import fest9 from '../../../Images/Gallery/activities/4.jpg';
import fest10 from '../../../Images/Gallery/activities/41007894742_0fd7a89467_k.jpg';
import fest11 from '../../../Images/Gallery/activities/41049465821_fe31166eac_k.jpg';
import fest12 from '../../../Images/Gallery/activities/6.jpg';
import fest13 from '../../../Images/Gallery/activities/7.jpg';
import fest14 from '../../../Images/Gallery/activities/8.jpg'; // Corrected fest14 and fest15
import fest15 from '../../../Images/Gallery/activities/IMG_3372.jpg';
import fest16 from '../../../Images/Gallery/activities/dlfbndl.jpg'; // Corrected fest16

export default function StudentActivities() {
  return (
    <div className='box'>
      <div className='gallery_image'>
        <img src={fest1} alt="Fest 1" />
        <img src={fest2} alt="Fest 2" />
        <img src={fest3} alt="Fest 3" />
        <img src={fest4} alt="Fest 4" />
        <img src={fest5} alt="Fest 5" />
        <img src={fest6} alt="Fest 6" />
        <img src={fest7} alt="Fest 7" />
        <img src={fest8} alt="Fest 8" />
        <img src={fest9} alt="Fest 9" />
        <img src={fest10} alt="Fest 10" />
        <img src={fest11} alt="Fest 11" />
        <img src={fest12} alt="Fest 12" />
        <img src={fest13} alt="Fest 13" />
        <img src={fest14} alt="Fest 14" />
        <img src={fest15} alt="Fest 15" />
        <img src={fest16} alt="Fest 16" />
      </div>
    </div>
  );
}
