import { Map, GoogleApiWrapper, Polyline } from "google-maps-react";
import { Component } from "react";

export class MapContainer extends Component {
  polygonCoords = [
    { lat: 37.80221076825891, lng: -122.418095909966 },
    { lat: 37.80212599631338, lng: -122.41821392715711 },
    { lat: 37.80222878228482, lng: -122.41840704619713 },
    { lat: 37.80207937170185, lng: -122.41854383885047 },
    { lat: 37.802188515632636, lng: -122.41872891126383 },
    { lat: 37.802047582177096, lng: -122.41886570391716 },
    { lat: 37.80214507000961, lng: -122.41906150516607 },
    { lat: 37.80199565925727, lng: -122.41920500334162 },
    { lat: 37.802109041912594, lng: -122.41938202912833 },
    { lat: 37.80199883821259, lng: -122.41951345736389 },
  ];
  render() {
    return (
      <div className="w-[80vw] h-full relative">
        <Map
          initialCenter={{ lat: 37.80210863120523, lng: -122.41878161867908 }}
          zoom={19}
          style={{ width: "100%" }}
          containerStyle={{ width: "100%" }}
          google={this.props.google}
        >
          <Polyline
            path={this.polygonCoords}
            strokeColor="#f33"
            strokeOpacity={0.4}
            strokeWeight={6}
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBnOC2cYnLyaaYXtnd_IEQWZLkqvg0tqoE",
})(MapContainer);
