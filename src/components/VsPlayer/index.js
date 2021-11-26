import './style.css';

export default function VsPlayer(content='vs') {
    return /*html*/ `
        <span class="vs-player">${content}</span>
    `;
}