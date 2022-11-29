const pageMain = document.querySelector('.main');

const addForm = `
<!-- ***********************  ADD BOOK SECTION *********************** -->
      <section class="add__book">
        <h2 class="add__book-title">Add a new book</h2>

        <form class="add__book-form">
          <label for="title">
            <input type="text" minlength='3' name="title" id="title" placeholder="Title" required>
          </label>

          <label for="author">
            <input type="text" minlength='3' name="author" id="author" placeholder="Author" required>
          </label>

          <input type="submit" value="Add">
        </form>
      </section>
`;

const renderAddForm = () => {
  pageMain.insertAdjacentHTML('afterbegin', addForm);
};

export default renderAddForm;