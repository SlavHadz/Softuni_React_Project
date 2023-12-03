import { useEffect, useState } from "react";

import * as teamsService from '../../../services/teamsService.js';
import * as playerService from '../../../services/playerService.js';

export default function PlayerTransferModal({
    closeModalHandler,
    playerData
}) {
    const [availableTeams, setAvailableTeams] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState("");

    useEffect(() => {
        teamsService.getAll()
        .then(teams => setAvailableTeams(teams));
    }, []);

    const changeSelectedTeamHandler = (e) => {
        setSelectedTeam(e.target.value);
    }

    const onTransferHandler = async (e) => {
        e.preventDefault();

        const updatedData = {
            ...playerData,
            teamId: selectedTeam
        }
        await playerService.updatePlayer(playerData._id, updatedData);
        closeModalHandler();
    }

    return (
        <div>
            <form onSubmit={onTransferHandler}>
                <label>Transfer To:</label>
                <select value={selectedTeam} onChange={changeSelectedTeamHandler}>
                    {availableTeams.map(team => (<option value={team._id} key={team._id}>{team.name}</option>))}
                </select>
                <button type="submit">Transfer</button>
                <button onClick={closeModalHandler}>Cancel</button>
            </form>
        </div>
    );
}