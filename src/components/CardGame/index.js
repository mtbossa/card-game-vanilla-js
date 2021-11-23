import './style.css'

export default function CardGame(image) {

    return /*html*/ `
        <article class="card-game">
            <img src="./images/${image}" alt="Logo da Alura">
        </article>
    `;
}