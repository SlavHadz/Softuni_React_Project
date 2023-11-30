import { useContext, useState } from "react";
import AuthContext from "../../contexts/authContext.jsx";

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const changeEmailHandler = (e) => {
        setEmail(e.target.value);
    }

    const changePasswordHandler = (e) => {
        setPassword(e.target.value);
    }

    const { submitRegisterHandler } = useContext(AuthContext);

    const onSubmit = (e) => {
        e.preventDefault();
        submitRegisterHandler(email, password);
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="name">Email:</label>
            <input name="name" type="text" value={email} onChange={changeEmailHandler}/>
            <label htmlFor="ground">Password:</label>
            <input name="ground" type="text" value={password} onChange={changePasswordHandler}/>
            <button type="submit">Register</button>
        </form>
    );
}