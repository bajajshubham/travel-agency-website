import React from "react";
import { Route, Routes } from "react-router-dom";
import Help from "../components/Help/Help";
import Home from '../components/Home/Home'
import Services from "../components/Services/Services";
import Trips from "../components/Trips/Trips";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/trips" element={<Trips />}/>
      <Route path="/services" element={<Services />}/>
      <Route path="/help" element={<Help />}/>
    </Routes>
  );
};

export default AllRoutes;
