const connection = require('./connection');

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;

  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');

    return {
      id, 
      firstName,
      middleName,
      lastName,
      name: fullName,
    };
};

const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name
});

const bookSerialize = (bookData) => ({
  authorId: bookData.author_id,
  title: bookData.title,
});

const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
  );

  return authors.map(serialize).map(getNewAuthor);
};

const getAllBooks = async () => {
  const [books] = await connection.execute(
    'SELECT author_id, title FROM model_example.books;',
  );

  return books.map(bookSerialize);
};

module.exports = {
  getAll,
  getAllBooks,
};
