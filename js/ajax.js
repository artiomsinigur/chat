/**
 * Obtenir les dernières messages via AJAX
 * @param {document.formChat} form 
 * @param {GET/POST} method 
 * @param {async/script.php} url 
 * @param {return messages} callback 
 */
export function loadData(form, method, url, callback) {
    const xhr = new XMLHttpRequest();
    const data = new FormData(form);
    // data.append('pseudo', 'u_4');

    xhr.open(method, url, true);
    // xhr.responseType = 'json';
    // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(data);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                callback(response);
                console.log(response); // for debugging
            } else {
                throw new Error(this.status +' - '+ this.statusText);
            }
        }
    }
}