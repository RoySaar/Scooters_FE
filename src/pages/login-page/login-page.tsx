import './login-page.scss';
import {Box} from "../../components/box/box";
import {useLoginPage} from "./login-page.utils";

export const LoginPage = () => {
    const {onClick, username, setUsername, password, setPassword} = useLoginPage();

    return (
        <div className='sa-login-page'>
            <Box className='sa-login-form'>
                <span>Login</span>
                <input placeholder='Username' value={username}
                       onChange={e => setUsername(e.target.value)}
                />
                <input placeholder='Password' type='password' value={password}
                       onChange={e => setPassword(e.target.value)}
                />
                <button onClick={onClick}>Login</button>
            </Box>
        </div>
    );
}
