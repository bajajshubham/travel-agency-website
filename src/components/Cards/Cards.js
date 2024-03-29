import React, { Component } from 'react'
import bus_image from '../../assets/images/bus_.jpg';
import car_image from '../../assets/images/car.jpg';
import public_image from '../../assets/images/public.jpg';
import dorm_room_img from '../../assets/images/dorm_room.jpg';
import single_bedroom_img from '../../assets/images/Single_bed.jpg';
import double_bedroom from '../../assets/images/Double_bed.jpg';
import { Card, CardActions, CardMedia, CardContent, Input, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

export default class Cards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            transport: [
                { title: "bus", dataid: "tnp1", image: bus_image },
                { title: "car", dataid: "tnp2", image: car_image },
                { title: "public", dataid: "tnp3", image: public_image },
            ],
            accomodation: [
                { title: "single", dataid: "acc1", image: single_bedroom_img },
                { title: "double", dataid: "acc2", image: double_bedroom },
                { title: "dorm", dataid: "acc3", image: dorm_room_img }
            ],
            selectedTransport: null,
            selectedAccommodation: null,
            page: 1
        }
        this.onTransportCardClick = this.onTransportCardClick.bind(this)
        this.onAccCardClick = this.onAccCardClick.bind(this)
        this.handleNext = this.handleNext.bind(this)
    }

    onTransportCardClick(dataid) {
        this.setState({
            selectedTransport: dataid,
        })
    }
    onAccCardClick(dataid) {
        this.setState({
            selectedAccommodation: dataid,
        })
    }

    handleNext() {
        console.log(`${this.state.selectedTransport} ${this.state.selectedAccommodation}`)
        this.setState({ page: 2 })
    }

    render() {   
        const cardStyles = {
            width: 345,
            height: 270,
        }
        if (this.state.page === 1) {
            return (
                <div>

                    <h2>Transportation</h2>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" justifyContent={'center'} color="blueviolet">
                            Vehicles
                        </Typography>
                        <Typography variant="body2" color="text.secondary" justifyContent={'center'}>
                            Select your desirable transport.
                        </Typography>
                    </CardContent>
                    <div className='card-container' >
                        {this.state.transport.map((element, index) => {
                            return (
                                <Card
                                    onClick={() => this.onTransportCardClick(element.dataid)}
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


                    </div>
                    <h2>Accomodation</h2>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" justifyContent={'center'} color="blueviolet">
                         Hotels
                        </Typography>
                        <Typography variant="body2" color="text.secondary" justifyContent={'center'}>
                            Select your desirable accomodation.
                        </Typography>
                    </CardContent>
                    <div className='card-container' >
                        {this.state.accomodation.map((element, index) => {
                            return (
                                <Card
                                    onClick={() => this.onAccCardClick(element.dataid)}
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
                        <Button onClick={this.handleNext}>Next</Button>
                    </div>
                </div>
                
            )
        }
        if (this.state.page === 2) {
            return (
                
                <div className='page2'>
                <h3>Your Selected Transport</h3>    
                <CardMedia
                component="img"
                alt="title"
                height="250"
                width="300"
               image={double_bedroom}
            />
             </div> 
            )
          
        }
    }
}
