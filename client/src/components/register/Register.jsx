import { useContext, useState } from "react";
import AuthContext from "../../contexts/authContext.jsx";
import useForm from "../../hooks/useForm.js";

import styles from './Register.module.css';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Register() {
    const { submitRegisterHandler } = useContext(AuthContext);

    const { formValues, onSubmit, onChange } = useForm({
        email: '',
        password: ''
    }, submitRegisterHandler);

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
            <Button type="submit">Register</Button>
            </Form>
        </div>
    );
}