import { useContext, useEffect, useState } from "react";

import * as playerService from '../../../services/playerService.js';
import PlayerListItem from "../../player/player-list-item/PlayerListItem.jsx";
import PlayerAddModal from "../../player/player-add/PlayerAddModal.jsx";
import AuthContext from "../../../contexts/authContext.jsx";

export default function TeamSquadList({
    teamId,
    teamOwnerId
}) {
    const [playersList, setPlayersList] = useState([]);
    const [showAdd, setShowAdd] = useState(false);

    useEffect(() => {
        playerService
        .getByTeamId(teamId)
        .then(players => {
            setPlayersList(players);
        });
    }, [teamId]);

    const { userId } = useContext(AuthContext);

    const clickAddHandler = () => {
        setShowAdd(true);
    }

    const closeAddModalHandler = () => {
        setShowAdd(false);
    }

    const isOwner = () => teamOwnerId === userId;

    return (
        <>
            <h2>Current rooster:</h2>
            <div>
                { playersList.map(player => <PlayerListItem key={player._id} playerData={player} />) }
            </div>
            {
                isOwner() &&
                <button onClick={clickAddHandler}>Add Player</button>
            }
            {showAdd && <PlayerAddModal teamId={teamId} closeHandler={closeAddModalHandler} />}
        </>
    );
}