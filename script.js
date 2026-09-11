const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const closeButton = document.querySelector('.modal-close');

document.querySelectorAll('.shot-card').forEach((card) => {
  card.addEventListener('click', () => {
    modalImage.src = card.dataset.image;
    modalImage.alt = card.dataset.title || 'ภาพหน้าจอระบบ';
    modalTitle.textContent = card.dataset.title || '';
    modal.showModal();
  });
});

closeButton.addEventListener('click', () => modal.close());
modal.addEventListener('click', (event) => {
  if (event.target === modal) modal.close();
});
