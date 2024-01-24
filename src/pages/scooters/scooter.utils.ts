import {Scooter, ScooterStatus} from "../../types/types";
import {map} from "lodash";
import {useEffect, useState} from "react";
import {useScooterApi} from "../../api/scooterApi";
import {ScooterStatusFilter} from "./scooters.typings";

export function getScootersTableData(scooters: Scooter[]) {
    return map(scooters, scooter => ({
        col1: scooter.id,
        col2: `${scooter.currentLocation.latitude}${scooter.currentLocation.longitude}`,
        col3: scooter.model,
        col4: `${scooter.yearOfManufacture}`,
        col5: scooter.status
    }))
}

export const scooterStatusRecord: Partial<Record<ScooterStatusFilter, ScooterStatus>> = {
    [ScooterStatusFilter.Active]: ScooterStatus.Active,
    [ScooterStatusFilter.Broken]: ScooterStatus.Broken,
    [ScooterStatusFilter.Charged]: ScooterStatus.Charged,
    [ScooterStatusFilter.Handled]: ScooterStatus.Handled
};

export function useScooters() {
    const [scootersData, setScootersData] = useState<Scooter[]>([]);
    const [status, setStatus] = useState<ScooterStatusFilter>(ScooterStatusFilter.None);

    const {getScooters, getScootersByStatus} = useScooterApi();

    const clearFilters = () => {
        setStatus(ScooterStatusFilter.None);
    };

    useEffect(() => {
        if (status !== ScooterStatusFilter.None) {
            getScootersByStatus(<ScooterStatus>scooterStatusRecord[status]).then((res) => {
                setScootersData(res);
            }).catch((res) => {});

            return;
        }

        getScooters().then((res) => {
            setScootersData(res);
        }).catch((res) => {
        });
    }, [status]);

    return {scootersData, status, setStatus, clearFilters};
}