const pageContainer = document.querySelector('.container');

const header = `
<header class="header">
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
    </header>
`;

const renderHeader = () => {
  pageContainer.insertAdjacentHTML('beforebegin', header);
};

export default renderHeader;