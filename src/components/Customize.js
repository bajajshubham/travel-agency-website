import './Customize.css';
import { Input } from '@mui/material';
import travel_image from '../assets/images/valley_landscape.jpg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';
import Cards from './Cards/Cards';


const Customize = (props) => {
    const [onNext, setNext] = useState(false);
    
    const onArrowClick = () => {
        setNext(true)
        console.log('Arrow is clicked by Pooja')
    }
    
    return (
        <div className="Text">
            <h1>{props.lang === "En"
          ? "Plan Your Own Trip"
          : props.lang === "De"
          ? "Planen Sie Ihre eigene Reise"
          : "अपनी खुद की यात्रा की योजना बनाएं"}</h1>
            <div className="elements">
                <Input className="element inp" placeholder='Destination' />

                <div className="element box">{props.lang === "En"
          ? "Start"
          : props.lang === "De"
          ? "Start"
          : "शुरू"}</div>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DatePicker />
                </LocalizationProvider>
                <div className="element box">   {props.lang === "En"
          ? "End"
          : props.lang === "De"
          ? "Ende"
          : "अंत"}</div>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DatePicker />
                </LocalizationProvider>

                <div className="element">
                    <Input className="element inp" placeholder="Members" type="number" />
                </div>
                <ArrowForwardIcon onClick={onArrowClick} />

            </div>
            {onNext &&
                <Cards />}
            {!onNext && <img src={travel_image} alt='travel' />}
        </div>
    );
};
export default Customize;

