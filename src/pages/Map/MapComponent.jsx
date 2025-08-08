// MapComponent.js

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Custom icon for markers
const customIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png', 
  iconSize: [38, 38], 
});

const locations = [
  { lat: 35.9078, lng: 127.7669, name: 'South Korea' },
  { lat: 36.2048, lng: 138.2529, name: 'Japan' },
  { lat: 3.139, lng: 101.6869, name: 'Malaysia' },
  { lat: 15.870, lng: 100.9925, name: 'Thailand' },
  { lat: 14.5995, lng: 120.9842, name: 'Philippines' },
  { lat: 21.0285, lng: 105.8542, name: 'Vietnam' },
  { lat: 23.6978, lng: 120.9605, name: 'Taiwan' },
  { lat: 28.7041, lng: 77.1025, name: 'India' },
  { lat: 33.6844, lng: 73.0479, name: 'Pakistan' },
  { lat: 41.2044, lng: 74.7661, name: 'Kyrgyzstan' },
  { lat: 32.4279, lng: 53.6880, name: 'Iran' },
];
const MapComponent = () => {
  return (
    <div className="flex items-center justify-center w-full "> 
      {/* <div className="relative z-0 w-[100%]" style={{ height: 'calc(100vh - 100px)' }}> 
        <MapContainer 
          center={[20.5937, 78.9629]} 
          zoom={1} 
          scrollWheelZoom={false}  
          dragging={true} 
          touchZoom={false}  
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {locations.map((location, idx) => (
            <Marker key={idx} position={[location.lat, location.lng]} icon={customIcon}>
              <Popup>{location.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div> */}
      <img src='/assets/map.png' className='size-full' alt='map img'/>
    </div>
  );
};

export default MapComponent;
