import React from "react";
import urlrikenlogo from "../../assets/logosm.png";

const Welcome = (props) => {
  return (
    <>
      <img
        onClick={props.next}
        src={urlrikenlogo}
        style={{ height: "500px" }}
        alt="URL-RIKEN merc storee"
      />
    </>
  );
};

export default Welcome;
