import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players, calculatePlayerPosition} from './../imports/api/Players';
import App from './../imports/ui/App';

Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find(
      {}, // optional query, can limit the range to a subset, leave empty: get all data
      {
        sort: {
          score: -1 //ascending: 1
        }
      }
    ).fetch();
    let positionedPlayers = calculatePlayerPosition(players);
    let title = 'Score Keep';
    ReactDOM.render(<App title={title} players={positionedPlayers}/>, document.getElementById('app'));
  });
});
