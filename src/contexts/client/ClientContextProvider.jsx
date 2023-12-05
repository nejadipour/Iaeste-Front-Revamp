import axios from "axios"
import {getAccessToken, getBaseURL} from "../../constants/AuthConstants.js";


export const useProvideClient = () => {
    const client = axios.create({
        baseURL: getBaseURL(),
        headers: {
            'Content-Type': 'application/json',
        }
    });

    client.interceptors.request.use(
        function (config) {
            const token = getAccessToken();
            if (token) {
                config.headers['Authorization'] = token;
            }

            if (["post", "patch"].includes(config.method)) {
                config.headers['Content-Type'] = 'multipart/form-data';
            }

            return config;
        },
        function (error) {
            return Promise.reject(error);
        }
    )

    return {
        client
    }
}
