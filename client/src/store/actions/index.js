let nextGameId = 0;

export const ADD_GAME = 'ADD_GAME';
export const UPDATED_GAMES = 'UPDATED_GAMES';

export const addGame = game => ({
    type: ADD_GAME,
    payload: {
        id: nextGameId++,
        name: game.name,
        rating: game.rating,
        genre: game.genre
    },
});

export const updatedGames = () => ({
    type: UPDATED_GAMES,
    payload: {
        time: new Date().toTimeString()
    }
});
