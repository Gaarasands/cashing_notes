import React, { useRef } from 'react';
import { GoogleMap, LoadScript, StandaloneSearchBox, Circle } from '@react-google-maps/api';
import { useState,useEffect } from 'react';

const EndpointMap = () => {

  const searchBoxRefLocation = useRef(null);
  const mapRef = useRef(null); // Reference to Google Map component
  const apiKey = 'myKey';
  const [shouldRenderCircle, setShouldRenderCircle] = useState(false);

useEffect(() => {
    const delayRender = setTimeout(() => {
        setShouldRenderCircle(true);
    }, 500); // Adjust the delay as needed

    return () => clearTimeout(delayRender);
}, []);

{shouldRenderCircle && (
        <Circle
          center={{ lat: 49.2, lng: -123.2194 }}
          radius={10000}
          options={{
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.1,
          }}
        />
 )}

  return (

    <LoadScript googleMapsApiKey={apiKey} libraries={['places']}>
      <div style={{ height: '100vh', width: '100vw' }}>
        <GoogleMap
          ref={mapRef}
          mapContainerStyle={{ height: '100vh', width: '100vw' }}
          center={{ lat: 49.3, lng: -123.2194 }}
          zoom={8}
        >
        <Circle
        center={{ lat: 49.2, lng: -123.2194 }}
        radius={10000}
        options={{
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.1,
        }}
        />
        </GoogleMap>
      </div>
    </LoadScript>
  );
};
export default EndpointMap;