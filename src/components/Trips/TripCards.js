import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import React from "react";

const TripCards = (props) => {
  return (
    <Card sx={{ maxWidth: 300, maxHeight:350 }}>
      <CardMedia sx={{ height: 140 }} image={props.image} title={props.city} />
      <CardContent>
        <div className="trip-tile-bar">
          <Typography gutterBottom variant="h5" component="div">
            {props.city}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {props.price}
          </Typography>
        </div>
        <Typography variant="body2" color="text.secondary">
          Eu qui minim consequat non ad ipsum esse laborum. Ipsum excepteur sint
          deserunt reprehenderit officia duis ex sint sint irure dolor elit.
          Duis laboris pariatur nulla non excepteur incididunt esse laborum esse
          tempor sint cillum excepteur. Dolor esse mollit dolore proident
          proident cupidatat amet ut tempor ut nisi deserunt. Proident quis
          dolore anim id. Lorem id sit exercitation consectetur incididunt
          voluptate aliqua commodo.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TripCards;