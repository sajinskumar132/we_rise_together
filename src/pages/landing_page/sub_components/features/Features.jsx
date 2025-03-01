import React from 'react'
import chat_logo from "../../../../assets/chat.png";
import CustomCard from '../../../../custom_components/custom_card/CustomCard';
function Features() {
  return (
    <div>
      <p>FEATURES</p>
      <p>Discover Support, Share Your Journey, and Heal Together.</p>
      <div>
        <div>
          <CustomCard image={chat_logo} title={"Instant Talk (AI Support)"} description={"Need immediate relief? Our AI-powered chat is here to provide comforting words and guidance whenever you need support."}/>
        </div>
       
      </div>
    </div>
  )
}

export default Features