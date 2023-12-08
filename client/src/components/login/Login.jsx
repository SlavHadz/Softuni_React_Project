import { useContext } from "react";
import AuthContext from "../../contexts/authContext.jsx";
import useForm from "../../hooks/useForm.js";

import styles from './Login.module.css';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Login() {
    const { submitLoginHandler } = useContext(AuthContext);

    const {formValues, onSubmit, onChange, error} = useForm({
        email: '',
        password: ''
    }, submitLoginHandler);

    return (
        <div className={styles.form__container}>
        <Form onSubmit={onSubmit} className={styles.form}>
         <Form.Group className="mb-3">
           <Form.Label>Email</Form.Label>
           <Form.Control 
            id="email" 
            name="email" 
            type="email"
            placeholder="email" 
            value={formValues.email} 
            onChange={onChange} />
         </Form.Group>
         <Form.Group className="mb-3">
           <Form.Label>Password</Form.Label>
           <Form.Control id="password"
            name="password" 
            type="password" 
            placeholder="password" 
            value={formValues.password} 
            onChange={onChange} />
         </Form.Group>
        {error && <p className={styles.text__danger}>{error}</p>}
         <Button type="submit">Login</Button>
        </Form>
        </div>
    );
}