import {combineReducers} from 'redux';
import {INVALIDATE_RATING, RECEIVE_GAMES, REQUEST_GAMES, SELECT_RATING,} from '../actions/index';

const selectedRating = (state = 3, action) => {
    switch (action.type) {
        case SELECT_RATING:
            return action.rating;
        default:
            return state;
    }
};

const games = (state = {
    isFetching: false,
    didInvalidate: false,
    games: []
}, action) => {
    switch (action.type) {
        case INVALIDATE_RATING:
            return {
                ...state,
                didInvalidate: true
            };
        case REQUEST_GAMES:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        case RECEIVE_GAMES:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.games,
                lastUpdated: action.receivedAt,
            });
        default:
            return state;
    }
};

const gamesByRating = (state = {}, action) => {
    switch (action.type) {
        case INVALIDATE_RATING:
        case RECEIVE_GAMES:
        case REQUEST_GAMES:
            return Object.assign({}, state, {
                [action.rating]: games(state[action.rating], action)
            });
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    gamesByRating,
    selectedRating,
});

export default rootReducer;