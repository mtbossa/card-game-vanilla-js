import './style.css'

export default function CardGame(icon="logo-alura.png", alt='Logo da Alura') {

    return /*html*/ `
        <article class="card-game">
            <img src="./images/${icon}" alt="${alt}">
        </article>
    `;
}