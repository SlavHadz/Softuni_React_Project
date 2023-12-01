import { useContext, useState } from "react";
import AuthContext from "../../contexts/authContext.jsx";
import useForm from "../../hooks/useForm.js";

export default function Register() {
    const { submitRegisterHandler } = useContext(AuthContext);

    const { formValues, onSubmit, onChange } = useForm({
        email: '',
        password: ''
    }, submitRegisterHandler);

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="name">Email:</label>
            <input name="email" type="text" value={formValues.email} onChange={onChange}/>
            <label htmlFor="ground">Password:</label>
            <input name="password" type="text" value={formValues.password} onChange={onChange}/>
            <button type="submit">Register</button>
        </form>
    );
}