import CardGame from "../CardGame";

export default function CardFrontBack() {
    return /* html */ `
        ${CardGame()}
        ${CardGame('logo-css.png', 'Logo do CSS3')}
    `;
}