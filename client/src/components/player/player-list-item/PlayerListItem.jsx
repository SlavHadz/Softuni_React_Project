import { useNavigate } from "react-router-dom";
import * as playerService from '../../../services/playerService.js';
import { useState } from "react";
import PlayerTransferModal from "../player-transfer/PlayerTransferModal.jsx";

export default function PlayerListItem({
    playerData
}) {
    const {_id, teamId, firstName, lastName, position} = playerData;
    const navigate = useNavigate();
    const [showTransfer, setShowTransfer] = useState(false);

    const onDeleteHandler = async (playerId) => {
        await playerService.deleteById(playerId);
        navigate(`/teams/${teamId}/details`);
    }

    const clickTransferHandler = () => {
        setShowTransfer(true);
    }

    const closeTransferModalHandler = () => {
        setShowTransfer(false);
    } 

    return (
        <>
            <h1>Name: {firstName} {lastName}</h1>
            <h2>Position: {position}</h2>
            <button onClick={() => onDeleteHandler(_id)}>Delete</button>
            <button onClick={clickTransferHandler}>Transfer</button>

            {showTransfer && <PlayerTransferModal closeModalHandler={closeTransferModalHandler} playerData={playerData} />}
        </>
    );
}