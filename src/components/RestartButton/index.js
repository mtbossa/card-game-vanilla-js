import './style.css';

export default function RestartButton() {
    window.restartButton = {};
    window.restartButton.handleClick = () => {
        const $boardGame    = document.querySelector('.board-game');
        const $allCards  = $boardGame.querySelectorAll('.card-front-back');
        const $playerArrow  = document.querySelector('.player-arrow');
        
        window.boardGame.flipAndHideCards($allCards);
    };
    
    return /*html*/ `
        <button class="restart-button" onClick="restartButton.handleClick()">restart</button>
    `;
}