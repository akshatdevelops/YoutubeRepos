import React, { useEffect } from 'react'

const Chatmessage = ({name,message}) => {
    
  return (
    <div className='shadow-sm'>
       <img className='h-8' alt='user' src='https://cdn-icons-png.flaticon.com/512/666/666201.png'/>
       <span >{name}:</span> 
       <span>{message}</span>
      
    </div>
  )
}

export default Chatmessage
