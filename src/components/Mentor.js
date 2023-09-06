import React, { useState } from "react";
import { Mentors } from "./ImportData";
import Tilt from "react-parallax-tilt";
function Mentor({ mentor, index, mentorPlaceholder }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  return (
    <Tilt
      tiltReverse={true}
      key={index}
      scale={1.1}
      className="mentorCard rounded d-flex align-items-center flex-column"
    >
      <img
        src={imgLoaded ? Mentors[index] : mentorPlaceholder}
        alt={mentor.name}
        loading="lazy"
        className="mentorImg rounded w-100 mb-2"
      />
      <div className="mentorMeta w-100 rounded">
        <div className="mentorName">{mentor.name}</div>
        <div className="mentorDesc">{mentor.description}</div>
      </div>
      <img
        src={Mentors[index]}
        alt=""
        style={{
          display: "none",
        }}
        onLoad={() => {
          setImgLoaded((prev) => !prev);
        }}
      />
    </Tilt>
  );
}

export default Mentor;