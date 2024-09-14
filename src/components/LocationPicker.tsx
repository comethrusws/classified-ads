import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
});

export type Location = {
  lat: number;
  lng: number;
};

type Props = {
  defaultLocation: Location;
  onChange: (location: Location) => void;
  gpsCoords: Location | null;
};

function MapEvents({ onChange }: { onChange: (location: Location) => void }) {
  useMapEvents({
    click(e) {
      onChange({ lat: e.latlng.lat, lng: e.latlng.lng });
    },
  });
  return null;
}

export default function LocationPicker({ defaultLocation, onChange, gpsCoords }: Props) {
  const markerRef = useRef<L.Marker>(null);

  useEffect(() => {
    if (gpsCoords && markerRef.current) {
      markerRef.current.setLatLng([gpsCoords.lat, gpsCoords.lng]);
    }
  }, [gpsCoords]);

  return (
    <div className="w-full h-[200px]">
      <MapContainer
        center={[defaultLocation.lat, defaultLocation.lng]}
        zoom={6}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker
          position={[defaultLocation.lat, defaultLocation.lng]}
          ref={markerRef}
          draggable={true}
          eventHandlers={{
            dragend(e) {
              const marker = e.target;
              const position = marker.getLatLng();
              onChange({ lat: position.lat, lng: position.lng });
            },
          }}
        />
        <MapEvents onChange={onChange} />
      </MapContainer>
    </div>
  );
}