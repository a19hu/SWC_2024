import React,{useState} from 'react'
import '../Style/fastival.css'
import Ignus from '../part/Ignus'
import Varchas from '../part/Varchas'
import Spandan from '../part/Spandan'
import Nimble from '../part/Nimble'
import Prometeo from '../part/Prometeo'
export default function Festival() {
    const [current,setcurrent]=useState(0)

    const functions=[
      < Ignus/>,
      <Varchas/>,
      <Spandan/>,
      <Nimble/>,
      <Prometeo/>
    ]
  return (
    <div className='festival'>
      <div className='box_navbar'>
        <div onClick={()=>setcurrent(0)} className={current === 0 ? "Active" : ""} >Ignus</div>
        <div onClick={()=>setcurrent(1)} className={current === 1 ? "Active" : ""}>Varchas</div>
        <div onClick={()=>setcurrent(2)} className={current === 2 ? "Active" : ""}>Spandan</div>
        <div onClick={()=>setcurrent(3)} className={current === 3 ? "Active" : ""}>Nimble</div>
        <div onClick={()=>setcurrent(4)} className={current === 4 ? "Active" : ""}>Prometeo</div>
      </div>
      { functions[current]}
    </div>
  )
}
