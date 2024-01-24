import './scooters.scss';
import {ScootersTable} from "./scooters-table/scooters-table";
import {useScooters} from "./scooter.utils";
import {ScootersFilters} from "./scooters-filters/scooters-filters";

export const Scooters = () => {
    const {scootersData, status, setStatus, clearFilters} = useScooters();

    return (
        <div className='sa-scooters'>
            <h1>Scooters</h1>
            <ScootersFilters status={status} statusOnChange={setStatus} clearFilters={clearFilters}/>
            <ScootersTable scooters={scootersData}/>
        </div>
    );
}