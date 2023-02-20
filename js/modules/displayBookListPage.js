const displayBookListPage = () => {
  const booksContainer = document.querySelector('.books');

  const booklistHtml = `
  <section class="books__collection">
    <h1 class="books__collection-title">All awesome books</h1>
    <div class="books__list"></div>
  </section>
  `;

  booksContainer.innerHTML = '';
  booksContainer.insertAdjacentHTML('afterbegin', booklistHtml);
};

export default displayBookListPage;