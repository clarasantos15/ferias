document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll('.item');

  window.addEventListener('scroll', () => {
    items.forEach(item => {
      const top = item.getBoundingClientRect().top;

      if (top < window.innerHeight - 50) {
        item.classList.add('show');
      }
    });
  });
});