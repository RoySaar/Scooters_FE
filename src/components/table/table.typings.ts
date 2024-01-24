import {Column} from "react-table";

export interface TableProps<T extends object> {
    columns: Column<T>[];
    data: T[];
}