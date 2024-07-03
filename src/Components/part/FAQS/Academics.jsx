import React from 'react'

export default function Academics() {
        const   QAN=[
        {
     id:1,
     question:"How developed is the IIT Jodhpur campus at Karwad?",
     Answer:"The permanent campus is built on 852 acres of land located about 20 km away from the center of the city of Jodhpur on National Highway 65 towards Nagaur, N-NE from the center of Jodhpur. The Permanent Campus of the Institute is the first fully-planned technical institute campus in India. Our campus has different girls and boys hostels and a supermarket from where you can buy daily needs. It has a library and a lecture hall building where all the classes are held. There is a health centre and 24 hours ambulance service. There is a separate residential area and a sports area where all the sports activities are done. We have different segments for different departments."
    }
]
  return (
     <div className='box'>
        <div className='faqs_heading'>Academics FAQs</div>
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
