import './style.css'

import CardGame from '../../components/CardGame';

export default function BoardGame(amount) {
    return /*html*/ `
    <div class="board-game">
        ${CardGame('logo-css.png').repeat(amount)}        
    </div>      
    `;
}