// show and remove success message
const showAndRemoveSuccessMessage = (target) => {
  const successMessage = document.createElement('p');
  successMessage.classList.add('books__addbook-success');
  successMessage.textContent = 'Book added successfully';
  target.insertAdjacentElement('afterend', successMessage);

  setTimeout(() => {
    successMessage.remove();
  }, 3000);
};

export default showAndRemoveSuccessMessage;