import React from "react";
import DestinationSearchFilter from "./DestinationSearchFilter";
import { TextField, InputAdornment } from "@mui/material";

const countries = [
  { code: "AD", label: "Andorra", phone: "376" },
  {
    code: "AE",
    label: "United Arab Emirates",
    phone: "971",
  },
];

const DestinationFilter = () => {
  return (
    <div>
      <DestinationSearchFilter
        id="country-select-demo"
        data={countries}
        label="Choose a country"
      />
      <DestinationSearchFilter
        id="city-select-demo"
        data={countries}
        label="Choose a city"
      />
      <TextField
        id="radius-number"
        label="Radius"
        variant="standard"
        type="number"
        InputProps={{
          endAdornment: <InputAdornment position="start">km</InputAdornment>,
        }}
      />
    </div>
  );
};

export default DestinationFilter;
