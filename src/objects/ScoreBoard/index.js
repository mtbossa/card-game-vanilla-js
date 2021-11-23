import './style.css'

import PlayerInfo from '../PlayerInfo';

export default function ScoreBoard() {
    return /*html*/ `
        <header class="score-board">
            ${PlayerInfo('Player1')}
            ${PlayerInfo('Player2', 2)}
        </header>
    `;
}