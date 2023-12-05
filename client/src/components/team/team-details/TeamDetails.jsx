import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as teamService from '../../../services/teamsService.js';
import TeamSquadList from "../team-squad-list/TeamSquadList.jsx";
import DeleteConfirmationModal from "../../common/delete-confirmation-modal/DeleteConfirmationModal.jsx";
import AuthContext from "../../../contexts/authContext.jsx";

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
            <div>
                <h1>{team.name}</h1>
                <h2>Ground: {team.ground}</h2>
                <h2>League: {team.league}</h2>
                <img src={team.mainImage} />
                { isOwner() &&
                    <>
                        <Link to={`/teams/${teamId}/edit`} >Edit</Link>
                        <button onClick={clickDeleteBtnHandler}>Delete</button>
                    </>
                }
                <button onClick={toggleSquadList}>Squad list</button>
                {showSquad && <TeamSquadList teamOwnerId={team._ownerId} teamId={teamId} />}
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