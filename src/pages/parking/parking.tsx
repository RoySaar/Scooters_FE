import './parking.scss';
import {ParkingTable} from "./parking-table/parking-table";
import {equalPosition, useParking} from "./parking.utils";
import {InfoWindowF, MarkerF} from "@react-google-maps/api";
import {MapWrapper} from "../new-parking/map/map";
import {useState} from "react";
import {map} from "lodash";
import {getLatLngFromClick} from "./map.utils";

export const Parking = () => {
    const {parkings} = useParking();
    const initialPosition = {lat: 32.0853, lng: 34.7818};
    const [activeParking, setActiveParking] = useState<google.maps.LatLngLiteral>({lat: NaN, lng: NaN});

    function onMarkerClick(e: google.maps.MapMouseEvent) {
        const newPosition = getLatLngFromClick(e);
        setActiveParking(newPosition);
    }

    return (
        <div className='sa-parking'>
            <h1>Parking</h1>
            <ParkingTable parkings={parkings}/>
            <MapWrapper center={initialPosition} zoom={12}>
                <div>
                    {map(parkings, parking => (
                        <div key={parking.location.longitude.toString()}>
                            <MarkerF draggable={false}
                                     position={{lat: parking.location.latitude, lng: parking.location.longitude}}
                                     onClick={onMarkerClick}
                            >
                                {equalPosition(activeParking, {
                                        lat: parking.location.latitude,
                                        lng: parking.location.longitude
                                    }) &&
                                    < InfoWindowF
                                        position={{lat: parking.location.latitude, lng: parking.location.longitude}}>
                                        <div>{parking.address}</div>
                                    </InfoWindowF>
                                }
                            </MarkerF>
                        </div>
                    ))}
                </div>
            </MapWrapper>
        </div>
    );
}