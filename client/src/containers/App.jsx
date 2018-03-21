import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchGamesIfNeeded, invalidateRating, selectRating,} from '../store/actions';
import RatingPicker from '../components/RatingPicker';
import GameList from '../components/GameList';

class App extends Component {
    static propTypes = {
        selectedRating: PropTypes.number.isRequired,
        games: PropTypes.array.isRequired,
        isFetching: PropTypes.bool.isRequired,
        lastUpdated: PropTypes.number,
        dispatch: PropTypes.func.isRequired
    };

    componentDidMount() {
        const {dispatch, selectedRating} = this.props;
        dispatch(fetchGamesIfNeeded(selectedRating));
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedRating !== this.props.selectedRating) {
            const {dispatch, selectedRating} = nextProps;
            dispatch(fetchGamesIfNeeded(selectedRating));
        }
    }

    handleChange = nextRating => {
        this.props.dispatch(selectRating(nextRating));
    };

    handleRefreshClick = e => {
        e.preventDefault();

        const {dispatch, selectedRating} = this.props;
        dispatch(invalidateRating(selectedRating));
        dispatch(fetchGamesIfNeeded(selectedRating));
    };

    render() {
        const {selectedRating, games, isFetching, lastUpdated} = this.props;
        const isEmpty = games.length === 0;
        return (
            <div>
                <RatingPicker value={selectedRating}
                              onChange={this.handleChange}
                              options={[1, 2, 3, 4, 5]}/>
                <p>
                    {lastUpdated &&
                    <span>
                      Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
                        {' '}
                  </span>}
                    {!isFetching &&
                    <button onClick={this.handleRefreshClick}>
                        Refresh
                    </button>
                    }
                </p>
                {isEmpty
                    ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
                    : <div>
                        <GameList games={games}/>
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {selectedRating, gamesByRating} = state;
    const {
        isFetching,
        lastUpdated,
        items: games
    } = gamesByRating[selectedRating] || {
        isFetching: true,
        items: []
    };

    return {
        selectedRating,
        games,
        isFetching,
        lastUpdated
    }
};

export default connect(mapStateToProps)(App);