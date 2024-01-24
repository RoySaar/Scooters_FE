import {Parking} from "../../../types/types";

export interface ParkingTableProps {
    parkings: Parking[];
}

export interface ParkingTableData {
    address: string;
    maxScooters: string;
    location: string;
}