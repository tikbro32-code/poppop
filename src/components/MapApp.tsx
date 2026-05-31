import React, { useState, useEffect } from 'react';
import { X, Map as MapIcon, Loader2 } from 'lucide-react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface Props {
  onClose: () => void;
}

const customIcon = L.divIcon({
  className: 'custom-map-pin',
  html: `<div style="display: flex; flex-direction: column; align-items: center; animation: bounce 1s infinite;">
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#00C880" fill-opacity="0.2" stroke="#00C880" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
    <div style="width: 24px; height: 6px; background: rgba(0,0,0,0.6); border-radius: 50%; margin-top: 4px; filter: blur(2px);"></div>
  </div>`,
  iconSize: [48, 58],
  iconAnchor: [24, 58],
});

function MapUpdater({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, 15);
  }, [center, map]);
  return null;
}

export default function MapApp({ onClose }: Props) {
  const [position, setPosition] = useState<[number, number] | null>(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setErrorMsg('Geolocation is not supported by your browser.');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition([pos.coords.latitude, pos.coords.longitude]);
        setLoading(false);
      },
      (err) => {
        setErrorMsg('Failed to get location: ' + err.message);
        setPosition([3.140853, 101.693207]);
        setLoading(false);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  }, []);

  return (
    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-[var(--sidebar-bg)] border border-[var(--border-color)] rounded-3xl p-6 w-full max-w-2xl h-[80vh] relative shadow-2xl flex flex-col">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-[var(--text-secondary)] hover:text-[var(--text-main)] bg-[var(--border-color)] hover:bg-[var(--border-color)] p-2 rounded-full transition-colors z-[2000]"
        >
          <X size={20} />
        </button>
        
        <div className="flex items-center gap-3 mb-4 z-10">
          <MapIcon className="text-[var(--primary-green)]" size={24} />
          <h2 className="text-xl font-bold text-[var(--text-main)]">Map</h2>
        </div>
        
        <div className="flex-1 bg-[var(--bg-dark)] rounded-2xl relative overflow-hidden border border-[var(--border-color)] flex items-center justify-center z-0">
          {loading ? (
            <div className="flex flex-col items-center text-[var(--text-secondary)]">
              <Loader2 className="animate-spin mb-2 text-[var(--primary-green)]" size={32} />
              <p>Getting location...</p>
            </div>
          ) : (
            <>
              <MapContainer 
                center={position || [3.140853, 101.693207]} 
                zoom={15} 
                className="w-full h-full z-0"
                zoomControl={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                />
                {position && (
                  <MapUpdater center={position} />
                )}
              </MapContainer>
              
              <div className="absolute bottom-6 left-6 bg-[var(--sidebar-bg)]/90 backdrop-blur-md px-5 py-3 rounded-xl border border-[var(--border-color)] z-[1000] shadow-lg">
                <p className="text-sm text-[var(--text-secondary)] mb-1">Current Location</p>
                {errorMsg ? (
                  <p className="text-sm text-red-400">{errorMsg}</p>
                ) : position ? (
                  <p className="text-lg text-[var(--text-main)] font-bold">
                    {position[0].toFixed(4)}, {position[1].toFixed(4)}
                  </p>
                ) : null}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
