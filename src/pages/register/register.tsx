import './register.scss';
import {Box} from "../../components/box/box";
import React, {useState} from "react";
import {useRegister} from "./register.utils";

export const Register = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const {signUp} = useRegister();

    function onClick() {
        const newUser = {username, password, firstName, lastName, email};
        signUp(newUser);
    }

    return (
        <div className='sa-register'>
            <Box className='sa-register-form'>
                <span>Sign up</span>
                <input placeholder='Username' value={username}
                       onChange={e => setUsername(e.target.value)}
                />
                <input placeholder='Password' type='password' value={password}
                       onChange={e => setPassword(e.target.value)}
                />
                <input placeholder='First Name' value={firstName}
                       onChange={e => setFirstName(e.target.value)}
                />
                <input placeholder='Last Name' value={lastName}
                       onChange={e => setLastName(e.target.value)}
                />
                <input placeholder='Email' type='email' value={email}
                       onChange={e => setEmail(e.target.value)}
                />
                <button onClick={onClick}>Sign up</button>
            </Box>
        </div>
    );
}