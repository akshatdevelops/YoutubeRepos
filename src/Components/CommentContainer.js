import React from 'react'

const CommentContainer = () => {
  const CommentsData=[
    {
        name:"Akshat",
        text:"I  am  commenting to show you the demo",
        replies:[

        ]
    },
    {
        name:"Akshat",
        text:"I  am  commenting to show you the demo",
        replies:[

        ]
    },
    {
        name:"Akshat",
        text:"I  am  commenting to show you the demo",
        replies:[

        ]
    },
    {
        name:"Akshat",
        text:"I  am  commenting to show you the demo",
        replies:[

        ]
    },
    {
        name:"Akshat",
        text:"I  am  commenting to show you the demo",
        replies:[

        ]
    },
    {
        name:"Akshat",
        text:"I  am  commenting to show you the demo",
        replies:[

        ]
    },
    {
        name:"Akshat",
        text:"I  am  commenting to show you the demo",
        replies:[

        ]
    },
    {
        name:"Akshat",
        text:"I  am  commenting to show you the demo",
        replies:[

        ]
    },
    {
        name:"Akshat",
        text:"I  am  commenting to show you the demo",
        replies:[

        ]
    },
    {
        name:"Akshat",
        text:"I  am  commenting to show you the demo",
        replies:[

        ]
    },
    {
        name:"Akshat",
        text:"I  am  commenting to show you the demo",
        replies:[
            {
                name:"Akshat",
                text:"I  am  commenting to show you the demo",
                replies:[
        
                ]
            },
            {
                name:"Akshat",
                text:"I  am  commenting to show you the demo",
                replies:[
        
                ]
            },
            {
                name:"Akshat",
                text:"I  am  commenting to show you the demo",
                replies:[
        
                ]
            },
            {
                name:"Akshat",
                text:"I  am  commenting to show you the demo",
                replies:[
        
                ]
            },
            {
                name:"Akshat",
                text:"I  am  commenting to show you the demo",
                replies:[
        
                ]
            },
        ]
    },
    {
        name:"Akshat",
        text:"I  am  commenting to show you the demo",
        replies:[

        ]
    },
    {
        name:"Akshat",
        text:"I  am  commenting to show you the demo",
        replies:[

        ]
    },
    {
        name:"Akshat",
        text:"I  am  commenting to show you the demo",
        replies:[

        ]
    },
    {
        name:"Akshat",
        text:"I  am  commenting to show you the demo",
        replies:[

        ]
    },
    {
        name:"Akshat",
        text:"I  am  commenting to show you the demo",
        replies:[

        ]
    },
    {
        name:"Akshat",
        text:"I  am  commenting to show you the demo",
        replies:[

        ]
    },


  ]

  const Comment=({data})=>{
    const {name,text,replies}=data
    return (
        <div className='flex-shadow-sm'>
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>

            </div>

        </div>
    )
  }

  const CommentsList=({comments})=>{
    return comments.map((comment,index)=>(
        <div key={index}>
            <Comment data={comment}/>
            <div key={index} className='pl-5 border border-1-black'>
                <CommentsList comments={comment.replies}/>

            </div>
        </div>
    ))

  }




  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-semibold'>Comments</h1>
        <CommentsList comments={CommentsData}/>
      
    </div>
  )
}

export default CommentContainer
