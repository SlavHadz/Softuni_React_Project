import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as teamService from '../../../services/teamsService.js';
import * as playerService from '../../../services/playerService.js';
import TeamSquadList from "../team-squad-list/TeamSquadList.jsx";
import DeleteConfirmationModal from "../../common/delete-confirmation-modal/DeleteConfirmationModal.jsx";

export default function TeamDetails() {
    const navigate = useNavigate();
    const { teamId } = useParams();
    const [team, setTeam] = useState({});
    const [showSquad, setShowSquad] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

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

    return (
        <>
            <div>
                <h1>{team.name}</h1>
                <h2>Ground: {team.ground}</h2>
                <h2>League: {team.league}</h2>
                <img src={team.mainImage} />
                <Link to={`/teams/${teamId}/edit`} >Edit</Link>
                <button onClick={clickDeleteBtnHandler}>Delete</button>
                <button onClick={toggleSquadList}>Squad list</button>
                {showSquad && <TeamSquadList teamId={teamId} />}
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