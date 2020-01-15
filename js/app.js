import {ManageMessages} from './manageMessages.js';

window.addEventListener('load', () => {
    const data = new ManageMessages();

    // Create a callback function to display data
    const getId = (arr) => {
        console.log(arr, 'Data from callback');
    };
    // Set getId function as a parameter to getAllMessages to return data 
    data.getAllMessages(getId);
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
