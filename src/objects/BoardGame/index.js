import './style.css'

import CardGame from '../../components/CardGame';

export default function BoardGame(amount) {
    return /*html*/ `
    <div>
        ${CardGame('logo-css.png').repeat(amount / 3)}        
    </div>      
    `;
}