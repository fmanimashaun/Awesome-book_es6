import { timeNow } from './modules/datatime.js';
import Books from './modules/booksList.js';
import showAndRemoveSuccessMessage from './modules/showAndRemoveSuccessMessage.js';
import displayContactPage from './modules/displayContactPage.js';
import displayAddBookPage from './modules/displayAddBookPage.js';
import displayBookListPage from './modules/displayBookListPage.js';

// render  books on the page when page loads
window.addEventListener('DOMContentLoaded', () => {
  // calling the date-time function every one second
  setInterval(timeNow, 1000);

  // create a new instance of the Books class
  const books = new Books();

  // call the renderBooks method from books class when the page loads
  books.renderBooks();
});

// add event listener to the page
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('header__nav-item')) {
    // Get DOM elements
    const navItems = document.querySelectorAll('.header__nav-item');

    // remove the active class from all nav items
    navItems.forEach((item) => {
      item.classList.remove('active');
    });

    // add the active class to the clicked nav item
    e.target.classList.add('active');

    // check which nav item was clicked
    if (e.target.dataset.nav === 'add') {
      displayAddBookPage();
    } else if (e.target.dataset.nav === 'contact') {
      displayContactPage();
    } else {
      displayBookListPage();

      // create a new instance of the Books class
      const books = new Books();

      // call the renderBooks method from books class when the page loads
      books.renderBooks();
    }
  } else if (e.target.dataset.input === 'submit') {
    // Get DOM elements
    const form = document.querySelector('.books__addbook-form');

    // check form validity
    if (form.checkValidity()) {
      // prevent the default behaviour
      e.preventDefault();

      // get the values from the form
      const formData = new FormData(form);
      const title = formData.get('title');
      const author = formData.get('author');
      const id = Math.random().toString(36).substring(2, 9);

      const newBook = { id, title, author };

      // create a new instance of the Books class
      const books = new Books();

      // call the addBook function
      books.addBook(newBook);

      // clear form
      form.reset();
    }
    // show success message
    showAndRemoveSuccessMessage(form);
  } else if (e.target.dataset.id) {
    // create a new instance of the Books class
    const books = new Books();

    // call the removeBook function
    books.removeBook(e.target.dataset.id);
  }
});
