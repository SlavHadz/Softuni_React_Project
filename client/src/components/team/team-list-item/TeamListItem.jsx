import { Link } from "react-router-dom";

import styles from './TeamListItem.module.css';
import Button from 'react-bootstrap/Button';

export default function TeamListItem({
    teamData
}) {
    return (
        <div className={styles.item__container}>
            <div className={styles.team__title}>{teamData.name}</div>
            <Button as={Link} to={`/teams/${teamData._id}/details`} variant="success">Details</Button>
        </div>
    );
}