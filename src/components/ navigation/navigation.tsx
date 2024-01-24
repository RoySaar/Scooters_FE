import './navigation.scss';
import {Button} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

export const Navigation = () => {
    const navigate = useNavigate();

    return (
      <div className='sa-navigation'>
          <Button onClick={() => navigate('/scooters')}>Scooters</Button>
          <Button onClick={() => navigate('/parking')}>Parking</Button>
          <Button onClick={() => navigate('/new-parking')}>New Parking</Button>
          <Button onClick={() => navigate('/users')}>Users</Button>
      </div>
    );
}