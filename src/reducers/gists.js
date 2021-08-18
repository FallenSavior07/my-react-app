import { GET_GISTS, SET_ERROR_STATUS, SET_IDLE_STATUS, SET_LOADING_STATUS } from "../actions/gists";
import { GISTS_REQUEST_STATUS } from "../components/GistsList/constants";

const initialState = {
    gists: [],
    status: GISTS_REQUEST_STATUS.IDLE
};

export default function gistsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_GISTS: {
            return {
                ...state,
                gists: action.payload.gists,
            }
        }
        case SET_IDLE_STATUS: {
            return {
                ...state,
                status: GISTS_REQUEST_STATUS.IDLE,
            }
        }
        case SET_LOADING_STATUS: {
            return {
                ...state,
                status: GISTS_REQUEST_STATUS.LOADING,
            }
        }
        case SET_ERROR_STATUS: {
            return {
                ...state,
                status: GISTS_REQUEST_STATUS.ERROR,
            }
        }
        default:
            return state;
    }
}