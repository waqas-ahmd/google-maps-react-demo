import { Map, GoogleApiWrapper, Polygon, Marker } from "google-maps-react";
import { Component } from "react";
import { MAPS_API_KEY } from "../../config";

export class MapContainer extends Component {
  polygonCoords = [
    { lat: 51.50689640888457, lng: -0.14234305062817434 },
    { lat: 51.50270766548847, lng: -0.1387028479620514 },
    { lat: 51.502205480345, lng: -0.14002119163032295 },
    { lat: 51.50262192695328, lng: -0.14968248627392491 },
    { lat: 51.503124107507624, lng: -0.14972183981626142 },
  ];
  render() {
    return (
      <div className="w-[80vw] h-full relative">
        <Map
          initialCenter={{ lat: 51.50406721212944, lng: -0.14374010138111884 }}
          zoom={16}
          style={{ width: "100%" }}
          containerStyle={{ width: "100%" }}
          google={this.props.google}
        >
          <Marker
            title="Green Park"
            position={{ lat: 51.50406721212944, lng: -0.14374010138111884 }}
          />
          <Polygon
            paths={this.polygonCoords}
            strokeColor="#fff"
            strokeOpacity={1}
            strokeWeight={4}
            fillColor="#0f0"
            fillOpacity={0.235}
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: MAPS_API_KEY,
})(MapContainer);
