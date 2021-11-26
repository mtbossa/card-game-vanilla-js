import './style.css';

export default function PlayerArrow(currentPlayer=1) {
    return /*html*/ `   
        <img data-currentPlayer=${currentPlayer} class="player-arrow" src="/images/arrow-down.png" alt="Flecha para baixo que indica jogador selecionado">      
    `;
}