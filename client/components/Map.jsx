import React from 'react';
import GoogleMapReact from 'google-map-react';

import { googleMaps } from '../keys';

const GoogleMaps = () => (
  <div style={{ width: '100%', height: '400px' }}>
    <GoogleMapReact
      options={{ scrollwheel: false }}
      defaultCenter={{ lat: 59.95, lng: 30.33 }}
      defaultZoom={11}
      bootstrapURLKeys={{ key: googleMaps() }}
    />
  </div>
  );


export default GoogleMaps;
