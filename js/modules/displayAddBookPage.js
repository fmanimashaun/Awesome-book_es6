// create a form page display function
const displayAddBookPage = () => {
  const booksContainer = document.querySelector('.books');

  const addFormHtml = `
    <section class="books__addbook">
      <h2 class="books__addbook-title">Add a new book</h2>

      <form action="#" class="books__addbook-form">

        <label class="books__addbook-label" for='title'>
          <input type="text" name='title' id='title' placeholder='Title' required>
        </label>

        <label class="books__addbook-label">
          <input type="text" name='author' id='author' placeholder='Author' required>
        </label>

        <input type="submit" value="Add" data-input='submit'>
      </form>
    </section>
  `;

  booksContainer.innerHTML = '';
  booksContainer.insertAdjacentHTML('afterbegin', addFormHtml);
};

export default displayAddBookPage;