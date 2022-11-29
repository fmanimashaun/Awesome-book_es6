const removeActive = (arr) => {
  arr.forEach((link) => {
    if (link.classList.contains('active')) {
      link.classList.remove('active');
    }
  });
};

export default removeActive;