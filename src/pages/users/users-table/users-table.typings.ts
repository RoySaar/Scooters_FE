import { User } from "../../../types/types";

export interface UsersTableProps {
    users: User[];
}

export interface UsersTableData {
    username: string;
    name: string;
    email: string;
}