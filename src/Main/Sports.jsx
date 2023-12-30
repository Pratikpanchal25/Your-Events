import React from "react";
import Card from "./Card";
import SportsData from "./SportsData"
import Main_card from "./Main_card";
import "./Main-page.css";

export default function Sports() {
  return (
    <>
      <div className="heading-part-2">Your Events For Sports</div>
      <div className=" part-3">
        {SportsData.map((data) => (
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
