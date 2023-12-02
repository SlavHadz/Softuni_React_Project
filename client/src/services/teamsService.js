import * as request from '../lib/request.js'; 
const baseUrl = "http://localhost:3030/data/teams";

export const getAll = async () => {
    return await request.get(baseUrl);
}

export const create = async (teamData) => {
    return await request.post(baseUrl, teamData);
}

export const getOne = async (teamId) => {
    return await request.get(`${baseUrl}/${teamId}`);
}

export const deleteOne = async (teamId) => {
    return await request.del(`${baseUrl}/${teamId}`);
}

export const updateOne = async (teamId, teamData) => {
    return await request.put(`${baseUrl}/${teamId}`, teamData);
}