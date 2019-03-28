import axios from 'axios';
import {
    FETCH_POST, FETCHING_POSTS, FETCH_SUCCESS, FETCH_ERROR,
} from './types';

const apiUrl = 'https://admin.insights.ubuntu.com/wp-json/wp/v2/posts?per_page=3&page=1&_embed=True';

export const fetchPosts = posts => ({
    type: FETCH_POST,
    posts,
});

export const fetchingPosts = () => ({
    type: FETCHING_POSTS,
});

export const fetchSuccess = () => ({
    type: FETCH_SUCCESS,
});

export const fetchError = () => ({
    type: FETCH_ERROR,
});

export const fetchAllPosts = () => (dispatch) => {
    dispatch(fetchingPosts());
    axios
        .get(apiUrl)
        .then((response) => {
            dispatch(fetchPosts(response.data));
            dispatch(fetchSuccess());
        })
        .catch((error) => {
            dispatch(fetchError());
            throw error;
        });
};
