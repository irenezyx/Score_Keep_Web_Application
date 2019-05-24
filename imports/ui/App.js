// Renders the whole app ui
import React from 'react';
import PropTypes from 'prop-types';

import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';
// let playerlist worry about rendering players

export default class App extends React.Component {
    render() {
        return (
            <div>
                <TitleBar title={this.props.title} subtitle="Created by Irene" />
                <div className='wrapper'>
                    <PlayerList players={this.props.players}/>
                    <AddPlayer/>
                </div>
            </div>
        );
    }
};

App.propTypes = {
    title: PropTypes.string.isRequired,
    players: PropTypes.array.isRequired
};