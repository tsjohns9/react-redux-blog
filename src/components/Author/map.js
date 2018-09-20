import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

// used to display the users location. coordinates are passed in as props
class SimpleMap extends Component {
  render() {
    const { geo, street } = this.props.address;
    console.log('adsfadsfadfs', this.props);
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '300px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAMOWx5K5EwVwsxFvvv0IcH9QWNyN8IAyM' }}
          defaultZoom={8}
          center={{ lat: Number(geo.lat), lng: Number(geo.lng) }}
        >
          <AnyReactComponent lat={geo.lat} lng={geo.lng} text={street} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
