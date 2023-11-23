import * as request from '../lib/request.js'; 
const baseUrl = "http://localhost:3030/data/teams";

export const getAll = async () => {
    const result = await request.get(baseUrl);
    return result;
}