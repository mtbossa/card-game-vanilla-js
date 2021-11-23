import './style.css'

import PlayerPoint from '../../components/PlayerPoint';

export default function PlayerScore(avaliablePoints) {
    return /*html*/ `
        <article class="player-score">                      
            ${PlayerPoint().repeat(avaliablePoints)} 
        </article>
    `;
}