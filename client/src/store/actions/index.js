export const REQUEST_GAMES = 'REQUEST_GAMES';
export const RECEIVE_GAMES = 'RECEIVE_GAMES';
export const SELECT_RATING = 'SELECT_RATING';
export const INVALIDATE_RATING = 'INVALIDATE_RATING';

export const selectRating = rating => ({
    type: SELECT_RATING,
    rating,
});

export const invalidateRating = rating => ({
    type: INVALIDATE_RATING,
    rating,
});

export const requestGames = rating => ({
    type: REQUEST_GAMES,
    rating,
});

export const receiveGames = (rating, json) => ({
    type: RECEIVE_GAMES,
    rating,
    games: json.games,
    receivedAt: Date.now(),
});

const fetchGames = rating => dispatch => {
    dispatch(requestGames(rating));
    return fetch(`/api/games`)
        .then(response => response.json())
        .then(json => dispatch(receiveGames(rating, json)));
};

const shouldFetchGames = (state, rating) => {
    const games = state.gamesByRating[rating];
    if (!games) {
        return true
    }
    if (games.isFetching) {
        return false
    }
    return games.didInvalidate
};

export const fetchGamesIfNeeded = rating => (dispatch, getState) => {
    if (shouldFetchGames(getState(), rating)) {
        return dispatch(fetchGames(rating))
    }
};