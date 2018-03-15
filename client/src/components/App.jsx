import React, {Component} from 'react';
import './App.css';
import GameWindow from './GameWindow';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Ryan's Games</h1>
                </header>
                <GameWindow/>
            </div>
        );
    }
}

export default App;
