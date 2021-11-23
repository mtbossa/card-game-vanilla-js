import './src/styles/generic/reset.css';
import './src/styles/settings/colors.css';
import './src/styles/elements/base.css';

import ScoreBoard from './src/objects/ScoreBoard';
import BoardGame from './src/objects/BoardGame';

const $root = document.querySelector('#app');
const amountOfCards = 6;

$root.insertAdjacentHTML('beforeend', `
    ${ScoreBoard(amountOfCards / 2)}    
    ${BoardGame(amountOfCards)}   
`);