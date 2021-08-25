import React from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";

class MapContainer extends React.Component {
  state = {
    events: [
      {
        latitude: 40.7406197,
        longitude: -74.00735499999996,
      },
      {
        latitude: 40.659423,
        longitude: -74.006,
      },
      {
        latitude: 40.71052192687988,
        longitude: -74.006,
      },
    ],
    showInfoWindow: true, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {},
  };
  infoWindowHendler = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showInfoWindow: true,
    });
  onCloseWindow = (props) => {
    this.setState({ showInfoWindow: false, activeMarker: null });
  };
  displayMarkers = () => {
    return this.state.events.map((oneEvent, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{ lat: oneEvent.latitude, lng: oneEvent.longitude }}
        />
      );
    });
  };
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={11}
        initialCenter={{ lat: 40.7128, lng: -74.006 }}
      >
        {this.displayMarkers()}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showInfoWindow}
          onClose={this.onCloseWindow}
        >
          <div>
            {" "}
            <h4>{this.state.selectedPlace.name}</h4>{" "}
          </div>
        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({ apiKey: "" })(MapContainer);
