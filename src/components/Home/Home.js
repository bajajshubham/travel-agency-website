import { Button, Typography } from "@mui/material";
import React, { Component } from "react";
import students from "../../assets/images/students_unsplash.jpg";
import { Link } from "react-router-dom";
import TripCards from "../Trips/TripCards";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="squeeze">
          <div className="sqeeze-content">
            <Typography sx={{ margin: "0" }} variant="h3" gutterBottom>
              Bored?
            </Typography>
            <Typography variant="h3" gutterBottom>
              Need a getaway?
            </Typography>
            <Typography sx={{ color: "#8BC460" }} variant="h2" gutterBottom>
              We<span style={{ color: "#E45E35" }}>GO</span>at you!
            </Typography>

            <Link className="link" to="/trips/upcoming">
              <Typography sx={{ margin: "0" }} variant="h6" gutterBottom>
              {this.props.lang === "En"
            ? "Upcoming Trips"
            : this.props.lang === "De"
            ? "Kommende Ausflüge"
            : "आगामी यात्राएं"}             
             </Typography>
              {/* <Button className="link-btn"></Button> */}
            </Link>
          </div>
        </div>
        <div className="popular-tours">
          <Typography variant="h4" gutterBottom>
          {this.props.lang === "En"
            ? "Popular Tours"
            : this.props.lang === "De"
            ? "Beliebte Touren"
            : "लोकप्रिय पर्यटन"}   
          </Typography>
          <div className="card-holder">
            <TripCards 
          lang={this.props.lang}
              city="Heidelberg"
              price="EUR 30"
              image="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
            />
            <TripCards
             lang={this.props.lang}
              city="Heidelberg"
              price="EUR 30"
              image="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
            />
            <TripCards
             lang={this.props.lang}
              city="Heidelberg"
              price="EUR 30"
              image="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
            />
          </div>
        </div>
        <div className="discounts">
          <img src={students} alt="Students" />
          <div className="discount-content">
            <Typography sx={{ margin: "0" }} variant="h4" gutterBottom>
              Discounts
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
            {this.props.lang === "En"
            ? `You can now avail discounts if you have a valid student ID card.
            Visit the student trips page to view the trips on which you can
            get this offers.`
            : this.props.lang === "De"
            ? `Ab sofort können Sie Ermäßigungen in Anspruch nehmen, wenn Sie einen gültigen Studierendenausweis besitzen.
            Besuchen Sie die Seite Studentenreisen, um die Reisen anzuzeigen, auf denen Sie teilnehmen können
            erhalten Sie diese Angebote`
            :`यदि आपके पास वैध छात्र पहचान पत्र है तो अब आप छूट का लाभ उठा सकते हैं।
            जिन यात्राओं पर आप जा सकते हैं उन्हें देखने के लिए छात्र यात्राएं पृष्ठ पर जाएं
            यह ऑफर प्राप्त करें` }
             
             
            </Typography>
            <Link className="link-discounts" to="/trips/student">
              <Typography sx={{ margin: "0" }} variant="h6" gutterBottom>
              {this.props.lang === "En"
            ? "Student Trips"
            : this.props.lang === "De"
            ? "Studentenreisen"
            :"छात्र यात्राएं" }
                           </Typography>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
