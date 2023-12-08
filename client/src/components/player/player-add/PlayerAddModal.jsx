import useForm from "../../../hooks/useForm.js";
import * as playerService from '../../../services/playerService.js';

import styles from './PlayerAddModal.module.css';

import { Form, Button } from 'react-bootstrap';


export default function PlayerAddModal({
    teamId,
    closeHandler
}) {
    const {formValues, onChange, onSubmit, error} = useForm({
        firstName: '',
        lastName: '',
        position: ''
    }, async (values) => {
        await playerService.create({
            ...values,
            teamId
        });
        closeHandler();
    });

    return (
        <>
            <div className={styles.modal__body}>
                <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-3" controlId="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control name="firstName" type="text" value={formValues.firstName} onChange={onChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control name="lastName" type="text" value={formValues.lastName} onChange={onChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="position">
                        <Form.Label>Position</Form.Label>
                        <Form.Control name="position" type="text" value={formValues.position} onChange={onChange}/>
                    </Form.Group>
                    {error && <p className={styles.text__danger}>{error}</p>}
                    <div className={styles.btn__container}>
                        <Button type="submit" variant="success">Create</Button>
                        <Button onClick={closeHandler} variant="light">Cancel</Button>
                    </div>
                </Form>
            </div>
            <div onClick={closeHandler} className={styles.backdrop}></div>
        </>
    );
}