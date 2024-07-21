import React from "react";
import Tilt from "react-parallax-tilt";
import defaultIcon from "../assets/logos/ieee-white-logo.png";
import "../css/Card.css";

function Card({ title = "IEEE", description = "", icon = defaultIcon, position }) {
  return (
    <>
      <Tilt tiltReverse={true} scale={1.2}>
        <div className="card text-white mx-0">
          <div className="icon flex-column makeitcenter">
            <img src={icon} width={200} alt="" className="mb-5 img-fluid" />
            <h3 className="text-center">{title}</h3>
            {position && <p>{position}</p>}
          </div>

          {description && (
            <div className="slider d-flex align-items-center text-justify">
              <p>{description}</p>
            </div>
          )}
        </div>
      </Tilt>
    </>
  );
}

export default Card;