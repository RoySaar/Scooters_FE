import {User} from "../../types/types";
import {map} from "lodash";
import {useEffect, useState} from "react";
import {useUsersApi} from "../../api/usersApi";

export function getUsersTableData(users: User[]) {
    return map(users, user => ({
        username: user.username,
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
    }))
}

export function useUsers() {
    const [usersData, setUsersData] = useState<User[]>([]);

    const {getUsers} = useUsersApi();

    useEffect(() => {
        getUsers().then((res) => {
            setUsersData(res);
        }).catch((res) => {
        });
    }, []);

    return {users: usersData};
}