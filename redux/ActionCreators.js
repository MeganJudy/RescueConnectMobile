import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';
import { dispatch } from 'react-native'

export const fetchComments = () => dispatch => {
    return fetch(baseUrl + 'comments')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = errMess => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMess
});

export const addComments = comments => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchDogs = () => dispatch => {

    dispatch(dogsLoading());

    return fetch(baseUrl + 'dogs')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(dogs => dispatch(addDogs(dogs)))
        .catch(error => dispatch(dogsFailed(error.message)));
};

export const dogsLoading = () => ({
    type: ActionTypes.DOGS_LOADING
});

export const dogsFailed = errMess => ({
    type: ActionTypes.DOGS_FAILED,
    payload: errMess
});

export const addDogs = dogs => ({
    type: ActionTypes.ADD_DOGS,
    payload: dogs
});


export const fetchPartners = () => dispatch => {

    dispatch(partnersLoading());

    return fetch(baseUrl + 'partners')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(partners => dispatch(addPartners(partners)))
        .catch(error => dispatch(partnersFailed(error.message)));
};

export const partnersLoading = () => ({
    type: ActionTypes.PARTNERS_LOADING
});

export const partnersFailed = errMess => ({
    type: ActionTypes.PARTNERS_FAILED,
    payload: errMess
});

export const addPartners = partners => ({
    type: ActionTypes.ADD_PARTNERS,
    payload: partners
});

export const postFavorite = dogId => dispatch => {
    setTimeout(() => {
        dispatch(addFavorite(dogId));
    }, 1000);
};

export const addFavorite = dogId => ({
    type: ActionTypes.ADD_FAVORITE,
    payload: dogId
});

export const postComment = (dogId, author, location, text) => dispatch => {
    const newComment = {
        dogId,
        author,
        location,
        text
    };

    setTimeout(() => {
        dispatch(addComment(newComment));
    }, 2000);
};

export const addComment = comment => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const deleteFavorite = dogId => ({
    type: ActionTypes.DELETE_FAVORITE,
    payload: dogId
}); 