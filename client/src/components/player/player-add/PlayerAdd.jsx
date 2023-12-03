import { useParams } from "react-router-dom";

import useForm from "../../../hooks/useForm.js";
import * as playerService from '../../../services/playerService.js';

export default function PlayerAdd({
    teamId,
    closeHandler
}) {
    const {formValues, onChange, onSubmit} = useForm({
        firstName: '',
        lastName: '',
        position: ''
    }, async (values) => {
        await playerService.create({
            ...values,
            teamId
        });
    });

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="league">First Name:</label>
            <input name="firstName" type="text" value={formValues.firstName} onChange={onChange}/>
            <label htmlFor="main-image">Last Name:</label>
            <input name="lastName" type="text" value={formValues.lastName} onChange={onChange}/>
            <label htmlFor="team-logo">Position:</label>
            <input name="position" type="text" value={formValues.position} onChange={onChange}/>
            <button type="submit">Create</button>
            <button onClick={closeHandler}>Close</button>
        </form>
    );
}