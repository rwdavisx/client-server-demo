import React, {Component} from 'react';

class GameWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: []
        }
    }

    componentDidMount() {
        this.apiCall().then(res => this.setState({
            games: res.games
        })).catch(err => {
            console.log(err);
        });
    }

    apiCall = async () => {
        const response = await fetch('/api/games');
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.games.map(game =>
                            <li key={game.id}>
                                {game.name}
                                <img src={game.img} height={'100px'} width={'100px'} alt=""/>
                            </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default GameWindow;