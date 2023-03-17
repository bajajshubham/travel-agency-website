import React, { useState } from 'react'
import { Slider, Switch } from "@mui/material";
import { Stack } from "@mui/system";
import {
 BrightnessHigh, BrightnessLow,
} from "@mui/icons-material";
import './Accessibility.css'



const Accessibility = (props) => {

  const [valueBright, setValue] = useState(props.brightness_val);
  const [valueContrast, setValue1] = useState(props.contrast_val);
  const [valueSaturate, setValue2] = useState(props.saturate_val);
  const [valueMono, setValue3] = useState(props.gray_val);

  const [Dchecked, setDChecked] = useState(props.DSwitch);
  const [Pchecked, setPChecked] = useState(props.PSwitch);
  const [Tchecked, setTChecked] = useState(props.TSwitch);

  const [toggle1, setToggleSwitch1] = useState(false);
  const [toggle2, setToggleSwitch2] = useState(false);
  const [toggle3, setToggleSwitch3] = useState(false); 

  const toggleDswitch = (e, Dchecked) =>{
    setToggleSwitch2(!toggle2);
    setToggleSwitch3(!toggle3);
    setDChecked(Dchecked);
    props.sendDSwitch(Dchecked);
  } 

  const togglePswitch = (e, Pchecked) =>{
    setToggleSwitch1(!toggle1);
    setToggleSwitch3(!toggle3);
    setPChecked(Pchecked);
    props.sendPSwitch(Pchecked);
  } 

  const toggleTswitch = (e, Tchecked) =>{
    setToggleSwitch2(!toggle2);
    setToggleSwitch1(!toggle1);
    setTChecked(Tchecked);
    props.sendTSwitch(Tchecked);
  } 

  const changedValueBright = (e, valueBright) => {
    setValue(valueBright);
    props.sendBrightness(valueBright);
  }

  const changedValueContrast = (e, valueContrast) => {
    setValue1(valueContrast);
    props.sendContrast(valueContrast);
  }

  const changedValueSaturate = (e, valueSaturate) => {
    setValue2(valueSaturate);
    props.sendContrast(valueSaturate);
  }

  const changedValueMono = (e, valueMono) => {
    setValue3(valueMono);
    props.sendMonochrome(valueMono);
  }

  const label = { inputProps: { 'aria-label': 'Switch' } };
  

  return (

    <div className="Options-box">
      <div className="Color-Blindness">
        <h4>Accessibility Options</h4>
        <h4>Color Blindness Settings</h4>
        <p>Deuteranopia:
          <Switch {...label} datatest-id="Deuteranopia"  disabled={toggle1} onChange={toggleDswitch}/>
        </p>
        <p>Protanopia:
          <Switch {...label} datatest-id="Protanopia"  disabled={toggle2} onChange={togglePswitch} />
        </p>
        <p>Tritanopia:
          <Switch {...label} datatest-id="Tritanopia"  disabled={toggle3} onChange={toggleTswitch} />
        </p>
      <h4>Screen Effect Settings</h4>
      <p>Brightness</p>    
        <Stack spacing={2} direction="row" alignItems="center">
          <BrightnessLow />
          <Slider aria-label="Brightness" step={0.2} value={valueBright} max={2} onChange={changedValueBright} />
          <BrightnessHigh />
        </Stack>
        <p>Contrast</p>
        <Stack spacing={2} direction="row" alignItems="center">
          <BrightnessLow />
          <Slider aria-label="Contrast" step={0.2} value={valueContrast} max={2} onChange={changedValueContrast} />
          <BrightnessHigh />
        </Stack>
        <p>Saturation</p>
        <Stack spacing={2} direction="row" alignItems="center">
          <BrightnessLow />
          <Slider aria-label="Saturation" step={0.2} value={valueSaturate} max={2} onChange={changedValueSaturate} />
          <BrightnessHigh />
        </Stack>
        <p>Monochrome</p>
        <Stack spacing={2} direction="row" alignItems="center">
          <BrightnessLow />
          <Slider aria-label="Monochrome" step={0.2} value={valueMono} max={2} onChange={changedValueMono} />
          <BrightnessHigh />
        </Stack>
        </div>

        
    </div>
  )
}



export default Accessibility

