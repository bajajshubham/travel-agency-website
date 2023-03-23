import React from "react";
import "./Services.css";
import wheelchair from "../../Images/wheelchair.jpg";
import walker from "../../Images/walker.jpg";
import car from "../../Images/car.jpg";
import bus from "../../Images/bus.jpg";
import train from "../../Images/train.jpg";
import flight from "../../Images/flight.jpg";
import washrooms from "../../Images/washrooms.jpg";
import caretakers from "../../Images/caretakers.jpg";
import {
  carGerman, carHindi, carEnglish,
  walkerEnglish, walkerGerman, walkerHindi,
  wheelChairEnglish, wheelChairGerman, wheelChairHindi,
  busEnglish, busGerman, busHindi,
  flightEnglish, flightHindi, flightGerman,
  washroomGerman, washroomEnglish, washroomHindi,
  trainEnglish, trainHindi, trainGerman,
  careTakerEnglish, careTakerGerman, careTakerHindi,
} from "../../utils/constants";

function Services(props) {

  if (props.DSwitch) {
    return (
    <div style={{ filter: `brightness(${props.brightness_val}) contrast(${props.contrast_val}) saturate(${props.saturate_val}) grayscale(${props.monochrome_val})`}}>
      <h1 className="Deuteranopia">
        {props.lang === "En"
          ? "Services"
          : props.lang === "De"
          ? "Dienstleistungen"
          : "सेवा"}</h1>
     
      <div className="Deuteranopia-container">
        <div className="grid-item">
          <p>
            <h3>
              {props.lang === "En"
                ? "1. Wheel Chair"
                : props.lang === "De"
                ? "1. Rollstuhl"
                : "1. व्हील चेयर"}
            </h3>
            {props.lang === "En"
              ? wheelChairEnglish
              : props.lang === "De"
              ? wheelChairGerman
              : wheelChairHindi}
          </p>
          <img className="images-services" src={wheelchair} alt="product" />
        </div>
        <div className="grid-item">
          <p>
            <h3>
              {props.lang === "En"
                ? "2. Walker"
                : props.lang === "De"
                ? "2. Gehhilfe"
                : "2. वाकर"}
            </h3>
            {props.lang === "En"
              ? walkerEnglish
              : props.lang === "De"
              ? walkerGerman
              : walkerHindi}
          </p>
          <img className="images-services" src={walker} alt="product" />
        </div>
      </div>
      <div className="Deuteranopia-container">
        <div className="grid-item">
          <p>
            <h2>
              {props.lang === "En"
                ? "Transportation Mode"
                : props.lang === "De"
                ? "Transportmodus"
                : "परिवहन मोड"}
            </h2>
            <h3>
              {props.lang === "En"
                ? "1. Car"
                : props.lang === "De"
                ? "1 Auto"
                : "1. कार"}
            </h3>
            {props.lang === "En"
              ? carEnglish
              : props.lang === "De"
              ? carGerman
              : carHindi}
          </p>
          <img className="images-services" src={car} alt="product" />
        </div>
        <div className="grid-item">
          <p>
            <br />
            <h3>
              {props.lang === "En"
                ? "2. Bus"
                : props.lang === "De"
                ? "2. Bus"
                : "2. बस"}
            </h3>
            {props.lang === "En"
              ? busEnglish
              : props.lang === "De"
              ? busGerman
              : busHindi}
          </p>
          <img className="images-services" src={bus} alt="product" />
        </div>
      </div>
      <div className="Deuteranopia-container">
        <div className="grid-item">
          <p>
            <h3>
              {props.lang === "En"
                ? "3. Train"
                : props.lang === "De"
                ? "3. Zug"
                : "3. रेलगाड़ी"}
            </h3>
            {props.lang === "En"
              ? trainEnglish
              : props.lang === "De"
              ? trainGerman
              : trainHindi}
          </p>
          <img className="images-services" src={train} alt="product" />
        </div>
        <div className="grid-item">
          <p>
            <h3>
              {props.lang === "En"
                ? "4. Flight"
                : props.lang === "De"
                ? "4. Flug"
                : "4. विमान"}
            </h3>
            {props.lang === "En"
              ? flightEnglish
              : props.lang === "De"
              ? flightGerman
              : flightHindi}
          </p>
          <img className="images-services" src={flight} alt="product" />
        </div>
      </div>
      <br />
      <h1 className="Deuteranopia-theme">
        {props.lang === "En"
          ? "Facilities"
          : props.lang === "De"
          ? "Einrichtungen"
          : "सुविधाएँ"}
      </h1>
      <div className="Deuteranopia-container">
        <div className="grid-item">
          <p>
            <h3>
              {props.lang === "En"
                ? "1. Accessible Washrooms"
                : props.lang === "De"
                ? "Zugängliche Waschräume"
                : "सुलभ शौचालय"}
            </h3>
            {props.lang === "En"
              ? washroomEnglish
              : props.lang === "De"
              ? washroomGerman
              : washroomHindi}
          </p>
          <img className="images-services" src={washrooms} alt="product" />
        </div>
        <div className="grid-item">
          <p>
            <h3>
              {props.lang === "En"
                ? "2. Care Takers"
                : props.lang === "De"
                ? "2. Betreuungsperson"
                : "2. देखभाल करने वाले"}
            </h3>
            {props.lang === "En"
              ? careTakerEnglish
              : props.lang === "De"
              ? careTakerGerman
              : careTakerHindi}
          </p>
          <img className="images-services" src={caretakers} alt="product" />
        </div>
      </div>
    </div>
  );} 
  else if(props.PSwitch){
    return (
    <div style={{ filter: `brightness(${props.brightness_val}) contrast(${props.contrast_val}) saturate(${props.saturate_val}) grayscale(${props.monochrome_val})`}}>
     
      <h1 className="Protanopia">
        {props.lang === "En"
          ? "Services"
          : props.lang === "De"
          ? "Dienstleistungen"
          : "सेवा"}</h1>
     
      <div className="Protanopia-container">
        <div className="grid-item">
          <p>
            <h3>
              {props.lang === "En"
                ? "1. Wheel Chair"
                : props.lang === "De"
                ? "1. Rollstuhl"
                : "1. व्हील चेयर"}
            </h3>
            {props.lang === "En"
              ? wheelChairEnglish
              : props.lang === "De"
              ? wheelChairGerman
              : wheelChairHindi}
          </p>
          <img className="images-services" src={wheelchair} alt="product" />
        </div>
        <div className="grid-item">
          <p>
            <h3>
              {props.lang === "En"
                ? "2. Walker"
                : props.lang === "De"
                ? "2. Gehhilfe"
                : "2. वाकर"}
            </h3>
            {props.lang === "En"
              ? walkerEnglish
              : props.lang === "De"
              ? walkerGerman
              : walkerHindi}
          </p>
          <img className="images-services" src={walker} alt="product" />
        </div>
      </div>
      <div className="Protanopia-container">
        <div className="grid-item">
          <p>
            <h2>
              {props.lang === "En"
                ? "Transportation Mode"
                : props.lang === "De"
                ? "Transportmodus"
                : "परिवहन मोड"}
            </h2>
            <h3>
              {props.lang === "En"
                ? "1. Car"
                : props.lang === "De"
                ? "1 Auto"
                : "1. कार"}
            </h3>
            {props.lang === "En"
              ? carEnglish
              : props.lang === "De"
              ? carGerman
              : carHindi}
          </p>
          <img className="images-services" src={car} alt="product" />
        </div>
        <div className="grid-item">
          <p>
            <br />
            <h3>
              {props.lang === "En"
                ? "2. Bus"
                : props.lang === "De"
                ? "2. Bus"
                : "2. बस"}
            </h3>
            {props.lang === "En"
              ? busEnglish
              : props.lang === "De"
              ? busGerman
              : busHindi}
          </p>
          <img className="images-services" src={bus} alt="product" />
        </div>
      </div>
      <div className="Protanopia-container">
        <div className="grid-item">
          <p>
            <h3>
              {props.lang === "En"
                ? "3. Train"
                : props.lang === "De"
                ? "3. Zug"
                : "3. रेलगाड़ी"}
            </h3>
            {props.lang === "En"
              ? trainEnglish
              : props.lang === "De"
              ? trainGerman
              : trainHindi}
          </p>
          <img className="images-services" src={train} alt="product" />
        </div>
        <div className="grid-item">
          <p>
            <h3>
              {props.lang === "En"
                ? "4. Flight"
                : props.lang === "De"
                ? "4. Flug"
                : "4. विमान"}
            </h3>
            {props.lang === "En"
              ? flightEnglish
              : props.lang === "De"
              ? flightGerman
              : flightHindi}
          </p>
          <img className="images-services" src={flight} alt="product" />
        </div>
      </div>
      <br />
      <h1 className="Protanopia">
        {props.lang === "En"
          ? "Facilities"
          : props.lang === "De"
          ? "Einrichtungen"
          : "सुविधाएँ"}
      </h1>
      <div className="Protanopia-container">
        <div className="grid-item">
          <p>
            <h3>
              {props.lang === "En"
                ? "1. Accessible Washrooms"
                : props.lang === "De"
                ? "Zugängliche Waschräume"
                : "सुलभ शौचालय"}
            </h3>
            {props.lang === "En"
              ? washroomEnglish
              : props.lang === "De"
              ? washroomGerman
              : washroomHindi}
          </p>
          <img className="images-services" src={washrooms} alt="product" />
        </div>
        <div className="grid-item">
          <p>
            <h3>
              {props.lang === "En"
                ? "2. Care Takers"
                : props.lang === "De"
                ? "2. Betreuungsperson"
                : "2. देखभाल करने वाले"}
            </h3>
            {props.lang === "En"
              ? careTakerEnglish
              : props.lang === "De"
              ? careTakerGerman
              : careTakerHindi}
          </p>
          <img className="images-services" src={caretakers} alt="product" />
        </div>
      </div>
    </div>
  );} else if(props.TSwitch){ 
    return (
    <div style={{ filter: `brightness(${props.brightness_val}) contrast(${props.contrast_val}) saturate(${props.saturate_val}) grayscale(${props.monochrome_val})`}}>
     
      <h1 className="Tritanopia">
        {props.lang === "En"
          ? "Services"
          : props.lang === "De"
          ? "Dienstleistungen"
          : "सेवा"}</h1>
     
      <div className="Tritanopia-container">
        <div className="grid-item">
          <p>
            <h3>
              {props.lang === "En"
                ? "1. Wheel Chair"
                : props.lang === "De"
                ? "1. Rollstuhl"
                : "1. व्हील चेयर"}
            </h3>
            {props.lang === "En"
              ? wheelChairEnglish
              : props.lang === "De"
              ? wheelChairGerman
              : wheelChairHindi}
          </p>
          <img className="images-services" src={wheelchair} alt="product" />
        </div>
        <div className="grid-item">
          <p>
            <h3>
              {props.lang === "En"
                ? "2. Walker"
                : props.lang === "De"
                ? "2. Gehhilfe"
                : "2. वाकर"}
            </h3>
            {props.lang === "En"
              ? walkerEnglish
              : props.lang === "De"
              ? walkerGerman
              : walkerHindi}
          </p>
          <img className="images-services" src={walker} alt="product" />
        </div>
      </div>
      <div className="Tritanopia-container">
        <div className="grid-item">
          <p>
            <h2>
              {props.lang === "En"
                ? "Transportation Mode"
                : props.lang === "De"
                ? "Transportmodus"
                : "परिवहन मोड"}
            </h2>
            <h3>
              {props.lang === "En"
                ? "1. Car"
                : props.lang === "De"
                ? "1 Auto"
                : "1. कार"}
            </h3>
            {props.lang === "En"
              ? carEnglish
              : props.lang === "De"
              ? carGerman
              : carHindi}
          </p>
          <img className="images-services" src={car} alt="product" />
        </div>
        <div className="grid-item">
          <p>
            <br />
            <h3>
              {props.lang === "En"
                ? "2. Bus"
                : props.lang === "De"
                ? "2. Bus"
                : "2. बस"}
            </h3>
            {props.lang === "En"
              ? busEnglish
              : props.lang === "De"
              ? busGerman
              : busHindi}
          </p>
          <img className="images-services" src={bus} alt="product" />
        </div>
      </div>
      <div className="Tritanopia-container">
        <div className="grid-item">
          <p>
            <h3>
              {props.lang === "En"
                ? "3. Train"
                : props.lang === "De"
                ? "3. Zug"
                : "3. रेलगाड़ी"}
            </h3>
            {props.lang === "En"
              ? trainEnglish
              : props.lang === "De"
              ? trainGerman
              : trainHindi}
          </p>
          <img className="images-services" src={train} alt="product" />
        </div>
        <div className="grid-item">
          <p>
            <h3>
              {props.lang === "En"
                ? "4. Flight"
                : props.lang === "De"
                ? "4. Flug"
                : "4. विमान"}
            </h3>
            {props.lang === "En"
              ? flightEnglish
              : props.lang === "De"
              ? flightGerman
              : flightHindi}
          </p>
          <img className="images-services" src={flight} alt="product" />
        </div>
      </div>
      <br />
      <h1 className="Tritanopia">
        {props.lang === "En"
          ? "Facilities"
          : props.lang === "De"
          ? "Einrichtungen"
          : "सुविधाएँ"}
      </h1>
      <div className="Tritanopia-container">
        <div className="grid-item">
          <p>
            <h3>
              {props.lang === "En"
                ? "1. Accessible Washrooms"
                : props.lang === "De"
                ? "Zugängliche Waschräume"
                : "सुलभ शौचालय"}
            </h3>
            {props.lang === "En"
              ? washroomEnglish
              : props.lang === "De"
              ? washroomGerman
              : washroomHindi}
          </p>
          <img className="images-services" src={washrooms} alt="product" />
        </div>
        <div className="grid-item">
          <p>
            <h3>
              {props.lang === "En"
                ? "2. Care Takers"
                : props.lang === "De"
                ? "2. Betreuungsperson"
                : "2. देखभाल करने वाले"}
            </h3>
            {props.lang === "En"
              ? careTakerEnglish
              : props.lang === "De"
              ? careTakerGerman
              : careTakerHindi}
          </p>
          <img className="images-services" src={caretakers} alt="product" />
        </div>
      </div>
    </div>
  );} else if(((props.DSwitch) || (props.PSwitch) || (props.TSwitch)) === false){ 
    
    return (
    <div style={{ filter: `brightness(${props.brightness_val}) contrast(${props.contrast_val}) saturate(${props.saturate_val}) grayscale(${props.monochrome_val})`}}>
      <h1 className="element">
        {props.lang === "En"
          ? "Services"
          : props.lang === "De"
          ? "Dienstleistungen"
          : "सेवा"}</h1>
     
      <div className="container">
        <div className="grid-item">
          <p>
            <h3>
              {props.lang === "En"
                ? "1. Wheel Chair"
                : props.lang === "De"
                ? "1. Rollstuhl"
                : "1. व्हील चेयर"}
            </h3>
            {props.lang === "En"
              ? wheelChairEnglish
              : props.lang === "De"
              ? wheelChairGerman
              : wheelChairHindi}
          </p>
          <img className="images-services" src={wheelchair} alt="product" />
        </div>
        <div className="grid-item">
          <p>
            <h3>
              {props.lang === "En"
                ? "2. Walker"
                : props.lang === "De"
                ? "2. Gehhilfe"
                : "2. वाकर"}
            </h3>
            {props.lang === "En"
              ? walkerEnglish
              : props.lang === "De"
              ? walkerGerman
              : walkerHindi}
          </p>
          <img className="images-services" src={walker} alt="product" />
        </div>
      </div>



      <div className="container">
        <div className="grid-item">
          <p>
            <h2>
              {props.lang === "En"
                ? "Transportation Mode"
                : props.lang === "De"
                ? "Transportmodus"
                : "परिवहन मोड"}
            </h2>

            <h3>
              {props.lang === "En"
                ? "1. Car"
                : props.lang === "De"
                ? "1 Auto"
                : "1. कार"}
            </h3>
            {props.lang === "En"
              ? carEnglish
              : props.lang === "De"
              ? carGerman
              : carHindi}
          </p>
          <img className="images-services" src={car} alt="product" />
        </div>
        <div className="grid-item">
          <p>
            <br />
            <h3>
              {props.lang === "En"
                ? "2. Bus"
                : props.lang === "De"
                ? "2. Bus"
                : "2. बस"}
            </h3>
            {props.lang === "En"
              ? busEnglish
              : props.lang === "De"
              ? busGerman
              : busHindi}
          </p>
          <img className="images-services" src={bus} alt="product" />
        </div>
      </div>

      <div className="container">
        <div className="grid-item">
          <p>
            <h3>
              {props.lang === "En"
                ? "3. Train"
                : props.lang === "De"
                ? "3. Zug"
                : "3. रेलगाड़ी"}
            </h3>
            {props.lang === "En"
              ? trainEnglish
              : props.lang === "De"
              ? trainGerman
              : trainHindi}
          </p>
          <img className="images-services" src={train} alt="product" />
        </div>
        <div className="grid-item">
          <p>
            <h3>
              {props.lang === "En"
                ? "4. Flight"
                : props.lang === "De"
                ? "4. Flug"
                : "4. विमान"}
            </h3>
            {props.lang === "En"
              ? flightEnglish
              : props.lang === "De"
              ? flightGerman
              : flightHindi}
          </p>
          <img className="images-services" src={flight} alt="product" />
        </div>
      </div>
      <br />
      <h1 className="element">
        {props.lang === "En"
          ? "Facilities"
          : props.lang === "De"
          ? "Einrichtungen"
          : "सुविधाएँ"}
      </h1>
      <div className="container">
        <div className="grid-item">
          <p>
            <h3>
              {props.lang === "En"
                ? "1. Accessible Washrooms"
                : props.lang === "De"
                ? "Zugängliche Waschräume"
                : "सुलभ शौचालय"}
            </h3>
            {props.lang === "En"
              ? washroomEnglish
              : props.lang === "De"
              ? washroomGerman
              : washroomHindi}
          </p>
          <img className="images-services" src={washrooms} alt="product" />
        </div>
        <div className="grid-item">
          <p>
            <h3>
              {props.lang === "En"
                ? "2. Care Takers"
                : props.lang === "De"
                ? "2. Betreuungsperson"
                : "2. देखभाल करने वाले"}
            </h3>
            {props.lang === "En"
              ? careTakerEnglish
              : props.lang === "De"
              ? careTakerGerman
              : careTakerHindi}
          </p>
          <img className="images-services" src={caretakers} alt="product" />
        </div>
      </div>
    </div>

  );} 
}





export default Services;
