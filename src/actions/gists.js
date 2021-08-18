import { API_URL_PUBLIC } from "../components/App/constants";

export const GET_GISTS = "GISTS::GET_GISTS";
export const SET_IDLE_STATUS = "GISTS::SET_IDLE_STATUS";
export const SET_LOADING_STATUS = "GISTS::SET_LOADING_STATUS";
export const SET_ERROR_STATUS = "GISTS::SET_ERROR_STATUS";

export const getGists = (gists) => ({
    type: GET_GISTS,
    payload: {
        gists
    }
});

export const setIdleStatus = () => ({
    type: SET_IDLE_STATUS,
})

export const setLoadingStatus = () => ({
    type: SET_LOADING_STATUS,
})

export const setErrorStatus = () => ({
    type: SET_ERROR_STATUS,
})

export const fetchGists = () => async (dispatch) => {
        dispatch(setLoadingStatus());
        try {
            const response = await fetch(API_URL_PUBLIC);
            if (!response.ok) {
                throw new Error(`Запрос не выполнен со статусом: ${response.status}`);
            }
            const result = await response.json();
            dispatch(getGists(result));
            dispatch(setIdleStatus());
        }
        catch (err) {
            console.error(err);
            dispatch(setErrorStatus());
        }
    }