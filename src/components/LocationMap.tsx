// LocationMap.tsx
'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

type Props = {
  location: [number, number];
};

export default function LocationMap({ location }: Props) {
  return (
    <MapContainer center={location} zoom={13} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={location}>
        <Popup>Location</Popup>
      </Marker>
    </MapContainer>
  );
}
