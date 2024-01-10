import React from 'react'
import Card from './Card'

import Main_card from './Main_card'
import "./Main-page.css";
import Data from './Data';

export default function Comedy() {

  const comedyArray = Data.filter((data)=>{
    return data.id === "Comedy"
  })
  return (
<>  
    <div className="heading-part-2">Your Events For Comedy</div>
    <div className=' part-3' >
      
         {comedyArray.map((data) => (
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
  )
}
