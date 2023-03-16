import Axios from "axios";
import React, { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./Trips.css";

const Trips = (props) => {
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
        {props.lang === "En" ? "Upcoming Trips" : props.lang === "De" ? "Kommende Ausflüge" : "आगामी यात्राएं"}
        </NavLink>
        <NavLink className="nav-link" to="students">
        {props.lang === "En" ? "Student Trips" : props.lang === "De" ? "Studentenreisen" : "छात्र यात्राएं"}
        </NavLink>
        <NavLink className="nav-link" to="accessible">
        {props.lang === "En" ? "Accessible Trips" : props.lang === "De" ? "Barrierefreie Reisen" : "सुलभ यात्राएं"}

        </NavLink>
        <NavLink className="nav-link" to="plan">
        {props.lang === "En" ? "Plan a Trips" : props.lang === "De" ? "Einen Ausflug planen" : "एक यात्रा की योजना बनाओ"}
        </NavLink>
        <NavLink className="nav-link" to="findplace">
        {props.lang === "En" ? "Find Place" : props.lang === "De" ? "Platz finden" : "स्थान खोजें"}
        </NavLink>
        {/* {this.state.isLoggedIn && <p>{this.state.session}</p>} */}
        
      </div>
      <Outlet />
    </>
  );
};

export default Trips;
