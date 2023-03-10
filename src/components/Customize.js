import './Customize.css';
import travel_image from '../assets/images/stephen-coetsee-c9T7z93nPrA-unsplash.jpg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Input } from '@mui/material';
const Customize = () => {
    return (
        <div className="Text">
            <h1>Plan Your Own Trip</h1>
            <div className="elements">
                <Input className="element inp   " placeholder='Destination' />

                <div className="element">Check-in</div>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DatePicker />
                </LocalizationProvider>
                <div className="element">Check-out</div>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DatePicker />
                </LocalizationProvider>

                <div className="element">
                <Input className="element inp" placeholder="Members" type="number" />
                </div>
                    <ArrowForwardIcon />

            </div>
            <img src={travel_image} alt='travel' />
        </div>
    );
};
export default Customize;

