import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import api from "../../services/api";
import "./style.css";
import EventForm from "./EventForm";

function Section2() {
  return (
    <div className="section2-content" >
      <p className="p-section2"> Schedule a playdate and events with another pet owner and help your pet make friends.  </p>
      <EventForm />

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
          <p className="p-section3">Make a new friend by sending a message to another pet owner. </p>
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
    </div>
  );
}

export default Profile;
