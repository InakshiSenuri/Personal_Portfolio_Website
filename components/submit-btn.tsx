import React from 'react'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import {useFormStatus} from 'react-dom'

export default function SubmitBtn() {
    const {pending} = useFormStatus();
  return (
    <div>
      <button type='submit' className='flex flex-row justify-center items-center gap-2  bg-white rounded-2xl w-[120px] py-[5px] font-semibold disabled:bg-opacity-65'
      disabled={pending} >
        {
            pending? (<div className='h-5 w-5 animate-spin rounded-full border-b-2 border-gray-900'></div>):(
                <>
                Send         <MdOutlineKeyboardDoubleArrowRight /></>
            )
        }
</button>
    </div>
  )
}
