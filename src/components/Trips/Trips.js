import Axios from "axios";
import React, { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./Trips.css";

const Trips = () => {
  const navigate = useNavigate();
  //componentDidMount
  useEffect(() => {
    navigate("upcoming");
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="navbar--child">
        <NavLink className="nav-link" to="upcoming">
          Upcoming Trips
        </NavLink>
        <NavLink className="nav-link" to="students">
          Student Trips
        </NavLink>
        <NavLink className="nav-link" to="accessible">
          Accessible Trips
        </NavLink>
        <NavLink className="nav-link" to="plan">
          Plan a trip
        </NavLink>
        <NavLink className="nav-link" to="findplace">
          Find place
        </NavLink>
        {/* {this.state.isLoggedIn && <p>{this.state.session}</p>} */}
        
      </div>
      <Outlet />
    </>
  );
};

export default Trips;
