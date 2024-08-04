import React from 'react'
import '../Style/fastival.css'
import fest from '../../Images/festivals/nimble_image.jpg'

export default function Nimble() {
  return (
  <>
      
     <div className='box'>
         <div className='fest_context'>
         Nimble, the intra college technical fest provides a platform to the techno buds
                of the college to show their hidden talent. Nimble comprises of four action packed days filled with
                a great variety of tech and science events ranging from intense mind boggling events such as
                robotics, Electronics, programming to fun filled events like angry bird, quizzes, crypto etc.
         </div>
         <br />
         <br />
         <div className='fest_context'>
            Apart from the events, the talks by eminent personalities in the field of Science and Technology are
                organized to motivate students to work harder as there is no end to discoveries and inventions.
         </div>
          <br />
         <br />
         <div className='fest_context'>
            What makes Ignus different is that it coalesces all the three aspects required to be lucrative, thrilling and full of fun. The team of Ignus consists of student volunteers who work to promote creativity and intellectualism, the foundation of this festival.
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
