import './style.css'

import PlayerPoint from '../../components/PlayerPoint';

export default function PlayerScore() {
    return /*html*/ `
        <article class="player-score">                      
            ${PlayerPoint()}          
            ${PlayerPoint()}          
            ${PlayerPoint()}          
        </article>
    `;
}