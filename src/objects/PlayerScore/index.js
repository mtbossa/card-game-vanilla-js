import './style.css'

import PlayerPoint from '../../components/PlayerPoint';

export default function PlayerScore(avaliablePoints, player) {
    return /*html*/ `
        <article class="player-score" data-player=${player}>                      
            ${PlayerPoint().repeat(avaliablePoints)} 
        </article>
    `;
}