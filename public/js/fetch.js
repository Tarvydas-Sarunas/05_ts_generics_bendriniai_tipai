"use strict";
console.log('fetch');
const arr = [1, 2, 3];
const arr1 = [1, 2, 3];
const urlPosts = 'https://jsonplaceholder.typicode.com/posts/1';
function getPost(url) {
    return fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
        console.log('data ===', data);
        return data;
    })
        .catch((error) => {
        console.warn('ivyko klaida:', error);
    });
}
async function needAwait() {
    const gotObj = await getPost(urlPosts);
    console.log('gotObj ===', gotObj);
}
needAwait();
//# sourceMappingURL=fetch.js.map