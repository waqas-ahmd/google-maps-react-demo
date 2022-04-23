import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { Component } from "react";

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) => {
    console.log(props, marker, e);
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  onInfoWindowClose = () => {
    this.setState({
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    });
  };
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
            onClick={this.onMarkerClick}
            title="British Museum"
            position={{ lat: 51.51956217085144, lng: -0.1270654418970552 }}
          />
          <Marker
            onClick={this.onMarkerClick}
            title="London Eye"
            position={{ lat: 51.50333239566909, lng: -0.1196330004073506 }}
          />
          <Marker
            onClick={this.onMarkerClick}
            title="Buckingham's Palace"
            position={{ lat: 51.50139860938363, lng: -0.14186625352747778 }}
          />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}
          >
            <div className="p-3">
              <h1 className="font-bold text-red-800">
                {this.state.selectedPlace.title}
              </h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBnOC2cYnLyaaYXtnd_IEQWZLkqvg0tqoE",
})(MapContainer);
