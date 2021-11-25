import './style.css';

import PlayerWinner from '../../components/PlayerWinner';
import WinnerMessage from '../../components/WinnerMessage';
import WinnerIcon from '../../components/WinnerIcon';
import RestartButton from '../../components/RestartButton';

export default function WinnerModal() {
    return /*html*/ `
    <div class="winner-modal">
        ${PlayerWinner()}
        ${WinnerMessage()}
        ${WinnerIcon()}
        ${RestartButton()}
    </div>
    `;
}