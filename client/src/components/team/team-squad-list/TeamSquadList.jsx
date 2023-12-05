import { useEffect, useState } from "react";

import * as playerService from '../../../services/playerService.js';
import PlayerListItem from "../../player/player-list-item/PlayerListItem.jsx";
import PlayerAddModal from "../../player/player-add/PlayerAddModal.jsx";

export default function TeamSquadList({
    teamId
}) {
    const [playersList, setPlayersList] = useState([]);
    const [showAdd, setShowAdd] = useState(false);
    useEffect(() => {
        playerService
        .getByTeamId(teamId)
        .then(players => {
            console.log(players);
            setPlayersList(players);
        });
    }, [teamId]);

    const clickAddHandler = () => {
        setShowAdd(true);
    }

    const closeAddModalHandler = () => {
        setShowAdd(false);
    }

    return (
        <>
            <h2>Current rooster:</h2>
            <div>
                { playersList.map(player => <PlayerListItem key={player._id} playerData={player} />) }
            </div>
            <button onClick={clickAddHandler}>Add Player</button>
            {showAdd && <PlayerAddModal teamId={teamId} closeHandler={closeAddModalHandler} />}
        </>
    );
}