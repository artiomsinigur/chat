import {ManageMessages} from './manageMessages.js';

window.addEventListener('load', () => {
    const data = new ManageMessages();
    data.getAllMessages();

});

document.formMessage.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new ManageMessages();
    data.postMessage();
});

document.formMessage.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        const data = new ManageMessages();
        data.postMessage();
    }
});
