export const getAuthor = (authors, id) => {
  return authors.find((author)=>{
    return author.id === id
  })
}
