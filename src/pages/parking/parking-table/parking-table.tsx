import {Column} from 'react-table';
import {useMemo} from "react";
import {Table} from "../../../components/table/table";
import {ParkingTableData, ParkingTableProps} from "./parking-table.typings";
import {getParkingTableData} from "../parking.utils";

export const ParkingTable = ({parkings}: ParkingTableProps) => {
    const formattedParkingData = useMemo(() => getParkingTableData(parkings), [parkings]);

    const data: ParkingTableData[] = [
        {address: 'Address', maxScooters: 'Max scooters', location: 'Location'},
        ...formattedParkingData
    ];

    const columns: Column<ParkingTableData>[] = useMemo(
        () => [
            {header: 'address', accessor: 'address'},
            {header: 'maxScooters', accessor: 'maxScooters'},
            {header: 'location', accessor: 'location'},
        ],
        []
    );

    return <Table<ParkingTableData> data={data} columns={columns} />
};