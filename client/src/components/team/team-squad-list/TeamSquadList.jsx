import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as playerService from '../../../services/playerService.js';
import * as teamsService from '../../../services/teamsService.js';
import PlayerListItem from "../../player/player-list-item/PlayerListItem.jsx";
import PlayerAddModal from "../../player/player-add/PlayerAddModal.jsx";
import AuthContext from "../../../contexts/authContext.jsx";

import styles from './TeamSquadList.module.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import PlayerContext from "../../../contexts/playerContext.jsx";

export default function TeamSquadList() {
    const { teamId } = useParams();
    const [teamData, setTeamData] = useState({});
    const [showAdd, setShowAdd] = useState(false);
    const {playersList, setPlayers} = useContext(PlayerContext);

    useEffect(() => {
        teamsService.getOne(teamId)
        .then(teamData => setTeamData(teamData));

        playerService
        .getByTeamId(teamId)
        .then(players => {
            setPlayers(players);
        });
    }, [teamId, setPlayers]);

    const { userId } = useContext(AuthContext);

    const clickAddHandler = () => {
        setShowAdd(true);
    }

    const closeAddModalHandler = () => {
        setShowAdd(false);
    }

    const isOwner = () => teamData._ownerId === userId;

    return (
        <div className={styles.squad__container}>
            <h1 className={styles.squad__title}>{teamData.name} current squad:</h1>
            <div className={styles.squad__table}>
                <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>Full Name</th>
                            <th>Position</th>
                            <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        { playersList.map(player => <PlayerListItem key={player._id} playerData={player} />) }
                        </tbody>
                    </Table>
                </div>
                {playersList.length === 0 && <p className={styles.fallback__text}>No players added yet!</p>}
            </div>
            {
                isOwner() &&
                <Button variant="success" onClick={clickAddHandler}>Add Player</Button>
            }
            {showAdd && <PlayerAddModal teamId={teamId} closeHandler={closeAddModalHandler} />}
        </div>
    );
}