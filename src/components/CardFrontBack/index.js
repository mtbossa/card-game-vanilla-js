import './style.css'

import CardGame from "../CardGame";

export default function CardFrontBack(icon, altIcon) {
    window.cardFrontBack = {};
    window.cardFrontBack.handleClick = (e) => {
        const $element = e.target;
        const $cardFrontBack = $element.closest('.card-front-back');
        const $boardGame = document.querySelector('.board-game');
        const $activeCards = $boardGame.querySelectorAll('.card-front-back.-active');
           
        // Blocks flipping the card if 2 cards are already upwards
        if ($activeCards.length <= 1) {
            $cardFrontBack.classList.toggle('-active');
        }
    }

    return /*html*/ `
        <article class="card-front-back" onClick="window.cardFrontBack.handleClick(event)">        
            <div class="card -front">
                ${CardGame()}
            </div>
            <div class="card -back">
                ${CardGame(icon, altIcon)}
            </div>        
        </article>
    `;
}