import React, { useRef } from 'react'
import { AiOutlinePlus} from "react-icons/ai";
 
const Input = (props) => {

  const inputBox = useRef();
  return (
    <div className='flex justify-center items-center mx-auto'>
        <input type="text" ref={inputBox} className='p-3 border-b w-[90%] h-[20%] text-sm flex justify-center items-center mx-auto focus:outline-none focus:border-blue-500 focus:shadow-sm focus:shadow-blue-300 text-slate-500' placeholder='Write the item name'/>
            <button onClick={()=>{props.handler(inputBox.current.value);inputBox.current.value=""}} className='shadow-md p-3 shadow-gray-600 flex justify-center items-center rounded  text-xl cursor-pointer h-[20%]'>
            <AiOutlinePlus/>
            </button>
            
    </div>
  )
}

export default Input