import './src/styles/settings/colors.css';
import './src/styles/elements/base.css';
import './src/styles/generic/reset.css';

import PlayerName from './src/components/PlayerName';
import BoardGame from './src/objects/BoardGame';

const $root = document.querySelector('#app');

$root.insertAdjacentHTML('beforeend', `
    ${PlayerName('Player 1')}
    ${PlayerName('Player 2')}
    ${BoardGame(6)}   
`);