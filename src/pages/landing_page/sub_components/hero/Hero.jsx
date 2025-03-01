import React from 'react'
import banner_img_1 from '../../../../assets/banner_img_1.jpg'
import banner_img_2 from '../../../../assets/banner_img_2.jpg'
import banner_img_3 from '../../../../assets/banner_img_3.jpg'
import banner_img_4 from '../../../../assets/banner_img_4.jpg'
import abstract_img_1 from '../../../../assets/abstract_img_1.png'
import './heroStyle.css'
function Hero() {
  return (
    <div className='hero_main_container'>
        <div className='hero_main_sub_container_1'>
            <p className='hero_headline'>You Are Not Alone - We Rise Together</p>
            <p className='hero_sub_headling'>Struggling with depression? Find support, understanding, and a community that cares. "Together We Rise" connects you with people who truly listen, so you can share, heal, and grow—one step at a time.</p>
            <div className='hero_main_sub_container_1_1'>
                <button className='hero_button_1'>Join the Community</button>
                <button className='hero_button_2'>Instent talk</button>
            </div>
        </div>
        <div className='hero_main_sub_container_2'>
            <div>
                <img src={banner_img_1} className='hero_banner_image_set_1'/>
            </div>
            <div className='hero_main_sub_container_2_1'>
               <img src={banner_img_2} className='hero_banner_image_set_2'/>
               <img src={banner_img_3} className='hero_banner_image_set_2'/>
            </div>
            <div>
                <img src={banner_img_4} className='hero_banner_image_set_1'/>
            </div>
        </div>
        {/* <div className='hero_main_sub_container_3'>
            <img src={abstract_img_1}/>
        </div> */}
    </div>
  )
}

export default Hero