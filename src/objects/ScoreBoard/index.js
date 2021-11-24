import './style.css'

import VsPlayer from '../../components/VsPlayer';
import PlayerName from '../../components/PlayerName';
import PlayerScore from '../PlayerScore';
import PlayerArrow from '../../components/PlayerArrow';

export default function ScoreBoard(avaliablePoints, playerScore=0) {
    window.addEventListener('load', () => {
        const $scoreBoard = document.querySelector('.score-board');

        $scoreBoard.addEventListener('moveMade', (event) => {
            const $playerArrow = document.querySelector('.player-arrow');
        
            console.log(event.detail.currentPlayer)
            $playerArrow.setAttribute('data-currentPlayer', event.detail.currentPlayer);
        });
    });

    return /*html*/ `
        <header class="score-board">  
            ${PlayerArrow(1)}  
            ${PlayerName('Player1')}     
            ${PlayerScore(avaliablePoints)} 
            ${VsPlayer()}   
            ${PlayerScore(avaliablePoints)}       
            ${PlayerName('Player2')}  
        </header>
    `;
}