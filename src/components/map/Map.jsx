import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = () => {
  return (
    <MapContainer center={[23.764, 90.3893]} zoom={15} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[51.505, -0.09]}>
        <Popup>Tadaa ! Here's where i live. You are free to pay a visit</Popup>
      </Marker>
      <div className="map-content">
        <h3 className="switch__color">Abdullah</h3>
        <span>A.A.M Almarex</span>
        <br />
        <span>Location : Dhaka, Bangladesh</span>
        <br />
        <span>Email: masumarifinbd@gmail.com</span>
      </div>
    </MapContainer>
  )
}

export default Map
