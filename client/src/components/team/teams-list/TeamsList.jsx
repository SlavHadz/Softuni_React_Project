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
                {teams.length === 0 && <p className={styles.teams__text}>No teams added yet!</p>}
            </div>
        </div>
    );
}