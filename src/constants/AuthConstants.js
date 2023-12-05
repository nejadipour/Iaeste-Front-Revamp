import Cookies from "js-cookie";

export const getBaseURL = () => {
    const localStorageBaseURL = localStorage.getItem("baseURL");
    const baseURL = import.meta.env.VITE_BASE_URL || window.env.VITE_BASE_URL;

    return localStorageBaseURL ? localStorageBaseURL : baseURL;
}

export const getAccessToken = () => {
    return Cookies.get("access") ? `token ${Cookies.get("access")}` : null
}
