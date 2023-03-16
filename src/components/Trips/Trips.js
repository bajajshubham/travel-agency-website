import Axios from "axios";
import React, { Component } from "react";
import Form1 from "../Form/Form1";

export default class Trips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tripsArray: [],
      isLoggedIn: false,
    };
  }
  componentDidMount() {
    console.log("mounted");
    Axios.get("http://localhost:5000/upcomingTrips")
      .then((res) => {
        // console.log(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }
  render() {
    return (
      <div>Trips
        {/* {this.state.isLoggedIn && <p>{this.state.session}</p>} */}
        
      </div>
    );
  }
}
