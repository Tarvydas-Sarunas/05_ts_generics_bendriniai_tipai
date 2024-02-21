console.log('fetch');

const arr: number[] = [1, 2, 3];
const arr1: Array<number> = [1, 2, 3];

const urlPosts = 'https://jsonplaceholder.typicode.com/posts/1';
const allPostsUrl = 'https://jsonplaceholder.typicode.com/posts';

function getPost<DataBackType>(url: string): Promise<DataBackType> {
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
interface PostObjIf {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// jei fetch sakau kad bus obj interface aprasymas kad bus tik obj tai autocomplitina
// bet jei fetch pridedu kad bus obj arba obj[] tai nebe autocomplytina
// kad autocomplyt reikia pasitikrinti ar obj ar [] vienas is butu siek tiek zemiau
// antras budas patikrinti yra su generic ant funkcijos kur fetchinu

async function needAwait() {
  const gotObj = getPost(urlPosts);
  console.log('gotObj ===', gotObj);
  // patikrinimas ar []
  if (!Array.isArray(gotObj)) {
    // ir jau autocomleat
    console.log('gotObj ===', gotObj);
  }
}
needAwait();

async function needAwait2() {
  // kai zinau kad gaunu viena obj
  const gotObj = getPost<PostObjIf>(urlPosts);
  console.log('gotObj ===', gotObj);

  // kai zinau kad gaunu Arr
  const gotAllPost = getPost<PostObjIf[]>(allPostsUrl);
  console.log('gotAllPost ===', gotAllPost);
}
needAwait2();

getPost(urlPosts).then((dataBack) => console.log('dataBack ===', dataBack));

getPost(allPostsUrl).then((dataAllPostBack) =>
  console.log('dataAllPostBack ===', dataAllPostBack)
);

/*
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
*/
