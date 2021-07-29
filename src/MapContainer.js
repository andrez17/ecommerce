import React from 'react'
import { GoogleMap, LoadScript, Marker  } from '@react-google-maps/api'
// import { useDispatch } from 'react-redux'
// import { setMarker } from './redux/actions/categoryAction'
import { StoreInfo } from './StoreInfo'
// import { useSelector } from 'react-redux'

export const MapContainer = () => {

    const apiKey = 'AIzaSyDu_U5PgR3ELSgPkNroN3v2iDqsFLZgw54'

    // const dispatch = useDispatch();
    // const markers = useSelector((state) => state);

    const locations = [
        {
          name: "Location 1",
          location: { 
            lat: 33.7490,
            lng: -84.3880
          },
        },
        {
          name: "Location 2",
          location: { 
            lat: 33.780162,
            lng: -84.411307
          },
        },
        {
          name: "Location 3",
          location: { 
            lat: 33.767314,
            lng: -84.375061
          },
        },
        {
          name: "Location 4",
          location: { 
            lat: 33.717139,
            lng: -84.382828
          },
        },
        {
          name: "Location 5",
          location: { 
            lat: 33.778047,
            lng: -84.43156
          },
        }
      ];

    const mapStyles = {        
        height: "60vh",
        width: "100vh"};

    const defaultCenter = {
        lat: 33.7490, 
        lng: -84.3880
    }

    return (
        <div className="store-container">
            <div className="map-container">
                <LoadScript
                    googleMapsApiKey={apiKey}>
                    <GoogleMap 
                        mapContainerStyle={mapStyles}
                        zoom={13}
                        center={defaultCenter}
                        >
                            {
                                locations.map((item, index) => {
                                    return (
                                        <Marker key={item.name} position={item.location} label={(index+1).toString()}/>
                                    )          
                                })
                            }
                    </GoogleMap>
                </LoadScript>
            </div>
            <div className="storeinfo-container">
                <StoreInfo locations={locations}/>
            </div>
        </div>
    )
}
