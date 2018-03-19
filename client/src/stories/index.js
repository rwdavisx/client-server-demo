import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import {GamesList} from '../components/GameList';
import {SubmitButton} from '../components/SubmitButton';

import {Button, Welcome} from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')}/>);

storiesOf('Button', module)
    .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
    .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

const game = {
    name: 'Game Name Here',
    rating: 3,
    genre: 'RTS'
};
storiesOf('GameList', module)
    .add('without games', () => (<GamesList/>))
    .add('with games', () => (<GamesList games={[game, game, game, game, game]}/>));

storiesOf('Custom Button', module)
    .add('Primary', () => (<SubmitButton primary>Primary</SubmitButton>))
    .add('Success', () => (<SubmitButton success>Success</SubmitButton>))
    .add('Failure', () => (<SubmitButton failure>Failure</SubmitButton>))
    .add('Warning', () => (<SubmitButton warning>Warning</SubmitButton>))
    .add('Default', () => (<SubmitButton default>Default</SubmitButton>));