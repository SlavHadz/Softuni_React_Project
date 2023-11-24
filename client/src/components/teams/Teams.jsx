import { useEffect, useState } from "react";
import * as teamsService from '../../services/teamsService.js';

export default function Teams() {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        console.log("Called use effect");
        teamsService
        .getAll()
        .then(teamsResult => setTeams(Object.values(teamsResult)));
    }, []);

    return (
        <div>
            Teams list:
            {teams.map(team => (<div key={1}>{team.name}</div>))}
        </div>
    );
}