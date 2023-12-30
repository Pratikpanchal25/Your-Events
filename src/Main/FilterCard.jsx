import React from "react";
import Main_card from "./Main_card";
import Data from "./Data";
import "./Main-page.css"

export default function FilterCard() {
 function allData() {
    Data.map((item)=>{
        console.log(item.id)
    })

    
 }
  return (
    <>
      
      <div className="part-3">
         

         { 
         
         Data.map((data) => (
            
           <Main_card
             Main_card_image={data.Main_card_image}
             Date_Main={data.Date_Main}
             Month={data.Month}
             Main_card_name={data.Main_card_name}
             Venue={data.Venue}
             Price={data.Price}
           />
         ))}
       </div>

    </>
  );
}
