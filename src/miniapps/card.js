import React from "react";
import "./../App.css";
import benji from "./../static/img/unnamed.png";
import couple1 from "./../static/img/camb1.png";
import couple2 from "./../static/img/camb2.png";

const Cards = () => {
  return (
    <div className="row">
      <div className="col-sm wedding-card mr-4 mb-4">
        <img className="img-round" src={benji} alt="" />
      </div>
      <div className="col-sm wedding-card mr-4 mb-4">
        <img className="img-round" src={couple1} alt="" />
      </div>
      <div className="col-sm wedding-card mr-4 mb-4">
        <img className="img-round" src={couple2} alt="" />
      </div>
    </div>
  );
};

export default Cards;
