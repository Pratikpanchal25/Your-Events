import React from "react";
import "./main-card.css";
export default function Main_card( { Main_card_image, Month , Date_Main , Main_card_name , Venue , Price }) {
  return (
    <div className="Main-events">
      <div className="Event">
        <img className="Main-event-img" src={Main_card_image} alt="" />
        <div className="details">
          <div className="date">
            <div className="day"> {Date_Main} </div>
            <div className="month"> {Month}</div>
          </div>
          <div className="n-d-p">
            <div className="Main-name"> {Main_card_name} </div>
            <div className="Address"> {Venue}</div>
            <div className="price">Rs. {Price}/- </div>
          </div>
        </div>
      </div>
    </div>
  );
}
