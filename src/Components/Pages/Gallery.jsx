import React,{useState} from 'react'
import Campus from '../part/Gallery/Campus'
import StudentActivities from '../part/Gallery/StudentActivities'
import Fests from '../part/Gallery/Fests'


export default function Gallery() {
    const [current,setcurrent]=useState(0)
 const functions=[
     <Campus/>,
     <StudentActivities/>,
     <Fests/>
    ]
  return (
   <div className='festival gallery'>
      <div className='box_navbar'>
        <div onClick={()=>setcurrent(0)} className={current === 0 ? "Active" : ""} >Campus</div>
        <div onClick={()=>setcurrent(1)} className={current === 1 ? "Active" : ""}>Student Activities</div>
        <div onClick={()=>setcurrent(2)} className={current === 2 ? "Active" : ""}>Fests</div>
      </div>
      { functions[current]}
    </div>
  )
}
