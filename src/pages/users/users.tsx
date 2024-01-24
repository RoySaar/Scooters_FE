import './users.scss';
import {UsersTable} from "./users-table/users-table";
import {useUsers} from "./users.utils";

export const Users = () => {
    const {users} = useUsers();

    return (
        <div className='sa-users'>
            <h1>Users</h1>
            <UsersTable users={users} />
        </div>
    )
}