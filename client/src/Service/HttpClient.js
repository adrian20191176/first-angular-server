import axios from 'axios'


export const instance = axios.create({
    baseUrl: "0",
    headers: {
        Accept: "application/json",
        "content-type" : "application/json"
    },
    timeout: 60000
})