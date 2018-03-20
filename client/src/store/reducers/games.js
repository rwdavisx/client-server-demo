import {ADD_GAME, UPDATE_GAMES, UPDATED_GAMES} from '../actions/index'
import {CreateGameService} from '../../services/CreateGameService';
import {GetGamesService} from "../../services/GetGamesService";

const defaultState = {
    games: []
};

const games = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_GAME:
            return CreateGameService(action.payload)
                .then(() => {
                    return {...state, games: [...state.games, action.payload]};
                })
                .catch(() => {
                    alert('Could not submit new game!');
                    return state;
                });

        case FETCH_GAMES:
            GetGamesService();
            return {...state};
        case UPDATED_GAMES:
            let games = GetGamesService();
            //todo fix this shit  https://www.valentinog.com/blog/react-redux-tutorial-beginners/
            return {...state, games: [games]};

        default:
            return state;
    }
};

export default games;