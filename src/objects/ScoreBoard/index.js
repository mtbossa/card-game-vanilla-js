import './style.css'

import VsPlayer from '../../components/VsPlayer';
import PlayerName from '../../components/PlayerName';
import PlayerScore from '../PlayerScore';
import PlayerArrow from '../../components/PlayerArrow';

export default function ScoreBoard(maxAvaliablePoints) {
    window.scoreBoard = {};
    window.scoreBoard.resetPoints = () => {
        const $allPoints = document.querySelectorAll('.player-point');

        $allPoints.forEach($point => {
            $point.classList.remove('-active');
        });
    }

    window.addEventListener('load', () => {
        window.scoreBoard.$scoreBoard = document.querySelector('.score-board');
        
        window.scoreBoard.$scoreBoard.addEventListener('moveMade', event => {
            if (event.detail.correct) {                  
                const $playerScore = window.scoreBoard.$scoreBoard.querySelector(`.player-score[data-player='${event.detail.currentPlayer}']`);
                const $avaliablePoints = $playerScore.querySelectorAll('.player-point');                
                // The first possible point that doesn't have the -active class
                const $avaliablePoint = getNextPoint($avaliablePoints);

                markPoint($avaliablePoint);
            } else {                
                const newPlayer = getNewPlayer(event.detail.currentPlayer);

                passPlayerTurn(newPlayer);
            }
        });  
    });

    const passPlayerTurn = newPlayer => {
        const $playerArrow = document.querySelector('.player-arrow');  
        $playerArrow.setAttribute('data-currentPlayer', newPlayer);
    }

    const getNewPlayer = currentPlayer => {
        return (currentPlayer == 1) ? 2 : 1
    }

    const markPoint = $avaliablePoint => {
        $avaliablePoint.classList.add('-active');
    }

    const getNextPoint = $avaliablePoints => {
        return [...$avaliablePoints]
                    .find($avaliablePoint => !$avaliablePoint.classList.contains('-active'));
    }

    return /*html*/ `
        <header class="score-board">  
            ${PlayerArrow(1)}  
            ${PlayerName('Player1', 1)}     
            ${PlayerScore(maxAvaliablePoints, 1)} 
            ${VsPlayer()}   
            ${PlayerScore(maxAvaliablePoints, 2)}       
            ${PlayerName('Player2', 2)}  
        </header>
    `;
}