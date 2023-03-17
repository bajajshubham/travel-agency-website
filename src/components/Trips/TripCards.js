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

        {props.lang === "En"
            ? `Eu qui minim consequat non ad ipsum esse laborum. Ipsum excepteur sint
            deserunt reprehenderit officia duis ex sint sint irure dolor elit.
            Duis laboris pariatur nulla non excepteur incididunt esse laborum esse
            tempor sint cillum excepteur. Dolor esse mollit dolore proident
            proident cupidatat amet ut tempor ut nisi deserunt. Proident quis
            dolore anim id. Lorem id sit exercitation consectetur incididunt
            voluptate aliqua commodo.`
            : props.lang === "De"
            ? `Eu qui minim consequat non ad ipsum esse laborum. Ipsum exceptioneur sint
            deserunt reprehenderit officia duis ex sint sint irure dolor elit.
            Duis laboris pariatur nulla non exceptioneur incididunt esse laborum esse
            tempor sint cillum exceptioneur. Dolor esse mollit dolore proident
            proident cupidatat amet ut tempor ut nisi deserunt. Proident quis
            dolore anim id. Lorem id sit exercitation consectetur incididunt
            voluptate aliqua commodo.`
            : `यू क्वि मिनिम नॉन एड इप्सम एसे लेबरम का परिणाम है। इप्सम अपवाद सिंट
            डेसरंट रेप्रेन्डेरिट ऑफ़िसिया डुइस एक्स सिंट सिंट इरुर डोलोर एलीट।
            डुइस लेबरिस पेरियाटुर नूला नॉन एक्सक्लूसिव इंसिडेंट एसे लेबरम एस्से
            अस्थायी सिंट सिलम अपवाद। मुझे बहुत अच्छा लगता है
            भविष्य में कामदेवता अमेट यूट टेम्पर यू निसी डेसरंट। भविष्य प्रश्न
            डोलोर एनिमेशन आईडी। लोरेम आईडी सिट एक्सरसाइज कॉन्सेक्टेटुर इंसिडेंट
            Voluptate Aliqua Comodo।`}   
          
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TripCards;