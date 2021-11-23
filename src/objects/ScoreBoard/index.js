import PlayerName from '../../components/PlayerName';
import './style.css'

export default function ScoreBoard() {
    return /*html*/ `
        <header class="score-board">
            ${PlayerName('Player 1')}
            ${PlayerName('Player 2')}
        </header>
    `;
}