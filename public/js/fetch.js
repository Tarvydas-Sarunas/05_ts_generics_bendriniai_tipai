"use strict";
console.log('fetch');
const arr = [1, 2, 3];
const arr1 = [1, 2, 3];
const urlPosts = 'https://jsonplaceholder.typicode.com/posts/1';
const allPostsUrl = 'https://jsonplaceholder.typicode.com/posts';
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
getPost(urlPosts).then((dataBack) => console.log('dataBack ===', dataBack));
getPost(allPostsUrl).then((dataAllPostBack) => console.log('dataAllPostBack ===', dataAllPostBack));
//# sourceMappingURL=fetch.js.map