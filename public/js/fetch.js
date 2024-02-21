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
async function needAwait() {
    const gotObj = getPost(urlPosts);
    console.log('gotObj ===', gotObj);
    if (!Array.isArray(gotObj)) {
        console.log('gotObj ===', gotObj);
    }
}
needAwait();
async function needAwait2() {
    const gotObj = getPost(urlPosts);
    console.log('gotObj ===', gotObj);
    const gotAllPost = getPost(allPostsUrl);
    console.log('gotAllPost ===', gotAllPost);
}
needAwait2();
getPost(urlPosts).then((dataBack) => console.log('dataBack ===', dataBack));
getPost(allPostsUrl).then((dataAllPostBack) => console.log('dataAllPostBack ===', dataAllPostBack));
//# sourceMappingURL=fetch.js.map