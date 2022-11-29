const pageContainer = document.querySelector('.header');

const header = `
      <div class="header__wrapper">
        <span class="header__logo">Awesome Books</span>
        <nav class="header__nav">
          <ul class="header__nav-list">
            <li class="header__nav-item active">List</li>
            <li class="header__nav-item">Add new</li>
            <li class="header__nav-item">Contact</li>
          </ul>
        </nav>
      </div>
      <span class="header__date"></span>
`;

const renderHeader = () => {
  pageContainer.insertAdjacentHTML('afterbegin', header);
};

export default renderHeader;