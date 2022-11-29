const pageMain = document.querySelector('.main');

const renderList = (list) => {
  pageMain.insertAdjacentHTML('afterbegin', list);
};

export default renderList;