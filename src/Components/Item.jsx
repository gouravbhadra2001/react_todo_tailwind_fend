import React from 'react'
import {BsTrash} from 'react-icons/bs'
import { useState } from 'react'

const Item = (props) => {

const [done, setDone] = useState(false);
  return (
    <div className='border-b p-5 flex justify-between    items-center '>
        <div onClick={()=>{setDone(!done)}} className={" select-none cursor-pointer flex justify-start space-x-3  items-center ms-0" }>
        <span className=' text-slate-400 text-sm'>
           {props.time}
        </span>
        <span className={`${done===true?"line-through":""} text-slate-800 text-xl`}>
        {props.item}
        </span>
        </div>
       <div className=' text-red-500 text-lg me-0'>
            <BsTrash onClick={()=>{props.removeHandler(props.id)}}/>
       </div>
    </div>
  )
}

export default Item