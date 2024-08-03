import React from 'react'
import { QAN } from '../../../data/registration_faq'

export default function Registration() {
 
  return (
    <div className='box'>
        <div className='faqs_heading'>Registration FAQs</div>
       <div>
  {QAN.map((data,index)=>{
    return <div>
          <details>
<summary>
    Q.{data.id} {data.question}
    </summary>
<div className='qan'>A. {data.answer}</div>
</details>
<div  className='questio_diff'/>
    </div>
  })}
       </div>
    </div>
  )
}
