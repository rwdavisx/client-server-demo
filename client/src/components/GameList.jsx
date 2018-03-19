import React from 'react';

export function GamesList(props) {
    let games, elements;

    if (props.games) {
        games = props.games;

        elements = games.map(game =>
            <li key={game._id} className={'list-unstyled'}>
                {game.name} - {game.rating}/5 - {game.genre}
            </li>
        );
        return (<ul>{elements}</ul>);
    } else {
        return (<p>There are no games to display.</p>);
    }
}