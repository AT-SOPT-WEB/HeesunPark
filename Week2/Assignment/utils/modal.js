export const showModal = (message) => {
  const modal = document.querySelector('.custom-modal');
  const messageElement = document.querySelector('.modal-message');
  const closeBtn = document.querySelector('.modal-close');

  messageElement.textContent = message;
  modal.showModal();

  const handleClose = () => {
    modal.close();
    closeBtn.removeEventListener('click', handleClose);
  };

  closeBtn.addEventListener('click', handleClose);
};
