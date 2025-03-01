import React from 'react'
import './customCardStyle.css'
function CustomCard({image,title,description}) {
  return (
    <div className='custom_card_main_container'>
        <img src={image} className='custom_card_image'/>
        <p className='custom_card_title'>{title}</p>
        <p className='custom_card_description'>{description}</p>
    </div>
  )
}

export default CustomCard