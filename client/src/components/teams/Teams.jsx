import { useEffect, useState } from "react";
import * as teamsService from '../../services/teamsService.js';

export default function Teams() {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        teamsService
        .getAll()
        .then(res => res.json())
        .then(teams => setTeams(teams));
    }, []);

    return (
        <div>
            Teams list:
            {teams.map(team => { <div>{team.name}</div> })}
        </div>
    );
}