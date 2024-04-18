import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from './utils/AppSlice'
import { useState } from 'react'
import { youtube_suggestion_api } from './utils/Constants'
import { cacheResults } from './utils/SearchSlice'

const Head = () => {
  const dispatch=useDispatch()
  const togglehandler=()=>{
      dispatch(toggleMenu())
  }
  const [searchQuery,setsearchQuery]=useState("")
  const [searchsuggestions,setsearchsuggestions]=useState([])
  const [showsuggestions,setshowsuggestions]=useState(false)
  /* const searchQuery=useRef(null) */
  /* const [data,setData]=useState([]) */
  const searchCache=useSelector(store=>store.search)
  useEffect(()=>{
          const timer=setTimeout(()=>{
                if(searchCache[searchQuery])  {
                  setsearchsuggestions(searchCache[searchQuery])
                }
                else{
                  getData()
                }
          },200)
          return()=>{
            clearTimeout(timer)
          } 
  },[searchQuery])



  const getData=async()=>{
    console.log(searchQuery)
    const res=await fetch(youtube_suggestion_api+searchQuery)
    const json=await res.json()
    setsearchsuggestions(json[1])
    dispatch(cacheResults({
      [searchQuery]:json[1]
    }))

  }
  /* const debounce=(fn,d)=>{
    let timer
    return (...args)=>{
      clearTimeout(timer)
      timer=setTimeout(()=>{
           fn.apply(this,args)
      },d)
    }
  } */
  /* const throttle=(fn,d)=>{
        let flag=true
        return (...args)=>{
          if(flag){
            fn.apply(this,args)
            flag=false
            setTimeout(()=>{
               flag=true 
            },d)
          } 
        }

  }
  const betterFunction=debounce(getData,3000) */
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow'>
      <div className='flex col-span-1'>
        {/* onClick={togglehandler}-Using the direct function reference is more efficient because it avoids creating a new function on every render. This is important for performance optimization, especially when dealing with components that may re-render frequently.
        onClick={()=>togglehandler(some parameter)} -However, if you need to pass additional parameters to the action creator or handle specific logic before dispatching the action, you might use an inline arrow function in that specific case: */}
       <img onClick={togglehandler} className='h-8 cursor-pointer' alt='menu' src='https://www.svgrepo.com/show/312300/hamburger-menu.svg'/>
       <img className="h-8 mx-2" alt='logo' src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg'/>
      </div>

      <div className='col-span-10 px-10'>
        <div>
        <input type='text' /* ref={searchQuery} */ value={searchQuery}  onChange={(e)=>setsearchQuery(e.target.value)} /* onKeyUp={betterFunction} */ onFocus={()=>setshowsuggestions(true)} onBlur={()=>setshowsuggestions(false)}/>
        <button>Search</button>
        </div>
        {showsuggestions && (<div className='fixed bg-white py-10 px-5 w-[20rem]'>
        <ul>
        {
          searchsuggestions.map((ele)=>

            (<li key={ele}>{ele}</li>)
          )
        }
        </ul>
        </div>
        )}
      </div> 

      <div className='col-span-1'>
        <img className='h-8' alt='user' src='https://cdn-icons-png.flaticon.com/512/666/666201.png'/>
      </div>
    </div>
  )
}

export default Head
