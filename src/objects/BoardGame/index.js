import './style.css'

import CardFrontBack from '../../components/CardFrontBack';

export default function BoardGame(amountCards) {
    return /*html*/ `
    <section class="board-game">
        ${CardFrontBack().repeat(amountCards)}        
    </div>      
    `;
}