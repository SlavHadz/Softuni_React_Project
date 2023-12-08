import { get, post } from "../lib/request.js";
const loginUrl = "http://localhost:3030/users/login";
const registerUrl = "http://localhost:3030/users/register";
const logoutUrl = "http://localhost:3030/users/logout";

export const login = async (email, password) => {
    const token = await post(loginUrl, {
        email,
        password
    });

    return token;
};

export const register = async (email, username, password) => {
    const token = await post(registerUrl, {
        email,
        username,
        password
    });

    return token;
};

export const logout = async () => {
    await get(logoutUrl);
}