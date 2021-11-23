import './src/styles/settings/colors.css';
import './src/styles/elements/base.css';

import CardBoard from './src/components/CardBoard';

const $root = document.querySelector('#app');

$root.insertAdjacentHTML('beforeend', `
    ${CardBoard(6)}   
`);