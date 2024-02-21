console.log('fetch');

const arr: number[] = [1, 2, 3];
const arr1: Array<number> = [1, 2, 3];

const urlPosts = 'https://jsonplaceholder.typicode.com/posts/1';

function getPost(url: string): Promise<PostObjIf> {
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

interface PostObjIf {
  userId: number;
  id: number;
  title: string;
  body: string;
}

/*
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
*/