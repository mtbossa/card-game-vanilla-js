import './style.css'

import CardFrontBack from '../../components/CardFrontBack';
import cards from './data.js'

export default function BoardGame(amountOfCards) {
    const flipAndHideCards = $activeCards => {
        $activeCards.forEach((card) => card.classList.remove('-active'));
    }

    const removeItemsFromArray = (amountToLeave, array) => {
        for (var i = array.length - 1; i >= amountToLeave; i--) {
            array.splice(Math.floor(Math.random() * array.length), 1);
        }

        return array;
    }

    const getHtmlCardsList = () => {
        // [...] to return as an Array
        return [...cards.map((card) => CardFrontBack(card.icon, card.altIcon))];
    }

    const getHtmlCards = amountOfCards => {
        const htmlCardsArray = getHtmlCardsList();
        const cleanCards = removeItemsFromArray(amountOfCards / 2, htmlCardsArray);
        const htmlCards = [...cleanCards, ...cleanCards];                              

        return htmlCards
                    /*.sort(() => Math.random() - 0.5) */     
                    .join('');
    }    

    const dispatchMoveMadeEvent = (currentPlayer, correct=false) => {
        console.log('dispatch event');
        window.scoreBoard.$scoreBoard.dispatchEvent(new CustomEvent('moveMade', {                     
            detail: { 
                currentPlayer: currentPlayer,
                correct: correct,
            } 
        }));
    }

    const dispatchWinEvent = (currentPlayer) => {
        const $winnerModal = document.querySelector('.winner-modal');

        $winnerModal.dispatchEvent(new CustomEvent('win', {                     
            detail: { 
                currentPlayer: currentPlayer,
            } 
        }));
    }

    const makeCardsMarkedCorrect = $activeCards => {
        $activeCards.forEach(($activeCard) => {            
            $activeCard.classList.remove('-not-correct');
            $activeCard.classList.add('-correct');
        })
    }

    const sameCard = $activeCards => {
        const imageNames = [...$activeCards].map(($activeCard) => $activeCard.querySelector('.card.-back > .card-game > img').getAttribute('src'));
        
        if (imageNames[0] !== imageNames[1]) {
            return false;
        }

        return true;
    }

    const gameEnded = amountOfCards => {
        const $boardGame    = document.querySelector('.board-game');
        const $correctCards = $boardGame.querySelectorAll('.card-front-back.-active.-correct');

        if ($correctCards.length === amountOfCards) {
            return true;
        }

        return false;
    }

    window.boardGame = {};
    window.boardGame.handleClick = () => {
        const $boardGame    = document.querySelector('.board-game');
        const $activeCards  = $boardGame.querySelectorAll('.card-front-back.-active.-not-correct');
        const $playerArrow  = document.querySelector('.player-arrow');
        const currentPlayer = $playerArrow.getAttribute('data-currentPlayer');

        // In case player clicks on card that is already correct
        if ($activeCards.length === 0) { 
            return;
        } 

        if ($activeCards.length % 2 === 0 && !sameCard($activeCards)) {
            setTimeout(() => {      
                dispatchMoveMadeEvent(currentPlayer);   
                flipAndHideCards($activeCards);  
            }, 1000);
        } else if (sameCard($activeCards)) { 
            dispatchMoveMadeEvent(currentPlayer, true);
            makeCardsMarkedCorrect($activeCards); 
        }

        if (gameEnded(amountOfCards)) {
            setTimeout(() => {
                console.log('dispatching win')  ;
                dispatchWinEvent(currentPlayer);               
            }, 1000);            
        }
    };

    return /*html*/ `
    <section class="board-game" onClick="boardGame.handleClick()">
        ${getHtmlCards(amountOfCards)}        
    </section>      
    `;
}