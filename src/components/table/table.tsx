import './table.scss';
import {useTable} from "react-table";
import {map} from "lodash";
import {TableProps} from "./table.typings";

export const Table = <T extends object>({columns, data}: TableProps<T>) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable<T>({columns, data});

    return (
        <table {...getTableProps()} className='sa-table'>
            <thead>
            {map(headerGroups, (headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {map(headerGroup.headers, (column) => (
                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {map(rows, (row) => {
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()}>
                        {map(row.cells, (cell) => (
                            <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        ))}
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}