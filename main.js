import './src/styles/settings/colors.css';
import './src/styles/elements/base.css';

import CardGame from './src/components/CardGame';

const $root = document.querySelector('#app');

$root.insertAdjacentHTML('beforeend', CardGame());