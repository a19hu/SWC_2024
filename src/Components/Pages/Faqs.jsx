import React,{useState} from 'react'
import '../Style/faqs.css'
import General from '../part/FAQS/General'
import Academics from '../part/FAQS/Academics'
import Registration from '../part/FAQS/Registration'
import Hostel from '../part/FAQS/Hostel'
import Misc from '../part/FAQS/Misc'
export default function Faqs() {
    const [current,setcurrent]=useState(0)
 const functions=[
      <General/>,
      <Academics/>,
      <Registration/>,
      <Hostel/>,
      <Misc/>
    ]
  return (
    <div className='faqs'>
       <div className='box_navbar'>
        <div onClick={()=>setcurrent(0)} className={current === 0 ? "Active" : ""} >General</div>
        <div onClick={()=>setcurrent(1)} className={current === 1 ? "Active" : ""}>Academics</div>
        <div onClick={()=>setcurrent(2)} className={current === 2 ? "Active" : ""}>Registration</div>
        <div onClick={()=>setcurrent(3)} className={current === 3 ? "Active" : ""}>Hostel</div>
        <div onClick={()=>setcurrent(4)} className={current === 4 ? "Active" : ""}>Misc</div>
      </div>
      { functions[current]}
       <div>
        For further queries mail us at wellbeing@iitj.ac.in
       </div>
    </div>
  )
}
