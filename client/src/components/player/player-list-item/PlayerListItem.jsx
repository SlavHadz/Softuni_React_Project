import { useNavigate } from "react-router-dom";
import * as playerService from '../../../services/playerService.js';
import { useContext, useState } from "react";
import PlayerTransferModal from "../player-transfer/PlayerTransferModal.jsx";
import DeleteConfirmationModal from "../../common/delete-confirmation-modal/DeleteConfirmationModal.jsx";
import AuthContext from "../../../contexts/authContext.jsx";

import styles from './PlayerListItem.module.css';
import { Button } from "react-bootstrap";
import PlayerContext from "../../../contexts/playerContext.jsx";

export default function PlayerListItem({
    playerData
}) {
    const {_id, _ownerId, teamId, firstName, lastName, position} = playerData;
    const [showTransfer, setShowTransfer] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const { userId } = useContext(AuthContext);
    const { deletePlayerHandler } = useContext(PlayerContext);

    const clickTransferHandler = () => {
        setShowTransfer(true);
    }

    const closeTransferModalHandler = () => {
        setShowTransfer(false);
    }

    const onDeleteHandler = async (playerId) => {
        await deletePlayerHandler(playerId);
        setShowDelete(false);
    }

    const clickDeleteBtnHandler = () => {
        setShowDelete(true);
    }

    const closeDeleteModal = () => {
        setShowDelete(false);
    }

    const isOwner = () => _ownerId === userId;

    return (
        <>
            <tr>
            <td>{`${playerData.firstName} ${playerData.lastName}`}</td>
            <td>{playerData.position}</td>
            <td className={styles.actions__cell}>
                { isOwner() &&
                    <>
                        <Button className={styles.action__button} onClick={clickDeleteBtnHandler} variant="danger">Delete</Button>
                        <Button className={styles.action__button} onClick={clickTransferHandler} variant="info">Transfer</Button>
                    </>
                }
            </td>
            </tr>

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