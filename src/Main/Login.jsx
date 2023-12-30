import { React } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";
// import Navbar from "./Navbar";

export default function Login() {
  const navigate = useNavigate();
  function goTo() {
    navigate("./Main-page.jsx");
  }

  return (
    <>
      <form className="login-container" onSubmit={goTo}>
        <div className="container">
          <div className="title">Sign In</div>
          <div className=" inp">
            <div className="title_2">Email</div>
            <input type="text" name="" id="" required />
          </div>
          <div className="inp">
            <div className="title_2">Password</div>
            <input type="text" name="" id="" required />
            <div className="submit">
              <button type="submit"  >Submit</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
