import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const buttonlist=["Cricket","Gaming","Song","Live","Cooking"]
  return (
    <div className='flex'>
      {
        buttonlist.map((ele,i)=>{
          return <div key={i}><Button name={ele}/></div>
        })
      }
    </div>
  )
}

export default ButtonList
