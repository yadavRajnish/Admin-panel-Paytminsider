import React from 'react'

export default function ProjectButton(props) {
  return (
    <div>
        <button style={{
         border: "1px solid",
         padding: "10px 20px",
         textDecoration: "none",
         fontWeight:'600',
         color: "white",
         backgroundColor : "black",
         borderRadius : '5px'
      }}
      className='ProjectButton'
      >
        {props.title}
        </button>
    </div>
  )
}
