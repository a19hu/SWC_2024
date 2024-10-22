import React from 'react'
import '../Style/Councellerteam.css'
import anjali from '../../Images/anjali_bhatia.jpg'
import prasad from '../../Images/prasad_gadkari.jpg'
import akash from '../../Images/akash_vishwakarma.jpeg'
import nabeelah from '../../Images/Nabeelah_Siddiqui.jpg'
export default function CounsellorTeam() {
  return (
    <div className='Councellerteam'>
        <div className='contant_ box'>
         <div>
            Mental health is a state of mental well-being that enables people to cope with the stresses of life, realise their abilities, learn well and work well, and contribute to their community... Mental health is a basic human right. And it is crucial to personal, community and socio-economic development." (World Health Organization, 2024). It is as important as physical health, because both are connected through the body and its nervous system and are affected by environmental factors. Just as one would reach out to a doctor for a physical ailment, similarly, one should not hesitate to contact a Professional (Counsellor) for psychological problems.
         </div>
        </div>
        <div className='box'>
       <div className='well_team_heading'>Wellbeing Team</div>
       <div className='info_about_team_container'>

        <div className='info_about_team'>
            <img src={anjali} alt="" className='team_img' />
            <div className='team_details'>
                <div className='team_details_name'>Dr Anjali Bhatia</div>
                <div className='team_content'>Counsellor</div>
                <div className='team_content'>PhD Psychology</div>
                <div className='team_content'><span style={{fontWeight:600}}> Contact :</span> +91 9897347663</div>
                <div className='team_content'><span style={{fontWeight:600}}> Mail : </span> anjalibhatia@iitj.ac.in</div>
            </div>
        </div>
        <div className='info_about_team'>
            <img src={prasad} alt="" className='team_img' />
            <div className='team_details'>
                <div className='team_details_name'>Dr Prasad Gadkari</div>
                <div className='team_content'>Counsellor</div>
                <div className='team_content'></div>
                <div className='team_content'><span style={{fontWeight:600}}> Contact :</span> +91 98223 55796</div>
                <div className='team_content'><span style={{fontWeight:600}}> Mail : </span> prasadgadkari@osstaff.iitj.ac.in</div>
            </div>
        </div>
        <div className='info_about_team'>
            <img src={akash} alt="" className='team_img' />
            <div className='team_details'>
                <div className='team_details_name'>Dr Akash Verma</div>
                <div className='team_content'>Counsellor</div>
                <div className='team_content'>M.Phil Clinical Psychology (RCI)</div>
                <div className='team_content'><span style={{fontWeight:600}}> Contact :</span> +91 9651530172</div>
                <div className='team_content'><span style={{fontWeight:600}}> Mail : </span> akashvishwakarma@iitj.ac.in</div>
            </div>
        </div>
        <div className='info_about_team'>
            <img src={nabeelah} alt="" className='team_img' />
            <div className='team_details'>
                <div className='team_details_name'>Ms Nabeelah Siddiqui</div>
                <div className='team_content'>Well-being Moderator</div>
                <div className='team_content'>M.A. Clinical Psychology</div>
                <div className='team_content'><span style={{fontWeight:600}}> Contact :</span> +91 8770205067</div>
                <div className='team_content'><span style={{fontWeight:600}}> Mail : </span> nabeelah@osstaff.iitj.ac.in</div>
            </div>
        </div>
        
       </div>
        </div>
      
    </div>
  )
}
