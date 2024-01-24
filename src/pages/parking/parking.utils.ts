import {Parking} from "../../types/types";
import {map} from "lodash";
import {useEffect, useState} from "react";
import {useParkingApi} from "../../api/parkingApi";

export function getParkingTableData(parkings: Parking[]) {
    return map(parkings, parking => ({
        address: parking.address,
        maxScooters: `${parking.maxScooters}`,
        location: `${parking.location.latitude.toFixed(5)}, ${parking.location.longitude.toFixed(5)}`
    }))
}

export function useParking() {
    const [parkingData, setParkingData] = useState<Parking[]>([]);

    const {getParkings} = useParkingApi();

    useEffect(() => {
        getParkings().then((res) => {
            setParkingData(res);
        }).catch((res) => {
        });
    }, []);

    return {parkings: parkingData};
}

export function equalPosition(pos1: google.maps.LatLngLiteral, pos2: google.maps.LatLngLiteral) {
    return (pos1.lat === pos2.lat && pos1.lng === pos2.lng);
}