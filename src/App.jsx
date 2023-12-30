import React from "react";
import Main_page from "./Main/Main-page";
import Login from "./Main/Login";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import FilterCard from "./Main/FilterCard";
import Music from "./Main/Music";
import Sports from "./Main/Sports"
import Comedy from "./Main/Comedy";
import Business from "./Main/Business";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route  path="/Main-page.jsx" element={<Main_page />} />
         
          <Route  path="/Main-page.jsx/Music.jsx" element={<Music/>} />
          <Route  path="/Main-page.jsx/Sports.jsx" element={<Sports/>} />
          <Route  path="/Main-page.jsx/Comedy.jsx" element={<Comedy/>} />
          <Route  path="/Main-page.jsx/Business.jsx" element={<Business/>} />
          <Route  path="/" element={<Login/>} />
      
        </Routes>
      </BrowserRouter>
    </>
  );
}
