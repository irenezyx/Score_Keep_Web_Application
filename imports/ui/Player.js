import React from 'react';
import PropTypes from 'prop-types';

import { Players } from './../api/Players';

export default class Player extends React.Component {
  render() {
    // dynamic className with string template version
    // equals to: 'item item--position-'+this.props.player.rank
    let itemClassName = `item item--position-${this.props.player.rank}`;

    return (
      <div key={this.props.player._id} className={itemClassName}>
        <div className="player">
          <div>
            <h3 className="player__name">{this.props.player.name}</h3>
            <p className="player__stats">
              {this.props.player.position} place : {this.props.player.score} point(s).
            </p>
          </div>
          <div className="player__actions">
            <p>
              <button className="button button--round" onClick={() => {
                Players.update(this.props.player._id, { $inc: { score: -1 } });
              }}>-1</button>
              <button className="button button--round" onClick={() => {
                Players.update(this.props.player._id, { $inc: { score: 1 } });
              }}>+1</button>
              <button className="button button--round" onClick={() => Players.remove(this.props.player._id)}>X</button>
            </p>
          </div>

        </div>
      </div>
    );
  }
}

Player.propTypes = {
  player: PropTypes.object.isRequired
};
// make sure that player is provided when rendering a Player component