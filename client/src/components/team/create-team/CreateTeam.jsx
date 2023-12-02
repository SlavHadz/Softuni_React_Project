import { useNavigate } from 'react-router-dom';

import useForm from '../../../hooks/useForm.js';
import * as teamService from '../../../services/teamsService.js';

export default function CreateTeam() {
    const navigate = useNavigate();

    const submitFormHandler = async (formValues) => {
        await teamService.create(formValues)
        navigate('/teams');
    }

    const {formValues, onSubmit, onChange} = useForm({
        name: '',
        ground: '',
        league: '',
        mainImage: '',
        teamLogo: ''
    }, submitFormHandler);

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
            <button type="submit">Create</button>
        </form>
    );
}