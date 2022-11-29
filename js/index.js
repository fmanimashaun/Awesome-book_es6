import renderHeader from './modules/header.js';
import timeNow from './modules/datetime.js';
import renderList from './modules/list.js';
// import renderAddForm from './modules/add.js';
// import renderContact from './modules/contact.js';

renderHeader();
setInterval(timeNow, 1000);
renderList();
// renderAddForm();
// renderContact()5
