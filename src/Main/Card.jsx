import React from "react";
import "./card.css";
import { useNavigate } from "react-router-dom";
export default function Card({ Card_image, Name_card }) {

    
  
  return (
    <>
      <div className="part-2">
       

        <div className="card">
          <img
           
            className="card-image"
            src={Card_image}
            alt="No image"
          />
          <div className="name">{Name_card}</div>
        </div>
      </div>
    </>
  );
}
