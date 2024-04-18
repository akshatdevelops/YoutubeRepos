import React, { useEffect, useState } from 'react'
import Chatmessage from './Chatmessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from './utils/ChatSlice'

const Livechat = () => {
    const dispatch=useDispatch()
    const[livetext,setlivetext]=useState("")
    const chattext=useSelector(store=>store.chat.message)
    useEffect(() => {
        const interval = setInterval(() => {
            //console.log("API polling")
            dispatch(addMessage({
                name:"Akshat",
                message:"generating chat"
            }))
        }, 2000)
        return () => clearInterval(interval)
    }, [])
    return (
        <>
        <div className='w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-scroll'>
            {
                chattext.map((ele,i)=>(<Chatmessage key={i} name={ele.name} message={ele.message} />))
            }

        </div>
        <div>
            <form onSubmit={(e)=>{
                e.preventDefault()
                dispatch(addMessage({
                    name:"Akshat",
                    message:livetext
                }))
                setlivetext("")
            }} className='w-full p-2 ml-2 border border-black'>
                <input className='px-2 w-96' type='text' value={livetext} onChange={(e)=>setlivetext(e.target.value)}/>
            </form>
            <button className='px-2 mx-2 bg-green-100'>Send</button>
        </div>
        </>
    )
}

export default Livechat
