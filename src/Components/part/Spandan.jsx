import React from 'react'
import '../Style/fastival.css'
import fest from '../../Images/festivals/spandan_image.jpg'

export default function Spandan() {
  return (
  <>
      
     <div className='box'>
         <div className='fest_context'>
         Spandan is the intra college cultural fest of IIT Jodhpur. Usually the first
                fest of the session, it is participated by an enthusiastic crowd, eager to portray their talents in
                the cult arena. Versatility in the various categories is extensive, with competitions in fields like
                drama, dance, singing, literature, photography events, informals and fashion show among others.
                Three days of Spandan awaken the whole campus leaving them to prepare all night.
         </div>
         <br />
         <br />
         <div className='fest_context'>
         Spandan is one of the first public occasions to occur in the year and hence it also brings together
                students from all years to interact with each other. Participation with zeal and showing the hidden
                creativity tamed inside an individual is the motive of the fest.
         </div>
          <br />
         <br />
      </div>
      <div className='box'>
        <div className='fest_image'>

         <img src={fest} alt=""  />
        </div>
      </div>
    </>
  )
}
