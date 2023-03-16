import React from "react";
import { Route, Routes } from "react-router-dom";
import Help from "../components/Help/Help";
import Home from "../components/Home/Home";
import Services from "../components/Services/Services";
import Trips from "../components/Trips/Trips";
import Filters from "./Filters/Filters";

const AllRoutes = (props) => {

  return (
    <Routes>
      <Route path="/" element={<Home lang={props.lang}/>} />
      <Route path="/trips" element={<Trips lang={props.lang}/>}>
        <Route path="upcoming" element={<Filters lang={props.lang} />} />
        <Route path="students" element={<Filters lang={props.lang} />} />
        <Route path="accessible" element={<Filters lang={props.lang}/>} />
        <Route path="plan" element={<Filters lang={props.lang} />} />
        <Route path="findplace" element={<Filters  lang={props.lang}/>} />
      </Route>
      <Route path="/services" element={<Services  lang={props.lang} />} />
      <Route path="/help" element={<Help />} />
      <Route
        path="*"
        element={<h1 className="error">404: Page not found</h1>}
      />
    </Routes>
  );
};

export default AllRoutes;
