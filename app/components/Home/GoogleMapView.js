import { LoadScript, MarkerF } from '@react-google-maps/api'
import React, { useContext } from 'react'
import { GoogleMap } from '@react-google-maps/api'
import { UserLocationContext } from '@/context/UserLocationContext'

function GoogleMapView() {
    const {userLocation,setUserLocation}=useContext(UserLocationContext)
    const mapContainerStyle={
        width: '100',
        height: '70vh'
    }
    const coordenadas = { lat: -29.8812011, lng: -61.9462747}
  return (
    <div>
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}>
        <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={userLocation}
        zoom={14}
        >
            <MarkerF
            position={userLocation}
            />

        </GoogleMap>
        </LoadScript>
    </div>
  )
}

export default GoogleMapView