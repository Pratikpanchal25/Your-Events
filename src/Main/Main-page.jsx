import { React } from "react";
import "./Main-page.css";
import Card from "./Card";
import Main_card from "./Main_card";
import Data from "./Data";
import Music from "./Music";
import { useNavigate } from "react-router-dom";

export default function Main_page() {
  const navigate = useNavigate();
  function goto1() {
    navigate("./Music.jsx");
  }
  function goto2() {
    navigate("./Sports.jsx");
  }
  function goto3() {
    navigate("./Comedy.jsx");
  }
  function goto4() {
    navigate("./Business.jsx");
  }
  function gotoSignIn() {
    navigate("./Login.jsx");
  }


  return (
    <>
      <div className="nav-container">
        <div className="nav background">
          <div className="navbar">
            <div className="logo">Your Events</div>
            <div className="lists">
              <li className="li-home">Home</li>

              <li>
                <div className="nav-input">
                  <span>
                    <img className="search-svg" src="search.svg" alt="" />
                  </span>
                  <input
                    className="nav_inp"
                    type="text"
                    placeholder="  Search Events"
                    name=""
                    id=""
                  />
                </div>
              </li>

              {/* <li onClick={gotoSignIn}>Sign In</li> */}
            </div>
          </div>

          <div className="heading">
            <div className="lines">
              <div className="line-2">#Feel Free To ENJOY</div>
              <div className="plan">
                <button className="plan-btn">Plan Your New Year</button>
              </div>
            </div>
            <img className="event-img" src="./Party.jpg" alt="" />
          </div>

          {/* // Cards starts from here  */}

          <div className="find">
            <div  onClick={goto1}>
              <Card  Name_card={"Music"} Card_image={"/Music.jpg"} />
            </div>
            <div onClick={goto2}>
             
              <Card Name_card={"Sports"} Card_image={"/Sports.jpg"} />
            </div>

            <div onClick={goto3}>
              <Card Name_card={"Comedy"} Card_image={"./Comedy.jpg"} />
            </div>
            <div onClick={goto4}>
            <Card  Name_card={"Business"} Card_image={"/Business.jpg"} />
            </div>
          </div>
        </div>

        {/* Main cards Starts Here */}

        <div className="heading-part-2">Events Near By You</div>
      </div>
      <div className="part-3-container">
        <div className="part-3">
          {Data.map((data) => (
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
      </div>
    </>
  );
}

// {movies.map((movie) => (
//   <Card movie={movie} />
// ))}
