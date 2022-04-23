import { Map, GoogleApiWrapper } from "google-maps-react";
import { Component } from "react";

export class MapContainer extends Component {
  render() {
    return (
      <div className="w-[80vw] h-full relative">
        <Map
          initialCenter={{ lat: 51.51070540270486, lng: -0.1384334079466435 }}
          style={{ width: "100%" }}
          containerStyle={{ width: "100%" }}
          google={this.props.google}
        ></Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBnOC2cYnLyaaYXtnd_IEQWZLkqvg0tqoE",
})(MapContainer);
