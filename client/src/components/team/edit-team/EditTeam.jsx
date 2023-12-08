import { useNavigate, useParams } from 'react-router-dom';

import useForm from '../../../hooks/useForm.js';
import * as teamService from '../../../services/teamsService.js';
import { useEffect } from 'react';

import styles from './EditTeam.module.css';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function EditTeam() {
    const navigate = useNavigate();
    const { teamId } = useParams();

    const submitFormHandler = async (formValues) => {
        console.log("Team id: " + teamId);
        await teamService.updateOne(teamId, formValues);
        navigate('/teams');
    }
 
    const {formValues, setFormValues, onSubmit, onChange, error} = useForm({
        name: '',
        ground: '',
        league: '',
        mainImage: '',
        teamLogo: ''
    }, submitFormHandler);

    useEffect(() => {
        teamService
        .getOne(teamId)
        .then(team => {
            setFormValues(team);
        });
    }, [teamId, setFormValues]);

    return (
        <div className={styles.form__container}>
            <Form onSubmit={onSubmit} className={styles.form}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={formValues.name} onChange={onChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ground">
                    <Form.Label>Ground</Form.Label>
                    <Form.Control type="text" name="ground" value={formValues.ground} onChange={onChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="league">
                    <Form.Label>League</Form.Label>
                    <Form.Control type="text" name="league" value={formValues.league} onChange={onChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="main-image">
                    <Form.Label>Main Image</Form.Label>
                    <Form.Control type="text" name="mainImage" value={formValues.mainImage} onChange={onChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="team-logo">
                    <Form.Label>Team Logo</Form.Label>
                    <Form.Control type="text" name="teamLogo" value={formValues.teamLogo} onChange={onChange}/>
                </Form.Group>
                {error && <p className={styles.text__danger}>{error}</p>}
                <Button className={styles.btn__submit} type="submit">Edit</Button>
            </Form>
        </div>
    );
}