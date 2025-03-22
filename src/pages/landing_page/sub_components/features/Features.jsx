import React from "react";
import ai_logo from '../../../../assets/artificial-intelligence.png'
import chat_logo from "../../../../assets/chat.png";
import blog_logo from '../../../../assets/blog.png';
import doctor_logo from '../../../../assets/stethoscope.png';
import events_logo from '../../../../assets/conference.png'
import motive_logo from '../../../../assets/raise-hand.png'
import CustomCard from "../../../../custom_components/custom_card/CustomCard";
import website_logo from "../../../../assets/website_logo.png";
import "./featuresStyle.css";
function Features() {
  return (
    <div id="features" className="features_main_container">
      <p className="features_headline">FEATURES</p>
      <p className="features_sub_headline">
        Discover Support, Share Your Journey, and Heal Together.
      </p>
      <div className="features_listing_main_container">
        <div className="features_listing_container_1">
          <CustomCard
            image={ai_logo}
            title={"Instant Talk (AI Support)"}
            description={
              "Need immediate relief? Our AI-powered chat is here to provide comforting words and guidance whenever you need support."
            }
          />
        </div>
        <div className="features_listing_container_2">
          <CustomCard
            image={chat_logo}
            title={"Real-Time Chat & Community Support"}
            description={
              "Connect with others who understand. Join conversations, share your experiences, and find encouragement from a caring community."
            }
          />
           <CustomCard
            image={blog_logo}
            title={"Share Your Story"}
            description={
              "Express yourself and let your voice be heard. Post your thoughts, experiences, and motivational stories to inspire and be inspired."
            }
          />
        </div>
        <div className="features_listing_container_1">
            <img src={website_logo} className="features_container_website_logo"/>
        </div>
        <div className="features_listing_container_2">
        <CustomCard
            image={doctor_logo}
            title={"Find a Mental Health Therapist"}
            description={
              "Looking for professional help? Easily find and connect with licensed mental health professionals for the support you need."
            }
          />
           <CustomCard
            image={events_logo}
            title={"Join Wellness Events"}
            description={
              "Participate in workshops, group sessions, and live events designed to promote mental well-being and personal growth."
            }
          />
        </div>
        <div className="features_listing_container_1">
         <CustomCard
            image={motive_logo}
            title={"Daily Motivation & Self-Care Tips"}
            description={
              "Stay inspired with daily motivational content, self-care tips, and uplifting messages to help you stay strong and positive."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Features;
