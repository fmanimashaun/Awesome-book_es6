import renderHeader from './modules/header.js';
import timeNow from './modules/datetime.js';
import renderList from './modules/list.js';
import renderAddForm from './modules/add.js';
import renderContact from './modules/contact.js';
import removeActive from './modules/removeActive.js';
import renderPage from './modules/pageRender.js';
import bookList from './modules/bookList.js';
import getLocalStorage from './modules/getLocalStorage.js';
import setLocalStorage from './modules/setLocalStorage.js';

const books = getLocalStorage('bookList');

const list = `
<!-- ***********************  BOOK COLLECTION SECTION *********************** -->
      <section class="book__collection">
        <h1 class="book__collection-title">All awesome books</h1>

        <div class="books">
          ${bookList(books)}
        </div>
      </section>
`;

renderHeader();
setInterval(timeNow, 1000);
renderList(list);

const pageMain = document.querySelector('.main');

const tablist = document.querySelectorAll('.header__nav-item');

tablist.forEach((tab) => {
  tab.addEventListener('click', (event) => {
    if (event.target.textContent === 'List') {
      removeActive(tablist);
      event.target.classList.add('active');
      renderPage(pageMain, renderList, list);
    } else if (event.target.textContent === 'Add new') {
      removeActive(tablist);
      event.target.classList.add('active');
      renderPage(pageMain, renderAddForm);
    } else if (event.target.textContent === 'Contact') {
      removeActive(tablist);
      event.target.classList.add('active');
      renderPage(pageMain, renderContact);
    }
  });
});
