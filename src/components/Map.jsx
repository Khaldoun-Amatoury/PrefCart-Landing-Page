import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const SupermarketMap = () => {
  const supermarketLocation = [33.6876405, 35.5038033]; // Replace with actual coordinates

  return (
    <MapContainer
      center={supermarketLocation}
      zoom={15}
      className="w-96 h-96 ml-10 mt-8 mb-8"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={supermarketLocation}>
        <Popup>Le Charcutier</Popup>
      </Marker>
    </MapContainer>
  );
};

export default SupermarketMap;
