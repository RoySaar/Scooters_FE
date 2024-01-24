import {Column} from 'react-table';
import {useMemo} from "react";
import {UsersTableData, UsersTableProps} from "./users-table.typings";
import {Table} from "../../../components/table/table";
import {getUsersTableData} from "../users.utils";

export const UsersTable = ({users}: UsersTableProps) => {
    const formattedUsersData = useMemo(() => getUsersTableData(users), [users]);

    const data: UsersTableData[] = [
        {username: 'Username', name: 'Name', email: 'Email'},
        ...formattedUsersData
    ];

    const columns: Column<UsersTableData>[] = useMemo(
        () => [
            {header: 'username', accessor: 'username'},
            {header: 'name', accessor: 'name'},
            {header: 'email', accessor: 'email'},
        ],
        []
    );

    return <Table<UsersTableData> data={data} columns={columns} />
};