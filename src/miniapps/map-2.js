import React from "react";

class Mapping2 extends React.Component {
  render() {
    const output = `<div class="mapouter">
    <div class="gmap_canvas">
    <iframe width="100%" height="330" id="gmap_canvas" src="https://maps.google.com/maps?q=automobile%20club%20de%20france&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
    <a href="https://embedgooglemap.net/maps/60"></a><br>
    <style>.mapouter{position:relative;text-align:right;height:330px;width:100%;}</style>
    <a href="https://www.embedgooglemap.net">embedgooglemap.net</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:330px;width:100%;}</style>
    </div></div>`;
    return (
      <div>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: output }}
        ></div>
        <hr className="side"></hr>
        <div className="address">6 PLACE DE LA CONCORDE</div>
        <div className="address">75008 PARIS</div>
        <div className="address">FRANCE</div>
        <hr className="side"></hr>
      </div>
    );
  }
}

export default Mapping2;
