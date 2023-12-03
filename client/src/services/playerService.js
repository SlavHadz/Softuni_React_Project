import * as request from '../lib/request.js';

const baseUrl = 'http://localhost:3030/data/players';

export const getByTeamId = async (teamId) => {
    const queryString = new URLSearchParams({
        where: `teamId="${teamId}"`
    });

    return await request.get(`${baseUrl}?${queryString}`);
}

export const create = async (playerData) => {
    return await request.post(baseUrl, playerData);
}

export const deleteById = async (playerId) => {
    await request.del(`${baseUrl}/${playerId}`);
}

export const updatePlayer = async (playerId, playerData) => {
    await request.put(`${baseUrl}/${playerId}`, playerData);
}