import { useNavigate, useParams } from 'react-router-dom';

import useForm from '../../../hooks/useForm.js';
import * as teamService from '../../../services/teamsService.js';
import { useEffect } from 'react';

export default function EditTeam() {
    const navigate = useNavigate();
    const { teamId } = useParams();

    const submitFormHandler = async (formValues) => {
        console.log("Team id: " + teamId);
        await teamService.updateOne(teamId, formValues);
        navigate('/teams');
    }
 
    const {formValues, setFormValues, onSubmit, onChange} = useForm({
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
    }, [teamId]);

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="name">Name:</label>
            <input name="name" type="text" value={formValues.name} onChange={onChange}/>
            <label htmlFor="ground">Ground:</label>
            <input name="ground" type="text" value={formValues.ground} onChange={onChange}/>
            <label htmlFor="league">League:</label>
            <input name="league" type="text" value={formValues.league} onChange={onChange}/>
            <label htmlFor="main-image">Main image:</label>
            <input name="mainImage" type="text" value={formValues.mainImage} onChange={onChange}/>
            <label htmlFor="team-logo">Team logo:</label>
            <input name="teamLogo" type="text" value={formValues.teamLogo} onChange={onChange}/>
            <button type="submit">Edit</button>
        </form>
    );
}