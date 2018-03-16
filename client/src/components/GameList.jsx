import React from 'react';

export function GamesList(props) {
    const games = props.games;
    const listItems = games.map(game =>
        <li key={game._id} className={'list-unstyled'}>
            {game.name} - {game.rating}/5 - {game.genre}
        </li>
    );

    return (<ul>{listItems}</ul>);
}