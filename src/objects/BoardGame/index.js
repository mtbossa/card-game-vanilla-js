import './style.css'

import CardFrontBack from '../../components/CardFrontBack';
import cards from './data.js'

export default function BoardGame() {
    const flipAndHideCards = ($activeCards) => {
        $activeCards.forEach((card) => card.classList.remove('-active'));
    }

    const getHtmlCards = () => {
        const htmlCardsList = cards.map((card) => CardFrontBack(card.icon, card.altIcon));
        return [...htmlCardsList, ...htmlCardsList]
                                .sort(() => Math.random() - 0.5)                
                                .join('');
    }    

    const dispatchMoveMadeEvent = ($scoreBoard, currentPlayer, correct=false) => {
        $scoreBoard.dispatchEvent(new CustomEvent('moveMade', {                     
            detail: { 
                currentPlayer: currentPlayer,
                correct: correct
            } 
        }));
    }

    const makeCardsMarkedCorrect = ($activeCards) => {
        $activeCards.forEach(($activeCard) => {            
            $activeCard.classList.remove('-not-correct');
            $activeCard.classList.add('-correct');
        })
    }

    const sameCard = ($activeCards) => {
        const imageNames = [...$activeCards].map(($activeCard) => $activeCard.querySelector('.card.-back > .card-game > img').getAttribute('src'));
        
        if (imageNames[0] !== imageNames[1]) {
            return false;
        }

        return true;
    }

    window.boardGame = {};
    window.boardGame.handleClick = () => {
        const $boardGame    = document.querySelector('.board-game');
        const $activeCards  = $boardGame.querySelectorAll('.card-front-back.-active.-not-correct');
        const $scoreBoard   = document.querySelector('.score-board');
        const $playerArrow  = document.querySelector('.player-arrow');
        const currentPlayer = $playerArrow.getAttribute('data-currentPlayer');
                
        if ($activeCards.length % 2 === 0 && !sameCard($activeCards)) {
            setTimeout(() => {
                flipAndHideCards($activeCards);   
                dispatchMoveMadeEvent($scoreBoard, currentPlayer);  
            }, 1000);
        } else if (sameCard($activeCards)) {
            setTimeout(() => {   
                makeCardsMarkedCorrect($activeCards);             
                dispatchMoveMadeEvent($scoreBoard, currentPlayer, true);  
            }, 1000);
        }
    };

    return /*html*/ `
    <section class="board-game" onClick="boardGame.handleClick()">
        ${getHtmlCards()}        
    </section>      
    `;
}