import React from "react";
import { useLocation } from "react-router-dom";
import "./style.css";
import EventForm from "../Profile-Componets/EventForm";
import Chat from "../Profile-Componets/Chat";
import YouTube from "react-youtube";
import  {ReactComponent as Brand } from "../images/pawprint.svg"



function Section2() {
  return (
    <div className="section3-content" >
      <p className="p-section2"> Schedule a playdate and events with another pet owner and help your pet make friends.  </p>
      <EventForm />

    </div>

  );

}

function Section3() {
  return (
    <div className="section2-content" >
      <p className="p-section3">Make a new friend by sending a message to another pet owner. </p>
      <Chat />

    </div>
  );
}


function Profile() {
  const location = useLocation();
  const username = location.state?.username || "Pet owner";

  return (

    <div className="p-container">
      <div className="section1-container">


        {/* Seção 1: user name  */}
        <div className="profile-info">
          <h1>Hello,</h1>
          <h2> {username}!</h2>
        </div>

        {/* Seção 2: criar schedule events and invite other friends */}
        <div className="sections-wrapper">
          <div className="section-2">
            <Section2 />
          </div>


          {/* Seção 3:  */}
          <div className="section-3">
            <Section3 />
          </div>


          {/* Seção 4:  */}
          <div className="section-4">
            <p className="p-section4"> Discover pet shops and grooming nearby. </p>
            <a href="/mapSearch">
              <button> Pet shops </button>
            </a>
          </div>
        </div>
      </div>
      <div className="p-logo">
            
            <Brand />
            
          </div>
      {/* Seção 6:  */}
      <div className="section-5">
        <p className="p-section4"> Join the pack of Pet Lovers and embark on a journey of unconditional love and endless tail-wagging happiness. 
          Discover the transformative power of pets in our heartfelt video below.</p>
            <YouTube videoId="w0K6UBzGQ7E" />
          </div>

         

    </div>
  );
}

export default Profile;
