import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import Cookies from "js-cookie";
import {getAccessToken, getBaseURL} from "../../constants/AuthConstants.jsx";

export const useProvideAuth = () => {
    const [authUser, setAuthUser] = useState({first_name: "علیرضا", last_name: "نژادی‌پور", profile_pic: ""});
    const [fetched, setFetched] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error401happened, set401Happened] = useState(false);

    const getAuthorizedClient = () => {
        return axios.create({
            baseURL: getBaseURL(),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getAccessToken()
            }
        })
    }

    const setToken = (name, token) => {
        Cookies.set(name, token);
    }

    const removeTokens = () => {
        Cookies.remove("access");
    }

    const resetAuthUser = useCallback(() => {
        removeTokens();
        setAuthUser(null);
        set401Happened(false);
        setLoading(false);
    }, [])

    const handleLogin = (data) => {
        setToken("access", data?.token);
        fetchAuthUser();
    }

    const handleLogout = () => {
        resetAuthUser();
    }

    const handle401 = useCallback(() => {
        resetAuthUser();
    }, [resetAuthUser])

    const fetchAuthUser = useCallback(() => {
        setLoading(true);
        if (Cookies.get("access")) {
            getAuthorizedClient().get("auth/profile/")
                .then(({data}) => {
                    setAuthUser(data);
                    setFetched(true);
                    setLoading(false);
                })
                .catch((error) => {
                    if (error.response?.status === 401) {
                        set401Happened(true);
                    } else {
                        resetAuthUser();
                    }
                })
        } else {
            setLoading(false);
        }
    }, [resetAuthUser])


    useEffect(() => {
        if (error401happened) {
            handle401();
        }
    }, [error401happened, handle401])

    useEffect(() => {
        if (!fetched && !loading && !error401happened) {
            fetchAuthUser();
        }
    }, [fetched, loading, error401happened, fetchAuthUser])

    return {
        handleLogin,
        handleLogout,
        set401Happened,
        authUser,
        loading
    };
};
