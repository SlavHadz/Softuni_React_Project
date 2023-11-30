import { useState, useContext } from "react";
import AuthContext from "../../contexts/authContext.jsx";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const changeEmailHandler = (e) => {
        setEmail(e.target.value);
    }

    const changePasswordHandler = (e) => {
        setPassword(e.target.value);
    }

    const { submitLoginHandler } = useContext(AuthContext);

    const onSubmit = (e) => {
        e.preventDefault();
        submitLoginHandler(email, password);
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="name">Email:</label>
            <input name="name" type="text" value={email} onChange={changeEmailHandler}/>
            <label htmlFor="ground">Password:</label>
            <input name="ground" type="text" value={password} onChange={changePasswordHandler}/>
            <button type="submit">Login</button>
        </form>
    );
}