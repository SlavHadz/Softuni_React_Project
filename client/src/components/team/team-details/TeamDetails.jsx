import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as teamService from '../../../services/teamsService.js';
import TeamSquadList from "../team-squad-list/TeamSquadList.jsx";
import DeleteConfirmationModal from "../../common/delete-confirmation-modal/DeleteConfirmationModal.jsx";
import AuthContext from "../../../contexts/authContext.jsx";
import styles from "./TeamDetails.module.css";

import Button from 'react-bootstrap/Button';

export default function TeamDetails() {
    const navigate = useNavigate();
    const { teamId } = useParams();
    const [team, setTeam] = useState({});
    const [showSquad, setShowSquad] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const { userId } = useContext(AuthContext);

    useEffect(() => {
        teamService.getOne(teamId)
        .then(teamData => setTeam(teamData));
    }, [teamId]);

    function deleteTeamHandler() {
        teamService.deleteOne(teamId);
        setShowDelete(false);
        navigate('/teams');
    }

    function closeDeleteModal() {
        setShowDelete(false);
    }

    function clickDeleteBtnHandler() {
        setShowDelete(true);
    }

    function toggleSquadList() {
        setShowSquad(state => !state);
    }

    function isOwner() {
        return team._ownerId === userId;
    }

    return (
        <>
        <div className={styles.details__container}>
            <div>
                <div className={styles.team_photo__container}>
                    <img src={team.mainImage} className={styles.team_photo__img} />
                </div>
            </div>
            <div className={styles.details__right}>
                <div className={styles.team__data}>
                    <h1>{team.name}</h1>
                    <h2>Ground: {team.ground}</h2>
                    <h2>League: {team.league}</h2>
                    <div className={styles.buttons__container}>
                        { isOwner() &&
                            <>
                                <Button className={styles.action__button} as={Link} to={`/teams/${teamId}/edit`} variant="dark">Edit</Button>
                                <Button className={styles.action__button} onClick={clickDeleteBtnHandler} variant="danger">Delete</Button>
                            </>
                        }
                        <Button className={styles.action__button} variant="success" onClick={toggleSquadList}>Squad List</Button>
                        {showSquad && <TeamSquadList teamOwnerId={team._ownerId} teamId={teamId} />}
                    </div>
                </div>
            </div>
        </div>
        {showDelete && <DeleteConfirmationModal
            itemId={teamId}
            itemName={team.name}
            closeHandler={closeDeleteModal}
            confirmHandler={deleteTeamHandler}
        />}
        </>
    );
}