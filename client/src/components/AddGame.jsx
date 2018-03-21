import React, {Component} from 'react';
import {connect} from 'react-redux';
//import {addGame} from "../store/actions/index";

const mapDispatchToProps = dispatch => {
    return {
        addGame: game => {
        }//dispatch(addGame(game)),
    };
};

class Form extends Component {
    defaultState = {
        game: {
            name: '',
            rating: '',
            genre: '',
        },
        submissionError: false,
    };

    constructor() {
        super();
        this.state = this.defaultState;
    }

    handleChange = event => {
        const target = event.target;
        const field = target.name;
        const value = target.value;

        if (this.state.submissionError) {
            this.setState({
                submissionError: false,
            });
        }

        let update = Object.assign(this.state.game, {[field]: value});
        this.setState({game: update});
    };

    canBeSubmitted = () => {
        const errors = this.validateForm();
        return !Object.keys(errors).some(x => errors[x]);
    };

    validateForm = () => {
        const game = this.state.game;
        return {
            name: game.name.length === 0,
            rating: game.rating < 1 || game.rating > 5,
            genre: game.genre === ''
        };
    };

    handleSubmit = event => {
        event.preventDefault();
        if (this.canBeSubmitted()) {
            this.props.addGame(this.state.game);
            this.setState(this.defaultState);
        }
    };

    render() {
        const errorMessage = this.state.submissionError ? (<p>You must fill the info out first!</p>) : ('');

        return (
            <form className={'text-left'} onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input name='name' type="text" value={this.state.name} onChange={this.handleChange}/>
                </label>
                <label>
                    Rating:
                    <input name='rating' type="number" min="1" max="5" value={this.state.rating}
                           onChange={this.handleChange}/>
                </label><br/>
                <label>
                    Genre:
                    <select name='genre' value={this.state.genre} onChange={this.handleChange}>
                        <option value='' disabled hidden>Choose genre</option>
                        <option value="fps">FPS</option>
                        <option value="rts">RTS</option>
                    </select>
                </label><br/>
                <label>
                    Image:
                    <input name='image' type="file"/>
                </label><br/>
                <input type="submit" value="Submit"/>
                {errorMessage}
            </form>
        );
    }
}

const GameForm = connect(null, mapDispatchToProps)(Form);

export default GameForm;