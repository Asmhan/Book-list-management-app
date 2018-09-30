import booksReducer from '../../reducers/books';
import data from '../../books.json';

const defaultBooksState = data.books;
const books= [
  {
      "id": "ceb1138c-a247-43b5-8470-edcff6783bab",
      "title": "Iure voluptates et facere reprehenderit nobis autem",
      "author": "8dec0840-5ab5-4e07-8452-a0c787fa8805",
      "description": "Dolor autem labore dolore impedit accusantium earum. Qui ut optio et. Et dicta exercitationem quos est excepturi laboriosam quo repellat recusandae. Et enim dolor itaque iusto quis. Consequatur eum assumenda nisi dolor dignissimos quae aut iusto. Ex rerum facere officiis molestias ratione voluptatum officiis adipisci. Hic ad tenetur dolorum nam. Quidem velit nihil qui voluptatem assumenda eaque non aut. Esse facere provident id. Deleniti quod qui in et eum voluptas aut perspiciatis. Alias quia unde est enim adipisci sunt. Sapiente nobis asperiores ut unde iure deserunt et harum est. Laudantium molestias rerum et atque et rerum necessitatibus. Voluptates modi nesciunt ducimus quibusdam. Accusantium omnis magnam quia laudantium quas dignissimos autem.",
      "isbn": "1PZF17IST7CO81RIJV0YH4PSVGGOUSG2OO",
      "publishYear": 1999,
      "pagesNumber": 527,
      "image": "https://lorempixel.com/220/300/nature?id=ceb1138c-a247-43b5-8470-edcff6783bab",
      "category": "bca15b9c-3ef2-47a7-8f4d-0ae177c77ee6"
  },
  {
      "id": "7529d06d-acb9-4a52-9b75-28491f4404ec",
      "title": "Consequatur quaerat possimus eos aliquam mollitia et",
      "author": "981882da-6b98-491d-8ab8-74dabc02a9c2",
      "description": "In doloribus atque commodi. Quisquam enim velit quas molestias. Dolorum vel magnam vero. Voluptatibus harum ratione sit commodi quo autem adipisci assumenda magnam. Aliquid est eos voluptatibus aliquam veniam eos. Consequuntur veniam perferendis earum atque. Eveniet dolores distinctio quaerat libero atque possimus tempora voluptatum. Excepturi rerum quisquam et suscipit similique et. Tempore quia sit ipsum aliquid architecto. Aut rerum consequatur. Eos aspernatur excepturi sed. Aperiam necessitatibus quis qui sit voluptatum. Consequatur aperiam sit quis enim natus aspernatur quisquam dolores sapiente. Et nihil magni et enim. Quos ex quis qui aut est.",
      "isbn": "3A3RLG23HNSGQ2QGJ0GEU0A5V70DODPU",
      "publishYear": 2010,
      "pagesNumber": 756,
      "image": "https://lorempixel.com/220/300/abstract?id=7529d06d-acb9-4a52-9b75-28491f4404ec",
      "category": "fa3fd7b5-3637-4fbc-91a7-cc81ba5e5a8f"
  },
  {
      "id": "3b835834-3db7-4cb1-a8e5-c020ba1c9422",
      "title": "Et corporis dignissimos nisi qui",
      "author": "7b6a7c0a-4bdf-4b07-b1d1-dc175730d9a6",
      "description": "Blanditiis quidem aut reprehenderit. Rerum quae voluptas vitae nam qui. Et est nulla error qui. Temporibus ut molestias voluptas est dolor et earum molestias. Dolore nemo occaecati natus modi velit. Illum voluptatem eius et minima velit quas. Qui ea dolores. Magnam voluptatibus eaque natus. Exercitationem quo officia itaque qui quas et assumenda numquam quia. Reiciendis nam dolores magnam excepturi non repellendus mollitia. Repellat et saepe aut amet sed sapiente cum sapiente. Voluptas aliquid fuga ipsum minima velit sunt et consequatur. Et temporibus sit unde. Voluptas aliquam quia. Blanditiis sint dolores.",
      "isbn": "3QQY22RYSFX6C77P28XBWXVROYYJT",
      "publishYear": 2016,
      "pagesNumber": 694,
      "image": "https://lorempixel.com/220/300/abstract?id=3b835834-3db7-4cb1-a8e5-c020ba1c9422",
      "category": "f6507468-6cec-4563-923f-b51702e049a1"
  },
  {
      "id": "08779eb5-aba7-4e7c-a01e-5c4b533bdc68",
      "title": "Quasi possimus aut minima maiores adipisci ratione",
      "author": "ee878957-83f3-48c4-b899-45dd6c83e926",
      "description": "Mollitia consectetur rerum veniam et. Atque dicta delectus sed. Est ut cum neque suscipit aut asperiores qui. Explicabo quasi consequatur mollitia perspiciatis dignissimos exercitationem ut consequatur. Quia et est. Aliquam excepturi est qui eos. Ullam ex autem laboriosam. Beatae unde rerum dolores rem ut est corporis. Quibusdam sit nostrum nam aliquam officiis. Accusamus in voluptate praesentium odit harum sit sunt delectus corrupti. Dolore repellat omnis deserunt ad eos harum deserunt. Accusamus blanditiis quia beatae et perspiciatis fugiat labore esse dolorem. Quos commodi voluptatibus. Provident aliquam labore dicta impedit esse neque. Aperiam dignissimos voluptatem dolores tenetur.",
      "isbn": "1KKVQTD3VGJALIN6W7UE0MNFOGD1T5KN",
      "publishYear": 1988,
      "pagesNumber": 439,
      "image": "https://lorempixel.com/220/300/abstract?id=08779eb5-aba7-4e7c-a01e-5c4b533bdc68",
      "category": "af38e08e-1e47-473b-aaa3-4e9b6bde6b72"
  }]


test('should set default state', () => {
  const state = booksReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual(defaultBooksState);
});


test('should add a book', () => {
  const book = {
    id: '109',
    description: 'framework',
    title: 'React js'
  };
  const action = {
    type: 'ADD_BOOK',
    book
  };
  const state = booksReducer(books, action);
  expect(state).toEqual([...books, book]);
});

test('should edit a book', () => {
  const title = 'React native';
  const action = {
    type: 'EDIT_BOOK',
    id: books[1].id,
    updates: {
      title
    }
  };
  const state = booksReducer(books, action);
  expect(state[1].title).toBe(title);
});

test('should not edit a book if id not found', () => {
  const title = 'Hello js';
  const action = {
    type: 'EDIT_BOOK',
    id: '-1',
    updates: {
      title
    }
  };
  const state = booksReducer(books, action);
  expect(state).toEqual(books);
});
