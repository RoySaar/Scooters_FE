import {useState} from "react";
import {useAuthApi} from "../../api/authApi";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {useIsAuthenticated} from "../../hooks/useIsAuthenticated";

export const useLoginPage = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const navigate = useNavigate();

    const {login} = useAuthApi();
    const {setIsAuthenticated} = useIsAuthenticated()

    async function onClick() {
        login(username, password).then(r => {
            console.log(r);
            setIsAuthenticated(true)
            navigate('/parking');
        }).catch((r) => {
            toast.error('Login failed, please try again.', {
                position: "bottom-right",
                closeButton: false,
                autoClose: 2000,
                hideProgressBar: true
            });
        });
    }

    return {onClick, username, setUsername, password, setPassword};
}