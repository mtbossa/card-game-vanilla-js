import './src/styles/generic/reset.css';
import './src/styles/settings/colors.css';
import './src/styles/elements/base.css';

import ScoreBoard from './src/objects/ScoreBoard';
import BoardGame from './src/objects/BoardGame';
import PlayerWinner from './src/components/PlayerWinner';
import WinnerMessage from './src/components/WinnerMessage';
import WinnerIcon from './src/components/WinnerIcon';
import RestartButton from './src/components/RestartButton';

const $root = document.querySelector('#app');
const amountOfCards = 6;

$root.insertAdjacentHTML('beforeend', `
    ${PlayerWinner()}
    ${WinnerMessage()}
    ${WinnerIcon()}
    ${RestartButton()}
    ${ScoreBoard(amountOfCards / 2)}    
    ${BoardGame(amountOfCards)}   
`);