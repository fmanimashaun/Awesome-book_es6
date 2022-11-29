const pageMain = document.querySelector('.main');

const contact = `
<!-- ***********************  CONTACT SECTION *********************** -->
      <section class="contact">
        <h2 class="contact__title">Contact Information</h2>

        <div class="contact__details">
          <p>Do you have any question or you just want to say "Hello"? You can reach out to us!</p>
          <ul class="contact__details-info">
            <li>Our email: mail@mail.com</li>
            <li>Our phone number: 0043586534422</li>
            <li>Our address: Streetname 22, 84503 City, Country
            </li>
          </ul>

        </div>
      </section>
`;

const renderContact = () => {
  pageMain.insertAdjacentHTML('afterbegin', contact);
};

export default renderContact;