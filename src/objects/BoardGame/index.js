import './style.css'

import CardFrontBack from '../../components/CardFrontBack';
import cards from './data.js'

export default function BoardGame() {
    const flipAndHideCards = ($activeCards) => {
        $activeCards.forEach((card) => card.classList.remove('-active'));
    }

    const changePlayerArrow = () => {
        const $playerArrow = document.querySelector('.player-arrow');
        const currentPlayer = $playerArrow.getAttribute('data-currentPlayer');

        $playerArrow.setAttribute('data-currentPlayer',(currentPlayer == 2) ? 1 : 2)
    }

    window.boardGame = {};
    window.boardGame.handleClick = () => {
        const $boardGame = document.querySelector('.board-game');
        const $activeCards = $boardGame.querySelectorAll('.card-front-back.-active');
        
        if ($activeCards.length === 2) {
            setTimeout(() => {
                flipAndHideCards($activeCards);
                changePlayerArrow();
            }, 1000);
        }
    };
    
    const htmlCardsList = cards.map((card) => CardFrontBack(card.icon, card.altIcon));
    const $htmlCards = [...htmlCardsList, ...htmlCardsList]
                            .sort(() => Math.random() - 0.5)
                            .join('');

    return /*html*/ `
    <section class="board-game" onClick="boardGame.handleClick()">
        ${$htmlCards}        
    </section>      
    `;
}