import './style.css'

import CardGame from "../CardGame";

export default function CardFrontBack() {
    return /*html*/ `
        <article class="card-front-back">        
        <div class="card -front">
            ${CardGame()}
        </div>
        <div class="card -back">
            ${CardGame('logo-css.png', 'Logo do CSS3')}
        </div>        
        </article>
    `;
}