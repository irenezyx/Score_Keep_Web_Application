import React from 'react';
import {Players} from './../api/Players.js';

export default class AddPlayer extends React.Component {
    handleSubmit(event) {
        event.preventDefault(); //prevent default action of refresh the whole page
        let playerName = event.target.playerName.value;
        // grab target element (根据下面调用处此时为form，根据name访问)
    
        if (playerName) {
            event.target.playerName.value = '';
            // insert players with default score 0
            Players.insert({
                name: playerName,
                score: 0
            });
        }
    }
    // React component only need render method provided
    render() {
        return (
          <div className="item">
            <form className="form" onSubmit={this.handleSubmit.bind(this)}>
              <input className="form__input" type="text" name="playerName" placeholder="Player name"/>
              <button className="button">Add Player</button>
            </form>
          </div>
        );
      }
    };