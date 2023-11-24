import { useEffect, useState } from "react";
import * as teamsService from '../../services/teamsService.js';
import TeamItem from "../team-item/TeamItem.jsx";

export default function Teams() {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        teamsService
        .getAll()
        .then(teamsResult => setTeams(Object.values(teamsResult)));
    }, []);

    return (
        <div>
            Teams list:
            {teams.map(team => (<TeamItem key={team._id} teamData={team} />))}
        </div>
    );
}