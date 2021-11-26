import './style.css'

export default function PlayerName(name, player) {
    return /*html*/ `
        <p class="player-name" data-player=${player}>${name}</p>
    `;
}