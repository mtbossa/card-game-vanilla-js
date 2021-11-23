import './style.css'

import PlayerName from '../../components/PlayerName';
import PlayerScore from '../PlayerScore';

export default function PlayerInfo(playerName, playerNumber=1) {
    const reverse = (playerNumber === 2) ? '-reverse' : '';

    return /*html*/ `
        <article class="player-info ${reverse}">            
            ${PlayerName(playerName)}     
            ${PlayerScore()}       
        </article>
    `;  
}