import {Column} from 'react-table';
import {useMemo} from "react";
import {ScootersTableData} from "../scooters.typings";
import {getScootersTableData} from "../scooter.utils";
import {ScootersTableProps} from "./scooters-table.typings";
import {Table} from '../../../components/table/table';

export const ScootersTable = ({scooters}: ScootersTableProps) => {
    const formattedScootersData = useMemo(() => getScootersTableData(scooters), [scooters]);

    const data: ScootersTableData[] = [
        {col1: 'Id', col2: 'Location', col3: 'Model', col4: 'Manufactured', col5: 'Status'},
        ...formattedScootersData
    ];

    const columns: Column<ScootersTableData>[] = useMemo(
        () => [
            {header: 'col1', accessor: 'col1'},
            {header: 'col2', accessor: 'col2'},
            {header: 'col3', accessor: 'col3'},
            {header: 'col4', accessor: 'col4'},
            {header: 'col5', accessor: 'col5'},
        ],
        []
    );

    return <Table<ScootersTableData> data={data} columns={columns} />
};