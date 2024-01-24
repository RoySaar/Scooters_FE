import './new-parking.scss';
import {Button, Input} from "@chakra-ui/react";
import {Box} from '../../components/box/box';
import {useState} from "react";
import {MarkerF} from '@react-google-maps/api';
import {useParkingApi} from '../../api/parkingApi';
import {useNavigate} from "react-router-dom";
import {MapWrapper} from "./map/map";
import {getLatLngFromClick} from "../parking/map.utils";

export const NewParking = () => {
    const [marker, setMarker] = useState<google.maps.LatLngLiteral>({lat: 32.0853, lng: 34.7818});
    const [maxScooters, setMaxScooters] = useState<number>(0);
    const [address, setAddress] = useState<string>('');

    function onMarkerDrag(e: google.maps.MapMouseEvent) {
        const newMarker = getLatLngFromClick(e);
        setMarker(newMarker);
    }

    const {createParking} = useParkingApi();

    const navigate = useNavigate();

    function onSubmit() {
        createParking({
            maxScooters,
            address,
            location: {latitude: marker.lat, longitude: marker.lng}
        }).then(r => {
            navigate('/parking');
        })
            .catch((err) => console.log(
                err
            ));
    }

    return (
        <div className='sa-new-parking'>
            <h1>New Parking</h1>
            <Box className='sa-new-parking-form'>
                <h4>Address</h4>
                <Input value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Address'/>
                <h4>Max number of scooters</h4>
                <Input value={maxScooters} onChange={(e) => setMaxScooters(+e.target.value)}
                       placeholder='Max no. of scooters' type='number' min={1}/>
                <div style={{height: '300px', width: '400px'}}>
                    <h4>Choose location</h4>
                    <h5>{`${marker?.lat.toFixed(5)}, ${marker?.lng.toFixed(5)}`}</h5>
                    <MapWrapper center={marker}>
                        <MarkerF draggable={true}
                                 position={marker}
                                 onDragEnd={onMarkerDrag}
                        />
                    </MapWrapper>
                </div>
                <Button onClick={onSubmit}>Submit</Button>
            </Box>
        </div>
    );
}
