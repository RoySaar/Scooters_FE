import {ScooterStatusFilter} from "../scooters.typings";

export interface ScootersFiltersProps {
    status: ScooterStatusFilter;
    statusOnChange(status: ScooterStatusFilter): void;

    clearFilters(): void;
}