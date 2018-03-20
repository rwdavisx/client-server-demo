import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {listItems: state.games,}
};

const List = ({listItems}) => {
    return listItems.length > 0 ?
        <ul>
            {listItems.map(game => (
                <li key={game._id} className={'list-unstyled'}>
                    {game.name} - {game.rating}/5 - {game.genre}
                </li>
            ))}
        </ul>
        : <p>There are no games to display.</p>;
};

const GamesList = connect(mapStateToProps)(List);

export default GamesList;