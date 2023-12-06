import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import * as teamsService from '../../../services/teamsService.js';
import styles from './TeamLatest.module.css';

import Button from 'react-bootstrap/Button';

export default function TeamLatest() {
    const [latest, setLatest] = useState({});

    useEffect(() => {
        teamsService.getAll()
        .then(teams => {
            const latestTeam = teams.slice(-1);
            setLatest(latestTeam[0]);
        });
    }, []);

    return (
        <div className={styles.latest__container}>
            <h3 className={styles.latest__title}>Latest team</h3>
            <div className={styles.card}>
                <div className={styles.card__thumbnail}>
                    <img src={latest.teamLogo} className={styles.thumbnail__img} />
                </div>
                <h5 className={styles.card__title}>{latest.name}</h5>
                <Button
                    as={Link}
                    to={`/teams/${latest._id}/details`} 
                    className={styles.card__button} 
                    variant="dark"
                >Details</Button>
            </div>
        </div>
    );
}