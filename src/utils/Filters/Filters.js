import React from "react";
import './Filters.css'
import SliderFilter from "./SliderFilter";

const Filters = () => {
  return (
    <div className="wrapper">
      <div className="filter-set">
        <SliderFilter />
      </div>
    </div>
  );
};

export default Filters;
