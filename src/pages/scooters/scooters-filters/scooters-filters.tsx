import './scooters-filters.scss';
import {ScootersFiltersProps} from "./scooters-filters.typings";
import {Button, Select} from '@chakra-ui/react'
import {map} from 'lodash';
import {ScooterStatusFilter} from "../scooters.typings";

export const ScootersFilters = ({status, statusOnChange, clearFilters}: ScootersFiltersProps) => {
    return (
        <div className='sa-scooters-filters'>
            <Select icon={<></>}
                    value={status}
                    onChange={(e) => {
                        statusOnChange(e.target.value as any as ScooterStatusFilter)
                    }}
            >
                {map(ScooterStatusFilter, status => (
                    <option key={status} value={status}>{`${status}`}</option>
                ))}
            </Select>
            <Button onClick={clearFilters}>Clear</Button>
        </div>
    );
}