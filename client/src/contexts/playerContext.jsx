import { createContext, useState } from "react";

import * as playerService from "../services/playerService.js";
import { Outlet, useParams } from "react-router-dom";

const PlayerContext = createContext();

export const PlayerProvider = () => {
    const [playersList, setPlayersList] = useState([]);
    const { teamId } = useParams();

    function setPlayers(players) {
        setPlayersList(players);
    }

    async function deletePlayerHandler(playerId) {
        await playerService.deleteById(playerId);
        setPlayersList(playersList => {
            return playersList.filter(player => player._id !== playerId);
        });
    }

    async function transferPlayerHandler(playerData, selectedTeam) {
        const updatedData = {
            ...playerData,
            teamId: selectedTeam
        }
        await playerService.updatePlayer(updatedData._id, updatedData);

        if(selectedTeam !== teamId) {
            setPlayersList(playersList => playersList.filter(player => player._id !== updatedData._id));
        }
    }

    async function addPlayerHandler(formValues, teamId) {
        const createdPlayer = await playerService.create({
            ...formValues,
            teamId
        });
        setPlayersList(playersList => [...playersList, createdPlayer]);
    }

    const context = {
        playersList,
        setPlayers,
        deletePlayerHandler,
        transferPlayerHandler,
        addPlayerHandler
    }
    return <PlayerContext.Provider value={context}>
        <Outlet />
    </PlayerContext.Provider>
}

PlayerContext.displayName = "PlayerContext";

export default PlayerContext;