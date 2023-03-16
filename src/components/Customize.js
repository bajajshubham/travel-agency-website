import './Customize.css';
import { Input } from '@mui/material';
import travel_image from '../assets/images/valley_landscape.jpg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';
import Cards from './Cards/Cards';


const Customize = () => {
    const [onNext, setNext] = useState(false);
    
    const onArrowClick = () => {
        setNext(true)
        console.log('Arrow is clicked by Pooja')
    }
    return (
        <div className="Text">
            <h1>Plan Your Own Trip</h1>
            <div className="elements">
                <Input className="element inp" placeholder='Destination' />

                <div className="element box">Start</div>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DatePicker />
                </LocalizationProvider>
                <div className="element box">End</div>
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

