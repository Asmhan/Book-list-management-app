import {getAuthor} from '../../selectors/author';

const authors= [
      {
          "id": "ee878957-83f3-48c4-b899-45dd6c83e926",
          "name": "Noe Veum",
          "jobTitle": "Senior Optimization Facilitator",
          "bio": "Excepturi amet et voluptatum est qui rem. Temporibus aut temporibus dolorem est rerum sequi molestiae. Dolor dolorem nulla vel molestias. Iste temporibus et tenetur."
      },
      {
          "id": "dbc09f83-460b-459d-8e89-6cbfbf5908df",
          "name": "Miss Simeon O'Keefe",
          "jobTitle": "Direct Factors Producer",
          "bio": "Voluptatum exercitationem commodi deleniti. Soluta deleniti qui sed ipsum earum culpa non. Itaque commodi debitis et. Tenetur vel assumenda et qui."
      },
      {
          "id": "50687497-5845-4f93-b1e8-0648eb1fc012",
          "name": "Patricia Hermiston",
          "jobTitle": "International Assurance Executive",
          "bio": "Ut iure quo ut deserunt consequatur quas. Similique beatae quia aliquid blanditiis nesciunt quasi officiis. Quia est reiciendis ut labore est ipsam corporis deleniti quis. Veritatis possimus tenetur qui et animi commodi consectetur inventore. Corporis non eos ad ullam quod eaque enim unde et."
      },
      {
          "id": "618fc680-5bd3-4668-85be-aa89aff79aa1",
          "name": "Rebecca Yost",
          "jobTitle": "Direct Markets Producer",
          "bio": "Asperiores nisi quod dolore et provident recusandae aperiam adipisci. Aut ipsum quos sed adipisci sit et aut. Voluptatem aliquid adipisci laudantium voluptatem voluptatibus. Inventore aut et recusandae officiis reprehenderit. Tempore veniam quo aut consequuntur totam itaque."
      }]


test('should return author abject', ()=> {
  const author = getAuthor(authors, "50687497-5845-4f93-b1e8-0648eb1fc012");
  expect(author).toEqual({
      "id": "50687497-5845-4f93-b1e8-0648eb1fc012",
      "name": "Patricia Hermiston",
      "jobTitle": "International Assurance Executive",
      "bio": "Ut iure quo ut deserunt consequatur quas. Similique beatae quia aliquid blanditiis nesciunt quasi officiis. Quia est reiciendis ut labore est ipsam corporis deleniti quis. Veritatis possimus tenetur qui et animi commodi consectetur inventore. Corporis non eos ad ullam quod eaque enim unde et."
  })
})
