import { useEffect, useState } from "react";
import * as teamsService from '../../../services/teamsService.js';
import TeamListItem from "../team-list-item/TeamListItem.jsx";

import styles from './TeamsList.module.css';


export default function TeamsList() {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        teamsService
        .getAll()
        .then(teamsResult => setTeams(teamsResult));
    }, []);

    return (
        <div className={styles.list__container}>
            <div className={styles.teams__table}>
                {teams.map(team => (<TeamListItem key={team._id} teamData={team} />))}
            </div>
        </div>
    );
}