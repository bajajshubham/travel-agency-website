import { Checkbox, FormGroup, FormControlLabel } from "@mui/material";
import React, { useEffect, useState } from "react";

const CategoryFilter = (props) => {
  const [natureChecked, setNature] = useState(true);
  const [adventureChecked, setAdventure] = useState(true);
  const [historicalChecked, setHistorical] = useState(true);
  const [religiousChecked, setReligious] = useState(true);

  const handleChange = (e, v) => {
    const id = e.target.id;

    if (id === "1") setNature(v);
    if (id === "2") setAdventure(v);
    if (id === "3") setHistorical(v);
    if (id === "4") setReligious(v);
  };

  useEffect(() => {
    props.sendCategories({
      natureChecked,
      adventureChecked,
      historicalChecked,
      religiousChecked,
    });
  }, [natureChecked, adventureChecked, historicalChecked, religiousChecked]);
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
