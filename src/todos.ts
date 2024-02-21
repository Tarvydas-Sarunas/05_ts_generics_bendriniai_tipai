// parsiusti ir issaugoti globaliam masyve 20 todos
// is https://jsonplaceholder.typicode.com/todos

// aprasyti tipa arba interface
interface TodosObjIf {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
// ir atspausdinti todos po to kai gavom duomenis

const todosUrl = 'https://jsonplaceholder.typicode.com/todos';

let todos: TodosObjIf[] = [];

function getTodos(url: string): Promise<TodosObjIf[]> {
  return (
    fetch(url)
      .then((resp) => resp.json())
      // .then((data) => {
      //   console.log('data ===', data);
      // })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
      })
  );
}

getTodos(todosUrl).then((dataBack) => {
  todos = dataBack.slice(0, 20);
  console.log('todos ===', todos);
  rendreOneTodo(todos, 5);
});

// gaus argumentu visus todos, ir id to todo kuri turime nupiesti html

function rendreOneTodo(arr: TodosObjIf[], tId: TodosObjIf['id']) {
  const found = arr.find((tObj) => tObj.id === tId);
  if (found === undefined) return console.warn('objektas nerastas');
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
