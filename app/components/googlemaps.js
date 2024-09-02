import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 11.5564,
  lng: 104.9282,
};

const locations = [
  { lat: 11.5564, lng: 104.9282, title: 'Location 1' },
  { lat: 11.5621, lng: 104.9160, title: 'Location 2' },
  { lat: 11.5449, lng: 104.8922, title: 'Location 3' },
];

const GoogleMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        {locations.map((location, index) => (
          <Marker key={index} position={{ lat: location.lat, lng: location.lng }} title={location.title} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
