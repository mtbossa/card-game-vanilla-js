import './style.css'

import CardGame from "../CardGame";

export default function CardFrontBack(icon, altIcon) {
    window.cardFrontBack = {};
    window.cardFrontBack.handleClick = (e) => {
        const $element       = e.target;
        const $cardFrontBack = $element.closest('.card-front-back');
        const $boardGame     = document.querySelector('.board-game');
        const $activeCards   = $boardGame.querySelectorAll('.card-front-back.-active.-not-correct');
           
        // Blocks flipping the card if the card is already selected
        // and allows only 2 cards to be -active at same time
        if (!$cardFrontBack.classList.contains('-active') && $activeCards.length < 2) {
            $cardFrontBack.classList.toggle('-active');
        }
    }

    return /*html*/ `
        <article class="card-front-back -not-correct" onClick="window.cardFrontBack.handleClick(event)">        
            <div class="card -front">
                ${CardGame()}
            </div>
            <div class="card -back">
                ${CardGame(icon, altIcon)}
            </div>        
        </article>
    `;
}