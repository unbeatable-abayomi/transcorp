import React from 'react';
import couch from '../sbscImages/couch.png';

export default function AboutUs() {
    return (
        <div className="about_us">
            <center>
               <p className="about_us_text">ABOUT US</p>
               <p className="best_place_text">A best place to enjoy<br/> your life</p>
               <p className="transcop_details">Transcorp Hilton Hotel is situated in the heart of Nigeria’s Federal Capital Territory, a 40-<br/>minute drive from the Nnamdi Azikiwe International Airport in Abuja. It is a 670–room, 5-star<br/> hotel that provides luxury accommodation, exotic cuisine, and fully equipped meeting rooms<br/> and to business travellers and tourists from all over the world</p>
            <img src={couch} alt="couch" className="aboutUs_image"/>
               </center>
        </div>
    )
}
