import { useNavigate } from "react-router-dom";
import * as playerService from '../../../services/playerService.js';
import { useState } from "react";
import PlayerTransferModal from "../player-transfer/PlayerTransferModal.jsx";
import DeleteConfirmationModal from "../../common/delete-confirmation-modal/DeleteConfirmationModal.jsx";

export default function PlayerListItem({
    playerData
}) {
    const {_id, teamId, firstName, lastName, position} = playerData;
    const navigate = useNavigate();
    const [showTransfer, setShowTransfer] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    const clickTransferHandler = () => {
        setShowTransfer(true);
    }

    const closeTransferModalHandler = () => {
        setShowTransfer(false);
    }

    const onDeleteHandler = async (playerId) => {
        await playerService.deleteById(playerId);
        setShowDelete(false);
        navigate(`/teams/${teamId}/details`);
    }

    const clickDeleteBtnHandler = () => {
        setShowDelete(true);
    }

    const closeDeleteModal = () => {
        setShowDelete(false);
    }

    return (
        <>
            <h1>Name: {firstName} {lastName}</h1>
            <h2>Position: {position}</h2>
            <button onClick={clickDeleteBtnHandler}>Delete</button>
            <button onClick={clickTransferHandler}>Transfer</button>

            {showTransfer && <PlayerTransferModal closeModalHandler={closeTransferModalHandler} playerData={playerData} />}

            {showDelete && <DeleteConfirmationModal
                itemName={`${firstName} ${lastName}`}
                itemId={_id}
                closeHandler={closeDeleteModal}
                confirmHandler={onDeleteHandler}
            />}
        </>
    );
}