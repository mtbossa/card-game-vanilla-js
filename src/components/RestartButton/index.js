import './style.css';

export default function RestartButton() {
    window.restartButton = {};
    window.restartButton.handleClick = () => {
        const $boardGame    = document.querySelector('.board-game');
        const $allCards  = $boardGame.querySelectorAll('.card-front-back');
        const $playerArrow  = document.querySelector('.player-arrow');
        const $modal = document.querySelector('.winner-modal');
        
        // window.boardGame.flipAndHideCards($allCards);
        // window.scoreBoard.resetPoints();
        // removeCorrectClass($allCards);
        // window.winnerModal.hideModal();
        location.reload();
    };

    const removeCorrectClass = $allCards => {
        $allCards.forEach(card => {
            card.classList.remove('-correct');
            card.classList.add('-not-correct');
        });
    }
    
    return /*html*/ `
        <button class="restart-button" onClick="restartButton.handleClick()">restart</button>
    `;
}