import React from 'react';
import PropTypes from 'prop-types';

const GameList = ({games}) => (
    <ul>
        {games.map(game => (
            <li key={game._id} className={'list-unstyled'}>
                {game.name} - {game.rating}/5 - {game.genre}
            </li>
        ))}
    </ul>
);

GameList.PropTypes = {
    games: PropTypes.array.isRequired,
};

export default GameList;