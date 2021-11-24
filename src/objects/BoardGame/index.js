import './style.css'

import CardFrontBack from '../../components/CardFrontBack';
import cards from './data.js'

export default function BoardGame(amountCards) {
    console.log(cards)

    const htmlCardsList = cards.map((card) => CardFrontBack(card.icon, card.altIcon));

    const $htmlCards = [...htmlCardsList, ...htmlCardsList]
                            .sort(() => Math.random() - 0.5)
                            .join('');

    console.log($htmlCards)

    return /*html*/ `
    <section class="board-game">
        ${$htmlCards}        
    </div>      
    `;
}