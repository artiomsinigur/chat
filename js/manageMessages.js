import {loadData} from './ajax.js';

export class ManageMessages {
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

        // window.setInterval(this.getAllMessages, 2000);
    }

    getDBCounter() {
        loadData(document.formMessage, 'GET', 'server/getLastCounter.php', function(arr) {
            return arr;
        }.bind(loadData));
    }

    getLastCounter() {
        console.log(this.getDBCounter());
        return this.getDBCounter;
    };

    postMessage() {
        // loadData(document.formMessage, 'POST', 'server/setMessage.php', (xhr) => {
        //     console.log(xhr);
        //     xhr.onload = function() {
        //         const data = new ManageMessages();
        //         data.getAllMessages();
        //     }
        // });

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