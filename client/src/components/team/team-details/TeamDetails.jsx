import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as teamService from '../../../services/teamsService.js';
import * as playerService from '../../../services/playerService.js';

export default function TeamDetails() {
    const navigate = useNavigate();
    const { teamId } = useParams();
    const [team, setTeam] = useState({});

    useEffect(() => {
        teamService.getOne(teamId)
        .then(teamData => setTeam(teamData));
    }, [teamId]);

    function deleteTeamHandler() {
        teamService.deleteOne(teamId);
        navigate('/teams');
    }

    function getSquadList() {
        playerService.getByTeamId(teamId);
    }

    return (
        <div>
            <h1>{team.name}</h1>
            <h2>Ground: {team.ground}</h2>
            <h2>League: {team.league}</h2>
            <img src={team.mainImage} />
            <Link to={`/teams/${teamId}/edit`} >Edit</Link>
            <button onClick={deleteTeamHandler}>Delete</button>
            <button onClick={getSquadList}>Squad list</button>
        </div>
    );
}