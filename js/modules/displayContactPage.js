// create a contact page display function
const displayContactPage = () => {
  const booksContainer = document.querySelector('.books');

  const contactHtml = `
  <section class="books__contact">
    <h2 class="books__contact-title">Contact Information</h2>
    
    <div class="books__contact-details">
      <p>Do you have any question or you just want to say "Hello"? You can reach out to us!</p>
        <ul class="books__contact-details-info">
          <li>Our email: mail@mail.com</li>
          <li>Our phone number: 0043586534422</li>
          <li>Our address: Streetname 22, 84503 City, Country</li>
        </ul>
      </div>
  </section>
  `;

  booksContainer.innerHTML = '';
  booksContainer.insertAdjacentHTML('afterbegin', contactHtml);
};

export default displayContactPage;