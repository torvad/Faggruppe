import React from "react";
import urlrikenlogo from "../../assets/logosm.png";

const Home = (props) => {
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

export default Home;
