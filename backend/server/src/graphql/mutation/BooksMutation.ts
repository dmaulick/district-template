export const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];
  
export const CreateBookMutation = (title: string, author: string) => {
    const newBook = {
        title,
        author,
    };
    books.push(newBook);
    console.log('CreateBookMutation:\n', books);
    return books;
}
