import React from 'react'

function CustomCard({image,title,description}) {
  return (
    <div>
        <img src={image}/>
        <p>{title}</p>
        <p>{description}</p>
    </div>
  )
}

export default CustomCard