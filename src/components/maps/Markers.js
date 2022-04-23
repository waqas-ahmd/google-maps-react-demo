import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
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
        >
          <Marker
            title="British Museum"
            position={{ lat: 51.51956217085144, lng: -0.1270654418970552 }}
          />
          <Marker
            title="London Eye"
            position={{ lat: 51.50333239566909, lng: -0.1196330004073506 }}
          />
          <Marker
            title="Buckingham's Palace"
            position={{ lat: 51.50139860938363, lng: -0.14186625352747778 }}
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBnOC2cYnLyaaYXtnd_IEQWZLkqvg0tqoE",
})(MapContainer);
