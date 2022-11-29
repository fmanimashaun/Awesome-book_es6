const pageMain = document.querySelector('.main');

const list = `
<!-- ***********************  BOOK COLLECTION SECTION *********************** -->
      <section class="book__collection">
        <h1 class="book__collection-title">All awesome books</h1>

        <div class="books">
          <p class="book__empty">Empty Book Collection</p>
        </div>
      </section>
`;

const renderList = () => {
  pageMain.insertAdjacentHTML('afterbegin', list);
};

export default renderList;