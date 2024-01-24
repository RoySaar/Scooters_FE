import {GoogleMap, MarkerF, useJsApiLoader} from "@react-google-maps/api";
import {useCallback, useState} from "react";
import {MapProps} from "./map.typings";
import {isEmpty} from "lodash";

export const MapWrapper = ({children, center, zoom}: MapProps) => {
    const containerStyle = {
        width: '400px',
        height: '300px'
    };

    const defaultCenter = {
        lat: 32.0853,
        lng: 34.7818
    };

    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBwbyCwA6evPNVpcr4pnbYU8wwWN5Zwq_s"
    })

    const [map, setMap] = useState(null)

    const onLoad = useCallback(function callback(map: any) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map: any) {
        setMap(null)
    }, [])

    return (
        <div className='sa-map-wrapper'>
            {
                isLoaded ? (
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={!isEmpty(center) ? center : defaultCenter}
                        zoom={!isEmpty(zoom) ? zoom : 13}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                    >
                        {children}
                        <></>
                    </GoogleMap>
                ) : <></>
            }
        </div>
    )
}