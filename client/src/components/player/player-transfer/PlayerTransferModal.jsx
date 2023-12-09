import { useContext, useEffect, useState } from "react";

import * as teamsService from '../../../services/teamsService.js';
import * as playerService from '../../../services/playerService.js';

import styles from './PlayerTransferModal.module.css';
import PlayerContext from "../../../contexts/playerContext.jsx";

export default function PlayerTransferModal({
    closeModalHandler,
    playerData
}) {
    const [availableTeams, setAvailableTeams] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState();
    const { transferPlayerHandler } = useContext(PlayerContext);

    useEffect(() => {
        teamsService.getAll()
        .then(teams => {
            setAvailableTeams(teams);
            setSelectedTeam(teams[0]._id);
        });
    }, []);

    const changeSelectedTeamHandler = (e) => {
        setSelectedTeam(e.target.value);
    }

    const onTransferHandler = async (e) => {
        e.preventDefault();

        await transferPlayerHandler(playerData, selectedTeam);
        closeModalHandler();
    }

    return (
        <>
            <div className={styles.modal__body}>
                <form onSubmit={onTransferHandler}>
                    <div>
                        <h3 className={styles.player__title}>{`${playerData.firstName} ${playerData.lastName}`}</h3>
                        <label>Transfer To:</label>
                        <select
                            value={selectedTeam} 
                            onChange={changeSelectedTeamHandler}
                        >
                            {availableTeams.map(team => (<option value={team._id} key={team._id}>{team.name}</option>))}
                        </select>
                    </div>
                    <div className={styles.button__container}>
                        <button type="submit" className={styles.button__danger}>Transfer</button>
                        <button onClick={closeModalHandler} className={styles.button__close}>Cancel</button>
                    </div>
                </form>
            </div>
            <div onClick={closeModalHandler} className={styles.backdrop}></div>
        </>
    );
}