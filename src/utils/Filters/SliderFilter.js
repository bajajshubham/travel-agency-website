import React from "react";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}`;
}

const SliderFilter = (props) => {
  const minDistance = 10;
  const [value1, setValue1] = React.useState([100, 1000]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
    props.sendValues(value1)
  };

  return (
    <Slider
      sx={{
        marginLeft: "5px",
        marginRight: "5px",
        width: "-webkit-fill-available",
      }}
      getAriaLabel={() => "Minimum distance"}
      value={value1}
      min={100}
      max={1000}
      onChange={handleChange1}
      valueLabelDisplay="auto"
      getAriaValueText={valuetext}
      disableSwap
    />
  );
};

export default SliderFilter;
