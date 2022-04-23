import { Map, GoogleApiWrapper, Circle } from "google-maps-react";
import { Component } from "react";

export class MapContainer extends Component {
  render() {
    return (
      <div className="w-[80vw] h-full relative">
        <Map
          initialCenter={{ lat: 41.903044508325145, lng: 12.466367572587803 }}
          style={{ width: "100%" }}
          containerStyle={{ width: "100%" }}
          google={this.props.google}
          zoom={18}
        >
          <Circle
            radius={40}
            center={{ lat: 41.903044508325145, lng: 12.466367572587803 }}
            onMouseover={() => console.log("mouseover")}
            onClick={() => console.log("click")}
            onMouseout={() => console.log("mouseout")}
            strokeColor="#fff"
            strokeOpacity={0.5}
            strokeWeight={5}
            fillColor="#fff"
            fillOpacity={0.3}
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBnOC2cYnLyaaYXtnd_IEQWZLkqvg0tqoE",
})(MapContainer);
