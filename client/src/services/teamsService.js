import * as request from '../lib/request.js'; 
const baseUrl = "http://localhost:3030/data/teams";

export const getAll = async () => {
    return await request.get(baseUrl);
}