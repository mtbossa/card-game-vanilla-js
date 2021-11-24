import './style.css'

import VsPlayer from '../../components/VsPlayer';
import PlayerName from '../../components/PlayerName';
import PlayerScore from '../PlayerScore';
import PlayerArrow from '../../components/PlayerArrow';

export default function ScoreBoard(avaliablePoints, playerScore=0) {
    window.scoreBoard = {};
    window.addEventListener('load', () => {
        window.scoreBoard.$scoreBoard = document.querySelector('.score-board');
        
        window.scoreBoard.$scoreBoard.addEventListener('moveMade', event => {
            const $playerArrow = document.querySelector('.player-arrow');            
            const newPlayer = (event.detail.currentPlayer == 1) ? 2 : 1;

            if (event.detail.correct) {                       
                const $playerScore = window.scoreBoard.$scoreBoard.querySelector(`[data-player='${event.detail.currentPlayer}']`);
                const $avaliablePoints = $playerScore.querySelectorAll('.player-point');                

                // The first point that doesn't have the -active class
                const $avaliablePoint = [...$avaliablePoints].find($avaliablePoint => !$avaliablePoint.classList.contains('-active'));

                $avaliablePoint.classList.add('-active');
            }

            $playerArrow.setAttribute('data-currentPlayer', newPlayer);
        });        
    });

    

    return /*html*/ `
        <header class="score-board">  
            ${PlayerArrow(1)}  
            ${PlayerName('Player1')}     
            ${PlayerScore(avaliablePoints, 1)} 
            ${VsPlayer()}   
            ${PlayerScore(avaliablePoints, 2)}       
            ${PlayerName('Player2')}  
        </header>
    `;
}