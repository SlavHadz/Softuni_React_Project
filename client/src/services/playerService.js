import * as request from '../lib/request.js';

const baseUrl = 'http://localhost:3030/data/players';

export const getByTeamId = async (teamId) => {
    const queryString = new URLSearchParams({
        where: `teamId="${teamId}"`
    });

    const result = await request.get(`${baseUrl}?${queryString}`);
    console.log(result);
}