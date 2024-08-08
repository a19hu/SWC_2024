import React from 'react'
import { QAN } from '../../../data/hostel_faq'
export default function Hostel() {

  return (
     <div className='box'>
        <div className='faqs_heading'>Hostel/Mess FAQs</div>
       <div>
  {QAN.map((data,index)=>{
    return <div>
          <details>
<summary>
    Q.{data.id} {data.question}
    </summary>
<div className='qan'>A. {data.Answer}</div>
</details>
<div  className='questio_diff'/>
    </div>
  })}
       </div>
    </div>
  )
}
