import React from 'react';
import GoogleMap from 'google-map-react';

import { googleKey } from '../keys';

export default ({ fetched, lat, lng }) => {
  if (!fetched) {
    return (<div>loading...</div>);
  }
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <GoogleMap
        options={{ scrollwheel: false }}
        defaultCenter={{ lat, lng }}
        defaultZoom={13}
        bootstrapURLKeys={{ key: googleKey() }}
      >
        <div
          lat={lat}
          lng={lng}
          style={{ backgroundColor: 'black', width: '15px', height: '15px' }}
        />
      </GoogleMap>
    </div>
  );
};
