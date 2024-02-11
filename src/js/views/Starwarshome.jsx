import React from "react";
import starwarslogo from "../../img/star-wars-logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJedi } from "@fortawesome/free-solid-svg-icons";
import { NavbarSW } from "../component/NavbarSW.jsx";


export const Starwarshome = () => {
  return (
    <>
      <NavbarSW />
      <div className="row bg-black">
        <div className="col-auto d-flex justify-content-center align-items">
          <img className="img-fluid" style={{width: "60%"}} alt="Star Wars LOGO" src={starwarslogo} />
        </div>
      </div>
    </>
  );
}