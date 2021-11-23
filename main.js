import './src/styles/settings/colors.css';
import './src/styles/elements/base.css';

import CardBoard from './src/components/CardBoard';
import PlayerName from './src/components/PlayerName';

const $root = document.querySelector('#app');

$root.insertAdjacentHTML('beforeend', `
    ${PlayerName('Bossa')}
    ${PlayerName('Gabriel')}
    ${CardBoard(6)}   
`);