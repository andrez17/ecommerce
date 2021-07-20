import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'

export const MapContainer = () => {

    const apiKey = 'AIzaSyDu_U5PgR3ELSgPkNroN3v2iDqsFLZgw54'

    const mapStyles = {        
        height: "100vh",
        width: "100vh"};

    const defaultCenter = {
        lat: 41.3851, 
        lng: 2.1734
    }

    return (
        <LoadScript
            googleMapsApiKey={apiKey}>
            <GoogleMap 
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}
            />
        </LoadScript>
    )
}
