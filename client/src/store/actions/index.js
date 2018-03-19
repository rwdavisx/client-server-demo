let nextGameId = 0;

export const ADD_GAME = 'ADD_GAME';
export const NEW_GAME_DETAILS_CHANGED = 'NEW_GAME_DETAILS_CHANGED';

export const addGame = (name, rating, genre) => ({
    type: ADD_GAME,
    payload: {
        id: nextGameId++,
        name: name,
        rating: rating,
        genre: genre
    },
});

export const newGameDetailsChanged = (name, rating, genre) => ({
    type: NEW_GAME_DETAILS_CHANGED,
    payload: {
        name: name,
        rating: rating,
        genre: genre,
    }
});

