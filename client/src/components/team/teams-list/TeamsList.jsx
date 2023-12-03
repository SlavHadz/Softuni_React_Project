import { useEffect, useState } from "react";
import * as teamsService from '../../../services/teamsService.js';
import TeamListItem from "../team-list-item/TeamListItem.jsx";


export default function TeamsList() {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        teamsService
        .getAll()
        .then(teamsResult => setTeams(teamsResult));
    }, []);

    return (
        <div>
            Teams list:
            {teams.map(team => (<TeamListItem key={team._id} teamData={team} />))}
        </div>
    );
}