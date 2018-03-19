import {ADD_GAME, NEW_GAME_DETAILS_CHANGED} from '../actions/index'

const games = (state = [], action) => {
    switch (action.type) {
        case ADD_GAME:
            return [
                ...state,
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    rating: action.payload.rating,
                    genre: action.payload.genre
                }
            ];
        case NEW_GAME_DETAILS_CHANGED:
            return state.form = {
                name: action.payload.name,
                rating: action.payload.rating,
                genre: action.payload.genre
            };
        default:
            return state;
    }
};

export default games;