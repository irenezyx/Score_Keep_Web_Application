import {Mongo} from 'meteor/mongo';
import numeral from 'numeral';

// interact with database

export const Players = new Mongo.Collection('players');

export const calculatePlayerPosition = (players) => {
    let rank = 1;

    // map helps turn players into an array, (player, index) is like "enumerate"
    return players.map((player, index) => {
        if (index !== 0 && players[index-1].score > player.score) {
            rank++;
        }

        return {
            ...player, //es6 spread object, refer to "player" above
            rank, //es6 shorthand, same as => rank: rank
            position: numeral(rank).format('0o')
        }
    });
}
