import React, { Component } from 'react'
import bus_image from '../../assets/images/bus_.jpg';
import car_image from '../../assets/images/car.jpg';
import public_image from '../../assets/images/public.jpg';
import dorm_room_img from '../../assets/images/dorm_room.jpg';
import single_bedroom_img from '../../assets/images/Single_bed.jpg';
import double_bedroom from '../../assets/images/Double_bed.jpg';
import { Card, CardActions, CardMedia, CardContent, Input } from '@mui/material';
import Typography from '@mui/material/Typography';

export default class Cards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            transport: [
                { title: "bus", dataid: "bus", image: bus_image },
                { title: "car", dataid: "car", image: car_image },
                { title: "public", dataid: "public", image: public_image },
            ],
            accomodation: [
                { title: "single", dataid: "details", image: single_bedroom_img },
                { title: "double", dataid: "details", image: double_bedroom },
                { title: "dorm", dataid: "details", image: dorm_room_img }
            ],
            selectedTransport: null
        }
        this.onCardClick = this.onCardClick.bind(this)
    }

    onCardClick(dataid) {
        this.setState({ selectedTransport: dataid })
       
    }
    render() {
        const cardStyles = {
            width: 345,
            height: 270,
        }
        return (
            <div>

                <h2>Transportation</h2>
                <div className='card-container' >
                    {this.state.transport.map((element, index) => {
                        return (
                            <Card
                                onClick={() => this.onCardClick(element.dataid)}
                                sx={cardStyles} key={index}>
                                {element.title}
                                <CardMedia
                                    component="img"
                                    alt="bus"
                                    height="250"
                                    image={element.image}
                                />
                            </Card>
                        )
                    })}
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Vehicles
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Select your desirable transport.
                        </Typography>
                    </CardContent>

                </div>
                <h2>Accomodation</h2>
                <div className='card-container' >
                    {this.state.accomodation.map((element, index) => {
                        return (
                            <Card
                                onClick={this.onCardClick}
                                sx={cardStyles} key={index}>
                                {element.title}
                                <CardMedia
                                    component="img"
                                    alt="bus"
                                    height="250"
                                    image={element.image}
                                />
                            </Card>
                        )
                    })}

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Hotels
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Select your desirable accomodation.
                        </Typography>
                    </CardContent>

                </div>
            </div> 
        )
    }
}
