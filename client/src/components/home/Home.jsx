import { useEffect, useState } from 'react';

import styles from './Home.module.css';
import TeamLatest from '../team/team-latest/TeamLatest.jsx';

export default function Home() {

    return (
        <div>
            <h1 className={styles.main__text}>The best place to find and store your football data</h1>
            <TeamLatest />
        </div>
    );
}