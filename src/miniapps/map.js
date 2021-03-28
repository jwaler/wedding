import React from "react";

class Mapping extends React.Component {
  render() {
    const output = `<div class="mapouter"><div class="gmap_canvas"><iframe width="405" height="330" id="gmap_canvas" src="https://maps.google.com/maps?q=Marie%20du%2016e&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://embedgooglemap.net/maps/60"></a><br><style>.mapouter{position:relative;text-align:right;height:330px;width:405px;}</style><a href="https://www.embedgooglemap.net">embedgooglemap.net</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:330px;width:405px;}</style></div></div>`;
    return (
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: output }}
      ></div>
    );
  }
}

export default Mapping;
