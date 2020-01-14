import {ManageMessages} from './manageMessages.js';

window.addEventListener('load', () => {
    const data = new ManageMessages();
    data.getAllMessages();

    // Refresh the page every 2 seconds
    window.setInterval(data.getAllMessages, 2000);
});

document.formMessage.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new ManageMessages();
    data.postMessage();
});

// Send the message when keyboard Enter is down
document.formMessage.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        const data = new ManageMessages();
        data.postMessage();
    }
});
