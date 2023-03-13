import React from "react";
import CategoryFilter from "./CategoryFilter";
import SliderFilter from "./SliderFilter";
import "./Filters.css";
import DestinationFilter from "./DestinationFilter/DestinationFilter";

const Filters = () => {
  return (
    <div className="wrapper">
      <div className="filter-set">
        Apply filters
        <div>
          Budget
          <SliderFilter />
        </div>
        <div>
          Category
          <CategoryFilter />
        </div>
        <div>
          Destination
          <DestinationFilter />
        </div>
      </div>
    </div>
  );
};

export default Filters;
