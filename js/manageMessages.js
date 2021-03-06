import {loadData} from './ajax.js';

export class ManageMessages {
    /**
     * Get last 50 messages from the DB and inject them to HTML
     */
    getAllMessages() {
        loadData(document.formMessage, 'GET', 'server/listingMessages.php', function(arr) {
            const cardBody = document.querySelector('.card-body');
            cardBody.innerHTML = '';
            arr.reverse();
            arr.map(item => {
                cardBody.innerHTML += `
                    <div class="media">
                        <span class="chat-date" id="date">${item.created_at.slice(11, 19)}</span>
                        <div class="media-body ml-2">
                            <span class="chat-pseudo text-info" id="pseudo">${item.pseudo}</span>
                            <span class="chat-text" id="getMessage">${item.message}</span>
                        </div>
                    </div>
                `;
            }).join('');
     
            cardBody.scrollTop = cardBody.scrollHeight;
        });
    }

    /**
     * Post a new message to DB
     */
    postMessage() {
        const xhr = new XMLHttpRequest();
        const data = new FormData(document.formMessage);

        xhr.open('POST', 'server/setMessage.php', true);
        xhr.send(data);
        
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const response = JSON.parse(xhr.responseText);
                    console.log(response); // for debugging
                } else {
                    throw new Error(this.status +' - '+ this.statusText);
                }
            }
        }

        const setMessage = document.getElementById('setMessage');
        xhr.onload = function() {
            const data = new ManageMessages();
            data.getAllMessages();
            setMessage.value = '';
            setMessage.focus();
        }
    }
}