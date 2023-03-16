import { Checkbox, FormGroup, FormControlLabel } from "@mui/material";
import React from "react";

const CategoryFilter = () => {
  const handleChange = (e, v) => {
    console.log(e.target.id +" "+ v);
  };
  return (
    <div>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox id="1" defaultChecked onChange={handleChange} />}
          label="Nature"
        />
        <FormControlLabel
          control={<Checkbox id="2" defaultChecked onChange={handleChange} />}
          label="Adventure"
        />
        <FormControlLabel
          control={<Checkbox id="3" defaultChecked onChange={handleChange} />}
          label="Historical"
        />
        <FormControlLabel
          control={<Checkbox id="4" defaultChecked onChange={handleChange} />}
          label="Religious"
        />
      </FormGroup>
    </div>
  );
};

export default CategoryFilter;
