import './src/styles/generic/reset.css';
import './src/styles/settings/colors.css';
import './src/styles/elements/base.css';

import ScoreBoard from './src/objects/ScoreBoard';
import BoardGame from './src/objects/BoardGame';
import WinnerModal from './src/objects/WinnerModal';

const $root = document.querySelector('#app');
const amountOfCards = 4;

$root.insertAdjacentHTML('beforeend', `
    ${WinnerModal()}    
    ${ScoreBoard(amountOfCards / 2)}    
    ${BoardGame(amountOfCards)}   
`);