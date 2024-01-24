import {Navigate} from 'react-router-dom';
import {Navigation} from "./ navigation/navigation";

interface PrivateRouteProps extends React.PropsWithChildren<any> {
    isAuthenticated: boolean;
}

export const PrivateRoute = ({isAuthenticated, children}: PrivateRouteProps) => {
    console.log({isAuthenticated, children})
    return (
        isAuthenticated ?
            <div>
                <Navigation />
                {children}
            </div>
            : <Navigate to="/login" replace/>
    );
};
