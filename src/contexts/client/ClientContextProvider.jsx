import axios from "axios"


export const useProvideClient = () => {
    // in order to change the base url, set baseURL in Application Local Storage (i.e: http://127.0.0.1:8000/)
    const localStorageBaseURL = localStorage.getItem("baseURL");
    const baseURL = import.meta.env.VITE_BASE_URL || window.env.VITE_BASE_URL;

    const client = axios.create({
        baseURL: localStorageBaseURL ? localStorageBaseURL : baseURL,
        headers: {
            'Content-Type': 'application/json',
        }
    });

    client.interceptors.request.use(
        function (config) {
            const token = localStorage.getItem("token");
            if (token) {
                config.headers['Authorization'] = `Bearer ${token}`;
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
