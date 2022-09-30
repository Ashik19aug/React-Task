import {HOST} from "../URLs/Urls";

const axios = require("axios");

const api = axios.create({
    // baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 5000,
    headers: {
        Accept: "application/json",
    },
});

export async function getApiData(url, method, Data) {
    try {
        const ApiData = await axios({
            url: HOST+url,
            method: method,
            data: Data,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        });
        return {success: true, response: ApiData};
    } catch (e) {
        return {success: false, message: e.message};
    }
}
