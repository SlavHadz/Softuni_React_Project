import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as teamService from '../../../services/teamsService.js';
import * as playerService from '../../../services/playerService.js';
import TeamSquadList from "../team-squad-list/TeamSquadList.jsx";

export default function TeamDetails() {
    const navigate = useNavigate();
    const { teamId } = useParams();
    const [team, setTeam] = useState({});
    const [showSquad, setShowSquad] = useState(false);

    useEffect(() => {
        teamService.getOne(teamId)
        .then(teamData => setTeam(teamData));
    }, [teamId]);

    function deleteTeamHandler() {
        teamService.deleteOne(teamId);
        navigate('/teams');
    }

    function toggleSquadList() {
        setShowSquad(state => !state);
    }

    return (
        <div>
            <h1>{team.name}</h1>
            <h2>Ground: {team.ground}</h2>
            <h2>League: {team.league}</h2>
            <img src={team.mainImage} />
            <Link to={`/teams/${teamId}/edit`} >Edit</Link>
            <button onClick={deleteTeamHandler}>Delete</button>
            <button onClick={toggleSquadList}>Squad list</button>
            {showSquad && <TeamSquadList teamId={teamId} />}
        </div>
    );
}