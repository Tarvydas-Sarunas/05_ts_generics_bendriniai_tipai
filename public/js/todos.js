"use strict";
const todosUrl = 'https://jsonplaceholder.typicode.com/todos';
let todos = [];
function getTodos(url) {
    return (fetch(url)
        .then((resp) => resp.json())
        .catch((error) => {
        console.warn('ivyko klaida:', error);
    }));
}
getTodos(todosUrl).then((dataBack) => {
    todos = dataBack.slice(0, 20);
    console.log('todos ===', todos);
    rendreOneTodo(todos, 5);
});
function rendreOneTodo(arr, tId) {
    const found = arr.find((tObj) => tObj.id === tId);
    if (found === undefined)
        return console.warn('objektas nerastas');
    console.log('found ===', found.id);
    const divEl = document.createElement('div');
    divEl.className = 'todos';
    const pEl = document.createElement('p');
    pEl.textContent = found.id.toString();
    const h3El = document.createElement('h3');
    h3El.textContent = found.title;
    const pCompleteEl = document.createElement('p');
    pCompleteEl.textContent = found.completed ? 'Job done' : 'Incomplete';
    divEl.append(pEl, h3El, pCompleteEl);
    document.body.append(divEl);
}
//# sourceMappingURL=todos.js.map