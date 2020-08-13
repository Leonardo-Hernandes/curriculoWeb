import React from 'react';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {
  render() {
    return (
      <Map 
      google={this.props.google}
      initialCenter={{
        lat: -15.7937841,
        lng: -47.8857071
      }}
      zoom={12} >

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        {/* <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow> */}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyA7jxVcPU88Q6MZAv7ld92abFZHBVoksk4')
})(MapContainer)