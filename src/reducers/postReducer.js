import {
    FETCH_POST, FETCHING_POSTS, FETCH_SUCCESS, FETCH_ERROR,
} from '../actions/types';

export default function postReducer(state = { isloading: true }, action) {
    switch (action.type) {
    case FETCH_POST:
        return Object.assign({}, state, {
            data: action.posts,
        });
    case FETCHING_POSTS:
        return Object.assign({}, state, {
            isloading: true,
        });
    case FETCH_SUCCESS:
        return Object.assign({}, state, {
            isloading: false,
        });
    case FETCH_ERROR:
        return Object.assign({}, state, {
            error: true,
        });
    default:
        return state;
    }
}
