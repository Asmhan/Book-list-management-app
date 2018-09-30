export const getAuthor = (authors, id) => {
  return authors.filter((author)=>{
    return author.id === id
  })[0]
}
