import './style.css'

import CardGame from '../CardGame';

export default function CardBoard(amount) {
    return /*html*/ `
    <div>
        ${CardGame().repeat(amount)}
    </div>      
    `;
}