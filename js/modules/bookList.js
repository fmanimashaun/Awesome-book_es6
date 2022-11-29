const bookList = (bookArr) => {
  if (bookArr.length === 0) {
    const bookcollection = '<p class="book__empty">Empty Book Collection</p>'
    return bookcollection;
  }
  let bookcollection = '';
  bookArr.forEach((book) => {
    bookcollection += `<div class="book">
      <p class="book__details">${book.title} by ${book.author}</p>
      <button class="book__remove-btn">Remove</button>
    </div>`;
  });
  return bookcollection;
};

export default bookList;