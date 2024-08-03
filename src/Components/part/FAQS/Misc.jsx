import React from 'react'
import { QAN } from '../../../data/misc_faq'

export default function Misc() {

  return (
   <div className='box'>
        <div className='faqs_heading'>Misc FAQs</div>
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
