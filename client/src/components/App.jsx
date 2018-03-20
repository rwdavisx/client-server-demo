import React, {Component} from 'react';
import './App.css';
import GamesList from './GameList';
import AddGame from "./AddGame";
import {updatedGames} from "../store/actions";
import {connect} from "react-redux";

const mapDispatchToProps = dispatch => {
    return {
        updatedGames: () => dispatch(updatedGames()),
    };
};

class GameApp extends Component {

    componentDidMount() {
        this.props.updatedGames();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Ryan's Games</h1>
                </header>
                <GamesList/>
                <AddGame/>
            </div>
        );
    }
}

const App = connect(null, mapDispatchToProps)(GameApp);

export default App;