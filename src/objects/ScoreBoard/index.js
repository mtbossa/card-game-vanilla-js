import './style.css'

import VsPlayer from '../../components/VsPlayer';
import PlayerName from '../../components/PlayerName';
import PlayerScore from '../PlayerScore';
import PlayerArrow from '../../components/PlayerArrow';

export default function ScoreBoard(avaliablePoints, playerScore=0) {
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