import React, { useEffect, useState } from 'react'
import { youtube_api_key } from './utils/Constants'
import VideoCards from './VideoCards'
import { Link } from 'react-router-dom'
import Livechat from './Livechat'

const VideoContainer = () => {
  const [videos,setvideos]=useState([])
  
  useEffect(()=>{
        getVideos();

  },[])
  const getVideos=async()=>{
    const res=await fetch(youtube_api_key)
    const json=await res.json()
    setvideos(json.items)
    if(videos.length>0){

     console.log(videos)
    }
    
  }
  return ( 
    <div className='flex flex-wrap'>
      {
        videos.map((ele)=>
        {
          return <div key={ele.id}> <Link to={"/watch?v="+ ele.id}> <VideoCards  info={ele}/> </Link> </div>
        }
        )
      }
      
       
    </div>
  )
}

export default VideoContainer
