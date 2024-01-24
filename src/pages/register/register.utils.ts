import {useNavigate} from "react-router-dom";
import {useAuthApi} from "../../api/authApi";
import {toast} from "react-toastify";
import {User} from "../../types/types";

export const useRegister = () => {
    const navigate = useNavigate();

    const {register} = useAuthApi();

    async function signUp(newUser: User) {
        register(newUser).then(r => {
            toast.success('User created successfully', {
                position: "bottom-right",
                closeButton: false,
                autoClose: 2000,
                hideProgressBar: true
            });
            navigate('/login');
        }).catch((r) => {
            toast.error('Sign up failed, please try again.', {
                position: "bottom-right",
                closeButton: false,
                autoClose: 2000,
                hideProgressBar: true
            });
        });
    }

    return {signUp};
}

