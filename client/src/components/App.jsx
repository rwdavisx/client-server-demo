import React, {Component} from 'react';
import './App.css';
import {GamesList} from './GameList';
import AddGame, {GameSubmission} from "../containers/AddGame";
import {CreateGameService} from '../services/CreateGameService';
import {GetGamesService} from '../services/GetGamesService';

const defaultForm = {
    name: '',
    rating: '',
    genre: '',
    submissionError: false,
};

class App extends Component {
    updateGamesList = () => {
        GetGamesService()
            .then(res => this.setState({
                games: res.games
            }))
            .catch(err => {
                console.log(err);
            });
    };
    formChanged = (event) => {
        const target = event.target;
        const field = target.name;
        const value = target.value;

        if (this.state.form.submissionError) {
            this.setState({
                form: Object.assign({}, this.state.form, {submissionError: false})
            });
        }

        this.setState({
            form: Object.assign({}, this.state.form, {[field]: value})
        });
    };
    gameSubmitted = (event) => {
        event.preventDefault();
        if (this.canBeSubmitted()) {
            CreateGameService(this.state.form)
                .then(() => {
                    this.updateGamesList();
                    this.setState({form: defaultForm});
                })
                .catch(err => console.log(err));
        } else {
            this.setState({
                form: Object.assign({}, this.state.form, {submissionError: true})
            });
        }
    };
    validate = (name, rating, genre) => {
        return {
            name: name.length === 0,
            rating: rating < 1 || rating > 5,
            genre: genre === ''
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            games: [],
            form: defaultForm,
        }
    }

    componentDidMount() {
        this.updateGamesList();
    }

    canBeSubmitted() {
        const errors = this.validate(this.state.form.name, this.state.form.rating, this.state.form.genre);
        return !Object.keys(errors).some(x => {
            console.log(errors[x]);
            return errors[x];
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Ryan's Games</h1>
                </header>
                <AddGame submit={this.gameSubmitted}/>
                {/*<GameSubmission form={this.state.form} onChanged={this.formChanged} onSubmit={this.gameSubmitted}/><br/>*/}
                <GamesList games={this.state.games}/>
            </div>
        );
    }
}

export default App;
