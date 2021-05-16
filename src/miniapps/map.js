import React from "react";

class Mapping extends React.Component {
  render() {
    const output = `<div class="mapouter"><div class="gmap_canvas">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.705475916431!2d2.2743711514050378!3d48.86382640817601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66556c7b67ab5%3A0x684a9b72f627239b!2sMairie%20du%20XVIe!5e0!3m2!1sen!2shk!4v1617112474258!5m2!1sen!2shk"
      width="100%"
      height="330"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      height="300"
      id="gmap_canvas"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
    ></iframe><a href="https://embedgooglemap.net/maps/60"></a><br><style>.mapouter{position:relative;text-align:right;height:330px;width:100%;}
    </style><a href="https://www.embedgooglemap.net">embedgooglemap.net</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:330px;width:100%;}</style></div></div>`;
    return (
      <div>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: output }}
        ></div>
        <hr className="side"></hr>
        <div className="address">71 AVENUE HENRI MARTIN</div>
        <div className="address">75016 PARIS</div>
        <div className="address">FRANCE</div>
        <hr className="side"></hr>
      </div>
    );
  }
}

export default Mapping;
