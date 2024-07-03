import React,{useState} from 'react'
import '../Style/fastival.css'
import { Link } from 'react-router-dom'
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
        <div >Ignus</div>
        <div onClick={()=>setcurrent(1)} className={current === 1 ? "Active" : ""}>Varchas</div>
        <Link onClick={()=>setcurrent(2)} className={current === 2 ? "Active" : ""}>Spandan</Link>
        <Link onClick={()=>setcurrent(3)} className={current === 3 ? "Active" : ""}>Nimble</Link>
        <Link onClick={()=>setcurrent(4)} className={current === 4 ? "Active" : ""}>Prometeo</Link>
      </div>
      { functions[current]}
    </div>
  )
}
