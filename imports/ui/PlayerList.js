// It's common that for every thing wrap them up with a xxxList
// to worry about the operations for this whole list and the elements in the list

import React from 'react';
import FlipMove from 'react-flip-move';
import Player from './Player';
import PropTypes from 'prop-types';

export default class PlayerList extends React.Component {
    renderPlayers() {
        // in client main.js, reference for PlayerList passed with key "players"
        if (this.props.players.length == 0) {
            // no players, remind users to add a player
            return (
                <div className="item">
                    <p className="item__message">Add your first player to get started!</p>
                </div>
            )
        }
        else {
            return this.props.players.map((player) => {
                return <Player key={player._id} player={player} />;
            });
        }
    }

    render() {
        return (
            <div>
                <FlipMove maintainContainerHeight={true}>
                    {this.renderPlayers()}
                </FlipMove>
            </div>
        );
    }
};

// make sure reference to PlayerList will pass a value for the key "players"
// which is to specify the PlayerList instance
PlayerList.propTypes = {
    players: PropTypes.array.isRequired
}