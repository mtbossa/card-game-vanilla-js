import './style.css';

import PlayerWinner from '../../components/PlayerWinner';
import WinnerMessage from '../../components/WinnerMessage';
import WinnerIcon from '../../components/WinnerIcon';
import RestartButton from '../../components/RestartButton';

export default function WinnerModal() {
    window.winnerModal = {};
    window.winnerModal.hideModal = () => {
        const $winnerModal = document.querySelector('.winner-modal');

        $winnerModal.style.visibility = 'hidden';
        $winnerModal.style.opacity = '0';
    }

    window.addEventListener('load', () => {
        const $winnerModal = document.querySelector('.winner-modal');
        
        $winnerModal.addEventListener('win', event => {   
            const winner = event.detail.currentPlayer;
            const winnerName = getWinnerName(winner);
            const $playerWinner = $winnerModal.querySelector('.player-winner');

            setWinnerName(winnerName, $playerWinner)
            showModal($winnerModal);                
        });        
    });

    const showModal = $winnerModal => {
        $winnerModal.style.visibility = 'visible';
        $winnerModal.style.opacity = '1';
    };

    const setWinnerName = (winnerName, $playerWinner) => {
        $playerWinner.innerText = winnerName;      
    };

    const getWinnerName = winner => {
        const $scoreBoard = document.querySelector('.score-board');
        const $playerName = $scoreBoard.querySelector(`.player-name[data-player='${winner}']`);

        return $playerName.innerText;
    }

    return /*html*/ `
    <div class="winner-modal">
        ${PlayerWinner()}
        ${WinnerMessage()}
        ${WinnerIcon()}
        ${RestartButton()}
    </div>
    `;
}