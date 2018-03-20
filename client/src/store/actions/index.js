let nextGameId = 0;

export const ADD_GAME = 'ADD_GAME';
export const UPDATED_GAMES = 'UPDATED_GAMES';
export const FETCH_GAMES = 'FETCH_GAMES';

export const addGame = game => ({
    type: ADD_GAME,
    payload: {
        id: nextGameId++,
        name: game.name,
        rating: game.rating,
        genre: game.genre
    },
});

export const updateGames = () => ({
    type: UPDATE_GAMES,
    payload: {
        time: new Date().toTimeString(),
    }
});

export const updatedGames = games => ({
    type: UPDATED_GAMES,
    payload: {
        time: new Date().toTimeString(),
        games: games,
    }
});

export const REQUEST_GAMES = 'REQUEST_GAMES';
requestGames = () => {
    return {type: REQUEST_GAMES}
};

export const RECEIVE_GAMES = 'RECEIVE_GAMES';
receiveGames = json => {
    return {
        type: RECEIVE_GAMES,
        payload: {
            games: json.data,
            receivedAt: Date.now(),
        }
    }
};

fetchGames = () => {
    return dispatch => {
        dispatch(requestGames());
        return fetch(`/api/games`)
            .then(response => response.json())
            .then(json => dispatch(receiveGames(json)))
    }
};

